import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../../assets/back_icon.svg";
import { ReactComponent as Photo } from "../../assets/photo_icon.svg";
import { ReactComponent as Check } from "../../assets/check_icon.svg";

const PostHeader = ({ onClick }) => {
  const navigate = useNavigate();

  const onBackClick = () => {
    navigate(-1); // 뒤로 가기
  };

  return (
    <Container>
      <button onClick={onBackClick}>
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

export default PostHeader;

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
