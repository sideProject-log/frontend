import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as BookMarkOn } from "../../assets/bookmark_on.svg";
import { ReactComponent as BookMarkOff } from "../../assets/bookmark_off.svg";

const BookMark = ({ isMarked }) => {
  const [markState, setMarkState] = useState(isMarked);

  const toggleBookmark = (e) => {
    e.stopPropagation();
    setMarkState(!markState); // 반대로 설정
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
