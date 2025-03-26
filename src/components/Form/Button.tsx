type ButtonProps = {
    type: "submit" | "reset" | "button";
    className?: string;
    name: string;
}

function Button({ type, className, name }: ButtonProps) {
    return (
        <button
            type={type}
            className={`text-white bg-orange-500 w-full my-6 p-3 rounded-lg ${className}`}
        >
            {name}
        </button>
    );
}

export default Button;