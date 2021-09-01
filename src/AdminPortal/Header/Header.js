import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import Logo from "../../Static/images/logo-evercast.svg";

const Header = () => {
  return (
    <StyledHeader>
      <Grid container>
        <Grid item xs={2}>
          <img src={Logo} />
        </Grid>
        <Grid item xs={8} className="links">
          <ul>
            <li>
              <a href="#">Clients</a>
            </li>
            <li>
              <a href="#" className="active">
                Credits
              </a>
            </li>
            <li>
              <a href="#">Accounts</a>
            </li>
            <li>
              <a href="#">SSO</a>
            </li>
            <li>
              <a href="#">Alerts</a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={2}>
          Profile
        </Grid>
      </Grid>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  background: #000;
  padding: 3rem;
  position: relative;
  z-index: 10;
  .links {
    ul {
      text-align: center;
      display: flex;
      justify-content: center;
      li {
        color: #fff;
        display: inline;
        padding: 0.5rem 2rem;
        a {
          color: #fff;
          &.active {
            border-bottom: 0.2rem solid #fc2c03;
            font-weight: bold;
          }
        }
      }
    }
  }
`;

export default Header;
