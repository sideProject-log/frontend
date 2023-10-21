import { css } from "styled-components";

import PretendardBlack from "../assets/fonts/pretendard/woff2-subset/Pretendard-Black.subset.woff2";
import PretendardBold from "../assets/fonts/pretendard/woff2-subset/Pretendard-Bold.subset.woff2";
import PretendardExtraBold from "../assets/fonts/pretendard/woff2-subset/Pretendard-ExtraBold.subset.woff2";
import PretendardExtraLight from "../assets/fonts/pretendard/woff2-subset/Pretendard-ExtraLight.subset.woff2";
import PretendardLight from "../assets/fonts/pretendard/woff2-subset/Pretendard-Light.subset.woff2";
import PretendardMedium from "../assets/fonts/pretendard/woff2-subset/Pretendard-Medium.subset.woff2";
import PretendardRegular from "../assets/fonts/pretendard/woff2-subset/Pretendard-Regular.subset.woff2";
import PretendardSemiBold from "../assets/fonts/pretendard/woff2-subset/Pretendard-SemiBold.subset.woff2";
import PretendardThin from "../assets/fonts/pretendard/woff2-subset/Pretendard-Thin.subset.woff2";

export const fonts = css`
  @font-face {
    font-family: "Pretendard Variable";
    font-weight: 45 920;
    font-style: normal;
    font-display: swap;
    src: url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css");
  }
  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: local("Pretendard"), url(${PretendardThin}) format("woff2");
  }
  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: local("Pretendard"), url(${PretendardExtraLight}) format("woff2");
  }
  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local("Pretendard"), url(${PretendardLight}) format("woff2");
  }
  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("Pretendard"), url(${PretendardRegular}) format("woff2");
  }
  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local("Pretendard"), url(${PretendardMedium}) format("woff2");
  }
  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local("Pretendard"), url(${PretendardSemiBold}) format("woff2");
  }
  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local("Pretendard"), url(${PretendardBold}) format("woff2");
  }
  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local("Pretendard"), url(${PretendardExtraBold}) format("woff2");
  }
  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: local("Pretendard"), url(${PretendardBlack}) format("woff2");
  }
`;
