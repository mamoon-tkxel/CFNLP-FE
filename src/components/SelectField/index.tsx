import { ChangeEventHandler } from "react";

interface Option {
  label: string;
  value: string | number;
}
interface SELECT_FIELD {
  name: string;
  label?: string;
  options: Option[];
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

export const SelectField = ({
  label,
  name,
  value,
  onChange,
  options,
}: SELECT_FIELD) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <select value={value} onChange={onChange} name={name}>
        <option>-Select-</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
