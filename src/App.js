import "firebase/auth";
import { AuthCheck, FirebaseAppProvider } from "reactfire";
import Login from "./Login";
import {
  Container,
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core";
import { useMemo } from "react";
import Routes from "./Routes";

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
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Container disableGutters maxWidth="sm">
          <AuthCheck fallback={<Login />}>
            <Routes />
          </AuthCheck>
        </Container>
      </FirebaseAppProvider>
    </ThemeProvider>
  );
}

export default App;
