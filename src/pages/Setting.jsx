import React, { useEffect, useState } from "react";
import SettingHeader from "../components/SettingHeader";
import styled from "styled-components";
import { ReactComponent as RightArrow } from "../assets/right_arrow.svg";
import { ReactComponent as Add } from "../assets/add.svg";
import { requestIsLogin } from "../apis/auth";
import LoadingSpinner from "../components/LoadingSpinner";

const Setting = () => {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    const fetchMyData = async () => {
      try {
        const { data } = await requestIsLogin();
        const { result, user } = data;
        if (result === false) {
          window.location.href = "/";
        } else {
          setUserInfo(user);
        }
      } catch (error) {
        console.error("API 호출 오류:", error);
      }
    };
    fetchMyData();
  }, []);

  if (userInfo === null) {
    return <LoadingSpinner />;
  }
  return (
    <Wrapper>
      <Container>
        <SettingHeader />
        <ContentsWrapper>
          <ContentsContainer>
            <InfoContainer>
              <div className="profile-image">
                <ProfileImage src={userInfo.profile} />
                {/* TODO: 프로필 사진 변경 기능 보류*/}
                <Add className="change-profile" style={{ display: "none" }} />
              </div>
              <div className="user-info">
                <UserInfoTab className="first">
                  <p>연동된 이메일</p>
                  {/* TODO: 추후 이메일로 변경해야함 */}
                  <p className="users">{userInfo.snsId}</p>
                </UserInfoTab>
                <UserInfoTab>
                  <p>닉네임</p>
                  <div className="users user-nickname">
                    <p>{userInfo.username}</p>
                    <button
                      type="button"
                      onClick={() => {
                        window.location.href = "/modify/username";
                      }}
                    >
                      <RightArrow />
                    </button>
                  </div>
                </UserInfoTab>
                <UserInfoTab className="last">
                  <p>로그아웃</p>
                </UserInfoTab>
              </div>
            </InfoContainer>
            <div className="delete-account">
              <p>계정 삭제</p>
            </div>
          </ContentsContainer>
        </ContentsWrapper>
      </Container>
    </Wrapper>
  );
};

export default Setting;

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

  .delete-account {
    color: #df3f3f;
    p {
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

const InfoContainer = styled.div`
  width: 320px;
  height: 146px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  color: rgb(255, 255, 255, 0.95);

  .profile-image {
    position: relative;
    width: 72px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: 1px solid gray;
    border-radius: 50%;
  }
  .change-profile {
    position: absolute;
    top: 52px;
    left: 52px;
  }
  .user-info {
    display: flex;
    flex-direction: column;
  }
  .first {
    border-bottom: 1px solid rgba(242, 242, 242, 0.3);
  }
  .last {
    border-top: 1px solid rgba(242, 242, 242, 0.3);
  }
`;

const ProfileImage = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50px;
`;

const UserInfoTab = styled.div`
  padding: 1rem 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-weight: 10;
    font-size: 14px;
  }

  button {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .users {
    color: rgba(255, 255, 255, 0.65);
  }

  .user-nickname {
    display: flex;
    align-items: center;
  }
`;
