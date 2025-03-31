import {posts} from "@/app/posts/[id]/mock-data";
import SuggestedCard from "@/components/Post/PostDetail/SuggestedCard";

function SuggestedPosts() {
    return (
        <aside className="bg-white rounded-lg p-4">
            <h1 className="mb-6 text-gray-600 font-bold">Bạn cũng có thể thích</h1>
            <div className="flex flex-col space-y-3">
                {posts.map((post, index) => (
                    <SuggestedCard
                        key={index}
                        {...post}
                    />
                ))}
            </div>
        </aside>
    );
}

export default SuggestedPosts;