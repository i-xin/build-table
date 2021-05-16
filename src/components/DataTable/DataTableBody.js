import React from "react";
import { TableBody, TableRow, TableCell } from "@material-ui/core";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledTableBody = styled(TableBody)`
  td:first-child {
    padding-left: 24px;
    text-align: left;
  }

  td {
    font-size: 0.984rem;
    text-align: right;
  }
`;
export const DataTableBody = ({ columns, rows }) => {
  return (
    <StyledTableBody>
      {rows.map((row) => {
        return (
          <TableRow key={row.key}>
            {columns.map((column) => {
              return <TableCell key={column}>{row[column]}</TableCell>;
            })}
          </TableRow>
        );
      })}
    </StyledTableBody>
  );
};

DataTableBody.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};
