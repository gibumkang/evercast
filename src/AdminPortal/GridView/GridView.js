import React, { useState } from "react";
import Pagination from "../Pagination/Pagination";
import styled from "styled-components";
import Item from "./Item";

const GridView = () => {
  return (
    <Container>
      <Item company={"Company"} billing="Billing email" credits="Total credits" unassigned="Unassigned" />
      <Item company="Netflix Studios, LLC" billing="stranger.thing@netflix.com" credits="200" unassigned="20" />
      <Item company="The Walt Disney Company" billing="mickey.mouse@disney.com" credits="150" unassigned="0" />
      <Item company="MTI" billing="some.designer@mti.com" credits="50" unassigned="0" />
      <Item company="Apple Inc." billing="tim.cook@apple.com" credits="50" unassigned="2" />
      <Item company="Epic Games Inc" billing="zombie.madness@epicgames.com" credits="120" unassigned="10" />
      <Item company="Netflix Studios, LLC" billing="stranger.thing@netflix.com" credits="200" unassigned="20" />
      <Item company="The Walt Disney Company" billing="mickey.mouse@disney.com" credits="150" unassigned="0" />
      <Item company="MTI" billing="some.designer@mti.com" credits="50" unassigned="0" />
      <Item company="Apple Inc." billing="tim.cook@apple.com" credits="50" unassigned="2" />
      <Item company="Epic Games Inc" billing="zombie.madness@epicgames.com" credits="120" unassigned="10" />
      <Pagination />
    </Container>
  );
};

const Container = styled.div`
  padding: 5rem 0rem;
`;

export default GridView;
