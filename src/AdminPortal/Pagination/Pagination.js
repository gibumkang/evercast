import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

const Pagination = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <StyledPagination>
          <div>Rows per page: 10</div>
          <div>1-10 of 13</div>
          <div>Arrows</div>
        </StyledPagination>
      </Grid>
    </Grid>
  );
};

const StyledPagination = styled.div`
  display: flex;
  text-align: right;
  padding: 2.5rem 0rem;
  max-width: 40rem;
  float: right;
  & > div {
    margin-left: auto;
    width: 15rem;
  }
`;

export default Pagination;
