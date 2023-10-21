import React from "react";
import styled from "styled-components";
import { ReactComponent as More } from "../../assets/More.svg";
import { ReactComponent as Back } from "../../assets/Back.svg";

const ChangedHeader = ({ type }) => {
  return (
    <Header>
      <div>
        <button>
          <Back />
        </button>
      </div>
      <div>
        {type === "input" ? (
          <>
            <button>사진추가</button>
            <button>발행!</button>
          </>
        ) : (
          <button>
            <More />
          </button>
        )}
      </div>
    </Header>
  );
};

export default ChangedHeader;

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 100vw;
  padding: 2.5rem 1.5rem;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
`;
