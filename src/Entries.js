import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire";

export default function Entries() {
  const { data: user } = useUser();
  const entriesRef = useFirestore()
    .collection("users")
    .doc(user.email)
    .collection("entries")
    .orderBy("date", "desc")
    .limit(10);
  const { status, data: entries } = useFirestoreCollectionData(entriesRef);

  // easily check the loading status
  if (status === "loading") {
    return <p>Fetching Hagemashi entries...</p>;
  }

  return (
    <div>
      {entries.map((entry) => (
        <div>{entry.entry}</div>
      ))}
    </div>
  );
}
