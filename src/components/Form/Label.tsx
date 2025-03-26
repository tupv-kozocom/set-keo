type LabelProps = {
    htmlFor: string;
    className?: string;
    name: string;
}

function Label({ htmlFor, className, name }: LabelProps) {
    return (
        <label htmlFor={htmlFor} className={`text-black text-sm ${className}`}>{name}</label>
    );
}

export default Label;