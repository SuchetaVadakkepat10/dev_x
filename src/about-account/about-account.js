import React from "react";
import {
  AppBar,
  Box,
  Avatar,
  Typography,
  Button,
  Grid,
  Paper,
  Toolbar,
  IconButton,
} from "@mui/material";
import { Edit, AddAPhoto } from "@mui/icons-material";
import { offers } from "./redemption-offers";
import { AddBox, FavoriteBorder, AccountCircle } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";


//-----------------------------------------------------------------------------------------------------------------------------------

const AboutAccount = () => {
  const navigate = useNavigate();
  
  return (
    <Box sx={{ backgroundColor: "#fafafa", minHeight: "100vh" }}>
        <AppBar position="sticky" sx={{ backgroundColor: "#fff", borderBottom: "1px solid #dbdbdb" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ color: "#262626", fontWeight: "bold" }}>
            Instagram
        </Typography>
        <Box>
            <Button variant="contained" color="primary" onClick={() => navigate("/scratch-card")}>
            Open Scratch Card
            </Button>
            <IconButton>
            <AddBox sx={{ color: "#262626" }} />
            </IconButton>
            <IconButton>
            <AccountCircle sx={{ color: "#262626" }} onClick={() => navigate("/about")}/>
            </IconButton>
        </Box>
        </Toolbar>
    </AppBar>

    <Box
      sx={{
        backgroundColor: "#fafafa",
        minHeight: "100vh",
        px: 2,
        py: 4,
      }}
    >
      {/* Profile Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "left",
          mb: 4,
        }}
      >
        {/* Profile Picture */}
        <Box
          sx={{
            position: "relative",
            mr: { sm: 4 },
            mb: { xs: 2, sm: 0 },
          }}
        >
          <Avatar
            src="/path-to-profile-pic.jpg" // Replace with dynamic image source
            sx={{
              width: 150,
              height: 150,
              border: "3px solid #dbdbdb",
            }}
          />
          <IconButton
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              backgroundColor: "#fff",
              border: "1px solid #dbdbdb",
            }}
          >
            <AddAPhoto />
          </IconButton>
        </Box>

        {/* User Details */}
        <Box sx={{ textAlign: { xs: "left", sm: "left" } }}>
          <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
            username_123
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-start" },
              gap: 2,
              mb: 2,
            }}
          >
            <Typography variant="body2">
              <strong>120</strong> Posts
            </Typography>
            <Typography variant="body2">
              <strong>2.5K</strong> Followers
            </Typography>
            <Typography variant="body2">
              <strong>180</strong> Following
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-start" },
              gap: 1,
            }}
          >
          </Box>
        </Box>
      </Box>

      {/* Bio Section */}
      <Box
        sx={{
          textAlign: "left",
          mb: 4,
          px: { xs: 2, sm: 8 },
        }}
      >
        <Typography variant="body1" fontWeight="bold">
          John Doe
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Exploring the world through the lens 📸 | Travel enthusiast ✈️ | Love
          for coffee ☕
        </Typography>
        <Typography
          variant="body2"
          sx={{ mt: 1 }}
        >
          Acheivement level
        </Typography>
      </Box>

      {/* Posts Section */}
      <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
        Offers you can avail today!
      </Typography>
      <Grid container spacing={2}>
        {offers.map((offer) => (
            <Grid item xs={4} key={offer.id}>
            <Paper
                sx={{
                height: 150,
                backgroundColor: "#f5f5f5",
                borderRadius: 1,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                }}
            >
                {/* Image Section */}
                <Box
                sx={{
                    height: "60%",
                    backgroundImage: `url(${offer.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                />
                {/* Text Section */}
                <Box sx={{ p: 1 }}>
                <Typography variant="body1" fontWeight="bold">
                    {offer.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#757575" }}>
                    {offer.description}
                </Typography>
                </Box>
            </Paper>
            </Grid>
        ))}
        </Grid>
    </Box>
    </Box>
   
    
  );
};

export default AboutAccount;
