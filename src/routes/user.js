import express from "express";
import {
    getAll,
    getDetail,
    create,
    update,
    remove,
} from "../controllers/user.js"
const router = express.Router();
router.get("/userall", getAll);
router.get("/user/:id", getDetail);
router.post("/user", create);
router.put("/user/:id", update);
router.delete("/user/:id", remove);
export default router;