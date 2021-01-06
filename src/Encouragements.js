import AddIcon from "@material-ui/icons/Add";
import { Fab, makeStyles } from "@material-ui/core";
import AvatarHeader from "./AvatarHeader";
import Entries from "./Entries";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function Encouragements() {
  const classes = useStyles();
  return (
    <>
      <AvatarHeader />
      <Entries />
      <Fab color="primary" aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
    </>
  );
}
