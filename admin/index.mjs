import express from "express";
import { readdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";


const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(cors())

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
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port  ${port}`);
});
