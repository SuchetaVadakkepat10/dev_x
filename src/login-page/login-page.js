import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Link,
  Divider,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/signin", {
        email,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("authToken", response.data.access_token);
        console.log(response.data);

        navigate("/main");
      }
    } catch (error) {
      // Handle errors (e.g., invalid credentials, server issues)
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
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
      }}
    >
      {/* Login Card */}
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 350,
          p: 3,
          textAlign: "center",
          mb: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Grand Hotel', cursive",
            fontWeight: 600,
            color: "#262626",
            mb: 2,
          }}
        >
          Instagram
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box component="form" sx={{ mt: 2 }}>
          <TextField
            label="Username or email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            fullWidth
            onClick={handleLogin}
            sx={{
              mt: 2,
              backgroundColor: "#3897f0",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#3183d4",
              },
            }}
          >
            Log In
          </Button>
        </Box>

        <Divider sx={{ my: 2 }}>OR</Divider>

        <Link
          href="#"
          underline="none"
          sx={{ display: "block", mt: 2, fontSize: 14, color: "#00376b" }}
        >
          Forgot password?
        </Link>
      </Paper>

      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 350,
          p: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="body1">
          Don't have an account?{" "}
          <Link
            href="/signup"
            underline="none"
            sx={{ color: "#3897f0", fontWeight: "bold" }}
          >
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
