//line   17 variable having the scratch card value

import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, Paper } from "@mui/material";

const ScratchCard = () => {
  const [scratched, setScratched] = useState(false);
  const canvasRef = useRef(null);
  const rewardTextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();

    // Randomize reward points between 20 and 100    // Randomize reward points between 20 and 100

    const randomPoints = Math.floor(Math.random() * (70 - 20 + 1)) + 20;
    rewardTextRef.current.textContent = `You have Won ${randomPoints} KYN Points`;



    // Randomize reward points between 20 and 100    // Randomize reward points between 20 and 100
    


    canvas.width = rect.width;
    canvas.height = rect.height;

    // Load the foreground image
    const img = new Image();
    img.src = '/eventimgs/front.jpg'; // Replace with your image path

    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    const handleMouseDown = (e) => {
      isDrawing = true;
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth = 30;
      ctx.lineCap = 'round';
      [lastX, lastY] = [e.clientX - rect.left, e.clientY - rect.top];
    };

    const handleMouseMove = (e) => {
      if (!isDrawing) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.stroke();
      [lastX, lastY] = [x, y];
    };

    const handleMouseUp = () => {
      isDrawing = false;
    };

    const handleMouseLeave = () => {
      isDrawing = false;
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bgcolor="#f0f0f0">
      <Paper
        sx={{
          position: "relative",
          width: 300,
          height: 300,
          background: "#ddd",
          overflow: "hidden",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography
            ref={rewardTextRef}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 28,
              color: "#333",
              fontWeight: "bold",
              fontFamily: "'Courier New', Courier, monospace",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              letterSpacing: "1px",
              textAlign: "center",
              backgroundColor: "#fcf8f8",
          }}
        >

        </Typography>
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            cursor: "crosshair",
          }}
        />
      </Paper>
    </Box>
  );
};

export default ScratchCard;
