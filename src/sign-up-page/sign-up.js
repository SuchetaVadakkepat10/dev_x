import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Link,
  Divider,
  Snackbar,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [instagram_id, setInstagramId] = useState("");
  const [password, setPassword] = useState("");
  const [referral, setReferral] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showReferralToast, setShowReferralToast] = useState(false); // Snackbar state

  const handleSubmit = async () => {
    try {
      setErrorMessage("");

      // Simulate a backend call
      const response = await axios.post("http://localhost:5000/signup", {
        email,
        instagram_id,
        password,
      });

      if (response.status === 201) {
        console.log("User Signed Up:", { email, instagram_id, referral });

        // Show referral toast if a referral code is entered
        if (referral) {
          setShowReferralToast(true);

          // Wait for 3 seconds before navigating
          setTimeout(() => {
            navigate("/main");
          }, 2000);
        } else {
          // Navigate directly if no referral code
          navigate("/main");
        }
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An error occurred while signing up");
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
      {/* Sign Up Card */}
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
          Sign Up
        </Typography>

        {/* Display error message if any */}
        {errorMessage && (
          <Typography color="error" sx={{ mb: 2 }}>
            {errorMessage}
          </Typography>
        )}

        {/* Sign Up Form */}
        <Box component="form" sx={{ mt: 2 }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={instagram_id}
            onChange={(e) => setInstagramId(e.target.value)}
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
          <TextField
            label="Referral Code (Optional)"
            variant="outlined"
            fullWidth
            margin="normal"
            value={referral}
            onChange={(e) => setReferral(e.target.value)}
          />

          <Button
            variant="contained"
            fullWidth
            onClick={handleSubmit}
            sx={{
              mt: 2,
              backgroundColor: "#3897f0",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#3183d4",
              },
            }}
          >
            Sign Up
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

      {/* Login Link */}
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
          Already have an account?{" "}
          <Link
            href="/"
            underline="none"
            sx={{ color: "#3897f0", fontWeight: "bold" }}
          >
            Log in
          </Link>
        </Typography>
      </Paper>

      {/* Snackbar for referral code acceptance */}
      <Snackbar
        open={showReferralToast}
        autoHideDuration={3000}
        onClose={() => setShowReferralToast(false)}
      >
        <Alert
          onClose={() => setShowReferralToast(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Referral code accepted!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SignUp;
