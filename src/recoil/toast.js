import { atom } from "recoil";

// export interface Toast {
//   id?: string;
//   content: string;
//   duration?: number;
//   bottom?: number;
// }

export const toastState = atom({
  key: "toastState",
  default: [],
});
