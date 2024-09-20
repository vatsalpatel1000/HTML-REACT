const cloudinary = require ('cloudinary').v2;
const { cloudinaryStorage } = require ('multer-storage-cloudinary');

cloudinary.config({                           // pass env file data
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD.API_KEY,
    api_secret : process.env.CLOUD_API_SECRET

})


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'wanderlust_DEV',
      format: ["png","jpg","jpeg"]
    },
  });

Module.exports ={
    cloudinary,
    storage,
}