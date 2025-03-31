import PostCarousel from "@/components/Post/PostCarousel";
import SuggestedPosts from '@/components/Post/PostDetail/SuggestedPosts';
import PostDetailContentHeader from '@/components/Post/PostDetail/PostDetailContentHeader';
import PostDetailMarkdown from '@/components/Post/PostDetail/PostDetailMarkdown';
import PostCommentHandler from '@/components/Post/PostDetail/PostCommentHandler';
import PostComment from '@/components/Post/PostDetail/PostComment';
import PostAction from '@/components/Post/PostDetail/PostAction';
import PostEngagement from '@/components/Post/PostDetail/PostEngagement';
import CustomBreadcrumb from '@/components/CustomBreadcrumb';
import ROUTES from '@/constants/routeName';

async function PostDetail() {
  const breadcrumbItems = [
    { label: 'Trang chủ', href: ROUTES.HOME },
    { label: 'Địa điểm vui chơi', href: ROUTES.ENTERTAINMENT },
    { label: 'Bài viết', isCurrent: true },
  ];

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between gap-8 mt-4">
      {/*Left content*/}
      <div className="w-full lg:w-[70%]">
        <PostCarousel />
        <CustomBreadcrumb items={breadcrumbItems} />
        <div className="w-full bg-white p-8 mb-16 rounded-lg">
          <PostDetailContentHeader />
          <PostDetailMarkdown />
          <PostAction />
          <PostEngagement />
          <PostCommentHandler />
          <PostComment />
          <PostComment />
        </div>
      </div>
      {/*Right content*/}
      <div className="hidden lg:w-[30%] lg:block">
        <SuggestedPosts />
      </div>
    </div>
  );
}

export default PostDetail;