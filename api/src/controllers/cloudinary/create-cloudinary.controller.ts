import { RequestHandler } from "express";
import { handleUpload } from "../../utils/cloudinary";

export const createCloudinaryController: RequestHandler = async (
  req,
  res
): Promise<void> => {
  if (!req.file) {
    res.status(400).send("No file uploaded.");
    return;
  }
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const cldRes = await handleUpload(dataURI);
    res.json(cldRes);
  } catch (error) {
    console.log(error);
  }
};
