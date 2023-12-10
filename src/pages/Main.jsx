import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Header from "../components/Header";
import BookMark from "../components/BookMark";
import CardSkeleton from "../components/CardSkeleton";
import { ReactComponent as Emoji } from "../assets/emoji.svg";
import { ReactComponent as Posting } from "../assets/posting.svg";
import { convertDate } from "../utils/common";
import DefaultProfileImage from "../assets/profile_none.svg";

const Main = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState([]);
  const [records, setRecords] = useState([]);
  const [tab, setTab] = useState("모든 로그");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get(
          `${process.env.REACT_APP_API_URL}/auth/isLogin`,
          { withCredentials: true }
        );

        const data = userResponse.data.user;
        // console.log("user", data);
        setUser(data);
        if (!userResponse.data.result) {
          console.log("유저 정보 없음");
          // window.location.href = "/";
        }
      } catch (error) {
        console.error("API 호출 오류:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setIsLoading(true); // 로딩 시작
    let apiUrl;
    if (tab === "모든 로그") {
      apiUrl = `${process.env.REACT_APP_API_URL}/api/record/getAll`;
    } else {
      apiUrl = `${process.env.REACT_APP_API_URL}/api/user/bookmarks`;
    }
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, { withCredentials: true });
        const data = response.data;
        // console.log("data", data);
        setRecords(data.data.reverse());
        setIsLoading(false);

        window.scrollTo({
          top: 0,
          behavior: "smooth", // 부드러운 스크롤 효과 적용 (선택 사항)
        });
      } catch (error) {
        console.error("API 호출 오류:", error);
      }
    };

    // console.log(records);

    fetchData();
  }, [tab]);

  const handleTabClick = (newTab) => {
    setTab(newTab);
  };

  const onClickWrite = (e) => {
    navigate("/post");
    e.stopPropagation();
  };

  return (
    <>
      <Header
        tab={tab}
        onClick={handleTabClick}
        profile={user.profile}
        userId={user.id}
      />
      <MainContainer>
        <BackGround>
          <Container>
            {/* Logs */}
            <Contents>
              {isLoading ? (
                <CardSkeleton />
              ) : records?.length ? (
                records.map((record, i) => (
                  <Card
                    key={`record-${i}`}
                    $background={record.background}
                    onClick={() => navigate(`/detail/${record.id}`)}
                  >
                    {record.image && (
                      <BackgroundImageContainer>
                        <BackgroundImage
                          src={record.image}
                          alt="background-image"
                        />
                      </BackgroundImageContainer>
                    )}
                    <Cover>
                      <BarWrapper>
                        <Bar>
                          <BookMark
                            isMarked={record.bookmarked}
                            recordId={record.id}
                          />
                        </Bar>
                      </BarWrapper>
                      <Content>
                        <TextWrapper>
                          <Record>
                            <RecordTitle>{record.title}</RecordTitle>
                            <RecordContent>{record.content}</RecordContent>
                          </Record>
                          <SmallText>
                            {convertDate(record.created_at)}
                          </SmallText>
                        </TextWrapper>
                      </Content>
                      <BarWrapper>
                        <BottomBar>
                          <EmojiContainer>
                            <Emoji />
                            <SmallText>{record.emojiCount}</SmallText>
                          </EmojiContainer>
                          <ImgContainer
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/${record.user_id}`);
                            }}
                          >
                            {record.user.profile !==
                            "http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_640x640.jpg" ? (
                              <ProfileImage
                                src={record.user.profile}
                                alt="user-profile"
                              />
                            ) : (
                              <ProfileImage
                                src={DefaultProfileImage}
                                alt="user-profile-image"
                              />
                            )}
                            <SmallText>by {record.writer}</SmallText>
                          </ImgContainer>
                        </BottomBar>
                      </BarWrapper>
                    </Cover>
                  </Card>
                ))
              ) : (
                <div>레코드가 없습니다.</div>
              )}
            </Contents>
          </Container>
          {/* 글작성 버튼 */}
          <WriteButton onClick={(e) => onClickWrite(e)}>
            <Posting />
          </WriteButton>
        </BackGround>
      </MainContainer>
    </>
  );
};

export default Main;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const BackGround = styled.div`
  width: 414px;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bg.bg_surface};
  padding-top: 127px;
`;

const Container = styled.div`
  width: 100%;
`;

const Contents = styled.div`
  display: flex;
  padding: 0px 20px 20px 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  height: 520px;
  align-items: flex-start;
  ${(props) =>
    props.$background ? `background-color: ${props.$background};` : ""}
  background-size: cover;
  color: white;
  border-radius: 16px;
  cursor: pointer;
`;

const BackgroundImageContainer = styled.div`
  position: relative;
  background-position: center;
`;

const BackgroundImage = styled.img`
  width: 320px;
  position: absolute;
  height: 520px;
  object-fit: cover;
  filter: brightness(60%);
  border-radius: 16px;
`;

const Cover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 16px;
  z-index: 10;
`;

const BarWrapper = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
`;

const Bar = styled.div`
  display: flex;
  width: 288px;
  padding-left: 0px;
  justify-content: flex-end;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  padding: 0px 38px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  flex: 1 0 0;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  align-self: stretch;
  width: 244px;
`;

const Record = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const RecordTitle = styled.div`
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%; /* 27.5px */
  letter-spacing: -0.3px;
  width: 244px;
  text-align: center;
  overflow: hidden; /* 넘치는 내용 숨김 */
  text-overflow: ellipsis; /* 생략 부호 표시 */
  white-space: nowrap;
`;

const RecordContent = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.2px;
  overflow: hidden; /* 넘치는 내용 숨김 */
  text-overflow: ellipsis; /* 생략 부호 표시 */
  white-space: nowrap;
  text-align: center;
  width: 244px;
  height: 50px;
`;

const SmallText = styled.span`
  ${(props) => props.theme.font["body-small"]};
`;

const EmojiContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

const BottomBar = styled.div`
  display: flex;
  width: 288px;
  justify-content: space-between;
`;

const WriteButton = styled.div`
  position: fixed;
  bottom: 20px;
  left: calc(50% - 34px);
  display: inline-flex;
  width: 48px;
  height: 48px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 999px;
  background: var(--theme-primary, #f4ac40);
  /* shadow */
  box-shadow: 0px 4px 10px 0px rgba(28, 30, 33, 0.8);
  cursor: pointer;
  box-sizing: content-box;
  z-index: 10;
`;

const ProfileImage = styled.img`
  margin-right: 5px;
  width: 2rem;
  height: 2rem;
  border-radius: 20px;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
`;
