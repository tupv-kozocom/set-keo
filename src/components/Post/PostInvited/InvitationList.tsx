import ResponseInvite from "@/components/Post/PostInvited/ResponseInvite";
import {Button} from "@/components/ui/button";

type InvitationListProps = {
    isOwner: boolean;
}

function InvitationList({isOwner}: InvitationListProps) {
    return (
        <>
            <div className="flex flex-col justify-between absolute inset-0 p-4">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold">Bạn bè được mời</h1>
                    <div className="text-sm text-gray-400">4/10 trả lời</div>
                </div>
                <div className="border-b-2 border-gray-200 w-full h-2 my-4"/>
                <div className="space-y-4 flex-grow overflow-y-auto">
                    <ResponseInvite type="accepted">tupham@gmail.com đã đồng ý tham gia</ResponseInvite>
                    <ResponseInvite type="accepted">tupham@gmail.com đã đồng ý tham gia</ResponseInvite>
                    <ResponseInvite type="accepted">tupham@gmail.com đã đồng ý tham gia</ResponseInvite>
                    <ResponseInvite type="accepted">tupham@gmail.com đã đồng ý tham gia</ResponseInvite>
                    <ResponseInvite type="rejected">tupham@gmail.com từ chối tham gia</ResponseInvite>
                    <ResponseInvite type="rejected">tupham@gmail.com từ chối tham gia</ResponseInvite>
                    <ResponseInvite type="pending">tupham@gmail.com chưa có phản hồi</ResponseInvite>
                    <ResponseInvite type="pending">tupham@gmail.com chưa có phản hồi</ResponseInvite>
                    <ResponseInvite type="pending">tupham@gmail.com chưa có phản hồi</ResponseInvite>
                    <ResponseInvite type="pending">tupham@gmail.com chưa có phản hồi</ResponseInvite>
                    <ResponseInvite type="pending">tupham@gmail.com chưa có phản hồi</ResponseInvite>
                    <ResponseInvite type="pending">tupham@gmail.com chưa có phản hồi</ResponseInvite>
                    <ResponseInvite type="pending">tupham@gmail.com chưa có phản hồi</ResponseInvite>
                    <ResponseInvite type="pending">tupham@gmail.com chưa có phản hồi</ResponseInvite>
                    <ResponseInvite type="pending">tupham@gmail.com chưa có phản hồi</ResponseInvite>
                </div>
                {isOwner && (
                    <div className="flex gap-4 justify-between mt-4">
                        <Button className="flex-grow text-white">Tham gia</Button>
                        <Button className="flex-grow bg-gray-400 text-white">Từ chối</Button>
                    </div>
                )}
            </div>
        </>
    );
}

export default InvitationList;