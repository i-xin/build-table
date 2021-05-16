import React from "react";
import { TableHead, TableRow, TableCell } from "@material-ui/core";
import styled from "styled-components";
import PropTypes from "prop-types";

const LightTableHead = styled(TableHead)`
  th:first-child {
    padding-left: 24px;
    text-align: left;
  }

  th {
    color: rgb(147, 143, 167);
    font-size: 0.984rem;
    text-align: right;
  }
`;

export const DataTableHead = ({ headers }) => {
  return (
    <LightTableHead>
      <TableRow>
        {headers.map((header) => (
          <TableCell key={header.key}>{header.value}</TableCell>
        ))}
      </TableRow>
    </LightTableHead>
  );
};

DataTableHead.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
};
