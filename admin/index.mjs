import express from "express";
import { readdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

import mongoose from "mongoose"

const connectDatabase = async()=>{
    try{
        await mongoose.connect("mongodb+srv://rakib:XYx1F9VyfoaaATXz@cluster0.sci9jms.mongodb.net/shop")
        console.log("database connect")
    }catch(error){
        console.log(error) 
    }
}




const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(cors())


// database connect 


// Resolve the directory name and path
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const pathurl = path.resolve(dirname, "./routes");

// Read route files and set up routes
const routerfile = readdirSync(pathurl);
routerfile.map(async (file) => {
    const module = await import(`./routes/${file}`);
    app.use("/", module.default);
});

// Serve the index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(dirname, "public", "index.html"));
  connectDatabase()
  
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port  ${port}`);
  connectDatabase()
});
