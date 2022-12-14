import React, { useState, useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { Container } from "./styles";

interface Props {
  type: string;
  name: string;
  children: React.ReactNode;
}

const Input: React.FC<Props> = ({ type, name, children, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

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
    <Container>
      <input
        ref={inputRef}
        type={type}
        name={name}
        value={value}
        onChange={handleTextChange}
        required
        {...rest}
      />
      <label className={isActive ? "active" : ""} htmlFor={name}>
        {children}
      </label>
    </Container>
  );
};

export default Input;
