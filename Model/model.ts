import mongoose from "mongoose";

interface store {
  name : string;
  cardNo: string;
  phonedetails: {};
  tagNo: string;

}

interface Istore extends store, mongoose.Document {}

const shcema = new mongoose.Schema(
  {
    name : String,
    cardNo: String,
    phonedetails: {},
    tagNo: String,
  },
  { timestamps: true }
);

export default mongoose.model<Istore>("storedata", shcema);
