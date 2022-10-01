import styled from "styled-components";
import { colors } from "styles/productStyles";

export const FarmItemContainer = styled.li`
  border: 1px solid ${colors.GRAY_E3};
  border-radius: 16px;
  width: 200px;
  min-height: 260px;
  position: relative;
  cursor: pointer;

  & > span {
    border-radius: 16px 16px 0 0;
  }
`;

export const FramCardContentsWrapper = styled.div`
  padding: 10px 10px 15px 10px;
`;

// export const FarmRankingLabel = styled.div`
//   position: absolute;
//   top: -3px;
//   left: 12px;
//   background-color: ${colors.MAIN_COLOR};
//   z-index: 999;
//   width: 30px;
//   height: 30px;
//   display: flex;
//   align-items: center;
//   border-radius: 2px;

//   clip-path: polygon(
//     50% 0%,
//     80% 0,
//     100% 0,
//     100% 100%,
//     81% 100%,
//     50% 90%,
//     18% 100%,
//     0 100%,
//     0% 35%,
//     0 0
//   );

//   & > p {
//     margin: 0 auto;
//     text-align: center;
//     color: ${colors.WHITE};
//     font-size: 20px;
//     font-weight: 400;
//   }
// `;

export const FarmCategoryLabel = styled.span`
  border-radius: 20px;
  display: inline-block;
  background-color: ${colors.MAIN_COLOR};
  padding: 5px 10px;
  margin-bottom: 8px;

  & > p {
    color: ${colors.WHITE};
    font-size: 13px;
    font-weight: 500;
  }
`;

export const FarmCardTitle = styled.h2`
  /* margin: 0; */
  font-size: 16px;
`;

export const FarmCardContent = styled.h4`
  color: ${colors.GREY_MID};
  font-weight: 400;
  font-size: 14px;
  margin-top: 5px;
`;
