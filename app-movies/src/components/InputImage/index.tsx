import React, {
  ChangeEvent,
  useRef,
  useEffect,
  useCallback,
  useState,
} from "react";
import { useField } from "@unform/core";
import { Container } from "./styles";

interface Props {
  name: string;
}

type InputProps = JSX.IntrinsicElements["input"] & Props;

export default function ImageInput({ name, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [preview, setPreview] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "files[0]",
      clearValue(ref: HTMLInputElement) {
        ref.value = "";
        setPreview(null);
      },
      setValue(_: HTMLInputElement, value: string) {
        setPreview(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <input type="file" ref={inputRef} accept="image/*" {...rest} />
    </Container>
  );
}
