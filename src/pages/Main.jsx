import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import card from "../assets/card.png";
import { ReactComponent as BookMarkOn } from "../assets/bookmark_on.svg";
import { ReactComponent as BookMarkOff } from "../assets/bookmark_off.svg";

const Main = () => {
  return (
    <BackGround>
      <Header />
      <Container>
        {/* MenuTab */}
        <Menu>
          <MenuItem>모든로그</MenuItem>
          <MenuItem>북마크</MenuItem>
        </Menu>

        {/* Logs */}
        <Contents>
          {records.map((record, i) => (
            <Card image={`https://source.unsplash.com/random/`}>
              <Cover>
                <BarWrapper>
                  <Bar>
                    <BookMark marked={record.isMarked}>
                      {record.isMarked ? <BookMarkOn /> : <BookMarkOff />}
                    </BookMark>
                  </Bar>
                </BarWrapper>
                <Content>
                  <TextWrapper>
                    <Record>
                      <RecordTitle>{record.title}</RecordTitle>
                      <RecordContent>{record.content}</RecordContent>
                    </Record>
                    <SmallText>{record.createdAt}</SmallText>
                  </TextWrapper>
                </Content>
              </Cover>
            </Card>
          ))}
        </Contents>
      </Container>
    </BackGround>
  );
};

export default Main;

const BackGround = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: black;
  padding-top: 100px;
`;

const Container = styled.div`
  width: 100%;
`;

const Menu = styled.div`
  display: flex;
  width: 100vw;
  padding: 0px 20px;
`;

const MenuItem = styled.button`
  display: flex;
  padding: 8px 0px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  flex: 1 0 0;
  color: white;
`;

const Contents = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const Card = styled.div`
  display: flex;
  width: 320px;
  height: 520px;
  align-items: flex-start;
  background-image: url(${(props) => props.image});
  background-size: cover;
  color: white;
  border-radius: 16px;
`;

const Cover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 16px;
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

const BookMark = styled.div`
  display: inline-flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 999px;
  background: ${(props) =>
    props.marked
      ? "var(--background-bg-input, #FAFAFA)"
      : "var(--font-text-disabled, rgba(255, 255, 255, 0.25)"};
`;

const Content = styled.div`
  display: flex;
  width: 320px;
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
`;

const RecordContent = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.2px;
`;

const SmallText = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 160%; /* 22.4px */
  letter-spacing: -0.2px;
`;

const currentDate = new Date();
const createdAt = currentDate.toISOString();

// TODO: 데이터 동적으로 받아오기
const records = [
  {
    title: "오늘의 로그!!!",
    content: "오늘은 이런걸 했어 !!헤헤",
    writer: "루이",
    isMarked: true,
    createdAt: createdAt,
    emojiCount: 1,
  },
  {
    title: "오늘의 로그!!!",
    content: "오늘의 내용은 어쩌구 저쩌구 ??",
    writer: "루이",
    isMarked: false,
    createdAt: "20231022",
    emojiCount: 1,
  },
];
