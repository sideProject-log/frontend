import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import PostHeader from "../components/PostHeader/PostHeader";

const bgColor = ["#5B554E", "#7E7462", "#9F8268", "#837970"];
const randomIndex = Math.floor(Math.random() * bgColor.length);

const Post = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgFile, setImgFile] = useState("");
  const [isContentFull, setIsContentFull] = useState(false);
  const [isSubmit, setSubmit] = useState(false);

  console.log("imgFile", imgFile);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onContentChange = (e) => {
    if (e.target.value.length >= 501) {
      setIsContentFull(true);
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
    };
  };

  const handleSubmit = async () => {
    if (title.length === 0 || content.length === 0) {
      alert("입력하고 글을 발행할 수 있어요!");
      return;
    }
    if (isSubmit) {
      return;
    }

    setSubmit(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/record/post`,
        {
          title,
          content,
          image: imgFile,
          background: bgColor[randomIndex],
          emoji: "😊",
        },
        { withCredentials: true }
      );
      console.log("서버 응답:", response.data);
      navigate("/main");
    } catch (error) {
      console.error("API 호출 오류:", error);
    }
  };

  return (
    <Container>
      <BackGround imgFile={imgFile} $randIdx={randomIndex}>
        <PostHeader onImageClick={saveImgFile} onClick={handleSubmit} />

        <InputField>
          <TitleBox
            placeholder="제목을 입력해주세요."
            value={title}
            onChange={onTitleChange}
          ></TitleBox>
          <ContentBox
            placeholder="텍스트를 입력해주세요."
            value={content}
            onChange={onContentChange}
            isContentFull={isContentFull}
          ></ContentBox>
          <PostBottom>
            <TextNumber>{content.length}/500</TextNumber>
          </PostBottom>
        </InputField>
      </BackGround>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const BackGround = styled.div`
  min-height: 100vh;
  width: 414px;
  ${(props) =>
    props.imgFile
      ? `background-image: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(${props.imgFile});
         background-size: cover;
         background-position: center;
        `
      : `background-color: ${bgColor[props.$randIdx]};`}
`;

const InputField = styled.div`
  display: flex;
  padding: 8px 20px;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

const TitleBox = styled.input`
  width: 320px;
  overflow: hidden;
  color: var(--font-text-lighten, rgba(255, 255, 255, 0.95));
  font-feature-settings: "clig" off, "liga" off;
  text-overflow: ellipsis;

  /* Title/title-extra */
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%; /* 32.5px */
  letter-spacing: -0.3px;
  background: transparent; /* 배경을 투명하게 설정 */
  border: none; /* 테두리를 없앱니다. 필요에 따라 추가할 수 있습니다. */
  height: 40px;
  outline: none; /* 클릭 테두리 제거 */
  &::placeholder {
    color: ${(props) => props.theme.font.text_disabled}; /* 원하는 색상 설정 */
  }
`;

const ContentBox = styled.textarea`
  width: 320px;
  color: var(--font-text-active, rgba(255, 255, 255, 0.85));
  font-feature-settings: "clig" off, "liga" off;
  /* Body/body-large */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 125%; /* 22.5px */
  letter-spacing: -0.3px;
  background: transparent; /* 배경을 투명하게 설정 */
  border: none; /* 테두리를 없앱니다. 필요에 따라 추가할 수 있습니다. */
  height: 260px;
  outline: none; /* 클릭 테두리 제거 */
  &::placeholder {
    color: ${(props) => props.theme.font.text_disabled};
  }

  ${(props) =>
    props.isContentFull &&
    css`
      animation: ${shakeAnimation} 0.5s; /* 흔드는 애니메이션 설정 */
    `}
`;

const PostBottom = styled.div`
  width: 320px;
  display: flex;
  height: 36px;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
`;

const TextNumber = styled.div`
  /* Body/body-small */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 160%; /* 22.4px */
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.font.text_default};
`;

const shakeAnimation = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
`;
