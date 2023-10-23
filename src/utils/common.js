export const convertDate = (target) => {
  const targetDate = new Date(target);
  const todayDate = new Date();

  const seconds = Math.floor(
    (todayDate.getTime() - targetDate.getTime()) / 1000
  );

  if (seconds > 24 * 60 * 60) {
    const month = targetDate.getMonth() + 1;
    const day = targetDate.getDay();
    return `${month}월 ${day}일`;
  }

  if (seconds < 60) return "방금 전";

  const minutes = seconds / 60;
  if (minutes < 60) return `${Math.floor(minutes)}분 전`;

  const hours = minutes / 60;
  if (hours < 24) return `${Math.floor(hours)}시간 전`;

  const days = hours / 24;
  if (days < 7) return `${Math.floor(days)}일 전`;

  return `${targetDate.toLocaleDateString()}`;
};
