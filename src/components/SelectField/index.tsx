interface SELECT_FIELD {
  label?: string;
}

export const SelectField = ({ label }: SELECT_FIELD) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <select>
        <option>-Select-</option>
      </select>
    </div>
  );
};
