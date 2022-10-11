import styled, { css, keyframes } from "styled-components";
import { colors } from "../../utils/colors";
interface InputProps {
  hasValue: boolean;
}
const labelUp = keyframes`
    from {
    font-size: 16px;
    top: 20%;
  }

  to {
    font-size: 11px;
    top: 10%;
  }
`;
const animation = css`
  animation: ${labelUp} 400ms forwards;
`;
export const FakeInput = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  justify-items: flex-start;
  align-items: center;
  background-color: ${colors.inputGray};
  border-radius: 4px;
  padding: 16px 0px 10px 10px;
  border: 0;
  &:focus-within > span {
    ${(props) => (props.hasValue ? "animation: null" : animation)};
  }
`;
export const FakePlaceholder = styled.span<InputProps>`
  background-color: transparent;
  position: absolute;
  font-weight: 300;
  margin-bottom: 2px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  border-radius: 4px;
  left: 10px;
  color: ${colors.labelGray};
  font-size: ${(props) => (props.hasValue ? "11px" : "16px")};
  top: ${(props) => (props.hasValue ? "10%" : "30%")};
  border: none;
`;
export const CustomInput = styled.input`
  background-color: transparent;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: white;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
`;
