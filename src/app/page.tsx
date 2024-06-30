import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  console.log("images", images);

  return (
    <div className="gab-4 flex flex-wrap">
      {[...images, ...images, ...images].map((image, index) => (
        <div key={image.id + "-" + index} className="flex w-48 flex-col">
          <img src={image.url} alt="image" className="m-2 h-40 w-40" />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}
export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="text-2x1 h-full w-full">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
