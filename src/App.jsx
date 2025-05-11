// https://mui.com/material-ui/getting-started/installation/
import { Grid, Stack } from "@mui/material";
import "./App.css";
import { ContactForm } from "./components/ContactForm";
import { ContacList } from "./components/ContacList";
import { SearchBox } from "./components/SearchBox";

function App() {
  return (
    <div>
      <h1>연락처 앱</h1>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <ContactForm />
          <SearchBox />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <ContacList />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
