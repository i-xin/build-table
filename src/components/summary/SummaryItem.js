import React from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";
import PropTypes from "prop-types";

const TitleTypography = styled(Typography)`
  && {
    font-size: 0.984rem;
  }
`;

const SummaryTypography = styled(Typography)`
  && {
    font-size: 1.688rem;
    font-weight: 500;
  }
`;

const SummaryItem = ({ item }) => {
  return (
    <>
      <TitleTypography variant="subtitle1" className="titleName">
        {item.name}
      </TitleTypography>
      <SummaryTypography variant="subtitle1">{item.value}</SummaryTypography>
    </>
  );
};

export default SummaryItem;

SummaryItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};
