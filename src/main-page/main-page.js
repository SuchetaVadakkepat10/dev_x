import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Avatar, IconButton, Grid2, Paper, Button } from "@mui/material";
import { Home, Search, AddBox, FavoriteBorder, AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { feedData } from "./post-data";

const InstagramClone = () => {
  const navigate = useNavigate();

  // To manage the like state for each post
  const [likes, setLikes] = useState(feedData.map(() => false)); // Initially, no post is liked

  // Toggle the like state for a specific post
  const handleLike = (index) => {
    const updatedLikes = [...likes];
    updatedLikes[index] = !updatedLikes[index]; // Toggle like state
    setLikes(updatedLikes);
  };

  return (
    <Box sx={{ backgroundColor: "#fafafa", minHeight: "100vh" }}>
      {/* Header */}
      <AppBar position="sticky" sx={{ backgroundColor: "#fff", borderBottom: "1px solid #dbdbdb" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ color: "#262626", fontWeight: "bold" }}>
            Instagram
          </Typography>
          <Box>
             
            <Button variant="contained" color="primary" onClick={() => navigate("/scratch-card")}>
             Scratch Card
            </Button>
            <Button variant="contained" color="primary" onClick={() => navigate("/bookings-page")}>
              Events
            </Button>
            <IconButton>
              <Home sx={{ color: "#262626" }} />
            </IconButton>
            <IconButton>
              <Search sx={{ color: "#262626" }} />
            </IconButton>
            <IconButton>
              <AddBox sx={{ color: "#262626" }} />
            </IconButton>
            <IconButton>
              <FavoriteBorder sx={{ color: "#262626" }} />
            </IconButton>
            <IconButton>
              <AccountCircle sx={{ color: "#262626" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Stories Section */}
      <Box sx={{ display: "flex", overflowX: "auto", p: 2, gap: 2, backgroundColor: "#fff", borderBottom: "1px solid #dbdbdb" }}>
        {Array.from({ length: 10 }).map((_, index) => (
          <Box key={index} sx={{ textAlign: "center", minWidth: 70 }}>
            <Avatar sx={{ width: 56, height: 56, mx: "auto", border: "2px solid #ff8501" }} />
            <Typography variant="caption" sx={{ mt: 1 }}>
              User {index + 1}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Feed Section */}
      <Grid2 container spacing={2}>
        {feedData.map((post, index) => (
          <Grid2 item xs={12} sm={6} md={4} key={post.id}>
            <Paper sx={{ p: 3 }}>
              {/* Post Title */}
              <Typography variant="h6">{post.title}</Typography>

              {/* Post Content */}
              <Box
                sx={{
                  width: "100%",
                  height: 300,
                  backgroundColor: "#ddd",
                  borderRadius: 1,
                }}
              >
                {/* Post Image Placeholder */}
              </Box>

              <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                <IconButton onClick={() => handleLike(index)}>
                  {/* Change the icon color based on whether the post is liked */}
                  {likes[index] ? (
                    <FavoriteBorder sx={{ color: "#e60023" }} />
                  ) : (
                    <FavoriteBorder sx={{ color: "#262626" }} />
                  )}
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {likes[index] ? post.likes + 1 : post.likes} {/* Display the updated like count */}
                  </Typography>
                </IconButton>
              </Box>

              {/* Post Content */}
              <Typography variant="body1" sx={{ mt: 1 }}>
                {post.content}
              </Typography>

              {/* Comments Section */}
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" fontWeight="bold">
                  Comments:
                </Typography>
                {post.comments.map((comment, index) => (
                  <Box key={index} sx={{ mt: 1 }}>
                    <Typography variant="body2">
                      <strong>{comment.username}</strong>: {comment.comment}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Button to interact */}
              <Button sx={{ mt: 2 }} variant="contained" size="small">
                Interact
              </Button>
            </Paper>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default InstagramClone;
