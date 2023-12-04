import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as More } from "../../assets/More.svg";
import { ReactComponent as Back } from "../../assets/back_icon.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { useToast } from "../../hooks/useToast";
// import axios from "axios";
import ModalPortal from "../ModalPortal";
import DeleteModal from "../DeleteModal";

const DetailHeader = ({ postId, isCurrentUser, onUpdate, setOnUpdate }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { fireToast } = useToast();
  const [more, setMore] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onClickBack = () => {
    navigate(`/main`);
  };

  const handleMore = () => {
    setMore((prev) => !prev);
  };

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      fireToast({ content: "공유 링크가 복사되었습니다." });
      handleMore();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Header>
      <Container>
        <button style={{ padding: 0 }} type="button" onClick={onClickBack}>
          <Back />
        </button>
        <div>
          <button style={{ padding: 0 }} onClick={handleMore}>
            <More />
          </button>
          {more && (
            <MoreContainer>
              <MoreButton
                onClick={() =>
                  handleCopyClipBoard(
                    `${process.env.REACT_APP_URL}${location.pathname}`
                  )
                }
              >
                공유하기
              </MoreButton>
              {isCurrentUser ? (
                <>
                  <MoreButton
                    onClick={() => {
                      console.log("hi");
                      setOnUpdate(true);
                    }}
                  >
                    수정하기
                  </MoreButton>
                  <MoreButton
                    onClick={() => {
                      setMore();
                      setShowModal((prev) => !prev);
                    }}
                  >
                    삭제하기
                  </MoreButton>
                </>
              ) : (
                <MoreButton
                  onClick={() => {
                    fireToast({
                      content: "신고가 접수되었습니다.",
                      bottom: "50",
                    });
                    handleMore();
                  }}
                >
                  신고하기
                </MoreButton>
              )}
            </MoreContainer>
          )}
        </div>
      </Container>
      {showModal && (
        <ModalPortal>
          <DeleteModal onClose={() => setShowModal(false)} postId={postId} />
        </ModalPortal>
      )}
    </Header>
  );
};

export default DetailHeader;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 100dvw;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const Container = styled.div`
  position: relative;
  padding: 16px 0;
  width: 320px;
  height: 68px;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`;

const MoreContainer = styled.div`
  top: 20px;
  right: 24px;
  position: absolute;
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 8px;
  background: var(--background-bg-surface, #1c1e21);
`;

const MoreButton = styled.button`
  color: #fff;
  ${(props) => props.theme.font["body-medium"]};
`;
