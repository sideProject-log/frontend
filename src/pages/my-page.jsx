import styled from "styled-components";

const MyPage = () => {
  return (
    <div>
      <header>헤더</header>
      <profile>아바타</profile>
      <posts>
        <Post />
      </posts>
    </div>
  );
};

function Post() {
  return (
    <PostBackGround>
      <PostTitleContainer>
        <div>
          <Title>오늘의 로그 제목</Title>
          <Desc>오늘은 어쩌구 저쩌구 어쩌구 저쩌구..</Desc>
        </div>
        <Date>10</Date>
      </PostTitleContainer>
      <PostInfoContainer></PostInfoContainer>
    </PostBackGround>
  );
}

const PostBackGround = styled.div`
  position: relative;
  width: 85%;
  height: 150px;
  background-color: #ab9f89;
  margin: 0 auto;
  color: white;
  padding: 25px 25px;
  border-radius: 20px;
`;

const PostTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;
const Desc = styled.p`
  opacity: 80%;
`;

const Date = styled.h3`
  font-weight: bold;
  font-size: 18px;
  background-color: #000000;
  padding: 10px 10px;
  opacity: 50%;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostInfoContainer = styled.div`
  position: absolute;
  width: 90%;
  height: 20px;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

export default MyPage;
