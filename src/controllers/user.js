import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const getAll = async (req, res) => {
    try {
        const { data: users } = await axios.get(
            `${process.env.API_URL}`
        );
        if (users.length === 0) {
            res.send({
                message: "No users found"
            });
        }
        return res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getDetail = async (req, res) => {
    try {
        const { data: users } = await axios.get(
            `${process.env.API_URL}/${req.params.id}`
        );
        if (!users) {
            res.send({
                message: "No users found"
            })
        }
        return res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const create = async (req, res) => {
    try {
        const { data: users } = await axios.post(
            `${process.env.API_URL}/`,
            req.body
        );
        if (!users) {
            res.send({
                message: "No users found"
            })
        }
        return res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const update = async (req, res) => {
    try {
        const { data: users } = await axios.put(
            `${process.env.API_URL}/${req.params.id}`,
            req.body
        );
        if (!users) {
            res.send({
                message: "No users found"
            })
        }
        return res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const remove = async (req, res) => {
    try {
        await axios.delete(
            `${process.env.API_URL}/${req.params.id}`,
        );
        return res.send({
            message: "xoas thanh cong"
        })
    } catch (error) {
        res.send({

            message: error
        })
    }
};