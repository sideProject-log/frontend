import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import theme from "../../styles/theme";

const DeleteModal = ({ onClose, postId }) => {
  const navigate = useNavigate();
  const requestDelete = async (postId) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/record/remove`,
        {
          data: { postId },
          withCredentials: true,
        }
      );
      console.log(response);

      if (response.status >= 200 && response.status < 300) {
        navigate("/main");
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error("API 호출 오류", error);
    }
  };

  return (
    <Wrapper>
      <Container onClick={onClose}>
        <ModalWindow onClick={(e) => e.stopPropagation()}>
          <ModalContainer>
            <p>
              정말 삭제할까요?
              <br />
              삭제한 로그는 복구할 수 없어요
            </p>
            <ButtonContainer>
              <ModalButton
                type="button"
                onClick={onClose}
                $buttonColor={theme.line.line_dim}
              >
                취소
              </ModalButton>
              <ModalButton
                type="button"
                onClick={() => requestDelete(postId)}
                $buttonColor={theme.primary}
              >
                삭제하기
              </ModalButton>
            </ButtonContainer>
          </ModalContainer>
        </ModalWindow>
      </Container>
    </Wrapper>
  );
};

export default DeleteModal;

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
  padding: 4rem;
  width: 240px;
  height: 124px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1c1e21;
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;

  p {
    color: #ffffff;
    ${(props) => props.theme.font["body-small"]};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ModalButton = styled.button`
  width: 100px;
  height: 32px;
  border-radius: 4px;
  background-color: ${(props) => props.$buttonColor};
  color: ${(props) => props.theme.font.text_lighten};

  ${(props) => props.theme.font.caption}
`;
