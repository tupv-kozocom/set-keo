import Image from "next/image";
import {Button} from "@/components/ui/button";

function PostDetailContentHeader() {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center justify-between gap-2">
                <Image
                    src="/images/dola.png"
                    alt="dola"
                    width={12}
                    height={12}
                />
                <p className="text-sm">Chi phí dự kiến:</p>
                <p className="text-sm"><span className="font-bold text-primary">1,016,500₫</span>/người</p>
            </div>
            <div className="flex items-center justify-between gap-4">
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
        </div>
    );
}

export default PostDetailContentHeader;