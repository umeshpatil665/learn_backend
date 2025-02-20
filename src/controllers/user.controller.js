import { User } from "../models/user.model.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const registerUser = asyncHandler(async (req, res) => {
  //   res.status(200).json({
  //     message: "successfully ...",
  //   });

  // step for regestration
  // 1.get details from frontend
  // 2.apply validation for non empty
  // 3.check user already exits : userName or email
  // 4.check for images and check for avtar
  // 5.create user object-create entry in db
  // 6.remove password and refresh token field from response
  // 7.check user creation
  // 8.return response or error
  const { username, email, fullName, password } = req.body;

  if (
    [username, email, fullName, password].some((field) => field.trim() === "")
  ) {
    throw new apiError(400, "All field is required");
  }
  console.log("email", email);

  const exitingUser = User.findOne({ $or: [{ username }, { email }] });

  if (exitingUser) {
    throw new apiError(409, "User with email or username already exits! ");
  }

  const avtarLocalPath = req?.files?.avtar[0]?.path;
  const coverImageLocalImage = req?.files?.coverImage[0]?.path;

  if (!avtarLocalPath) {
    throw new apiError(400, "Avtar file is required");
  }

  const avtar = await uploadOnCloudinary(avtarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalImage);

  if (!avtar) {
    throw new apiError(400, "Avtar file is required");
  }

  // entry in data base

  const user = await User.create({
    fullName,
    password,
    email,
    username: username?.toLowerCase(),
    avtar: avtar?.url,
    coverImage: coverImage?.url || "",
  });

  //   remove password and refreshtoken

  const createUser = await User.findById(user?._id).select(
    "-password -refreshToken"
  );

  if(!createUser){
    throw new apiError(500,"Something went wrong while user creation")
  }

  return res.status(201).josn(
    new apiResponse(200,createUser,"User Creation Succesfully...")
  )
});

export { registerUser };
