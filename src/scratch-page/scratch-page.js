import React, { useState } from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import ReactCanvasConfetti from "react-canvas-confetti";

const ScratchCard = () => {
  const [scratched, setScratched] = useState(false);

  const handleScratch = () => {
    setScratched(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#fafafa",
        p: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "300px",
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: scratched ? "#4caf50" : "#bdbdbd",
          color: scratched ? "#fff" : "#757575",
          position: "relative",
        }}
      >
        <Typography variant="h5">
          {scratched ? "You Won a Prize!" : "Scratch to Reveal"}
        </Typography>
        {scratched && (
          <ReactCanvasConfetti
            className="canvas-confetti"
            fire={() => ({
              particleCount: 100,
              spread: 60,
              origin: { x: 0.5, y: 0.5 },
            })}
          />
        )}
      </Paper>
      {!scratched && (
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={handleScratch}
        >
          Scratch Now
        </Button>
      )}
      {scratched && (
        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 3 }}
          onClick={() => setScratched(false)}
        >
          Reset
        </Button>
      )}
    </Box>
  );
};

export default ScratchCard;
