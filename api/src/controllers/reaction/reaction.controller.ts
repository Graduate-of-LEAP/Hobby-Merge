import { RequestHandler } from "express";
import { Reaction } from "../../models/reaction.model";
export const createReaction: RequestHandler = async (req, res) => {
    try {
        const { reaction } = req.body;

        const newRecation = await Reaction.create({
            reaction
        });

        res.status(201).json({
            messages: "Reaction created successfull",
            reaction: newRecation,
        });
    } catch (error) {
        console.error("Created reaction error:", error);
        res.status(500).json({
            message: "Internal Server Error",
        });
    }
};

export const getAllReactions: RequestHandler = async (req, res) => {
    try {
        const reactions = await Reaction.find({});
        res.status(200).json({ reactions });
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
}

export const updateReaction: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const {
        reaction
    } = req.body;
    try {
        const updatedReaction = await Reaction.findByIdAndUpdate(
            id,
            {
                reaction
            },
            { new: true }
        );
        if (!updatedReaction) { res.status(404).json({ message: "Reaction not found" }); return; }
        await updatedReaction.save();
        res.status(200).json({ reaction: updatedReaction });
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteReaction: RequestHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedReaction = await Reaction.findByIdAndDelete(id);
        if (!deletedReaction) {
            res.status(404).json({ message: "Reaction not found" })
        }
        res.status(200).json({ message: `Deleted reaction` });
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
};
