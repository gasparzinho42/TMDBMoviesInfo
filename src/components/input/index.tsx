import React from "react";
import { CustomInput, FakeInput, FakePlaceholder } from "./styles";
interface InputProps {
  title: string;
}
const Input: React.FC<InputProps> = ({ title }) => {
  return (
    <FakeInput>
      <FakePlaceholder> {title} </FakePlaceholder>
      <CustomInput />
    </FakeInput>
  );
};
export default Input;
