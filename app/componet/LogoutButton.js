"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import { removeToken } from "../utils/auth"; 
const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = () => {
    removeToken();
    router.push("/login");
  };
  return (
    <Button sx={{mb:3}} variant="contained" color="error" onClick={handleLogout}>
      Logout
    </Button>
  );
};



export default LogoutButton;
