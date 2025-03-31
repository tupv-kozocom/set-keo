import ResponseInvite from "@/components/Post/PostInvited/ResponseInvite";

function InvitationList() {
    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className="font-bold">Bạn bè được mời</h1>
                <div className="text-sm text-gray-400">4/10 trả lời</div>
            </div>
            <div className="border-b-2 border-gray-200 w-full h-2 my-4"/>
            <div className="space-y-4">
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

            </div>
        </>
    );
}

export default InvitationList;