// https://mui.com/material-ui/getting-started/installation/
import { Grid, Stack } from "@mui/material";
import "./App.css";
import { ContactForm } from "./components/ContactForm";
import { ContacList } from "./components/ContacList";

function App() {
  Grid;
  return (
    <div>
      <h1>연락처 앱</h1>
      <Grid container spacing={2}>
        <Grid size={6}>
          <ContactForm />
        </Grid>
        <Grid size={6}>
          <ContacList />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
