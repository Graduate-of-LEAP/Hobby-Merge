import { connect } from "mongoose";

export const connectToDatabase = async () => {
  await connect(
    "mongodb+srv://hobby:hobby@hobby.p8zw9.mongodb.net/?retryWrites=true&w=majority&appName=hobby"
  );
  console.log("Connected to database");
};
