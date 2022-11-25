import React, { useState } from "react";
import { Container } from "./styles";

interface Props {
  type: string;
  name: string;
  children: React.ReactNode;
}

const Input: React.FC<Props> = ({ type, name, children, ...rest }) => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    if (value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  return (
    <Container {...rest}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleTextChange}
        autoComplete="off"
      />
      <label className={isActive ? "active" : ""} htmlFor={name}>
        {children}
      </label>
    </Container>
  );
};

export default Input;
