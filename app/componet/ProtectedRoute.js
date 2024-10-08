"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "../utils/auth";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login"); // Redirect to login if not authenticated
    }
  }, [router]);

  return isAuthenticated() ? children : null;
};

export default ProtectedRoute;
