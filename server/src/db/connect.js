const mongoose = require("mongoose");
// Middleware
require("dotenv").config();
const db = "mongodb+srv://feby:feby@cluster0.5e0jv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB using the connection string


mongoose.connect(db)
.then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(`No connection: ${e}`);
});

// mongodb://localhost:27017