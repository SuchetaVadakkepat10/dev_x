import React, { useState, useEffect } from "react";
import { Box, Avatar, Typography, CircularProgress } from "@mui/material";
import axios from "axios";

const Stories = () => {
  const [users, setUsers] = useState([]); // State to hold user data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(""); // State to handle errors

  useEffect(() => {
    // Fetch users from the backend on component mount
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`, 
          },
        });
        console.log("ACCESS TOKEN:",localStorage.getItem("authToken"));
        setUsers(response.data); // Set users to state
        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        setError("Failed to fetch users.");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array means it runs once on component mount

  if (loading) {
    return <CircularProgress sx={{ display: "block", mx: "auto", mt: 4 }} />;
  }

  return (
    <Box sx={{ display: "flex", overflowX: "auto", p: 2, gap: 2, backgroundColor: "#fff", borderBottom: "1px solid #dbdbdb" }}>
      {users.map((user, index) => (
        <Box key={index} sx={{ textAlign: "center", minWidth: 70 }}>
          <Avatar
            sx={{
              width: 56,
              height: 56,
              mx: "auto",
              border: "2px solid #ff8501",
            }}
            alt={user.instagram_id} // Display Instagram ID as alt text
            src={`https://avatars.dicebear.com/api/initials/${user.instagram_id}.svg`} // Example avatar source (You can replace with actual image URL)
          />
          <Typography variant="caption" sx={{ mt: 1 }}>
            {user.instagram_id}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Stories;
