import PostCarousel from '@/components/Post/PostCarousel';
import PostDetailContentHeader from '@/components/Post/PostDetail/PostDetailContentHeader';
import PostDetailMarkdown from '@/components/Post/PostDetail/PostDetailMarkdown';
import PostLocation from '@/components/Post/PostLocation';
import InvitationList from '@/components/Post/PostInvited/InvitationList';
import CustomBreadcrumb from '@/components/CustomBreadcrumb';
import ROUTES from '@/constants/routeName';

function PostOwner() {
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
        <div className="w-full bg-white p-8 mb-8 rounded-lg">
          <PostDetailContentHeader />
          <PostDetailMarkdown />
        </div>
        <PostLocation />
      </div>
      {/*Right content*/}
      <div className="hidden lg:w-[30%] lg:block">
        <aside className="bg-white rounded-lg p-4">
          <InvitationList />
        </aside>
      </div>
    </div>
  );
}

export default PostOwner;
