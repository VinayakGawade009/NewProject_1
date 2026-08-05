import React from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Avatar,
  Box,
  Divider,
  Button,
} from "@mui/material";
import { Close as CloseIcon, Edit as EditIcon } from "@mui/icons-material";

const ProfileModal = ({ open, onClose, user }) => {
  if (!user) return null;

  // Extract initials for the Avatar
  const initials = user.username ? user.username.charAt(0).toUpperCase() : "U";
  
  // Handle both _id (from /me route) and id (from /login route)
  const rawId = user._id || user.id || "Unknown";
  const clientId = rawId !== "Unknown" ? rawId.slice(-8).toUpperCase() : "N/A";
  
  // Format the balance as INR currency
  const balance = user.balance !== undefined ? user.balance : 100000;
  const formattedBalance = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(balance);

  // Format the creation date
  const joinedDate = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-IN", {
        month: "long",
        year: "numeric",
      })
    : "Recently";

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      slotProps={{
        backdrop: {
          sx: {
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          },
        },
      }}
      PaperProps={{
        sx: { borderRadius: 3, padding: 1 },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{ position: "absolute", right: 12, top: 12, color: "grey.500" }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent sx={{ textAlign: "center", mt: 2 }}>
        <Avatar
          sx={{
            width: 72,
            height: 72,
            bgcolor: "#e0e0e0",
            color: "#387ed1",
            fontSize: "2rem",
            fontWeight: "bold",
            margin: "0 auto",
            mb: 2,
          }}
        >
          {initials}
        </Avatar>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {user.username}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {user.email}
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ display: "flex", justifyContent: "space-between", textAlign: "left", mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Client ID
          </Typography>
          <Typography variant="body1" fontWeight="medium">
            {clientId}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", textAlign: "left", mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Available Margin
          </Typography>
          <Typography variant="body1" fontWeight="bold" color="#4caf50">
            {formattedBalance}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", textAlign: "left", mb: 3 }}>
          <Typography variant="body2" color="text.secondary">
            Joined
          </Typography>
          <Typography variant="body1" fontWeight="medium">
            {joinedDate}
          </Typography>
        </Box>

        {/* Edit Button - Disabled for V1 */}
        <Button
          variant="outlined"
          fullWidth
          startIcon={<EditIcon />}
          sx={{
            borderRadius: 2,
            textTransform: "none",
            color: "#387ed1",
            borderColor: "#387ed1",
          }}
          disabled
        >
          Edit Profile (Coming in V2)
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;