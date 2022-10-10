import React from "react";
import { IconInterface } from "./interface";

function KakaoIcon({ width, height }: IconInterface) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="#FFE800" />
      <path
        d="M12.003 7C8.68934 7 6 9.12506 6 11.7424C6 13.4292 7.11656 14.8999 8.78539 15.7464L8.22111 17.8594C8.1971 17.9255 8.21511 17.9915 8.26313 18.0395C8.29314 18.0695 8.34117 18.0875 8.38319 18.0875C8.41921 18.0875 8.45523 18.0695 8.48524 18.0455L10.9165 16.4007C11.2706 16.4487 11.6308 16.4787 11.997 16.4787C15.3106 16.4787 18 14.3537 18 11.7364C18.006 9.12506 15.3167 7 12.003 7Z"
        fill="#3B1E1D"
      />
    </svg>
  );
}

export default KakaoIcon;
