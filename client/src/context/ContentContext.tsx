import { createContext, useContext, useState, ReactNode } from "react";
import { initialVideos, initialBlogs, initialStories, teamMembers as initialTeamMembers, upcomingProjects as initialUpcomingProjects, completedProjects as initialCompletedProjects } from "@/data/content";

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

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  featured: boolean;
  bio?: string;
  email?: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  date?: string;
  location?: string;
  impact?: string;
};

type ContentContextType = {
  videos: VideoItem[];
  blogs: BlogPost[];
  stories: Story[];
  teamMembers: TeamMember[];
  upcomingProjects: Project[];
  completedProjects: Project[];
  addVideo: (video: Omit<VideoItem, "id">) => void;
  addBlog: (blog: Omit<BlogPost, "id">) => void;
  addStory: (story: Omit<Story, "id" | "status" | "date">) => void;
  addTeamMember: (member: Omit<TeamMember, "id">) => void;
  addUpcomingProject: (project: Omit<Project, "id">) => void;
  approveStory: (id: string) => void;
  rejectStory: (id: string) => void;
  deleteVideo: (id: string) => void;
  deleteBlog: (id: string) => void;
  deleteStory: (id: string) => void;
  deleteTeamMember: (id: string) => void;
  deleteUpcomingProject: (id: string) => void;
};

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [videos, setVideos] = useState<VideoItem[]>(initialVideos);
  const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogs);
  const [stories, setStories] = useState<Story[]>(initialStories as Story[]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(initialTeamMembers.map(t => ({ ...t, id: Math.random().toString(36).substr(2, 9) })));
  const [upcomingProjects, setUpcomingProjects] = useState<Project[]>(initialUpcomingProjects.map(p => ({ ...p, id: Math.random().toString(36).substr(2, 9) })));
  const [completedProjects, setCompletedProjects] = useState<Project[]>(initialCompletedProjects.map(p => ({ ...p, id: Math.random().toString(36).substr(2, 9) })));

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

  const addTeamMember = (member: Omit<TeamMember, "id">) => {
    const newMember = { ...member, id: Math.random().toString(36).substr(2, 9) };
    setTeamMembers([...teamMembers, newMember]);
  };

  const addUpcomingProject = (project: Omit<Project, "id">) => {
    const newProject = { ...project, id: Math.random().toString(36).substr(2, 9) };
    setUpcomingProjects([...upcomingProjects, newProject]);
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

  const deleteTeamMember = (id: string) => {
    setTeamMembers(teamMembers.filter((t) => t.id !== id));
  };

  const deleteUpcomingProject = (id: string) => {
    setUpcomingProjects(upcomingProjects.filter((p) => p.id !== id));
  };

  return (
    <ContentContext.Provider value={{ 
      videos, 
      blogs, 
      stories, 
      teamMembers,
      upcomingProjects,
      completedProjects,
      addVideo, 
      addBlog, 
      addStory, 
      addTeamMember,
      addUpcomingProject,
      approveStory, 
      rejectStory, 
      deleteVideo, 
      deleteBlog, 
      deleteStory,
      deleteTeamMember,
      deleteUpcomingProject
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
