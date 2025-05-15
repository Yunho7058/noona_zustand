// https://mui.com/material-ui/getting-started/installation/
import { Grid, Stack } from "@mui/material";
import "./App.css";
import { ContactForm } from "./components/ContactForm";
import { ContacList } from "./components/ContacList";
import { SearchBox } from "./components/SearchBox";
import { PhonNumberList } from "./page/PhonNumberList";
import CountTest from "./page/CountTest";

function App() {
  return (
    <div>
      <PhonNumberList />
      <CountTest />
    </div>
  );
}

export default App;
