import styled, { keyframes } from "styled-components";
import { colors } from "../../utils/colors";
const labelUp = keyframes`
    from {
    font-size: 16px;
    top: 20%;
  }

  to {
    font-size: 10px;
    top: 10%;
  }
`;
export const FakeInput = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-items: flex-start;
  align-items: center;
  background-color: ${colors.inputGray};
  border-radius: 4px;
  padding: 14px;
  border: 0;
  &:focus-within > span {
    animation: ${labelUp} 400ms forwards;
  }
`;
export const FakePlaceholder = styled.span`
  background-color: transparent;
  position: absolute;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  border-radius: 4px;
  left: 10px;
  color: ${colors.labelGray};
  font-size: 16px;
  top: 30%;
  border: none;
`;
export const CustomInput = styled.input`
  background-color: transparent;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: white;
  border: none;
  outline: none;
  width: 100%;
  height: 50%;
`;
