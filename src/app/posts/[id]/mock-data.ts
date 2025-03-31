type Post = {
    id: number;
    title: string;
    image: string;
    likes: number;
    comments: number;
};

export const posts: Post[] = [
    {
        "id": 1,
        "title": "Check in cầu Sông Hàn vô tư sống thật",
        "image": "/images/location1.jpg",
        "likes": 12,
        "comments": 7
    },
    {
        "id": 2,
        "title": "Check in Hà Giang mùa lúa chín nào mọi người",
        "image": "/images/location2.jpg",
        "likes": 300,
        "comments": 122
    },
    {
        "id": 3,
        "title": "Check in cầu Sông Hàn vô tư sống thật",
        "image": "/images/location3.jpg",
        "likes": 242,
        "comments": 12
    },
    {
        "id": 4,
        "title": "Check in Hà Giang mùa lúa chín nào mọi người",
        "image": "/images/location4.jpg",
        "likes": 21312,
        "comments": 1323
    },
    {
        "id": 5,
        "title": "Check in cầu Sông Hàn vô tư sống thật",
        "image": "/images/location5.jpg",
        "likes": 212,
        "comments": 14
    },
    {
        "id": 6,
        "title": "Một nước Ý thật khác",
        "image": "/images/quan-nhau.jpg",
        "likes": 100,
        "comments": 27
    }
]

type PreviewImage = {
    id: number;
    image: string;
}

export const previewImages: PreviewImage[] = [
    {
        "id": 1,
        "image": "/images/preview-1.png"
    },
    {
        "id": 2,
        "image": "/images/preview-2.png"
    },
    {
        "id": 3,
        "image": "/images/preview-3.png"
    },
    {
        "id": 4,
        "image": "/images/preview-4.png"
    },
]