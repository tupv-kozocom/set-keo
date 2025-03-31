import PostCarousel from "@/components/Post/PostCarousel";
import PostBreadcrumb from "@/components/Post/PostBreadcrumb";
import PostDetailContentHeader from "@/components/Post/PostDetail/PostDetailContentHeader";
import PostDetailMarkdown from "@/components/Post/PostDetail/PostDetailMarkdown";
import InvitationList from "@/components/Post/PostInvited/InvitationList";
import {Button} from "@/components/ui/button";
import PostLocation from "@/components/Post/PostLocation";

function PostInvited() {
    return (
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-8 mt-4">
            <div className="flex justify-between gap-8">
                <div className="w-full lg:w-[70%]">
                    <PostCarousel/>
                </div>
                <div className="hidden lg:w-[30%] lg:block relative">
                    <div className="absolute inset-0">
                        <aside className="bg-white rounded-lg p-4 relative h-full">
                            <InvitationList
                                isOwner={false}
                            />
                        </aside>
                    </div>
                </div>
            </div>
            <div>
                <PostBreadcrumb/>
                <div className="w-full bg-white p-8 mb-8 rounded-lg">
                    <PostDetailContentHeader/>
                    <PostDetailMarkdown/>
                </div>
                <PostLocation />
            </div>
        </div>
    );
}

export default PostInvited;