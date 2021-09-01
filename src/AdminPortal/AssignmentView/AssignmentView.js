import React, { useContext } from "react";
import styled from "styled-components";
import * as GS from "../../styles/global";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { SlideyboyContext } from "../../hooks/context";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

const AssignmentView = () => {
  const { slideyboy, setSlideyboy, assignment, setAssignment } = useContext(SlideyboyContext);

  const togglePrev = () => {
    setAssignment(false);
  };
  return (
    <View>
      <div className="breadcrumb">Room Credits / Netflix Studios, LLC / Assignment</div>
      <Header>
        <div>
          <h1>
            <ArrowBackIcon className="back-arrow" onClick={() => togglePrev()} /> Assignment
          </h1>
        </div>
        <div>
          Revoke <DeleteOutlineOutlinedIcon />
        </div>
      </Header>
      <MainView>
        <h2>Credit Information</h2>
        <div className="flex">
          <div>
            <h3>Assigned To</h3>
            <div>user.zero@netflix.com</div>
          </div>
          <div>Re-assign</div>
        </div>
        <div className="info">
          <h3>Date Issued</h3>
          <div>Oct 24, 2021</div>
        </div>
        <div className="info">
          <h3>Last Used</h3>
          <div>Not Used</div>
        </div>
      </MainView>
    </View>
  );
};

const Header = styled.header`
  display: flex;
  align-items: center;
  & > div:nth-child(1) {
    svg {
      position: relative;
      bottom: 0.3rem;
      &:hover {
        cursor: pointer;
      }
    }
  }
  & > div:nth-child(2) {
    margin-left: auto;
    svg {
      position: relative;
      font-size: 2rem;
      top: 0.5rem;
    }
  }
`;

const View = styled.div`
  padding: 6rem;
  background: #fff;
  height: 100vh;
  .breadcrumb {
    text-transform: uppercase;
  }
  box-shadow: -10px 0px 10px 1px #ccc;
  .back-arrow {
    position: relative;
    top: 2px;
  }
`;

const MainView = styled.div`
  border-top: 0.1rem solid #ccc;
  padding: 0.5rem 0rem;
  .flex {
    display: flex;
    padding: 1rem 0rem;
    & > div {
      flex: 1;
    }
  }
  h3 {
    text-transform: uppercase;
    padding: 0;
    margin: 0;
  }
  .info {
    padding-bottom: 1rem;
  }
`;

export default AssignmentView;
