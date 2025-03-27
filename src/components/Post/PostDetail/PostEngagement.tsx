import Image from "next/image";

function PostEngagement() {
    return (
        <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center gap-1">
                <Image
                    src="/images/bi_heart.png"
                    alt="heart"
                    width={14}
                    height={14}
                />
                <span className="font-bold text-sm">300</span>
                <span className="font-bold text-sm">(27 bình luận)</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-primary"></div>
            <div className="font-bold text-sm">1K+ người đã lên kèo</div>
        </div>
    );
}

export default PostEngagement;