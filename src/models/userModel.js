import { model, Schema } from "mongoose";
const userSchema = new Schema(
  {
    name: {
      type: String,
      default: null,
    },
    imageUrl: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// const User = models.users || model("users", userSchema);

const User = model("user", userSchema);

export default User;
