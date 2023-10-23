import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as BookMarkOn } from "../../assets/bookmark_on.svg";
import { ReactComponent as BookMarkOff } from "../../assets/bookmark_off.svg";
import axios from "axios";

const BookMark = ({ isMarked, recordId }) => {
  const [markState, setMarkState] = useState(isMarked);
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    setMarkState(isMarked);
  }, [isMarked]);

  console.log("mark", recordId, isMarked, markState);

  const onRegisterBookmark = async (e) => {
    e.stopPropagation();

    if (isSubmit) {
      return;
    }

    setIsSubmit(true);
    console.log("북마크 등록 중");
    const apiUrl = "http://localhost:8080/api/bookmark/register";

    try {
      const response = await axios.post(
        apiUrl,
        { recordId: recordId },
        { withCredentials: true }
      );
      console.log("서버 응답:", response.data);
    } catch (error) {
      console.error("API 호출 오류:", error);
    }

    setMarkState(!markState); // 반대로 설정
    setIsSubmit(false);
  };

  const onDeleteBookmark = async (e) => {
    e.stopPropagation();

    if (isSubmit) {
      return;
    }

    setIsSubmit(true);

    console.log("북마크 삭제 중");

    const apiUrl = `http://localhost:8080/api/bookmark/delete/${recordId}`;
    try {
      const response = await axios.delete(apiUrl, { withCredentials: true });
      console.log("서버 응답:", response.data);
    } catch (error) {
      console.error("API 호출 오류:", error);
    }

    setMarkState(!markState); // 반대로 설정
    setIsSubmit(false);
  };

  return (
    <>
      {markState ? (
        <Marked onClick={(e) => onDeleteBookmark(e)}>
          <BookMarkOn />
        </Marked>
      ) : (
        <UnMarked onClick={(e) => onRegisterBookmark(e)}>
          <BookMarkOff />
        </UnMarked>
      )}
    </>
  );
};

export default BookMark;

const Marked = styled.div`
  display: inline-flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: var(--background-bg-input, #fafafa);
  border-radius: 999px;
  cursor: pointer;
  z-index: 10;
`;

const UnMarked = styled.div`
  display: inline-flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: var(--font-text-disabled, rgba(255, 255, 255, 0.25));
  border-radius: 999px;
  cursor: pointer;
  z-index: 10;
`;
