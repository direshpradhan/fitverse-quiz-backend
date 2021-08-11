require("dotenv").config();
const mongoose = require("mongoose");

async function initializeDBConnection() {
  try{
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParse:true, 
      useUnifiedTopology:true
      });
      console.log("Database connection is successful");
  }catch(error){
    console.log("Database connection failed...",error);
  }
}