// src/bookings-page/booking-page.js

import React, { useState } from "react";
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "LIVE MUSIC", description: "JOIN US TO SET YOUR FEET TO DANCE", image: "eventimgs/1.png" },
    { id: 2, title: "X-MAS PARTY", description: "CELEBRATE THE SEASON WITH JOY AND FESTIVITY", image: "eventimgs/2.png" },
    { id: 3, title: "COCKTAIL PARTY", description: "LET LOOSE AND ENJOY AN UNFORGETTABLE NIGHT", image: "eventimgs/3.png" },
    { id: 4, title: "FUN RUN", description: "GET READY TO COMPETE IN EXHILARATING GAMES", image: "eventimgs/4.png" }, // New event
    { id: 5, title: "TRAIN WITH ME", description: "BOOST YOUR FITNESS WITH ENERGY-FILLED SESSIONS.", image: "eventimgs/5.png" }, // Fifth event
  ]);

  const navigate = useNavigate();

  const handleRegister = () => {
    // Navigate to the ScratchCard page for any event
    navigate("/scratch-card");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f7f7f7",
        p: 3,
        fontFamily: "'Montserrat', sans-serif", // Default font for the page
      }}
    >
      <Typography 
        variant="h4" 
        sx={{
          mb: 4,
          fontWeight: 700, 
          fontSize: '2.5rem', 
          textAlign: 'center',
          color: "#333",
          fontFamily: "'Lora', serif",  // Changed font to match event titles
        }}
      >
        Event Booking Page
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {events.map((event) => (
          <Grid item key={event.id} xs={12} sm={6} md={4}>
            <Card elevation={3} sx={{ borderRadius: 4, overflow: "hidden" }}>
              <CardMedia
                component="img"
                height="300"  // Increased height for a bigger image
                width="100%"  // Set to 100% width of the card, but smaller than before
                image={event.image}
                alt={event.title}
                sx={{
                  borderTopLeftRadius: 16,  // Rounded corners on top
                  borderTopRightRadius: 16, // Rounded corners on top
                  objectFit: 'cover',       // Ensure image maintains aspect ratio
                }}
              />
              <CardContent>
                <Typography 
                  variant="h6" 
                  sx={{
                    fontWeight: 600, 
                    fontSize: '1.25rem', 
                    color: "#444", 
                    fontFamily: "'Lora', serif", // Same font for event title
                  }}
                >
                  {event.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{
                    color: "#666", 
                    fontSize: '1rem', 
                    lineHeight: '1.5', 
                    fontFamily: "'Open Sans', sans-serif", // Changed font for event description
                  }}
                >
                  {event.description}
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                sx={{
                  mb: 2,
                  borderRadius: 3,
                  padding: '10px 20px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  textTransform: 'none',
                  backgroundColor: "#000",  // Set button color to black
                  color: "#fff",            // Set text color to white
                  '&:hover': {
                    backgroundColor: "#333", // Darken button color on hover
                  }
                }}
                fullWidth
                onClick={handleRegister}
              >
                Register
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BookingPage;
