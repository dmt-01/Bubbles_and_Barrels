type InputDivProps = {
  name: string;
  text: string;
  value: string;
  type: string;
  onChangeFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
};


function InputDiv({
  name,
  text,
  value,
  type,
  onChangeFunction,
}: InputDivProps) {

  return (
    <div>
      <input
        type={type}
        name={name}
        id={`${name}_${value}`}
        value={value}
        onChange={onChangeFunction}
      />
      <label htmlFor={`${name}_${value}`}>{text}</label>
    </div>
  );
}

export default InputDiv;