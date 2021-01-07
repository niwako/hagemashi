import { LinearProgress } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useFirestore, useFirestoreDocData, useUser } from "reactfire";

export default function Editor() {
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

  // easily check the loading status
  if (status === "loading") {
    return <LinearProgress />;
  }

  return (
    <>
      <h1>Editor - {entryId}</h1>
      <p>{entry.content}</p>
    </>
  );
}
