import { Divider, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Entry({ id, date, content }) {
  return (
    <>
      <ListItem button component={Link} to={`/editor/${id}`}>
        <ListItemText
          primary={date.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          secondary={content}
        />
      </ListItem>
      <Divider variant="middle" component="li" />
    </>
  );
}
