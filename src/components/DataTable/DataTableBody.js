import React from "react";
import { TableBody, TableRow, TableCell } from "@material-ui/core";
import styled from "styled-components";

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
const DataTableBody = ({ columns, rows }) => {
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

export default DataTableBody;
