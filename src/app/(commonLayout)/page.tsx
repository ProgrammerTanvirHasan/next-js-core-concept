import { Button } from "@/components/ui/button";
import { blogService } from "@/services/blog.service";

export default async function Home() {
  const { data } = await blogService.getBlogs();
  console.log(data);
  return (
    <div>
      <Button variant="outline">Click here</Button>
    </div>
  );
}
