import { LinearProgress, makeStyles, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirestore, useFirestoreDocData, useUser } from "reactfire";
import { useDebouncedCallback } from "use-debounce";

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

  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(entry?.content || "");
  }, [entry]);

  const updateContent = (event) => {
    setContent(event.target.value);
    updateFirestoreContent.callback(event.target.value);
  };

  const updateFirestoreContent = useDebouncedCallback((content) => {
    entryRef.set({ content }, { merge: true });
  }, 1000);

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
        value={content}
        onChange={updateContent}
      />
    </>
  );
}
