import React from "react";
import styled from "styled-components";
import { ReactComponent as Back } from "../../assets/back_icon.svg";
import { ReactComponent as Photo } from "../../assets/photo_icon.svg";
import { ReactComponent as Check } from "../../assets/check_icon.svg";

const index = ({ onClick }) => {
  return (
    <Container>
      <button>
        <Back />
      </button>

      <HeaderRightBox>
        <button>
          <Photo />
        </button>
        <button onClick={onClick}>
          <Check />
        </button>
      </HeaderRightBox>
    </Container>
  );
};

export default index;

const Container = styled.div`
  display: flex;
  padding: 16px 20px;
  justify-content: space-between;
  align-items: center;
`;

const HeaderRightBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
