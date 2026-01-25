import { createContext, useContext, useState, ReactNode } from "react";
import { initialVideos, initialBlogs, initialStories } from "@/data/content";

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
  content?: string;
};

export type Story = {
  id: string;
  author: string;
  role?: string;
  content: string;
  status: "pending" | "approved" | "rejected";
  date: string;
  rating?: number;
  image?: string; // Optional image URL
  videoLink?: string; // Optional video link
};

type ContentContextType = {
  videos: VideoItem[];
  blogs: BlogPost[];
  stories: Story[];
  addVideo: (video: Omit<VideoItem, "id">) => void;
  addBlog: (blog: Omit<BlogPost, "id">) => void;
  addStory: (story: Omit<Story, "id" | "status" | "date">) => void;
  approveStory: (id: string) => void;
  rejectStory: (id: string) => void;
  deleteVideo: (id: string) => void;
  deleteBlog: (id: string) => void;
  deleteStory: (id: string) => void;
};

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [videos, setVideos] = useState<VideoItem[]>(initialVideos);
  const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogs);
  const [stories, setStories] = useState<Story[]>(initialStories as Story[]);

  const addVideo = (video: Omit<VideoItem, "id">) => {
    const newVideo = { ...video, id: Math.random().toString(36).substr(2, 9) };
    setVideos([newVideo, ...videos]);
  };

  const addBlog = (blog: Omit<BlogPost, "id">) => {
    const newBlog = { ...blog, id: Math.random().toString(36).substr(2, 9) };
    setBlogs([newBlog, ...blogs]);
  };

  const addStory = (story: Omit<Story, "id" | "status" | "date">) => {
    const newStory: Story = {
      ...story,
      id: Math.random().toString(36).substr(2, 9),
      status: "pending", // Default to pending
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };
    setStories([newStory, ...stories]);
  };

  const approveStory = (id: string) => {
    setStories(stories.map(s => s.id === id ? { ...s, status: "approved" } : s));
  };

  const rejectStory = (id: string) => {
    setStories(stories.map(s => s.id === id ? { ...s, status: "rejected" } : s));
  };

  const deleteVideo = (id: string) => {
    setVideos(videos.filter((v) => v.id !== id));
  };

  const deleteBlog = (id: string) => {
    setBlogs(blogs.filter((b) => b.id !== id));
  };

  const deleteStory = (id: string) => {
    setStories(stories.filter((s) => s.id !== id));
  };

  return (
    <ContentContext.Provider value={{ 
      videos, 
      blogs, 
      stories, 
      addVideo, 
      addBlog, 
      addStory, 
      approveStory, 
      rejectStory, 
      deleteVideo, 
      deleteBlog, 
      deleteStory 
    }}>
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
