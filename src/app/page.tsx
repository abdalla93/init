import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/6b02abda-8456-4533-bc3f-aabec1604fad-hijv4i.jpg",
  "https://utfs.io/f/bfc47fce-7849-41e3-b693-eb45f0d42fd9-jlo1ag.jpeg",
  "https://utfs.io/f/9bf675a4-9997-48af-8e03-6cd7c0f6ca8a-nlisfc.jpeg",
  "https://utfs.io/f/38e34072-903c-408b-9db5-21825ff27bb3-iuzhru.webp"
];
const mockImages = mockUrls.map((url,index) => ({
  id:index + 1,
  url,
}))
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gab-4">
        {
          [...mockImages,...mockImages,...mockImages].map(image => (
            <div  key={image.id} className="w-48">
              <img src={image.url} alt="image" className="w-40 h-40 m-2"/>
            </div>
          ))
        }
      </div>
    </main>
  );
}
