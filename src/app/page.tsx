import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/6b02abda-8456-4533-bc3f-aabec1604fad-hijv4i.jpg",
  "https://utfs.io/f/bfc47fce-7849-41e3-b693-eb45f0d42fd9-jlo1ag.jpeg",
  "https://utfs.io/f/9bf675a4-9997-48af-8e03-6cd7c0f6ca8a-nlisfc.jpeg",
  "https://utfs.io/f/38e34072-903c-408b-9db5-21825ff27bb3-iuzhru.webp",
];
const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log("posts", posts);

  return (
    <main className="">
      <div className="gab-4 flex flex-wrap">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="image" className="m-2 h-40 w-40" />
          </div>
        ))}
      </div>
    </main>
  );
}
