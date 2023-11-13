import { useRef } from "react";
import { ReactComponent as Photo } from "../../assets/photo_icon.svg";

const FileInput = ({ onChange }) => {
  const imgRef = useRef(null);

  const onClick = () => {
    imgRef.current?.click();
  };
  return (
    <button onClick={onClick}>
      <Photo />
      <input
        hidden
        type="file"
        accept="image/jpg,image/png,image/jpeg,image/gif"
        name="image-input"
        onChange={onChange}
        ref={imgRef}
      />
    </button>
  );
};
export default FileInput;
