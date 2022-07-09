import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

const BlogScreen = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  const getBlogs = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/blogs/${id}`);
      console.log(res.data);
      setBlog(res.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  useEffect(() => {
    getBlogs();
  }, {});

  return (
    <div>
      <div className="d-flex flex-column align-items-center mt-5">
        <h2 className="my-4">{blog.title}</h2>
        <img className="img img-fluid mb-4" style={{height:'500px',width:'500px'}} src={`/uploads/${blog.image}`} alt="" />
        <div>
          <p className="mx-5">{blog.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogScreen;
