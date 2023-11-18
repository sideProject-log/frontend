import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../../assets/back_icon.svg";
import { ReactComponent as Check } from "../../assets/check_icon.svg";
import FileInput from "../FileInput";

const PostHeader = ({ onClick, onImageClick }) => {
  const navigate = useNavigate();

  const onBackClick = () => {
    navigate(-1); // 뒤로 가기
  };

  return (
    <Container>
      <Wrapper>
        <button style={{ padding: 0 }} onClick={onBackClick}>
          <Back />
        </button>

        <HeaderRightBox>
          <FileInput onChange={onImageClick} />
          <button style={{ padding: 0 }} onClick={onClick}>
            <Check />
          </button>
        </HeaderRightBox>
      </Wrapper>
    </Container>
  );
};

export default PostHeader;

const Container = styled.div`
  display: flex;

  justify-content: center;
`;

const HeaderRightBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Wrapper = styled.div`
  width: 320px;
  padding: 16px 0px;
  height: 68px;
  display: flex;
  justify-content: space-between;
`;
