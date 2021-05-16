import React, { useEffect, useState } from "react";
import { Container, Box } from "@material-ui/core";
import styled from "styled-components";
import axios from "axios";

import { Summary, DataTable } from "./components";
import { parseCSV } from "./utils/api-utils";
import {
  creativeHeaders,
  getCreativeData,
  dayHeaders,
  getDayData,
  getSummaryItems,
} from "./utils/data-utils";

const StyledContainer = styled(Container)`
  padding: 0px;
`;

const MainBox = styled(Box)`
  background-color: #f9fafd;
  box-shadow: 0 1px 2px -1px rgb(0 0 0 / 20%);
  padding-bottom: 8%;
`;

function App() {
  // TODO: Convert to use api instead
  const [summaryItems, setSummaryItems] = useState([]);
  const [creativeData, setCreativeData] = useState([]);
  const [dayData, setDayData] = useState([]);

  // Assumption: static files, useEffect is not needed
  useEffect(() => {
    axios.all([axios.get("/rotations.csv"), axios.get("/spots.csv")]).then(
      axios.spread((...responses) => {
        const rotationsData = parseCSV(responses[0].data);
        const spotsData = parseCSV(responses[1].data);

        setSummaryItems(getSummaryItems(spotsData));
        const creativeData = getCreativeData(spotsData);
        setCreativeData(creativeData);

        const dayData = getDayData(rotationsData, spotsData);
        setDayData(dayData);
      })
    );
  }, []);

  return (
    <StyledContainer maxWidth={false}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        mt={5}
        mb={3}
        height="20%"
      >
        <Summary items={summaryItems} />
      </Box>
      <MainBox display="flex" flexDirection="column" alignItems="center">
        <DataTable
          title="By Creative"
          headers={creativeHeaders}
          rows={creativeData}
        />
        <DataTable
          title="By Day - Rotation"
          headers={dayHeaders}
          rows={dayData}
        />
      </MainBox>
    </StyledContainer>
  );
}

export default App;
