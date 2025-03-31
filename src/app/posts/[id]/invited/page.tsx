import PostCarousel from "@/components/Post/PostCarousel";
import PostBreadcrumb from "@/components/Post/PostBreadcrumb";
import PostDetailContentHeader from "@/components/Post/PostDetail/PostDetailContentHeader";
import PostDetailMarkdown from "@/components/Post/PostDetail/PostDetailMarkdown";
import InvitationList from "@/components/Post/PostInvited/InvitationList";
import {Button} from "@/components/ui/button";
import PostLocation from "@/components/Post/PostLocation";

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
                <PostLocation />
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