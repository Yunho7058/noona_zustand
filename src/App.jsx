// https://mui.com/material-ui/getting-started/installation/
import { Grid, Stack } from "@mui/material";
import "./App.css";
import { ContactForm } from "./components/ContactForm";
import { ContacList } from "./components/ContacList";
import { SearchBox } from "./components/SearchBox";
import { PhonNumberList } from "./page/PhonNumberList";

function App() {
  return (
    <div>
      <PhonNumberList />
    </div>
  );
}

export default App;
