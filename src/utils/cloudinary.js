import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config({
  path: './.env'
});
// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRETE_KEY, // Click 'View API Keys' above to copy your API secret
});




const uploadOnCloudinary = async (localFilePath) => {
    try {
      if (!localFilePath) {
        console.log("No local file path provided");
        return null;
      }
      // Upload the file on Cloudinary
      const response = await cloudinary.uploader.upload(localFilePath, {
        resource_type: "auto",
      });
      // File uploaded successfully, now remove the local file
      fs.unlinkSync(localFilePath);
      console.log("File uploaded on Cloudinary:", response.url);
      return response;
    } catch (error) {
      // If upload fails, remove the file if it exists
      if (localFilePath && fs.existsSync(localFilePath)) {
        fs.unlinkSync(localFilePath);
      }
      console.error("Cloudinary upload error:", error);
      return null;
    }
  };
  
  export { uploadOnCloudinary };
