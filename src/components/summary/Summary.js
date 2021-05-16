import React from "react";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";

import { SummaryItem } from "./SummaryItem";

export const Summary = ({ items }) => {
  const totalGrid = 12;
  const slice = Math.floor(totalGrid / items.length);

  return (
    <Grid container item direction="row" sm={8}>
      {items.map((item) => {
        return (
          <Grid
            container
            item
            direction="column"
            alignItems="center"
            key={item.name}
            xs={slice}
          >
            <SummaryItem item={item} />
          </Grid>
        );
      })}
    </Grid>
  );
};

Summary.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
};
