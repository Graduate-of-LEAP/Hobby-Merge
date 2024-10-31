import { Router } from "express";
import { SavedByCategoryId } from "../controllers/user/saved-by-categoryId.controller";
import { getMe } from "../controllers/user/getme.controller";
<<<<<<< HEAD
// import { addUserToHobby } from "../controllers/hobby/addUserstoHobby.controller";
import { SavedByHobbyId } from "../controllers/user/saved-by-hobbyId.controller";
=======
import { addUserToHobby } from "../controllers/hobby/addUserstoHobby.controller";
>>>>>>> 3cef845ba4718e58416aec8a5bcbc878c657c391

const userRouter = Router();

userRouter
  .get("/", getMe)
  .post("/category", SavedByCategoryId)
  .post("/hobby", addUserToHobby);

export { userRouter };
