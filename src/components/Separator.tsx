type SeparatorProps = {
    name: string;
}

function Separator({ name }: SeparatorProps) {
    return (
        <div className="flex justify-center items-center my-6">
            <div className="border border-1 border-gray-200 flex-grow" />
            <div className="text-gray-300 text-sm px-2">{name}</div>
            <div className="border border-1 border-gray-200 flex-grow" />
        </div>
    );
}

export default Separator;