const multer = require("multer"); //installed multer for file uploading

// File Upload Using Multer
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../frontend/public/uploads/");
    // callback(null, "./images");
  },
  filename: (req, file, callback) => {
    callback(null,file.originalname);
  },
});

exports.upload = multer({ storage: storage });