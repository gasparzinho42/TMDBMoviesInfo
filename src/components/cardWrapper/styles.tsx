import styled from "styled-components";
import { colors } from "../../utils/colors";

export const CustomCardWrapper = styled.div`
  width: 50%;
  min-height: 500px;
  background-color: ${colors.modalBackgroundBlack};
  border: none;
  border-radius: 4px;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
