import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();
const app = express();
app.use(cors({ origin: process.env.CLIENT_URL?.split(",") || true }));
app.use(express.json());

const userSchema = new mongoose.Schema({ name: {type:String,required:true}, email:{type:String,required:true,unique:true,lowercase:true}, password:{type:String,required:true} }, {timestamps:true});
const taskSchema = new mongoose.Schema({ title:{type:String,required:true,trim:true}, description:{type:String,default:""}, completed:{type:Boolean,default:false}, user:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true} }, {timestamps:true});
const User = mongoose.model("User", userSchema);
const Task = mongoose.model("Task", taskSchema);

function auth(req,res,next){
  const token = req.headers.authorization?.startsWith("Bearer ") ? req.headers.authorization.slice(7) : null;
  if(!token) return res.status(401).json({message:"Authentication required"});
  try { req.user = jwt.verify(token, process.env.JWT_SECRET).id; next(); }
  catch { return res.status(401).json({message:"Invalid or expired token"}); }
}
app.get("/api/health",(req,res)=>res.json({status:"ok",service:"AUREX Month 2 API"}));
app.post("/api/auth/register",async(req,res)=>{
  try{
    const {name,email,password}=req.body;
    if(!name?.trim() || !email?.trim() || !password || password.length<8) return res.status(400).json({message:"Name, email and password (8+ characters) are required"});
    if(await User.findOne({email})) return res.status(409).json({message:"Email already registered"});
    const user=await User.create({name:name.trim(),email,password:await bcrypt.hash(password,12)});
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"});
    res.status(201).json({token,user:{id:user._id,name:user.name,email:user.email}});
  }catch(e){res.status(500).json({message:"Could not register user"});}
});
app.post("/api/auth/login",async(req,res)=>{
  try{
    const {email,password}=req.body; const user=await User.findOne({email});
    if(!user || !await bcrypt.compare(password||"",user.password)) return res.status(401).json({message:"Incorrect email or password"});
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"});
    res.json({token,user:{id:user._id,name:user.name,email:user.email}});
  }catch(e){res.status(500).json({message:"Could not log in"});}
});
app.get("/api/tasks",auth,async(req,res)=>{try{res.json(await Task.find({user:req.user}).sort({createdAt:-1}));}catch{res.status(500).json({message:"Could not load tasks"});}});
app.post("/api/tasks",auth,async(req,res)=>{try{const title=req.body.title?.trim();if(!title)return res.status(400).json({message:"Task title is required"});const task=await Task.create({title,description:req.body.description||"",user:req.user});res.status(201).json(task);}catch{res.status(500).json({message:"Could not create task"});}});
app.patch("/api/tasks/:id",auth,async(req,res)=>{try{const allowed={};if(typeof req.body.completed==="boolean")allowed.completed=req.body.completed;if(typeof req.body.title==="string"&&req.body.title.trim())allowed.title=req.body.title.trim();const task=await Task.findOneAndUpdate({_id:req.params.id,user:req.user},allowed,{new:true,runValidators:true});if(!task)return res.status(404).json({message:"Task not found"});res.json(task);}catch{res.status(400).json({message:"Invalid task update"});}});
app.delete("/api/tasks/:id",auth,async(req,res)=>{try{const task=await Task.findOneAndDelete({_id:req.params.id,user:req.user});if(!task)return res.status(404).json({message:"Task not found"});res.json({message:"Task deleted"});}catch{res.status(400).json({message:"Invalid task id"});}});
app.get("/api/demo/posts",async(req,res)=>{try{const r=await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");if(!r.ok)throw new Error();res.json(await r.json());}catch{res.status(502).json({message:"External demo API unavailable"});}});
const PORT=process.env.PORT||5000;
mongoose.connect(process.env.MONGO_URI).then(()=>app.listen(PORT,()=>console.log("AUREX API running on "+PORT))).catch(err=>{console.error("MongoDB connection failed:",err.message);process.exit(1);});
