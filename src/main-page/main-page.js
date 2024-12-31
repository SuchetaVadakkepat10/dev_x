import React from "react";
import { AppBar, Toolbar, Typography, Box, Avatar, IconButton, Grid2, Paper, Button } from "@mui/material";
import { Home, Search, AddBox, FavoriteBorder, AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

//---------------------------------------------------------------------------------------------------------------------

const InstagramClone = () => {

  const navigate = useNavigate();
  
  return (
    <Box sx={{ backgroundColor: "#fafafa", minHeight: "100vh" }}>
      {/* Header */}
      <AppBar position="sticky" sx={{ backgroundColor: "#fff", borderBottom: "1px solid #dbdbdb" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ color: "#262626", fontWeight: "bold" }}>
            Instagram
          </Typography>
          <Box>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/scratch-card")}
          >
            Open Scratch Card
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
      <Grid2 container spacing={2} sx={{ p: 2 }}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Grid2 item xs={12} key={index}>
            <Paper sx={{ p: 2, backgroundColor: "#fff", border: "1px solid #dbdbdb" }}>
              {/* Post Header */}
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Avatar sx={{ width: 40, height: 40, mr: 2 }} />
                <Typography variant="subtitle1">User {index + 1}</Typography>
              </Box>

              {/* Post Content */}
              <Box
                sx={{
                  width: "100%",
                  height: 300,
                  backgroundColor: "#ddd",
                  borderRadius: 1,
                }}
              ></Box>

              {/* Post Actions */}
              <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                <IconButton>
                  <FavoriteBorder sx={{ color: "#262626" }} />
                </IconButton>
                <IconButton>
                  <AddBox sx={{ color: "#262626" }} />
                </IconButton>
              </Box>

              {/* Post Caption */}
              <Typography variant="body2" sx={{ mt: 1 }}>
                <strong>User {index + 1}</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Paper>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default InstagramClone;
