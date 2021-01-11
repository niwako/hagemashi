import {
  Container,
  LinearProgress,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirestore, useFirestoreDocData, useUser } from "reactfire";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
  },
}));

export default function EntryEdit() {
  const classes = useStyles();
  const { entryId } = useParams();
  const { data: user } = useUser();
  const entryRef = useFirestore()
    .collection("users")
    .doc(user.uid)
    .collection("entries")
    .doc(entryId);
  const { status, data: entry } = useFirestoreDocData(entryRef, {
    idField: "id",
  });

  const [editorState, setEditorState] = useState("");

  useEffect(() => {
    setEditorState(entry?.content || "");
  }, [entry]);

  const updateEditorState = (event) => {
    console.log(event);
    entryRef.set(
      {
        content: event.target.value,
      },
      { merge: true }
    );
    setEditorState(event.target.value);
  };

  // easily check the loading status
  if (status === "loading") {
    return <LinearProgress />;
  }

  return (
    <>
      <h1>Editor - {entryId}</h1>
      <TextField
        multiline
        className={classes.textField}
        value={editorState}
        onChange={updateEditorState}
      />
    </>
  );
}
