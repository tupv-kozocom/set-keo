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
            className={`text-black border border-gray-300 rounded-lg w-full p-3 ${className}`}
        />
    );
}

export default Input;