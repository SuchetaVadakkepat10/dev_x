import React, { useState } from "react";
import { 
  AppBar, Toolbar, Typography, Box, Avatar, IconButton, Grid2, Paper, Button, 
  Dialog, DialogActions, DialogContent, DialogTitle, TextField, Snackbar 
} from "@mui/material";
import { AddBox, FavoriteBorder, AccountCircle, Share, Comment } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { feedData } from "./post-data";
import Stories from "./stories";

const InstagramClone = () => {
  const navigate = useNavigate();
  const [likes, setLikes] = useState(feedData.map(() => false));
  const [openModal, setOpenModal] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    comments: [{ username: "", comment: "" }],
  });
  const [openSnackbar, setOpenSnackbar] = useState(false); // Share Snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Snackbar Message
  const [feed, setFeed] = useState(feedData);

  const handleLike = (index) => {
    const updatedLikes = [...likes];
    updatedLikes[index] = !updatedLikes[index];
    setLikes(updatedLikes);
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddPost = async () => {
    try {
      const response = await fetch("/add_post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newPost.title,
          content: newPost.content,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add post");
      }

      const result = await response.json();
      const newId = feed.length + 1;
      const newPostData = { 
        id: newId, 
        title: newPost.title, 
        content: newPost.content, 
        comments: [{ username: "", comment: "" }], 
        likes: 0, 
        image: "/postimages/default.png" 
      };
      
      setFeed((prevFeed) => [...prevFeed, newPostData]);
      setSnackbarMessage("Post added successfully!");
    } catch (error) {
      setSnackbarMessage("Error adding post. Please try again.");
    } finally {
      setOpenSnackbar(true);
      setNewPost({ title: "", content: "", comments: [{ username: "", comment: "" }] });
      setOpenModal(false);
    }
  };

  const handleShare = () => {
    setSnackbarMessage("Post has been shared!");
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => setOpenSnackbar(false);

  const handleComment = () => {
    setSnackbarMessage("Comment has been added!");
    setOpenSnackbar(true);
  };

  return (
    <Box sx={{ backgroundColor: "#fafafa", minHeight: "100vh" }}>
      <AppBar position="sticky" sx={{ backgroundColor: "#fff", borderBottom: "1px solid #dbdbdb" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ color: "#262626", fontWeight: "bold" }}>Instagram</Typography>
          <Box>
            <Button variant="contained" color="primary" onClick={() => navigate("/scratch-card")}>Scratch Card</Button>
            <Button variant="contained" color="primary" onClick={() => navigate("/bookings-page")}>Events</Button>
            <IconButton onClick={handleOpenModal}><AddBox sx={{ color: "#262626" }} /></IconButton>
            <IconButton><AccountCircle sx={{ color: "#262626" }} onClick={() => navigate("/about")} /></IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: "flex", overflowX: "auto", p: 2, gap: 2, backgroundColor: "#fff" }}>
        <Stories />
      </Box>

      <Grid2 container spacing={2}>
        {feed.map((post, index) => (
          <Grid2 item xs={12} sm={6} md={4} key={post.id}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6">{post.title}</Typography>
              <Box
                component="img"
                src={post.image}
                alt={post.title}
                sx={{
                  width: "100%",
                  height: 300,
                  objectFit: "cover",
                  borderRadius: 1,
                  backgroundColor: "#ddd"
                }}
              />
              <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
                <IconButton onClick={() => handleLike(index)}>
                  <FavoriteBorder sx={{ color: likes[index] ? "#e60023" : "#262626" }} />
                  <Typography variant="body2" sx={{ mt: 1 }}>{likes[index] ? post.likes + 1 : post.likes}</Typography>
                </IconButton>
                <IconButton onClick={handleComment}>
                  <Comment sx={{ color: "#262626" }} />
                </IconButton>
                <IconButton onClick={handleShare}>
                  <Share sx={{ color: "#262626" }} />
                </IconButton>
              </Box>
              <Typography variant="body1" sx={{ mt: 1 }}>{post.content}</Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" fontWeight="bold">Comments:</Typography>
                {post.comments.map((comment, index) => (
                  <Box key={index} sx={{ mt: 1 }}>
                    <Typography variant="body2"><strong>{comment.username}</strong>: {comment.comment}</Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid2>
        ))}
      </Grid2>

      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Add New Post</DialogTitle>
        <DialogContent>
          <TextField label="Title" variant="outlined" fullWidth name="title" value={newPost.title} onChange={handleInputChange} sx={{ mb: 2 }} />
          <TextField label="Content" variant="outlined" fullWidth name="content" value={newPost.content} onChange={handleInputChange} sx={{ mb: 2 }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">Cancel</Button>
          <Button onClick={handleAddPost} color="primary">Add Post</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </Box>
  );
};

export default InstagramClone;