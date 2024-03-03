import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId; //try using Schema.Types.ObjectId

const AccountSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true},
});

const AccountModel = mongoose.model("Account", AccountSchema);

export default AccountModel;