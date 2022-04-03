import { Form } from "react-bootstrap";

const Select = ({ options, value, name, cbOnChange, placeholder }) => {
  return (
    <Form.Select
      name={name}
      value={value}
      onChange={cbOnChange}
      aria-label={placeholder}
    >
      <option name="default" value="">{placeholder}</option>
      {options.map(({ id, title }) => (
        <option key={id} value={id}>
          {title}
        </option>
      ))}
    </Form.Select>
  );
};

export default Select;
