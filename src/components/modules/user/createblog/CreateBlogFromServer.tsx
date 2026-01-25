import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { env } from "@/env";
import { cookies } from "next/headers";
const API_URL = env.API_URL;
export default function CreateBlogFromServer() {
  const createBlog = async (formData: FormData) => {
    "use server";

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const tags = formData.get("tags") as string;

    const blogData = {
      title,
      content,
      tags: tags.split(","),
    };

    const cookieStore = await cookies();

    const res = await fetch(`${API_URL}/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        cookie: cookieStore.toString(),
      },
      body: JSON.stringify(blogData),
    });

    console.log(res);
  };
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create Blog</CardTitle>
        <CardDescription>u can write Blog</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="blog-form" action={createBlog}>
          <FieldGroup>
            <Field>
              <FieldLabel>Name</FieldLabel>
              <Input id="title" type="text" name="title" required></Input>
            </Field>
            <Field>
              <FieldLabel>Content</FieldLabel>
              <Textarea id="content" name="content" required></Textarea>
            </Field>
            <Field>
              <FieldLabel>Tags (coma mendatory)</FieldLabel>
              <Input id="tags" type="text" name="tags" required></Input>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button form="blog-form" type="submit" className="w-full">
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}
