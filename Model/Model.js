import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: String,
      required: false
    },
    message: {
      type: String,
      required: true
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    title: String,
    category: String,
    status: {
      type: String,
      default: 'New'
    },
    type: {
      type: String,
      default: 'Feedback'
    }
  },
  { timestamps: true }
);

export default mongoose.model("Feedback", feedbackSchema);
