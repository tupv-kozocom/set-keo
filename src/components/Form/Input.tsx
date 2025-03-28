type InputProps = {
    type: string;
    placeholder?: string;
    name: string;
    id?: string;
    className?: string;
}

function Input({ type, placeholder, name, id, className }: InputProps) {
    return (
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        className={`border border-border-light placeholder:text-text-sub rounded-lg w-full p-3 ${className}`}
      />
    );
}

export default Input;