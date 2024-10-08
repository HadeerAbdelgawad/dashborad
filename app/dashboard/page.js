import { Container, Typography, Button, Stack, Divider, Grid, Paper } from "@mui/material";
import ProtectedRoute from "../componet/ProtectedRoute";
import LogoutButton from "../componet/LogoutButton";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });
  const posts = await res.json();

  return (
    <ProtectedRoute>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Welcome to the Dashboard!
          </Typography>
          <LogoutButton />
        </Stack>

        <Grid container spacing={4}>
          {posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <PostCard title={post.title} body={post.body} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ProtectedRoute>
  );
};

const PostCard = ({ title, body }) => {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardContent>
        <Typography gutterBottom variant="h6" sx={{ color: "text.primary" }}>
          {title}
        </Typography>
        <Divider sx={{ mb: 1 }} />
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {body}
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: "auto" }}>
        <Button size="medium" variant="contained" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default page;
