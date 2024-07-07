import { model, Schema } from "mongoose";
const componentSchema = new Schema(
  {
    name: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Component = model("component", componentSchema);

export default Component;
