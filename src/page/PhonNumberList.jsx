import { Grid } from "@mui/material";
import React from "react";
import { ContactForm } from "../components/ContactForm";
import { SearchBox } from "../components/SearchBox";
import { ContacList } from "../components/ContacList";

export const PhonNumberList = () => {
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
};
