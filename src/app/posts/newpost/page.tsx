"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const NewPosts = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start gap-10 pt-10">
      <div>New Collections</div>
      <NewCollectionForm />
    </div>
  );
};

export default NewPosts;

const formSchema = z.object({
  postName: z.string().min(2, {
    message: "Collection name must be at least 2 characters.",
  }),
  postDescription: z.string().min(8, {
    message: "Description can't be empty.",
  }),
  imageUrl: z.string().url(),
  postDetails: z.string().min(8, {
    message: "Details can't be empty.",
  }),
  postFooter: z.string().min(8, {
    message: "Footer can't be empty.",
  }),
});

function NewCollectionForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      postName: "",
      postDescription: "",
      imageUrl: "",
      postDetails: "",
      postFooter: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="w-96">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="postName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Post Name</FormLabel>
                <FormControl>
                  <Input placeholder="My Collection" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Post Description</FormLabel>
                <FormControl>
                  <Input placeholder="Description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <Input placeholder="Image" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Post Details</FormLabel>
                <FormControl>
                  <Input placeholder="Details" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postFooter"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Post Footer</FormLabel>
                <FormControl>
                  <Input placeholder="Footer" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
