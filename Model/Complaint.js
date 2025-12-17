import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
      trim: true
    },
    message: {
      type: String,
      required: true
    },
    category: {
      type: String,
      default: 'General'
    },
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High'],
      default: 'Low'
    },
    status: {
      type: String,
      enum: ['Pending', 'In Progress', 'Resolved', 'Closed'],
      default: 'Pending'
    },
    type: {
      type: String,
      default: 'Complaint'
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: {
      type: String,
      required: true
    },
    category: {
      type: String,
      enum: ['Website', 'Service', 'Performance', 'UI/UX', 'Security'],
      default: 'Website'
    }
  },
  { timestamps: true }
);

export default mongoose.model("Complaint", complaintSchema);