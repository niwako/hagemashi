import "firebase/firestore";
import { useFirestore, useFirestoreDocData, useUser } from "reactfire";

export default function Burrito() {
  // easily access the Firestore library
  const burritoRef = useFirestore().collection("tryreactfire").doc("burrito");

  // subscribe to a document for realtime updates. just one line!
  const { status, data } = useFirestoreDocData(burritoRef);

  const { data: user } = useUser();

  // easily check the loading status
  if (status === "loading") {
    return <p>Fetching burrito flavor...</p>;
  }

  return (
    <div>
      <p>
        The 🌯 belonging to <img src={user.photoURL} /> is{" "}
        {data.yummy ? "good" : "bad"}!
      </p>
    </div>
  );
}
