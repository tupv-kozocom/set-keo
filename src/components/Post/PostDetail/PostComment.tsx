import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Image from "next/image";

function PostComment() {
    return (
        <div className="flex gap-4 mt-8">
            <Avatar className="">
                <AvatarImage src="https://github.com/shadcn.png"/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="w-full overflow-hidden">
                <div className="font-bold">Tú phạm</div>
                <div className="flex items-center justify-between text-gray-400 my-1">
                    <div>19/03/2022 10:31</div>
                    <div className="flex items-center gap-4">
                        <button>Xoá</button>
                        <div className="border-l-1 border-gray-300 h-5"/>
                        <button>Sửa</button>
                    </div>
                </div>
                <div>Công viển mới mở cửa lại sau dịch nên nhiều trò chơi bị cắt giảm thì phải, cảm giác hơi ít trò nhg được cái mấy trò chơi mạo hiểm thì trò nào chơi cũng phê luôn. Trẻ con nhà mình thì rất thích khu Fantasy và đặc biệt là show Once lúc 19h. Rất đáng xem nhé mọi người. Voucher ăn uống mình dùng tại nhà hàng Gateway, đồ ăn ra nhanh, ngon miệng.</div>
                <div className="w-full overflow-x-auto pb-2">
                    <div className="flex items-center gap-2 min-w-min">
                        <div className="relative h-[100px] w-[160px] mt-4 flex-shrink-0">
                            <Image
                                src="/images/location1.jpg"
                                alt="location1"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <div className="relative h-[100px] w-[160px] mt-4 flex-shrink-0">
                            <Image
                                src="/images/location1.jpg"
                                alt="location1"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <div className="relative h-[100px] w-[160px] mt-4 flex-shrink-0">
                            <Image
                                src="/images/location1.jpg"
                                alt="location1"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <div className="relative h-[100px] w-[160px] mt-4 flex-shrink-0">
                            <Image
                                src="/images/location1.jpg"
                                alt="location1"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <div className="relative h-[100px] w-[160px] mt-4 flex-shrink-0">
                            <Image
                                src="/images/location1.jpg"
                                alt="location1"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <div className="relative h-[100px] w-[160px] mt-4 flex-shrink-0">
                            <Image
                                src="/images/location1.jpg"
                                alt="location1"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <div className="relative h-[100px] w-[160px] mt-4 flex-shrink-0">
                            <Image
                                src="/images/location1.jpg"
                                alt="location1"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <div className="relative h-[100px] w-[160px] mt-4 flex-shrink-0">
                            <Image
                                src="/images/location1.jpg"
                                alt="location1"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostComment;