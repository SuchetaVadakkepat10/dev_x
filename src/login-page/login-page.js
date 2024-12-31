import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Link,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/main");
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

        {/* Login Form */}
        <Box component="form" sx={{ mt: 2 }}>
          <TextField
            label="Username or email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
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

      {/* Signup Link */}
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
