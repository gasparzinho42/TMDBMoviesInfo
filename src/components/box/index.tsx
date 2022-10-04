import REact, { CSSProperties, PropsWithChildren } from "react";
import { BoxStyled } from "./styles";
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
  children: JSX.Element[] | JSX.Element;
  style?: CSSProperties;
}
const Box: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <BoxStyled style={props.style} {...props}>
      {children}
    </BoxStyled>
  );
};

export default Box;
