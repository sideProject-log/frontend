import { toastState } from "../../recoil/toast";
import { useRecoilValue } from "recoil";
import ToastItem from "./ToastItem";
import { StToastList } from "./style";

const ToastList = () => {
  const toasts = useRecoilValue(toastState);

  return (
    <StToastList>
      {toasts.map((toast) => (
        <ToastItem key={toast.id} {...toast} />
      ))}
    </StToastList>
  );
};

export default ToastList;
