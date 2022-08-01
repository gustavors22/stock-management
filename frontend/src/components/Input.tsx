interface InputProps {
  label: string;
  value?: any;
  defaultValue?: any;
  type: string;
  disabled?: boolean;
  placeholder?: string;
  onChangeEvent?: any;
}

export default function Input(props: InputProps) {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700  font-bold mb-2 w-full text-start"
        htmlFor="name"
      >
        {props.label}
      </label>
      <input
        className={`
                shadow appearance-none border rounded
                w-full py-2 px-3 text-gray-700 
                leading-tight focus:outline-none focus:shadow-outline
            `}
        id="name"
        name="name"
        type={props.type}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        value={props.value}
        disabled={props.disabled}
        onChange={(event) =>
          props.onChangeEvent && props.onChangeEvent(event.target.value)
        }
        required
      />
    </div>
  );
}
