interface TEXT_AREA {
  label?: string;
}

export const TextArea = ({ label, ...arg }: TEXT_AREA) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <textarea {...arg} />
    </div>
  );
};
