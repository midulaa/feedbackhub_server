import express from "express";
import { addFeedback, getAllFeedbacks, getUserFeedbacks, getAllUsers, addComplaint, getAllComplaints, getUserComplaints, updateComplaintStatus } from "../Controller/Controller.js";
import { register, login } from "../Controller/AuthController.js";

const router = express.Router();

/* Auth Routes */
router.post("/register", register);
router.post("/login", login);

/* Feedback Routes */
router.post("/feedback", addFeedback);
router.get("/feedback", getAllFeedbacks);
router.get("/feedback/user/:userId", getUserFeedbacks);

/* User Routes */
router.get("/users", getAllUsers);

/* Complaint Routes */
router.post("/complaint", addComplaint);
router.get("/complaint", getAllComplaints);
router.get("/complaint/user/:userId", getUserComplaints);
router.put("/complaint/:id/status", updateComplaintStatus);

export default router;
