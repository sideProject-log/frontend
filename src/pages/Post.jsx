import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import PostHeader from "../components/PostHeader/PostHeader";

const bgColor = ["#5B554E", "#7E7462", "#9F8268", "#837970"];
const randomIndex = Math.floor(Math.random() * bgColor.length);

const Post = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmit, setSubmit] = useState(false);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async () => {
    if (isSubmit) {
      return;
    }

    setSubmit(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/record/post",
        { title, content, background: bgColor[randomIndex], emoji: "😊" },
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
      <BackGround randIdx={randomIndex}>
        <PostHeader onClick={handleSubmit} />

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
  max-width: 360px;
  justify-content: center;
`;

const BackGround = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => bgColor[props.randIdx]};
  padding-top: 50px;
`;

const InputField = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const TitleBox = styled.input`
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
  width: 100%; /* 너비를 100%로 설정하여 부모 요소에 맞춥니다. */
  height: 40px;
  outline: none; /* 클릭 테두리 제거 */
  &::placeholder {
    color: ${(props) => props.theme.font.text_disabled}; /* 원하는 색상 설정 */
  }
`;

const ContentBox = styled.textarea`
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
  width: 100%; /* 너비를 100%로 설정하여 부모 요소에 맞춥니다. */
  height: 260px;
  outline: none; /* 클릭 테두리 제거 */
  &::placeholder {
    color: ${(props) => props.theme.font.text_disabled};
  }
`;

const PostBottom = styled.div`
  display: flex;
  width: 320px;
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
