import { RequestHandler } from "express";
import { Hobby } from "../../models/hobby.model";

export const deleteHobby: RequestHandler = async (req, res) => {
  try {
    const deleteHobby = await Hobby.findByIdAndDelete(req.params.id);
    if (!deleteHobby) {
      res.status(404).json({
        message: "error",
      });
    }
    res.status(200).json({
      hobby: deleteHobby,
    });
  } catch (error) {
    console.error(error);
  }
};
