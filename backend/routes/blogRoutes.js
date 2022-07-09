const express = require("express");
const Blog = require("../models/blogModel");
const router = express.Router();
// const {
//   getBlogs,
//   getBlogById,
//   updateBlog,
//   deleteBlog,
// } = require("../controllers/blogController");
const { upload } = require("../utlis/fileUpload");

// @desc Create Blogs
router.post("/create", upload.single("image"), async (req, res) => {
  const blogs = new Blog({
    title: req.body.title,
    description: req.body.description,
    content: req.body.content,
    image: req.file.filename,
  });
  try {
    const savedBlogs = await blogs.save();
    res.json(savedBlogs);
    console.log(savedBlogs);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// @desc Fetch All products
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.json(blogs);
  } catch (error) {
    res.json(error)
  }
});
router.get("/:id",async(req,res)=>{
    const blog= await Blog.findById(req.params.id)
    if(blog){
        res.json(blog)
    }
    else{
        res.json('Not Found')
    }
})

module.exports = router;
