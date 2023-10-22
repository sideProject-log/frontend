import React from "react";
import SettingHeader from "../components/SettingHeader";
import styled from "styled-components";
import { ReactComponent as RightArrow } from "../assets/right_arrow.svg";
import testProfileImage from "../assets/test_profile.jpg";
import { ReactComponent as Add } from "../assets/add.svg";

const Wrapper = styled.div`
  padding-top: 8rem;
  padding-bottom: 6rem;
  width: 100dvw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1c1e21;
`;

const Container = styled.div`
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

const Setting = () => {
  return (
    <>
      <SettingHeader />
      <Wrapper>
        <Container>
          <InfoContainer>
            <div className="profile-image">
              <ProfileImage src={testProfileImage} />
              <Add className="change-profile" />
            </div>
            <div className="user-info">
              <UserInfoTab className="first">
                <p>연동된 이메일</p>
                <p className="users">dbsfndl@naver.com</p>
              </UserInfoTab>
              <UserInfoTab>
                <p>닉네임</p>
                <div className="users user-nickname">
                  <p>루이</p>
                  <button type="button">
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
        </Container>
      </Wrapper>
    </>
  );
};

export default Setting;
