import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId; //try using Schema.Types.ObjectId

const UserSchema = new Schema(
  {
    // login_name: {
    //     type: String,
    //     required: true,
    // },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    // university_number: {
    //     type: Number,
    //     required: true,
    // },
    // unviersity_email: {
    //     type: String,
    //     required: true,
    // },
    program: {
      type: String,
    },
    // password: {
    //     type: String,
    //     required: true,
    // }
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
