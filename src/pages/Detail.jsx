import React from "react";
import ChangedHeader from "../components/ChangedHeader";
import styled from "styled-components";
import { convertedCardColor } from "../utils/common";
// import { useParams } from "react-router-dom";

const dummy = {
  data: {
    title: "테오의 스프린트 16기",
    content:
      "오늘은 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. ",
    writer: "준",
    isMarked: false,
    createdAt: "2023-10-22",
    image: null,
    backgroundColor: "#7E7462",
  },
};

const Detail = () => {
  const {
    data: {
      title,
      content,
      writer,
      createdAt,
      isMarked,
      image,
      backgroundColor,
    },
  } = dummy;

  return (
    <Wrapper>
      <ChangedHeader type="detail" />
      {image === null ? (
        <BackgroundCard
          $backgroundColor={convertedCardColor[backgroundColor]}
        />
      ) : (
        "이미지"
      )}
      <DetailWrapper>
        <DetailContainer>
          <DetailContents>
            <div>
              <p className="record-title">{title}</p>
              <p className="record-content">{content}</p>
            </div>
            <div className="record-info">
              <p>{`by ${writer}`}</p>
              <p>{createdAt}</p>
            </div>
          </DetailContents>
          <div className="user-interactions">
            <div>이모지!</div>
            <div>{isMarked ? "북마크" : "노북마크"}</div>
          </div>
        </DetailContainer>
      </DetailWrapper>
    </Wrapper>
  );
};

export default Detail;

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
`;
const BackgroundCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.$backgroundColor};
  z-index: 1;
`;

const DetailWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

const DetailContainer = styled.div`
  padding: 1rem 2.5rem;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  .user-interactions {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const DetailContents = styled.div`
  p {
    color: white;
    font-weight: 400;
    font-size: 1.8rem;
  }

  .record-title {
    font-size: 2.5rem;
    font-weight: bold;
  }
  .record-info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    p {
      font-size: 1.5rem;
      font-weight: 200;
    }
  }
`;

/*
7E7462 -> AB9F89
5B554E -> 7D7771
9F8268 -> C1A68D
837970 -> B6A89A
*/
