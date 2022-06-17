const fs= require("fs");  //fs-file system
const quote="this is content for quote.";
//file name-aws.html
fs.writeFile("./aws.html",quote,(err)=>{
    console.log("file created");
})