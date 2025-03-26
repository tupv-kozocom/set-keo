import Image from "next/image";

type SocialButtonProps = {
    src: string;
    alt: string;
    name: string;
    className?: string;
    classNameText?: string;
}

function SocialButton({ src, alt, name, className, classNameText }: SocialButtonProps) {
    return (
        <button className={`flex items-center justify-center space-x-3 text-white bg-blue-500 p-3 rounded-lg border border-gray-200 w-full ${className}`}>
            <Image
                src={src}
                alt={alt}
                width={24}
                height={24}
            />
            <span className={`${classNameText} text-white text-sm`}>{name}</span>
        </button>
    );
}

export default SocialButton;