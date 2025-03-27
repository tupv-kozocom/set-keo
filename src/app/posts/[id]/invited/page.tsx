import PostCarousel from "@/components/Post/PostCarousel";
import PostBreadcrumb from "@/components/Post/PostBreadcrumb";
import PostDetailContentHeader from "@/components/Post/PostDetail/PostDetailContentHeader";
import PostDetailMarkdown from "@/components/Post/PostDetail/PostDetailMarkdown";
import InvitationList from "@/components/Post/PostInvited/InvitationList";
import {Button} from "@/components/ui/button";
import GoogleMapComponent from "@/components/Map/GoogleMapComponent";

function PostInvited() {
    return (
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between gap-8 mt-4">
            {/*Left content*/}
            <div className="w-full lg:w-[70%]">
                <PostCarousel/>
                <PostBreadcrumb/>
                <div className="w-full bg-white p-8 mb-8 rounded-lg">
                    <PostDetailContentHeader/>
                    <PostDetailMarkdown/>
                </div>
                <div className="w-full bg-white p-8 mb-16 rounded-lg">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-bold">Địa chỉ</h2>
                        <div className="text-[#2F80ED] text-sm">Chỉ đường đi</div>
                    </div>
                    <div className="text-sm my-4">115 Lê Văn Sỹ, Phường Hải Hưng, Quận Phú Nhuận, Phú Quốc</div>
                    <div className="h-[140px]">
                        <GoogleMapComponent/>
                    </div>
                </div>
            </div>
            {/*Right content*/}
            <div className="hidden lg:w-[30%] lg:block">
                <aside className="bg-white rounded-lg p-4">
                    <InvitationList/>
                    <div className="flex gap-4 justify-between mt-4">
                        <Button className="flex-grow text-white">Tham gia</Button>
                        <Button className="flex-grow bg-gray-400 text-white">Từ chối</Button>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default PostInvited;