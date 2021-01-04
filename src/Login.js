import React from "react";
import { useEffect } from "react";
import firebase from "firebase";
import * as firebaseui from "firebaseui";

export default function Login() {
  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebase.auth());

    ui.start("#firebaseui-auth-container", {
      signInFlow: "popup",
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
    });
  });
  return <div id="firebaseui-auth-container" />;
}
