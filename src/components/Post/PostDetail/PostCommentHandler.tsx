import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Textarea} from "@/components/ui/textarea";
import Image from "next/image";
import {Button} from "@/components/ui/button";

function PostCommentHandler() {
    return (
        <div className="mt-8">
            <div className="flex gap-4">
                <Avatar className="">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="w-full relative">
                    <Textarea
                        placeholder="Viết bình luận"
                        className="bg-gray-200 text-slate-400 border-none "
                    />
                    <div className="flex items-center justify-between mt-2">
                        <div>* Chú ý kích thước ảnh dưới 5Mb, tối đa 6 ảnh</div>
                        <div className="space-x-4">
                            <Button className="text-white" size="lg">Bình luận</Button>
                            <Button className="text-white bg-gray-400" size="lg">Huỷ</Button>
                        </div>
                    </div>
                    <Image
                        src="/images/add-photo.png"
                        alt="temp"
                        width={24}
                        height={24}
                        className="absolute right-4 top-2 cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
}

export default PostCommentHandler;