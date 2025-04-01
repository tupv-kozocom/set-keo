import PostCarousel from '@/components/Post/PostCarousel';
import PostDetailContentHeader from '@/components/Post/PostDetail/PostDetailContentHeader';
import PostDetailMarkdown from '@/components/Post/PostDetail/PostDetailMarkdown';
import InvitationList from '@/components/Post/PostInvited/InvitationList';
import PostLocation from '@/components/Post/PostLocation';
import CustomBreadcrumb from '@/components/CustomBreadcrumb';
import ROUTES from '@/constants/routeName';

function PostInvited() {
  const breadcrumbItems = [
    { label: 'Trang chủ', href: ROUTES.HOME },
    { label: 'Địa điểm vui chơi', href: ROUTES.ENTERTAINMENT },
    { label: 'Bài viết', isCurrent: true },
  ];

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-8 mt-4">
      <div className="flex justify-between gap-8">
        <div className="w-full lg:w-[70%]">
          <PostCarousel />
        </div>
        <div className="hidden lg:w-[30%] lg:block relative bg-white">
          <div className="absolute inset-0 p-4">
            <aside className="rounded-lg relative h-full">
              <InvitationList isOwner={false} />
            </aside>
          </div>
        </div>
      </div>
      <div>
        <CustomBreadcrumb items={breadcrumbItems} />
        <div className="w-full bg-white p-8 mb-8 rounded-lg">
          <PostDetailContentHeader />
          <PostDetailMarkdown />
        </div>
        <PostLocation />
      </div>
    </div>
  );
}

export default PostInvited;
