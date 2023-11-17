import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { requestIsLogin } from "../apis/auth";
import ModifyUsernameHeader from "../components/ModifyUsernameHeader";
import { ReactComponent as Reset } from "../assets/cancel.svg";
import LoadingSpinner from "../components/LoadingSpinner";
import { requestModifyUsername } from "../apis/user";

const ModifyUsername = () => {
  const [originUsername, setOriginUsername] = useState(null);
  const [username, setUsername] = useState(null);
  const [showReset, setShowReset] = useState(false);
  const [modifyError, setModifyError] = useState("");
  const inputRef = useRef(null);

  const onClickReset = () => {
    setUsername("");
    if (inputRef.current) inputRef.current.focus();
  };

  const checkUsername = async () => {
    if (originUsername === username) {
      alert("이름이 바뀌지 않았어요!");
      return;
    }

    try {
      const result = await requestModifyUsername(username);
      console.log(result);
      if (result.data.status === "ok") {
        window.location.href = "/setting";
      } else {
        setModifyError(result.data.message);
      }
    } catch (error) {
      console.error("API 호출 오류:", error);
    }
  };

  console.log(username);

  useEffect(() => {
    const fetchMyData = async () => {
      try {
        const { data } = await requestIsLogin();
        const { result, user } = data;
        if (result === false) {
          window.location.href = "/";
        } else {
          setUsername(user.username);
          setOriginUsername(user.username);
        }
      } catch (error) {
        console.error("API 호출 오류:", error);
      }
    };
    fetchMyData();
  }, []);

  if (username === null) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <Wrapper>
      <Container>
        <ModifyUsernameHeader onClick={checkUsername} />
        <ContentsWrapper>
          <ContentsContainer>
            <InfoContainer>
              <p className="modify-username">닉네임 변경</p>
              <div className="user-info">
                <InputTab>
                  <input
                    type="text"
                    value={username}
                    maxLength="14"
                    spellCheck="false"
                    onChange={(e) => setUsername(e.target.value)}
                    onFocus={() => setShowReset(true)}
                    onBlur={() => setShowReset(false)}
                    ref={inputRef}
                  />
                  {showReset && (
                    <button
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={onClickReset}
                    >
                      <Reset />
                    </button>
                  )}
                </InputTab>
                {modifyError.length > 0 && (
                  <div className="error-message">{modifyError}</div>
                )}
              </div>
            </InfoContainer>
          </ContentsContainer>
        </ContentsWrapper>
      </Container>
    </Wrapper>
  );
};

export default ModifyUsername;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  min-width: 414px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #1c1e21;
`;

const ContentsWrapper = styled.div`
  padding-top: 8rem;
  padding-bottom: 6rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentsContainer = styled.div`
  width: 320px;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoContainer = styled.div`
  width: 320px;
  height: 146px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  color: rgb(255, 255, 255, 0.95);

  .modify-username {
    font-size: 16px;
    font-weight: 300;
  }

  .error-message {
    padding: 2rem 0;
    font-size: 12px;
    font-weight: 300;
    color: #df3f3f;
  }
`;

const InputTab = styled.div`
  padding: 1rem 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(242, 242, 242, 0.3);
  width: 320px;
  height: 38px;

  input {
    width: 90%;
    height: 100%;
    background-color: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.95);
    font-size: 14px;
    font-weight: 200;

    &:focus {
      outline: none;
    }
  }

  button {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
