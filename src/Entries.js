import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire";

export default function Entries() {
  const { data: user } = useUser();
  const entriesRef = useFirestore()
    .collection("users")
    .doc(user.email)
    .collection("entries")
    .orderBy("date", "desc")
    .limit(10);
  const { data: entries } = useFirestoreCollectionData(entriesRef);
  console.log(entries);

  return (
    <div>
      {entries.map((entry) => (
        <div>{entry.entry}</div>
      ))}
    </div>
  );
}
