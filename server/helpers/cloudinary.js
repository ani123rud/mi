import cloudinary from "cloudinary";
import multer from "multer";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: "dqg4v54hk",
  api_key: "922889426749643",
  api_secret: "mI5zvHjm0ISuGbpd-VgqnsEtULs",
});

// Memory storage for multer
const storage = multer.memoryStorage();
export const upload = multer({ storage });

// Utility function for image uploads
export async function imageUploadUtil(file) {
  const result = await cloudinary.v2.uploader.upload(file, {
    resource_type: "auto",
  });
  return result;
}
