type LabelProps = {
    htmlFor: string;
    className?: string;
}

function Label({ htmlFor, className }: LabelProps) {
    return (
        <label htmlFor={htmlFor} className={`text-black text-sm ${className}`}>Nhớ tài khoản</label>
    );
}

export default Label;