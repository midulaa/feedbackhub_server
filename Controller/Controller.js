import Feedback from "../Model/Model.js";
import User from "../Model/User.js";
import Complaint from "../Model/Complaint.js";

/* Add Feedback */
export const addFeedback = async (req, res) => {
  try {
    const { name, phone, message, userId, title, category } = req.body;

    if (!name || !message) {
      return res.status(400).json({ message: "Name and message are required" });
    }

    const newFeedback = new Feedback({
      name,
      phone,
      message,
      userId,
      title,
      category
    });

    await newFeedback.save();

    res.status(201).json({
      success: true,
      message: "Feedback submitted successfully",
      feedback: newFeedback
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* Get All Feedbacks (Admin use) */
export const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* Get User Feedbacks */
export const getUserFeedbacks = async (req, res) => {
  try {
    const { userId } = req.params;
    const feedbacks = await Feedback.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* Get All Users (Admin) */
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password').sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* Add Complaint */
export const addComplaint = async (req, res) => {
  try {
    const { subject, message, category, priority, userId, userName } = req.body;

    if (!subject || !message || !userId || !userName) {
      return res.status(400).json({ message: "Subject, message, userId and userName are required" });
    }

    const newComplaint = new Complaint({
      subject,
      message,
      category,
      priority,
      userId,
      userName
    });

    await newComplaint.save();

    res.status(201).json({
      success: true,
      message: "Complaint submitted successfully",
      complaint: newComplaint
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* Get All Complaints (Admin) */
export const getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* Get User Complaints */
export const getUserComplaints = async (req, res) => {
  try {
    const { userId } = req.params;
    const complaints = await Complaint.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* Update Complaint Status */
export const updateComplaintStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const complaint = await Complaint.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    res.status(200).json({
      success: true,
      message: "Status updated successfully",
      complaint
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
