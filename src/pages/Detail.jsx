import React, { useState } from "react";
import ChangedHeader from "../components/ChangedHeader";
import styled from "styled-components";
import { convertedCardColor } from "../utils/common";
import { ReactComponent as Edit } from "../assets/edit.svg";
import { ReactComponent as StickerOutline } from "../assets/sticker_outline.svg";
import { ReactComponent as StickerColor } from "../assets/sticker_color.svg";
import { ReactComponent as BookmarkOn } from "../assets/bookmark_on.svg";
import { ReactComponent as BookmarkOff } from "../assets/bookmark_off.svg";
import testProfileImage from "../assets/test_profile.jpg";
import Image1 from "../assets/dummy_images/Dummy_Image_1.jpg";

const username = "";
// const dummy = {
//   data: {
//     title: "테오의 스프린트 16기",
//     content:
//       "오늘은 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. ",
//     writer: "준",
//     isMarked: false,
//     createdAt: "2023-10-22",
//     image: null,
//     backgroundColor: "#7E7462",
//   },
// };
const dummy = {
  data: {
    title: "테오의 스프린트 16기",
    content:
      "오늘은 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. 어쩌구 저쩌구.. ",
    writer: "준",
    isMarked: false,
    createdAt: "2023-10-22",
    image: Image1,
    backgroundColor: null,
    commentList: ["😍", "😆", "😋"],
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
      commentList,
    },
  } = dummy;
  const [showStickers, setShowStickers] = useState(false);
  const [isClickedStickers, setIsClickedStickers] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(isMarked);
  const [userCommentList, setUserCommentList] = useState(commentList);

  // const convertDate = () => {
  //   // TODO: 날짜 데이터 포맷 변경
  //   return;
  // }

  const toggleStickersState = () => {
    setShowStickers((prev) => !prev);
    setIsClickedStickers((prev) => !prev);
  };
  const onClickSticker = (e) => {
    const clickedEmoji = e.currentTarget.children[0].innerText;
    if (userCommentList.includes(clickedEmoji) === false) {
      setUserCommentList([...userCommentList, clickedEmoji]);
      toggleStickersState();
    }
    // TODO: 이모지 댓글 API 요청
  };
  const onClickBookmark = () => {
    setIsBookmarked((prev) => !prev);
    // TODO: 북마크 추가 API 연결
    // TODO: API 연결 후, 실패 응답시 다시 상태 변경
  };
  const onClickStickers = () => {
    toggleStickersState();
  };

  return (
    <Wrapper>
      <ChangedHeader type="detail" />
      {image === null ? (
        <BackgroundCard
          $backgroundColor={convertedCardColor[backgroundColor]}
        />
      ) : (
        <BackgroundImageContainer>
          <BackgroundImage src={image} alt="background-image" />
        </BackgroundImageContainer>
      )}
      <DetailWrapper>
        <DetailContainer>
          <DetailContents>
            <div className="record-main">
              <p className="record-title">{title}</p>
              <p className="record-content">{content}</p>
            </div>
            <div className="record-info">
              <div className="user-info">
                {/* TODO: 프로필 사진 클릭시 해당 유저의 마이 페이지로 이동 */}
                <a href={`http://localhost:3000/my/userId`}>
                  <ProfileImage
                    src={testProfileImage}
                    alt="user-profile-image"
                  />
                </a>
                <p>{`by ${writer}`}</p>
              </div>
              <p>{createdAt}</p>
            </div>
          </DetailContents>
          <UserInteractions>
            <div className="user-sympathy">
              {showStickers && (
                <StickerBalloon>
                  {stickerList.map((sticker) => (
                    <button
                      key={sticker}
                      className="sticker"
                      type="button"
                      onClick={onClickSticker}
                    >
                      <p className="sticker-emoji">{sticker}</p>
                    </button>
                  ))}
                </StickerBalloon>
              )}
              <button type="button" onClick={onClickStickers}>
                {isClickedStickers ? <StickerColor /> : <StickerOutline />}
              </button>
              <div className="comment-list">
                {userCommentList.map((comment, index) => (
                  <CommentSticker
                    key={comment}
                    len={userCommentList.length}
                    idx={index}
                  >
                    {comment}
                  </CommentSticker>
                ))}
              </div>
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

const BackgroundImageContainer = styled.div`
  background-position: center;
`;

const BackgroundImage = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  filter: brightness(60%);
`;

const DetailWrapper = styled.div`
  position: absolute;
  padding-top: 4rem;
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
  padding: 0 2.5rem;
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
    height: 280px;
    line-height: 130%;
    p {
      /* word-wrap: break-word; */
    }
  }
  .record-info {
    padding: 0 0.5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 1.5rem;
      font-weight: 300;
      color: rgb(255, 255, 255, 0.45);
    }
  }
  .user-info {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`;

const UserInteractions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .user-sympathy {
    position: relative;
    display: flex;
    align-items: center;
  }
  .comment-list {
    position: relative;
    display: flex;
  }
`;

const CommentSticker = styled.div`
  position: absolute;
  top: -1.3rem;
  left: ${(props) => props.idx * 2}rem;
  background-color: white;
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 250%;
  border-radius: 20px;
  box-shadow: 2px 0px 2px 0px rgba(0, 0, 0, 0.25);
  z-index: ${(props) => props.len - props.idx + 10};
`;

const StickerBalloon = styled.div`
  padding: 1rem;
  /* width: 15rem; */
  height: 5rem;
  position: absolute;
  bottom: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
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
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sticker-emoji {
    font-size: 24px;
    text-align: center;
  }
`;

const ProfileImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 20px;
`;
