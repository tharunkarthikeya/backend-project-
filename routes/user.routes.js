import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
    res.send("Get all users");});

userRouter.get("/:id", (req, res) => {
    res.send('Get user with ID');});

userRouter.put("/:id", (req, res) => {
    res.send('Update user with ID');});

userRouter.delete("/:id", (req, res) => {
    res.send('Delete user with ID');});

export default userRouter;