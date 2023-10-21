import React from "react";
import ChangedHeader from "../components/ChangedHeader";
import styled from "styled-components";
import { convertedCardColor } from "../utils/common";
import { ReactComponent as Edit } from "../assets/edit.svg";
import { ReactComponent as StickerOutline } from "../assets/sticker_outline.svg";
import { ReactComponent as BookmarkOn } from "../assets/bookmark_on.svg";
import { ReactComponent as BookmarkOff } from "../assets/bookmark_off.svg";
// import { useParams } from "react-router-dom";

const username = "";
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

  // const convertDate = () => {
  //   // TODO: 날짜 데이터 포맷 변경
  //   return;
  // }

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
            <div className="record-main">
              <p className="record-title">{title}</p>
              <p className="record-content">{content}</p>
            </div>
            <div className="record-info">
              <p>{`by ${writer}`}</p>
              <p>{createdAt}</p>
            </div>
          </DetailContents>
          <div className="user-interactions">
            <div>
              <StickerOutline />
            </div>
            <div>
              {username === writer ? (
                <Edit />
              ) : (
                <div>{isMarked ? <BookmarkOn /> : <BookmarkOff />}</div>
              )}
            </div>
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
  max-width: 80rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 5;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  display: flex;
  flex-direction: column;
  gap: 4rem;
  p {
    color: rgb(255, 255, 255, 0.85);
    font-family: "Pretendard Variable";
    font-weight: 300;
    font-size: 1.8rem;
  }

  .record-main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .record-title {
    font-size: 2.5rem;
    font-weight: 600;
    color: rgb(255, 255, 255, 0.95);
  }
  .record-content {
    min-height: 20rem;
    p {
      word-wrap: break-word;
    }
  }
  .record-info {
    padding: 0 0.5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;

    p {
      font-size: 1.5rem;
      font-weight: 300;
      color: rgb(255, 255, 255, 0.45);
    }
  }
`;
