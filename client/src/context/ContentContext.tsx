import { createContext, useContext, useState, ReactNode } from "react";

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

const initialVideos: VideoItem[] = [
  { id: "1", title: "Our Impact Story 2024", thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=225&fit=crop", duration: "5:32" },
  { id: "2", title: "Tree Planting Documentary", thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=225&fit=crop", duration: "12:45" },
  { id: "3", title: "Education Matters", thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=225&fit=crop", duration: "8:20" },
  { id: "4", title: "Community Education Initiative", thumbnail: "https://images.unsplash.com/photo-1577896335412-124745b4986d?w=400&h=225&fit=crop", duration: "10:15", link: "https://youtu.be/fj8qOyys65c?si=crs1FCZs0bbSC5bL" },
];

const initialBlogs: BlogPost[] = [
  { id: "1", title: "Why Education is the Key to Breaking the Cycle of Poverty", excerpt: "Education transforms lives and communities...", date: "Jan 2026" },
  { id: "2", title: "Protecting Our Forests: A Community Approach", excerpt: "Sustainable conservation starts with people...", date: "Dec 2025" },
  { id: "3", title: "Empowering Girls: Stories of Hope", excerpt: "Meet the young women changing their communities...", date: "Nov 2025" },
];

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
