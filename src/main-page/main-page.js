import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Avatar, IconButton, Grid2, Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { AddBox, FavoriteBorder, AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { feedData } from "./post-data";
import Stories from "./stories";

const InstagramClone = () => {
  const navigate = useNavigate();

  const [likes, setLikes] = useState(feedData.map(() => false)); // Initially, no post is liked
  const [openModal, setOpenModal] = useState(false); // Modal state
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    comments: [{ username: "", comment: "" }],
  }); // New post data

  const handleLike = (index) => {
    const updatedLikes = [...likes];
    updatedLikes[index] = !updatedLikes[index]; // Toggle like state
    setLikes(updatedLikes);
  };

  // Open modal
  const handleOpenModal = () => setOpenModal(true);

  // Close modal
  const handleCloseModal = () => setOpenModal(false);

  // Handle input change for new post
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission to add new post
  const handleAddPost = () => {
    const newId = feedData.length + 1; // Generate new ID (you can improve this)
    const newPostData = { ...newPost, id: newId, likes: 0 }; // Add ID and set initial likes to 0
    feedData.push(newPostData); // Add new post to feedData (you should ideally update the state here)
    setNewPost({ title: "", content: "", comments: [{ username: "", comment: "" }] }); // Reset newPost data
    setOpenModal(false); // Close modal
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
              Open Scratch Card
            </Button>
            <IconButton onClick={handleOpenModal}>
              <AddBox sx={{ color: "#262626" }} />
            </IconButton>
            <IconButton>
              <AccountCircle sx={{ color: "#262626" }} onClick={() => navigate("/about")} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Stories Section */}
      <Box sx={{ display: "flex", overflowX: "auto", p: 2, gap: 2, backgroundColor: "#fff" }}>
        <Stories />
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
                  {likes[index] ? (
                    <FavoriteBorder sx={{ color: "#e60023" }} />
                  ) : (
                    <FavoriteBorder sx={{ color: "#262626" }} />
                  )}
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {likes[index] ? post.likes + 1 : post.likes}
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
            </Paper>
          </Grid2>
        ))}
      </Grid2>

      {/* Modal for Adding New Post */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Add New Post</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Content"
            variant="outlined"
            fullWidth
            name="content"
            value={newPost.content}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Comment (optional)"
            variant="outlined"
            fullWidth
            name="comment"
            value={newPost.comments[0].comment}
            onChange={(e) => {
              const newComments = [...newPost.comments];
              newComments[0].comment = e.target.value;
              setNewPost({ ...newPost, comments: newComments });
            }}
            sx={{ mb: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddPost} color="primary">
            Add Post
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default InstagramClone;
