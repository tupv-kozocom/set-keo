import Image from "next/image";

type SuggestedCardProps = {
    image: string;
    title: string;
    likes: number;
    comments: number;
}

function SuggestedCard({ image, title, likes, comments } : SuggestedCardProps) {
    return (
        <div className="flex gap-4">
            <Image
                src={image}
                alt={title}
                width={32}
                height={32}
                className="rounded-lg object-cover w-14 h-14 shrink-0"
            />
            <div>
                <h2 className="font-bold text-sm">{title}</h2>
                <div className="flex gap-2 mt-1">
                    <div className="flex items-center gap-2">
                        <Image
                            src={"/images/bi_heart.png"}
                            alt="heart"
                            width={12}
                            height={12}
                            className="text-black"
                        />
                        <span className="text-gray-300 text-sm">{likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image
                            src={"/images/fa_comment-o.png"}
                            alt="comments"
                            width={12}
                            height={12}
                            className="text-black"
                        />
                        <span className="text-gray-300 text-sm">{comments}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SuggestedCard;