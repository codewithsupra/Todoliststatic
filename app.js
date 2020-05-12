const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const router = express.Router();
module.exports = router;
var gitems=[];
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",(req,res)=>{
	var today=new Date();
	var options={
		weekday:"long",
		day:"numeric",
		month:"long"
	};
	var day=today.toLocaleDateString("en-US",options);
	
		res.render("list.ejs",{newitem:gitems});
	
});
app.post("/",(req,res)=>{
	var item=req.body.newItem;
	gitems.push(item);
	res.redirect("/");
 
})
app.listen(3002,()=>{
	console.log("Server is running");
})