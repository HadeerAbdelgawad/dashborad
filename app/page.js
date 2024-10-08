"use client"
import { useRouter } from "next/navigation";
import { useEffect ,useState} from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { isAuthenticated } from "./utils/auth";

export default function Home() {
     const [mounted, setMounted] = useState(false); 
     const router = useRouter();

    useEffect(() => {
      // Mark the component as mounted
      setMounted(true);

      if (mounted && isAuthenticated()) {
        router.push("/dashboard"); 
      }
      
    }, [mounted, router]);
    const handleLoginRedirect = () => {
      router.push("/login");
    };
   if (!mounted) {
     return null; // Avoid rendering if component isn't mounted yet
   }
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Dashboard App
        </Typography>
        <Typography variant="body1" gutterBottom>
          This is the home page. You can log in to access the dashboard.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleLoginRedirect}
          sx={{ mt: 2 }}
        >
          Go to Login
        </Button>
      </Box>
    </Container>
  );

}
