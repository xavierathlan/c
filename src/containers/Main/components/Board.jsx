import React, { memo } from "react";
import PropTypes from "prop-types";
import { Grid, Skeleton } from "../../../components";
import Card from "./Card";

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data;

  const getValue = (value) =>
    value ? value : <Skeleton variant="text" width={182} height={60} />;

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card
          value={
            cases !== 0
              ? getValue(cases).toLocaleString("pt-BR")
              : getValue(cases)
          }
          label="Total de casos"
          color="#5D78FF"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card
          value={
            todayDeaths !== 0
              ? getValue(todayDeaths).toLocaleString("pt-BR")
              : getValue(todayDeaths)
          }
          label="Óbitos de hoje"
          color="#F7B829"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card
          value={
            todayCases !== 0
              ? getValue(todayCases).toLocaleString("pt-BR")
              : getValue(todayCases)
          }
          label="Casos de hoje"
          color="#000"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card
          value={
            deaths !== 0
              ? getValue(deaths).toLocaleString("pt-BR")
              : getValue(deaths)
          }
          label="Total de óbitos"
          color="#E95078"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card
          value={
            recovered !== 0
              ? getValue(recovered).toLocaleString("pt-BR")
              : getValue(recovered)
          }
          label="Total de recuperados"
          color="#67C887"
        />
      </Grid>
    </Grid>
  );
}

export default memo(Board);
