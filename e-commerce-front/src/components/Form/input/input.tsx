import { Path, UseFormRegister, FieldValues } from "react-hook-form";
import { Form, Spinner } from "react-bootstrap";

type TProps<fieldValue extends FieldValues> = {
  label: string;
  name: Path<fieldValue>;
  type?: string;
  register: UseFormRegister<fieldValue>;
  error?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.FocusEvent<HTMLInputElement>) => void;
  sucsses?: boolean;
  checking?: boolean;
  disabled?: boolean;
};

const Input = <fieldValue extends FieldValues>({
  label,
  type = "text",
  name,
  error,
  register,
  onBlur,
  onChange,
  sucsses,
  checking,
  disabled,
}: TProps<fieldValue>) => {
  const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(event);
      register(name).onBlur(event);
    } else {
      register(name).onBlur(event);
    }
    if (onChange) {
      onChange(event);
      register(name).onChange(event);
    } else {
      register(name).onChange(event);
    }
  };
  return (
    <Form.Group className="mb-2">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        {...register(name)}
        onBlur={onBlurHandler}
        onChange={onBlurHandler}
        isInvalid={!!error}
        isValid={sucsses}
        disabled={disabled}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      <Form.Control.Feedback type="valid"></Form.Control.Feedback>
      {checking ? <Spinner size="sm" role="form"></Spinner> : null}
    </Form.Group>
  );
};

export default Input;
