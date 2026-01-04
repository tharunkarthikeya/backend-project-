import { Router } from "express";

const subscriptRouter = Router();

subscriptRouter.post("/", (req, res) => {
    res.send("Create a new subscription");
});
subscriptRouter.get("/:id", (req, res)  => {
    res.send("Get subscription with ID");});

export default subscriptRouter;