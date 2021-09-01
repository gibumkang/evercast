import React from "react";
import GetAppIcon from "@material-ui/icons/GetApp";
import SearchIcon from "@material-ui/icons/Search";
import { Box, Grid } from "@material-ui/core";
import styled from "styled-components";
import * as GS from "../../styles/global";

const Filter = () => {
  return (
    <StyledFilter>
      <Grid container>
        <Grid item xs={4}>
          <div className="flex">
            <input placeholder="Filter" />
            <div className="glass">
              <SearchIcon />
            </div>
          </div>
        </Grid>
        <Grid item xs={8}>
          <GS.ExportButton className="export">
            Export <GetAppIcon />
          </GS.ExportButton>
        </Grid>
      </Grid>
    </StyledFilter>
  );
};

const StyledFilter = styled(Box)`
  .flex {
    display: flex;
    height: 4rem;
    input {
      border: 0;
      width: 100%;
      height: auto;
      padding: 0.25rem 0.75rem;
      border-bottom: 0.1rem solid #ccc;
    }
    .glass {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0rem 1.5rem;
      border: 0.1rem solid #ccc;
    }
  }
  .export {
    float: right;
  }
`;

export default Filter;
