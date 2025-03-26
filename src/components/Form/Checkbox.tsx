type CheckboxProps = {
    name: string;
    id: string;
    className?: string;
}

function Checkbox({ name, id, className }: CheckboxProps) {
    return (
        <input
            type={"checkbox"}
            name={name}
            id={id}
            className={`w-4 h-4 accent-orange-400/25 focus:ring-orange-500 cursor-pointer ${className}`}
        />
    );
}

export default Checkbox;