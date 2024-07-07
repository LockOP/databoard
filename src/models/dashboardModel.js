import { model, Schema } from "mongoose";
const dashboardSchema = new Schema(
  {
    name: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    ownerUser: {
      type: String,
      required: true,
    },
    allowedUsers: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "user",
        },
      ],
      default: [],
    },
    layout: {
      type: [
        {
          type: {
            x: Number,
            y: Number,
            w: Number,
            h: Number,
            i: String,
            component: {
              type: Schema.Types.ObjectId,
              ref: "component",
              default: null,
            },
          },
        },
      ],
      default: [],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Dashboard = model("dashboard", dashboardSchema);

export default Dashboard;
