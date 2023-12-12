import React, { useEffect, useState } from "react";
import DetailHeader from "../components/DetailHeader";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { registerComment } from "../apis/comment";
import { getRecord } from "../apis/record";
import { registerBookmark, removeBookmark } from "../apis/bookmark";
import { bgColor } from "../const/bgColor";
import { convertDate } from "../utils/common";
import { ReactComponent as Edit } from "../assets/edit.svg";
import { ReactComponent as StickerOutline } from "../assets/sticker_outline.svg";
import { ReactComponent as StickerColor } from "../assets/sticker_color.svg";
import { ReactComponent as BookmarkOn } from "../assets/bookmark_on.svg";
import { ReactComponent as BookmarkOff } from "../assets/bookmark_off.svg";
import DefaultProfileImage from "../assets/profile_none.svg";
import LoadingSpinner from "../components/LoadingSpinner";
import axios from "axios";
import { ContentBox, PostBottom, TextNumber, TitleBox } from "./Post";
import PostHeader from "../components/PostHeader/PostHeader";
import { useToast } from "../hooks/useToast";
import ModalPortal from "../components/ModalPortal";
import UserCommentListModal from "../components/UserCommentListModal";

const Detail = () => {
  const navigate = useNavigate();
  const { recordId } = useParams();
  const { fireToast } = useToast();

  const stickerList = ["😍", "😆", "😋", "😔", "😭", "😡"];
  const [user, setUser] = useState({});
  const [record, setRecord] = useState(null);
  const [showStickers, setShowStickers] = useState(false);
  const [isClickedStickers, setIsClickedStickers] = useState(false);
  const [bookmark, setBookmark] = useState(null);
  const [userCommentList, setUserCommentList] = useState(null);
  const [userCommentInfoList, setUserCommentInfoList] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(-1);
  const [onUpdate, setOnUpdate] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgFile, setImgFile] = useState("");
  const [isContentFull, setIsContentFull] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const sortUserCommentInfoList = (a, b) => {
    if (a.userId < b.userId) return -1;
    else if (a.userId > b.userId) return 1;
    else {
      const idx1 = stickerList.indexOf(a.comment);
      const idx2 = stickerList.indexOf(b.comment);
      return idx1 - idx2;
    }
  };
  const toggleStickersState = () => {
    setShowStickers((prev) => !prev);
    setIsClickedStickers((prev) => !prev);
  };
  const onClickSticker = async (e) => {
    const clickedEmoji = e.currentTarget.children[0].innerText;
    if (userCommentList && userCommentList.includes(clickedEmoji) === false) {
      setUserCommentList([...userCommentList, clickedEmoji]);
    }
    const response = await registerComment(recordId, clickedEmoji);
    console.log(response);

    const newComment = {
      id:
        userCommentInfoList.reduce((acc = -1, cur) =>
          acc > cur.id ? acc : cur.id
        ) + 1,
      comment: clickedEmoji,
      userId: user.id,
      username: user.username,
      profile: user.profile,
    };
    setUserCommentInfoList((prev) =>
      [...prev, newComment].sort(sortUserCommentInfoList)
    );
    toggleStickersState();
  };

  const onClickBookmark = async () => {
    if (bookmark === null) {
      const response = await registerBookmark(recordId);
      setBookmark(response.data.newBookmark.id);
    } else {
      const response = await removeBookmark(recordId);
      if (response.data.status === "ok") setBookmark(null);
    }
  };
  const onClickStickers = () => {
    toggleStickersState();
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onContentChange = (e) => {
    if (e.target.value.length >= 501) {
      setIsContentFull(true);
      fireToast({
        content: "500자 이상 쓸 수 없습니다.",
        bottom: "50",
      });
    } else {
      setIsContentFull(false);
      setContent(e.target.value);
    }
  };

  // 이미지 업로드 input의 onChange
  const saveImgFile = (e) => {
    const { files } = e.target;

    if (!files || !files[0]) return;

    const uploadImage = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(uploadImage);
    reader.onloadend = () => {
      setImgFile(reader.result);
      setRecord((prev) => ({ ...prev, image: reader.result }));
    };
  };

  const handleUpdate = () => {
    const updateRecord = async () => {
      try {
        const res = await axios.patch(
          `${process.env.REACT_APP_API_URL}/api/record/edit`,
          {
            postId: recordId,
            title,
            content,
            // image: imgFile ?? "",
          },
          { withCredentials: true }
        );

        if (res.status === 201) {
          setRecord(res.data);
          fireToast({
            content: "수정이 완료되었습니다.",
            bottom: "50",
          });
        }
      } catch (error) {
        console.error("API 호출 오류:", error);
      }
    };

    updateRecord();
    setOnUpdate((prev) => !prev);
  };

  const fetchRecord = async () => {
    try {
      const userResponse = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/isLogin`,
        { withCredentials: true }
      );

      const { data } = await getRecord(recordId);
      const { bookmarkId, commentList, commentInfoList, title, content } =
        data.record;

      setCurrentUserId(userResponse.data.user.id);
      setRecord(data.record);
      setBookmark(bookmarkId);
      setUserCommentList(commentList);
      setUserCommentInfoList(commentInfoList.sort(sortUserCommentInfoList));
      setTitle(title);
      setContent(content);
    } catch (error) {
      console.error("API 호출 오류:", error);
    }
  };

  useEffect(() => {
    fetchRecord();
  }, [recordId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get(
          `${process.env.REACT_APP_API_URL}/auth/isLogin`,
          { withCredentials: true }
        );
        const data = userResponse.data.user;

        setUser(data);

        if (!userResponse.data.result) {
          console.log("유저 정보 없음");
          // window.location.href = "/";
        }
      } catch (error) {
        console.error("API 호출 오류:", error);
      }
    };

    fetchData();
  }, []);

  if (record === null) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <Wrapper>
      {!onUpdate ? (
        <DetailHeader
          postId={record.id}
          isCurrentUser={currentUserId === record.user_id}
          onUpdate={onUpdate}
          setOnUpdate={setOnUpdate}
          type="detail"
        />
      ) : (
        <PostHeader onImageClick={saveImgFile} onClick={handleUpdate} />
      )}
      {record.image === null ||
      record.image === undefined ||
      record.image.length === 0 ? (
        <BackgroundCard
          $background={
            bgColor[record.background] ? bgColor[record.background] : "#5B554E"
          }
        />
      ) : (
        <BackgroundImageContainer>
          <BackgroundImage src={record.image} alt="background-image" />
        </BackgroundImageContainer>
      )}
      <DetailWrapper>
        <DetailContainer>
          <DetailContents>
            <div className="record-main">
              {!onUpdate ? (
                <>
                  <p className="record-title">{record.title}</p>
                  <pre className="record-content">{record.content}</pre>
                </>
              ) : (
                <>
                  <TitleBox
                    placeholder="제목을 입력해주세요."
                    value={title}
                    onChange={onTitleChange}
                  />
                  <ContentBox
                    placeholder="텍스트를 입력해주세요."
                    value={content}
                    onChange={onContentChange}
                    isContentFull={isContentFull}
                  />
                  <PostBottom>
                    <TextNumber>{content.length}/500</TextNumber>
                  </PostBottom>
                </>
              )}
            </div>
            <div className="record-info">
              <div
                className="user-info"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/${record.user_id}`);
                }}
              >
                {record.profileImage !==
                "http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_640x640.jpg" ? (
                  <ProfileImage
                    src={record.profileImage}
                    alt="user-profile-image"
                  />
                ) : (
                  <ProfileImage
                    src={DefaultProfileImage}
                    alt="user-profile-image"
                  />
                )}
                <p>{`by ${record.writer}`}</p>
              </div>
              <p>{convertDate(record.created_at)}</p>
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
                {userCommentList &&
                  userCommentList.map((comment, index) => (
                    <CommentSticker
                      key={comment}
                      $length={userCommentList.length}
                      $index={index}
                      onClick={() => setShowModal((prev) => !prev)}
                    >
                      {comment}
                    </CommentSticker>
                  ))}
              </div>
            </div>
            <div>
              {user.username === record.writer ? (
                <Edit />
              ) : (
                <button type="button" onClick={onClickBookmark}>
                  {bookmark !== null ? <BookmarkOn /> : <BookmarkOff />}
                </button>
              )}
            </div>
          </UserInteractions>
        </DetailContainer>
      </DetailWrapper>
      {showModal && (
        <ModalPortal>
          <UserCommentListModal
            onClose={() => setShowModal(false)}
            comments={userCommentInfoList}
          />
        </ModalPortal>
      )}
    </Wrapper>
  );
};

export default Detail;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const BackgroundCard = styled.div`
  position: absolute;
  width: 414px;
  height: 100dvh;
  background-color: ${(props) => props.$background};
  z-index: -1;
`;

const BackgroundImageContainer = styled.div`
  background-position: center;
`;

const BackgroundImage = styled.img`
  width: 414px;
  height: 100dvh;
  object-fit: cover;
  filter: brightness(60%);
`;

const DetailWrapper = styled.div`
  position: absolute;
  padding-top: 68px;
`;

const DetailContainer = styled.div`
  padding: 8px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 90px;
`;

const DetailContents = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 470px;
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
    width: 320px;
    ${(props) => props.theme.font["title-extra"]};
  }
  .record-content {
    width: 320px;
    height: 350px;
    ${(props) => props.theme.font["body-large"]};
  }
  .record-info {
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
  left: ${(props) => props.$index * 2}rem;
  background-color: white;
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 250%;
  border-radius: 20px;
  box-shadow: 2px 0px 2px 0px rgba(0, 0, 0, 0.25);
  z-index: ${(props) => props.$length - props.$index + 10};
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
