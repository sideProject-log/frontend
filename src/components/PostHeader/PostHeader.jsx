import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../../assets/back_icon.svg";
import { ReactComponent as Check } from "../../assets/check_icon.svg";
import FileInput from "../FileInput";

const PostHeader = ({ onClick, onImageClick }) => {
  const navigate = useNavigate();

  const onBackClick = () => {
    navigate(`/main`); // 뒤로 가기
  };

  return (
    <FlexCenter>
      <div>
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
      </div>
    </FlexCenter>
  );
};

export default PostHeader;

const FlexCenter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const Container = styled.div`
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
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
