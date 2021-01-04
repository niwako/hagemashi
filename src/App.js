import "firebase/auth";
import { AuthCheck, FirebaseAppProvider } from "reactfire";
import Login from "./Login";
import AvatarHeader from "./AvatarHeader";

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
      <AuthCheck fallback={<Login />}>
        <AvatarHeader />
      </AuthCheck>
    </FirebaseAppProvider>
  );
}

export default App;
