import React, { useContext } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import styled from "styled-components";
import * as GS from "../../styles/global";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ReplayIcon from "@material-ui/icons/Replay";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { SlideyboyContext } from "../../hooks/context";

const ItemView = () => {
  const { slideyboy, setSlideyboy, assignment, setAssignment } = useContext(SlideyboyContext);

  const toggleNext = () => {
    setAssignment(true);
  };

  const togglePrev = () => {
    setAssignment(false);
    setSlideyboy(false);
  };

  return (
    <View>
      <div className="breadcrumb">Room Credits / Netflix Studios, LLC</div>
      <Header>
        <div>
          <h1>
            <ArrowBackIcon className="back-arrow" onClick={() => togglePrev()} /> Netflix Studios, LLC
          </h1>
        </div>
        <div>
          View <VisibilityIcon className="icon" />
        </div>
      </Header>
      <ItemContainer>
        <div>
          Total: 200 <strong>Unassigned: 20</strong>
        </div>
        <div>
          <GS.ButtonWithIcon onClick={() => toggleNext()}>
            Assign Credit <PermIdentityIcon />
          </GS.ButtonWithIcon>
          <div>
            Return unassigned credits icon <ReplayIcon className="icon" />
          </div>
        </div>
      </ItemContainer>
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
  .icon {
    width: 20px;
    position: relative;
    top: 6px;
  }
`;

const ItemContainer = styled.div`
  border-top: 0.1rem solid #ccc;
  padding: 2rem 0rem;
  border-bottom: 0.1rem solid #ccc;
  display: flex;
  & > div {
    flex: 1;
  }
`;

export default ItemView;
