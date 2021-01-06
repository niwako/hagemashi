import { List } from "@material-ui/core";
import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire";
import Entry from "./Entry";

export default function Entries() {
  const { data: user } = useUser();
  const entriesRef = useFirestore()
    .collection("users")
    .doc(user.uid)
    .collection("entries")
    .orderBy("date", "desc")
    .limit(10);
  const { status, data: entries } = useFirestoreCollectionData(entriesRef, {
    idField: "id",
  });

  // easily check the loading status
  if (status === "loading") {
    return <p>Fetching Hagemashi entries...</p>;
  }

  return (
    <List>
      {entries.map((entry) => (
        <Entry
          key={entry.id}
          date={entry.date.toDate()}
          content={entry.content}
        />
      ))}
    </List>
  );
}
