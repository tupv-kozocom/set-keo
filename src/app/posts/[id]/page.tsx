
import PostCarousel from "@/components/Post/PostCarousel";
import SuggestedPosts from "@/components/Post/PostDetail/SuggestedPosts";
import PostBreadcrumb from "@/components/Post/PostBreadcrumb";
import PostDetailContentHeader from "@/components/Post/PostDetail/PostDetailContentHeader";
import PostDetailMarkdown from "@/components/Post/PostDetail/PostDetailMarkdown";
import PostCommentHandler from "@/components/Post/PostDetail/PostCommentHandler";
import PostComment from "@/components/Post/PostDetail/PostComment";
import PostAction from "@/components/Post/PostDetail/PostAction";
import PostEngagement from "@/components/Post/PostDetail/PostEngagement";

type PostDetailProps = {
    params: Promise<{
        id: string;
    }>;
}

async function PostDetail({params}: PostDetailProps) {
    const {id} = await params;

    return (
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-8 mt-4">
            <div className="flex justify-between gap-8">
                <div className="w-full lg:w-[70%]">
                    <PostCarousel/>
                </div>
                <div className="hidden lg:block lg:w-[30%] relative">
                    <div className="absolute inset-0 overflow-y-auto">
                        <SuggestedPosts/>
                    </div>
                </div>
            </div>
            <div>
                <PostBreadcrumb/>
                <div className="w-full bg-white p-8 mb-16 rounded-lg">
                    <PostDetailContentHeader/>
                    <PostDetailMarkdown/>
                    <PostAction/>
                    <PostEngagement/>
                    <PostCommentHandler/>
                    <PostComment/>
                    <PostComment/>
                </div>
            </div>
        </div>
    );
}

export default PostDetail;