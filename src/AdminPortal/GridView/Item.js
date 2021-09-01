import React, { useState, useContext } from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { SlideyboyContext } from "../../hooks/context";

const Item = (props) => {
  const { company, billing, credits, unassigned } = props;
  const { slideyboy, setSlideyboy } = useContext(SlideyboyContext);

  const toggleSlideyboy = () => {
    setSlideyboy(true);
  };

  return (
    <StyledItem container onClick={() => toggleSlideyboy()}>
      <Grid item xs={3}>
        {company}
      </Grid>
      <Grid item xs={3}>
        {billing}
      </Grid>
      <Grid item xs={3} className="right">
        {credits}
      </Grid>
      <Grid item xs={3} className="right">
        {unassigned}
      </Grid>
    </StyledItem>
  );
};

const StyledItem = styled(Grid)`
  padding: 2rem 0rem;
  border-bottom: 0.1rem solid #ddd;
  .right {
    text-align: right;
  }
  &:hover {
    cursor: pointer;
  }
`;

export default Item;
