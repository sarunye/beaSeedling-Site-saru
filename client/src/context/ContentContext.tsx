import { createContext, useContext, useState, ReactNode } from "react";
import { initialVideos, initialBlogs } from "@/data/content";

// Define types
export type VideoItem = {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  link?: string;
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author?: string;
};

type ContentContextType = {
  videos: VideoItem[];
  blogs: BlogPost[];
  addVideo: (video: Omit<VideoItem, "id">) => void;
  addBlog: (blog: Omit<BlogPost, "id">) => void;
  deleteVideo: (id: string) => void;
  deleteBlog: (id: string) => void;
};

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [videos, setVideos] = useState<VideoItem[]>(initialVideos);
  const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogs);

  const addVideo = (video: Omit<VideoItem, "id">) => {
    const newVideo = { ...video, id: Math.random().toString(36).substr(2, 9) };
    setVideos([newVideo, ...videos]);
  };

  const addBlog = (blog: Omit<BlogPost, "id">) => {
    const newBlog = { ...blog, id: Math.random().toString(36).substr(2, 9) };
    setBlogs([newBlog, ...blogs]);
  };

  const deleteVideo = (id: string) => {
    setVideos(videos.filter((v) => v.id !== id));
  };

  const deleteBlog = (id: string) => {
    setBlogs(blogs.filter((b) => b.id !== id));
  };

  return (
    <ContentContext.Provider value={{ videos, blogs, addVideo, addBlog, deleteVideo, deleteBlog }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
}
