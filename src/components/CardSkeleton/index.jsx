import React from "react";
import styled, { keyframes } from "styled-components";

const index = () => {
  return (
    <Container>
      <SkeletonContainer>
        <BookmarkContainer>
          <BookMarkSkeleton />
        </BookmarkContainer>
        <ContentContainer>
          <TitleSkeleton></TitleSkeleton>
          <ContentSkeleton></ContentSkeleton>
          <DateSkeleton></DateSkeleton>
        </ContentContainer>
      </SkeletonContainer>
      <SkeletonContainer>
        <BookmarkContainer>
          <BookMarkSkeleton />
        </BookmarkContainer>
        <ContentContainer>
          <TitleSkeleton></TitleSkeleton>
          <ContentSkeleton></ContentSkeleton>
          <DateSkeleton></DateSkeleton>
        </ContentContainer>
      </SkeletonContainer>
    </Container>
  );
};

// Shimmer 효과를 위한 애니메이션
const shimmer = keyframes`
  0% {
    background-position: -320px 0;
  }
  100% {
    background-position: 320px 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SkeletonContainer = styled.div`
  width: 320px;
  height: 520px;
  padding: 16px;
  border-radius: 16px;
  background-color: #ddd; // 배경색 변경
  animation: ${shimmer} 2s infinite linear; // Shimmer 애니메이션 적용
  background: linear-gradient(to right, #707070 10%, #818181 20%, #7d7d7d 30%);
  background-size: 1000px 100%;
`;

const BookmarkContainer = styled.div`
  display: flex;
  justify-content: end;
  height: 80px;
`;

const BookMarkSkeleton = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: #767676; // 배경색 변경
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 360px;
`;

const TitleSkeleton = styled.div`
  width: 200px;
  height: 30px;
  margin-bottom: 8px;
  background-color: #767676; // 배경색 변경
`;

const ContentSkeleton = styled.div`
  width: 100px;
  height: 15px;
  margin-bottom: 30px;
  background-color: #767676; // 배경색 변경
`;

const DateSkeleton = styled.div`
  width: 100px;
  height: 15px;
  margin-top: 20px;
  background-color: #767676; // 배경색 변경
`;

export default index;
