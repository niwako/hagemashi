import "./App.css";
import "firebase/database";
import {
  FirebaseAppProvider,
  useFirestore,
  useFirestoreDocData,
} from "reactfire";
// eslint-disable-next-line
import { SuspenseWithPerf } from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyBLJ57nWDJKrYt-ACW2dhLzUbFSxCdwDv4",
  authDomain: "hagemashi-prod.firebaseapp.com",
  projectId: "hagemashi-prod",
  storageBucket: "hagemashi-prod.appspot.com",
  messagingSenderId: "297349595147",
  appId: "1:297349595147:web:5ec28f2f82cb009820c70e",
  measurementId: "G-B0DT0W1LW7",
};

function Burrito() {
  // easily access the Firestore library
  const burritoRef = useFirestore().collection("tryreactfire").doc("burrito");

  // subscribe to a document for realtime updates. just one line!
  const { status, data } = useFirestoreDocData(burritoRef);

  // easily check the loading status
  if (status === "loading") {
    return <p>Fetching burrito flavor...</p>;
  }

  return <p>The burrito is {data.yummy ? "good" : "bad"}!</p>;
}

function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <h1>🌯</h1>
      <Burrito />
    </FirebaseAppProvider>
  );
}

export default App;
