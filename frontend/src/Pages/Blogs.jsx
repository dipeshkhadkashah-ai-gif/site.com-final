import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
} from "@mui/material";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlog] = useState([]);
  const getBlogs = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/blogs`);
      console.log(res.data);
      setBlog(res.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="p-5">
      <Grid container spacing={12}>
        {blogs.map((blog) => (
          <Grid item xs={4}>
            <Link to={`/blogs/${blog._id}`}>
              <Card sx={{ maxWidth: 500 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`/uploads/${blog.image}`}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {blog.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {blog.description.substring(0, 100)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {blog.content.substring(0, 100)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Blogs;
