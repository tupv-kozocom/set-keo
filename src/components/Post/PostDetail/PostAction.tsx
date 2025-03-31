import {Button} from "@/components/ui/button";
import Image from "next/image";

function PostAction() {
    return (
        <div className="flex items-center gap-4 mt-8">
            <Button className="text-white rounded-full"> Đặt kèo ngay </Button>
            <div className="border-l-1 border-gray-300 h-5"/>
            <button className="text-primary rounded-full flex items-center gap-2">
                <Image
                    src="/images/bi_heart.png"
                    alt="heart"
                    width={14}
                    height={14}
                />
                <span className="text-sm text-black"> Yêu thích </span>
            </button>
        </div>
    );
}

export default PostAction;