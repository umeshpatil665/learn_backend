import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRETE_KEY, // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localePath) => {
  try {
    if (!localePath) return null;
    // upload file on cloudinary
    const response = await cloudinary.uploader.upload(localePath, {
      resource_type: "auto",
    });
    // file upload successfully
    console.log("file is upload on cloudinary", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync;
    // remove the locally saved temprorary fileas the upload option failed
    return null;
  }
};

export { uploadOnCloudinary };
