import React, { useState } from "react";
import ChangedHeader from "../components/ChangedHeader";
import styled from "styled-components";
import { convertedCardColor } from "../utils/common";
import { ReactComponent as Edit } from "../assets/edit.svg";
import { ReactComponent as StickerOutline } from "../assets/sticker_outline.svg";
import { ReactComponent as StickerColor } from "../assets/sticker_color.svg";
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
  const stickerList = ["😍", "😆", "😋", "😔", "😭", "😡"];
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
  const [showStickers, setShowStickers] = useState(false);
  const [isClickedStickers, setIsClickedStickers] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(isMarked);

  // const convertDate = () => {
  //   // TODO: 날짜 데이터 포맷 변경
  //   return;
  // }

  const onClickBookmark = () => {
    setIsBookmarked((prev) => !prev);
    // TODO: 북마크 추가 API 연결
    // TODO: API 연결 후, 실패 응답시 다시 상태 변경
  };
  const onClickStickers = () => {
    setShowStickers((prev) => !prev);
    setIsClickedStickers((prev) => !prev);
  };

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
          <UserInteractions>
            <div className="user-sympathy">
              {showStickers && (
                <StickerBalloon>
                  {stickerList.map((sticker) => (
                    <div key={sticker} className="sticker">
                      {sticker}
                    </div>
                  ))}
                </StickerBalloon>
              )}
              <button type="button" onClick={onClickStickers}>
                {isClickedStickers ? <StickerColor /> : <StickerOutline />}
              </button>
            </div>
            <div>
              {username === writer ? (
                <Edit />
              ) : (
                <button type="button" onClick={onClickBookmark}>
                  {isBookmarked ? <BookmarkOn /> : <BookmarkOff />}
                </button>
              )}
            </div>
          </UserInteractions>
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
`;

const DetailContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  p {
    color: rgb(255, 255, 255, 0.85);
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

const UserInteractions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .user-sympathy {
    position: relative;
  }
`;

const StickerBalloon = styled.div`
  padding: 1rem 1.5rem;
  /* width: 15rem; */
  height: 5rem;
  position: absolute;
  bottom: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;
  background-color: white;
  border-radius: 8px;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-top-color: white;
    border-bottom: 0;
    margin-left: -45%;
    margin-bottom: -7px;
  }

  .sticker {
    width: 2rem;
    height: 2rem;
    font-size: 2rem;
  }
`;
