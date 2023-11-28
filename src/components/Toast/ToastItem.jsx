import { useEffect, useState } from "react";
import { StToastItem } from "./style";

const ToastItem = (props) => {
  const { content, bottom, duration } = props;
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const setExistTimeout = setTimeout(() => {
      setIsClosing(true);
      clearTimeout(setExistTimeout);
    }, duration ?? 1000);
  });

  return (
    <StToastItem $bottom={bottom} $isClosing={isClosing}>
      {content}
    </StToastItem>
  );
};

export default ToastItem;
