const mongoose = require("mongoose");

const connectDB = async () => {
  try {

    await mongoose.connect("mongodb+srv://sarojpanrui:HsSdnCWyVqx51KL5@cluster0.igrqqwj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
    
  } catch (error) {
    console.log(error)
  }
};

module.exports = connectDB;