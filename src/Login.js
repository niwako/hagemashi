import { useEffect } from "react";
import firebase from "firebase";

export default function Login() {
  useEffect(() => {
    // const firebaseUiWidget = firebaseui.auth.AuthUI().getInstance();
    const firebaseui = require("firebaseui");
    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#login", {
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
    });
  });
  return <div className="login" id="login" />;
}
