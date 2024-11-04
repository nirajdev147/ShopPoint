const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://devniraj4:5802@cluster0.efnpe0a.mongodb.net/ecomwebsite", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
