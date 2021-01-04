import { Avatar, Container, Grid } from "@material-ui/core";
import { useUser } from "reactfire";

export default function AvatarHeader() {
  const { data: user } = useUser();
  const date = new Date().toDateString();

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs>
          <h1>
            <Avatar alt={user.displayName} src={user.photoURL} />
          </h1>
        </Grid>
        <Grid item xs={10}>
          <h1>Hi {user.displayName.split(" ")[0]}</h1>
          <div>{date}</div>
        </Grid>
      </Grid>
    </Container>
  );
}
