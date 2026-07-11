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
  ExternalLink,
  MessageSquare,
  CheckCircle2,
  XCircle,
  Users,
  CalendarDays
} from "lucide-react";

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const { 
    videos, 
    blogs, 
    stories, 
    teamMembers,
    upcomingProjects,
    addVideo, 
    addBlog, 
    deleteVideo, 
    deleteBlog, 
    approveStory, 
    rejectStory, 
    deleteStory 
  } = useContent();
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
  
  // Note: These state handlers for new team members and projects are placeholders 
  // as the full CRUD for these isn't implemented in context yet, but the UI is prepared.
  const [newTeamMember, setNewTeamMember] = useState({ name: "", role: "", bio: "", email: "" });
  const [newProject, setNewProject] = useState({ title: "", description: "", date: "", location: "" });

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

  const handleAddTeamMember = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Functionality to add team member is in development.");
    // setTeamMembers([...teamMembers, newTeamMember])
  };
  
  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Functionality to add project is in development.");
     // setUpcomingProjects([...upcomingProjects, newProject])
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

      <main className="container mx-auto p-6 max-w-6xl">
        <Tabs defaultValue="overview" onValueChange={setActiveTab} className="space-y-6 flex flex-col md:flex-row gap-6">
          <TabsList className="flex flex-col w-full md:w-64 h-auto space-y-2 bg-transparent justify-start items-start p-0">
            <TabsTrigger value="overview" className="w-full justify-start data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
               <LayoutDashboard className="w-4 h-4 mr-2" /> Overview
            </TabsTrigger>
            <TabsTrigger value="blogs" className="w-full justify-start data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <FileText className="w-4 h-4 mr-2" /> Blogs
            </TabsTrigger>
            <TabsTrigger value="videos" className="w-full justify-start data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Video className="w-4 h-4 mr-2" /> Videos
            </TabsTrigger>
            <TabsTrigger value="stories" className="w-full justify-start data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <MessageSquare className="w-4 h-4 mr-2" /> Stories & Reviews
            </TabsTrigger>
            <TabsTrigger value="team" className="w-full justify-start data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Users className="w-4 h-4 mr-2" /> Team Members
            </TabsTrigger>
             <TabsTrigger value="projects" className="w-full justify-start data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <CalendarDays className="w-4 h-4 mr-2" /> Projects
            </TabsTrigger>
          </TabsList>
          
          <div className="flex-1 overflow-auto">
          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6 m-0">
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
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Stories</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stories.length}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stories.filter(s => s.status === 'pending').length} pending review
                  </p>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Quick Start Guide</CardTitle>
                <CardDescription>
                  Welcome to your Content Management System. Here you can add new blog posts,
                  videos, team members and projects to your website.
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>

          {/* Blogs Tab */}
          <TabsContent value="blogs" className="space-y-6 m-0">
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
          <TabsContent value="videos" className="space-y-6 m-0">
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

          {/* Stories Tab */}
          <TabsContent value="stories" className="space-y-6 m-0">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-xl">Community Stories Review</h3>
            </div>

            {/* Pending Stories */}
            <div className="space-y-4">
              <h4 className="font-medium text-muted-foreground uppercase tracking-wider text-xs">Pending Approval</h4>
              {stories.filter(s => s.status === 'pending').length === 0 && (
                <p className="text-sm text-muted-foreground italic">No pending stories to review.</p>
              )}
              {stories.filter(s => s.status === 'pending').map((story) => (
                <Card key={story.id} className="border-l-4 border-l-yellow-400">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-lg">{story.author}</h4>
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full uppercase font-bold tracking-wider">Pending</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{story.role} • {story.date}</p>
                        <p className="text-base italic border-l-2 pl-4 py-1">{story.content}</p>
                        {story.image && <div className="text-xs text-blue-600 truncate">Image: {story.image}</div>}
                        {story.videoLink && <div className="text-xs text-blue-600 truncate">Video: {story.videoLink}</div>}
                      </div>
                      <div className="flex md:flex-col gap-2 shrink-0 justify-center">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={() => approveStory(story.id)}>
                          <CheckCircle2 className="w-4 h-4 mr-2" /> Approve
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => rejectStory(story.id)}>
                          <XCircle className="w-4 h-4 mr-2" /> Reject
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Approved Stories */}
            <div className="space-y-4 pt-8 border-t">
              <h4 className="font-medium text-muted-foreground uppercase tracking-wider text-xs">Published Stories</h4>
              {stories.filter(s => s.status === 'approved').map((story) => (
                <Card key={story.id} className="opacity-75 hover:opacity-100 transition-opacity">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{story.author}</h4>
                      <p className="text-sm text-muted-foreground truncate max-w-md">{story.content}</p>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => deleteStory(story.id)}>
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Team Tab */}
           <TabsContent value="team" className="space-y-6 m-0">
            <Card>
              <CardHeader>
                <CardTitle>Add Team Member</CardTitle>
                <CardDescription>Add a new member to your team roster</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddTeamMember} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Name</Label>
                      <Input 
                        value={newTeamMember.name}
                        onChange={(e) => setNewTeamMember({...newTeamMember, name: e.target.value})}
                        placeholder="e.g. Jane Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Role</Label>
                      <Input 
                        value={newTeamMember.role}
                        onChange={(e) => setNewTeamMember({...newTeamMember, role: e.target.value})}
                        placeholder="e.g. Coordinator"
                        required
                      />
                    </div>
                  </div>
                   <div className="space-y-2">
                      <Label>Email</Label>
                      <Input 
                        type="email"
                        value={newTeamMember.email}
                        onChange={(e) => setNewTeamMember({...newTeamMember, email: e.target.value})}
                        placeholder="e.g. jane@example.com"
                      />
                    </div>
                  <div className="space-y-2">
                    <Label>Bio</Label>
                    <Textarea 
                      value={newTeamMember.bio}
                      onChange={(e) => setNewTeamMember({...newTeamMember, bio: e.target.value})}
                      placeholder="Short biography..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full sm:w-auto">
                    <Plus className="w-4 h-4 mr-2" /> Add Member
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Current Team</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {teamMembers && teamMembers.map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-4 flex items-start gap-4">
                     <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                         {member.image ? <img src={member.image} alt={member.name} className="w-full h-full object-cover" /> : <div className="w-full h-full bg-muted flex items-center justify-center text-xl font-bold">{member.name[0]}</div>}
                      </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{member.name}</h4>
                      <p className="text-sm text-primary font-medium">{member.role}</p>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
              </div>
            </div>
          </TabsContent>

          {/* Projects Tab */}
           <TabsContent value="projects" className="space-y-6 m-0">
            <Card>
              <CardHeader>
                <CardTitle>Add New Project</CardTitle>
                <CardDescription>List an upcoming project or initiative</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddProject} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Project Title</Label>
                    <Input 
                      value={newProject.title}
                      onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                      placeholder="e.g. Clean Water Initiative"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Date/Timeline</Label>
                      <Input 
                        value={newProject.date}
                        onChange={(e) => setNewProject({...newProject, date: e.target.value})}
                        placeholder="e.g. Summer 2026"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Location</Label>
                      <Input 
                        value={newProject.location}
                        onChange={(e) => setNewProject({...newProject, location: e.target.value})}
                        placeholder="e.g. Marsabit County"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea 
                      value={newProject.description}
                      onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                      placeholder="Project details..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full sm:w-auto">
                    <Plus className="w-4 h-4 mr-2" /> Add Project
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Upcoming Projects</h3>
              {upcomingProjects && upcomingProjects.map((project, index) => (
                <Card key={index}>
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{project.title}</h4>
                      <p className="text-sm text-muted-foreground">{project.date} • {project.location}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          </div>
        </Tabs>
      </main>
    </div>
  );
}
