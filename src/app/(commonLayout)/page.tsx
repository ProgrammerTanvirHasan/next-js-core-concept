import { Button } from "@/components/ui/button";
import { blogService } from "@/services/blog.service";

export default async function Home() {
  const { data } = await blogService.getBlogs(
    {
      isFeatured: true,
      search: "",
    },
    {
      cache: "no-store", //or
      revalidate: 10, //0r
    },
  );

  return (
    <div>
      <Button variant="outline">Click here</Button>
    </div>
  );
}
