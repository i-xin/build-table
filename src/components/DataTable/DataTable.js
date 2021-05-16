import React from "react";
import {
  Box,
  Paper,
  Typography,
  TableContainer,
  Table,
} from "@material-ui/core";
import styled from "styled-components";
import PropTypes from "prop-types";

import { DataTableHead } from "./DataTableHead";
import { DataTableBody } from "./DataTableBody";

const TablePaper = styled(Paper)`
  width: 80%;
  margin: 40px 0 10px 0;

  && {
    box-shadow: 0px 2px 20px -1px rgb(0 0 0 / 20%);
  }
`;

export const DataTable = ({ title, headers, rows }) => {
  const columns = headers.map((header) => header.key);

  return (
    <TablePaper>
      <Box m={3}>
        <Typography variant="h5">{title}</Typography>
      </Box>
      <TableContainer>
        <Table>
          <DataTableHead headers={headers}></DataTableHead>
          <DataTableBody columns={columns} rows={rows}></DataTableBody>
        </Table>
      </TableContainer>
    </TablePaper>
  );
};

DataTable.propTypes = {
  title: PropTypes.string.isRequired,
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};
