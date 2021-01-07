import { Divider, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Entry({ id, date, content }) {
  return (
    <>
      <ListItem button component={Link} to={`/editor/${id}`}>
        <ListItemText primary={date.toDateString()} secondary={content} />
      </ListItem>
      <Divider variant="middle" component="li" />
    </>
  );
}
