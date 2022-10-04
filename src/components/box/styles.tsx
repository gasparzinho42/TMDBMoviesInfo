import styled, { CSSProperties } from "styled-components";
interface BoxProps {
  w: CSSProperties["width"];
  h?: CSSProperties["height"];
  minw?: CSSProperties["minWidth"];
  minh?: CSSProperties["minHeight"];
  mb?: CSSProperties["marginBottom"];
  mt?: CSSProperties["marginTop"];
  ml?: CSSProperties["marginLeft"];
  mr?: CSSProperties["marginRight"];
  flexDirection?: CSSProperties["flexDirection"];
}
export const BoxStyled = styled.div<BoxProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  margin-bottom: ${(props) => props.mb || null};
  margin-top: ${(props) => props.mt || null};
  margin-left: ${(props) => props.ml || null};
  margin-right: ${(props) => props.mr || null};
  min-width: ${(props) => props.minw || null};
  min-height: ${(props) => props.minh || null};
  height: ${(props) => props.h || null};
  width: ${(props) => props.w || null};
`;
