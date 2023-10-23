import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as BookMarkOn } from "../../assets/bookmark_on.svg";
import { ReactComponent as BookMarkOff } from "../../assets/bookmark_off.svg";
import axios from "axios";

const BookMark = ({ isMarked, recordId }) => {
  const [markState, setMarkState] = useState(isMarked);
  const [isSubmit, setIsSubmit] = useState(false);
  console.log("mak", recordId, markState);

  const toggleBookmark = async (e) => {
    e.stopPropagation();

    if (isSubmit) {
      return;
    }

    setIsSubmit(true);

    console.log("북마크 등록 중");
    let apiUrl = "http://localhost:8080/api/bookmark/register";
    if (markState) {
      apiUrl = "http://localhost:8080/api/bookmark/remove";
    }
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

  return (
    <>
      {markState ? (
        <Marked onClick={(e) => toggleBookmark(e)}>
          <BookMarkOn />
        </Marked>
      ) : (
        <UnMarked onClick={(e) => toggleBookmark(e)}>
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
