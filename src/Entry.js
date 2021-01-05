import { Divider, ListItem, ListItemText } from "@material-ui/core";

export default function Entry({ date, content }) {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText primary={date.toDateString()} secondary={content} />
      </ListItem>
      <Divider variant="middle" component="li" />
    </>
  );
}
