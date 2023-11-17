import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DateSelectModal = ({ dates, onClose, setDate }) => {
  const [isLoading, setIsLoading] = useState(true);
  const setSelectedDate = (e) => {
    setDate(e.target.innerText);
  };

  useEffect(() => {
    setIsLoading(false);
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  if (isLoading) return null;

  return (
    <Wrapper>
      <Container onClick={onClose}>
        <ModalWindow>
          <DateList>
            {dates.map((date) => (
              <button key={date} type="button" onClick={setSelectedDate}>
                {date}
              </button>
            ))}
          </DateList>
        </ModalWindow>
      </Container>
    </Wrapper>
  );
};

export default DateSelectModal;

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
  width: 90%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1c1e21;
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px;

  button {
    font-family: "Pretendard";
    font-weight: 500;
    font-size: 24px;
    color: #ffffffb7;
    text-align: center;
  }
`;

const DateList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-y: scroll;
`;
