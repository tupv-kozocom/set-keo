import PostCarousel from "@/components/Post/PostCarousel";
import SuggestedPosts from "@/components/Post/PostDetail/SuggestedPosts";
import PostBreadcrumb from "@/components/Post/PostBreadcrumb";
import PostDetailContentHeader from "@/components/Post/PostDetail/PostDetailContentHeader";
import PostDetailMarkdown from "@/components/Post/PostDetail/PostDetailMarkdown";
import {Button} from "@/components/ui/button";
import Image from "next/image";
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
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between gap-8 mt-4">
            {/*Left content*/}
            <div className="w-full lg:w-[70%]">
                <PostCarousel/>
                <PostBreadcrumb/>
                <div className="w-full bg-white p-8 mb-16 rounded-lg">
                    <PostDetailContentHeader/>
                    <PostDetailMarkdown/>
                    <PostAction />
                    <PostEngagement />
                    <PostCommentHandler/>
                    <PostComment />
                    <PostComment />
                </div>
            </div>
            {/*Right content*/}
            <div className="hidden lg:w-[30%] lg:block">
                <SuggestedPosts/>
            </div>
        </div>
    );
}

export default PostDetail;