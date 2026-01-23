import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useContent } from "@/context/ContentContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  LogOut, 
  Plus, 
  Trash2, 
  Video, 
  FileText, 
  LayoutDashboard,
  ExternalLink 
} from "lucide-react";

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const { videos, blogs, addVideo, addBlog, deleteVideo, deleteBlog } = useContent();
  const [activeTab, setActiveTab] = useState("overview");

  // Auth check
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      setLocation("/login");
    }
  }, [setLocation]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setLocation("/login");
  };

  // Form states
  const [newVideo, setNewVideo] = useState({ title: "", duration: "", link: "" });
  const [newBlog, setNewBlog] = useState({ title: "", excerpt: "", date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) });

  const handleAddVideo = (e: React.FormEvent) => {
    e.preventDefault();
    addVideo({
      title: newVideo.title,
      duration: newVideo.duration,
      link: newVideo.link,
      thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=225&fit=crop" // Placeholder
    });
    setNewVideo({ title: "", duration: "", link: "" });
  };

  const handleAddBlog = (e: React.FormEvent) => {
    e.preventDefault();
    addBlog({
      title: newBlog.title,
      excerpt: newBlog.excerpt,
      date: newBlog.date
    });
    setNewBlog({ ...newBlog, title: "", excerpt: "" });
  };

  return (
    <div className="min-h-screen bg-muted/20">
      {/* Top Bar */}
      <header className="bg-background border-b px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LayoutDashboard className="h-6 w-6 text-primary" />
          <h1 className="font-serif text-xl font-bold">CMS Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => setLocation("/")}>
            <ExternalLink className="w-4 h-4 mr-2" /> View Site
          </Button>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto p-6 max-w-5xl">
        <Tabs defaultValue="overview" onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="blogs">Blogs</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Blogs</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{blogs.length}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Videos</CardTitle>
                  <Video className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{videos.length}</div>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Quick Start Guide</CardTitle>
                <CardDescription>
                  Welcome to your Content Management System. Here you can add new blog posts
                  or videos to your website. Changes made here will update the live site instantly.
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>

          {/* Blogs Tab */}
          <TabsContent value="blogs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Add New Blog Post</CardTitle>
                <CardDescription>Publish a new article to the Archive section</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddBlog} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Title</Label>
                    <Input 
                      value={newBlog.title}
                      onChange={(e) => setNewBlog({...newBlog, title: e.target.value})}
                      placeholder="e.g. New Community Initiative Success"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Excerpt</Label>
                    <Textarea 
                      value={newBlog.excerpt}
                      onChange={(e) => setNewBlog({...newBlog, excerpt: e.target.value})}
                      placeholder="Short summary of the article..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full sm:w-auto">
                    <Plus className="w-4 h-4 mr-2" /> Publish Post
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Existing Posts</h3>
              {blogs.map((blog) => (
                <Card key={blog.id}>
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{blog.title}</h4>
                      <p className="text-sm text-muted-foreground">{blog.date}</p>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => deleteBlog(blog.id)}>
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Videos Tab */}
          <TabsContent value="videos" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Add New Video</CardTitle>
                <CardDescription>Add a video link to the Archive section</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddVideo} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Video Title</Label>
                    <Input 
                      value={newVideo.title}
                      onChange={(e) => setNewVideo({...newVideo, title: e.target.value})}
                      placeholder="e.g. Field Report 2026"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Duration</Label>
                      <Input 
                        value={newVideo.duration}
                        onChange={(e) => setNewVideo({...newVideo, duration: e.target.value})}
                        placeholder="e.g. 5:30"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Link (YouTube)</Label>
                      <Input 
                        value={newVideo.link}
                        onChange={(e) => setNewVideo({...newVideo, link: e.target.value})}
                        placeholder="https://youtu.be/..."
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full sm:w-auto">
                    <Plus className="w-4 h-4 mr-2" /> Add Video
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Existing Videos</h3>
              {videos.map((video) => (
                <Card key={video.id}>
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-9 bg-muted rounded overflow-hidden">
                        <img src={video.thumbnail} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-medium">{video.title}</h4>
                        <p className="text-sm text-muted-foreground">{video.duration}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => deleteVideo(video.id)}>
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
