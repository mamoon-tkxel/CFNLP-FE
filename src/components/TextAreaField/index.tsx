// interface TEXT_AREA {
//   label?: string;
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TextArea = ({ label, ...arg }: any) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <textarea {...arg} />
    </div>
  );
};
