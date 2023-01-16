import mongoose from "mongoose";

const url = "mongodb://localhost/store";

mongoose.connect(url);
mongoose.connection
  .on("open", () => {
    console.log("connected");
  })
  .once("error", (error) => {
    console.log("An error occured", error);
  });
