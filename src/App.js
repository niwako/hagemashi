import "./App.css";
import "firebase/database";
import {
  FirebaseAppProvider,
  // eslint-disable-next-line
  SuspenseWithPerf,
} from "reactfire";
import Burrito from "./Burrito";

const firebaseConfig = {
  apiKey: "AIzaSyBLJ57nWDJKrYt-ACW2dhLzUbFSxCdwDv4",
  authDomain: "hagemashi-prod.firebaseapp.com",
  projectId: "hagemashi-prod",
  storageBucket: "hagemashi-prod.appspot.com",
  messagingSenderId: "297349595147",
  appId: "1:297349595147:web:5ec28f2f82cb009820c70e",
  measurementId: "G-B0DT0W1LW7",
};

function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Burrito />
    </FirebaseAppProvider>
  );
}

export default App;
