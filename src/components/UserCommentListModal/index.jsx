import React from "react";
import styled from "styled-components";
import DefaultProfileImage from "../../assets/profile_none.svg";

const UserCommentListModal = ({ onClose, comments }) => {
  console.log(comments);
  return (
    <Wrapper>
      <Container onClick={onClose}>
        <ModalWindow onClick={(e) => e.stopPropagation()}>
          <ModalHeaderWrapper>
            <ModalHeader>
              <p className="header-text">공감해요</p>
              <p className="list-length">{comments.length}</p>
            </ModalHeader>
          </ModalHeaderWrapper>
          <CommentList>
            {comments.map((comment) => (
              <CommentListItem key={comment.id}>
                <UserInfo href={`/${comment.userId}`}>
                  <ProfileImage
                    src={
                      comment.profile !==
                      "http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_640x640.jpg"
                        ? comment.profile
                        : DefaultProfileImage
                    }
                    alt="user-profile"
                  />
                  <p>{comment.username}</p>
                </UserInfo>
                <CommentSticker>{comment.comment}</CommentSticker>
              </CommentListItem>
            ))}
          </CommentList>
        </ModalWindow>
      </Container>
    </Wrapper>
  );
};

export default UserCommentListModal;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -207px;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  min-width: 414px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(28, 30, 33, 0.7);
  z-index: 1000;
`;

const ModalWindow = styled.div`
  position: fixed;
  bottom: 0;
  padding: 24px;
  width: 414px;
  height: 420px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${(props) => props.theme.bg.bg_surface};
  border-radius: 16px 16px 0px 0px;
`;

const ModalHeaderWrapper = styled.div`
  width: 100%;
`;

const ModalHeader = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  .header-text {
    color: ${(props) => props.theme.font.text_lighten};
    ${(props) => props.theme.font["title-medium"]};
  }
  .list-length {
    color: ${(props) => props.theme.font.text_active};
    ${(props) => props.theme.font.caption};
  }
`;

const CommentList = styled.div`
  width: 320px;
  height: 360px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;

  // 스크롤은 동작, 스크롤바는 숨김
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CommentListItem = styled.div`
  width: 320px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserInfo = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  p {
    ${(props) => props.theme.font["body-small"]};
    color: ${(props) => props.theme.font.text_muted};
  }
`;

const ProfileImage = styled.img`
  margin-right: 5px;
  width: 36px;
  height: 36px;
  border-radius: 20px;
`;

const CommentSticker = styled.div`
  background-color: white;
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 250%;
  border-radius: 20px;
  box-shadow: 2px 0px 2px 0px rgba(0, 0, 0, 0.25);
`;
