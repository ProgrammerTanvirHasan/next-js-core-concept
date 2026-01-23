//use params use only client component

import { blogService } from "@/services/blog.service";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Eye, Calendar } from "lucide-react";
import { BlogPost } from "@/types/blog.types";

// import { useParams } from "next/navigation";

         // export const dynamicParams = false; 
 //er mane hocce 3 ta static vabe dekhanor por r baki data gula dekhabei na
export async function generateStaticParams() {
  const { data } = await blogService.getBlogs();
  return data.map((blog: BlogPost) => ({ id: blog.id })).splice(0, 3);
}
//server component default vabe dynamic route ke SSR kore thake kitnu eita ke force-fully static generate korate  generateStaticParams use kora hoi

export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: "string" }>;
}) {
  // const {id}=useParams()
  const { id } = await params;
  const { data } = await blogService.getBlogById(id);

  return (
    <article className="mx-auto max-w-4xl space-y-8 py-10">
      {/* Thumbnail */}
      {data.thumbnail ? (
        <div className="relative h-[420px] w-full overflow-hidden rounded-xl">
          <Image
            src={data.thumbnail}
            alt={data.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      ) : (
        <div className="flex h-[420px] items-center justify-center rounded-xl bg-muted text-muted-foreground">
          No Image Available
        </div>
      )}

      {/* Title */}
      <div className="space-y-3">
        <h1 className="text-4xl font-bold leading-tight">{data.title}</h1>

        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {new Date(data.createdAt).toDateString()}
          </span>

          <span className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            {data.views} views
          </span>

          {data.isFeatured && (
            <Badge className="bg-yellow-500 hover:bg-yellow-600">
              Featured
            </Badge>
          )}

          {data.status === "PUBLISHED" && (
            <Badge variant="secondary">Published</Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {data.content}
      </div>

      {/* Tags */}
      {data.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-6">
          {data.tags.map((tag: string) => (
            <Badge key={tag} variant="outline">
              #{tag}
            </Badge>
          ))}
        </div>
      )}
    </article>
  );
}
