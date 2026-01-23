import heroImage from "@assets/generated_images/seedling_sprouting_in_sunlight.png";
import childrenImage from "@assets/generated_images/children_learning_under_tree.png";
import treePlantingImage from "@assets/generated_images/community_tree_planting_event.png";
import founderImage from "@assets/20260109_073202_1768269100356.jpg";
import carolineImage from "@assets/20260117_160940_1768830964832.jpg";
import eleonoraImage from "@assets/IMG-20260119-WA0029_1768830769372.jpg";
import davidImage from "@assets/Image-empty-state_1768832269234.jpg";
import logoImage from "@assets/generated_images/seedling_nonprofit_logo_design.png";

// ==============================================================================
// SITE CONFIGURATION & CONTENT
// Edit this file to update the website content.
// ==============================================================================

// 1. CONTACT INFORMATION
export const contactInfo = {
  email: "beaseedling.mbt@gmail.com",
  phone: "0712 345 678", // Add phone number if available
  address: "Marsabit County, Kenya",
  socials: {
    facebook: "https://facebook.com/beaseedling",
    instagram: "https://instagram.com/beaseedling",
    twitter: "https://twitter.com/beaseedling",
    youtube: "https://youtube.com/beaseedling",
    linkedin: "https://linkedin.com/company/beaseedling",
  }
};

// 2. PAYMENT & DONATION ACCOUNTS
export const paymentInfo = {
  mpesa: {
    paybill: "123456", // Replace with actual Paybill
    account: "Donation"
  },
  bank: {
    bankName: "Equity Bank Kenya",
    branch: "Marsabit",
    accountName: "Be a Seedling CBO",
    accountNumber: "1234567890123", // Replace with actual account number
  }
};

// 3. IMAGES (Map your imported images here)
export const images = {
  hero: heroImage,
  children: childrenImage,
  treePlanting: treePlantingImage,
  founder: founderImage,
  caroline: carolineImage,
  eleonora: eleonoraImage,
  david: davidImage,
  logo: logoImage,
};

// 4. TEAM MEMBERS
export const teamMembers = [
  { 
    name: "Jeremiah Lengure", 
    role: "Founder", 
    image: founderImage,
    bio: "Non-profit leader with over 12 years of experience in the development sector in Kenya. Jeremiah holds a master's degree in monitoring and evaluation from Maseno University and possesses skills in project management, research methods, and community-based natural resources management. He is currently serving as a project manager at the Global Development Incubator.",
    email: "sarunye@gmail.com",
    featured: true
  },
  { 
    name: "Caroline Sarunye", 
    role: "Programs Director", 
    image: carolineImage,
    bio: "Caroline leads our community-based programming with a focus on women's empowerment and education advocacy. She has extensive experience in community mobilization and indigenous knowledge preservation within Marsabit County.",
    email: "caroline@beaseedling.org"
  },
  { 
    name: "Eleonora", 
    role: "Research Partner", 
    image: eleonoraImage,
    bio: "Eleonora is a PhD candidate at Washington State University studying how pastoralist communities navigate uncertainty, knowledge transmission, and social cohesion under climate change and conflict. She integrates Indigenous knowledge systems with ethnography and computational modeling to examine mobility, trust, and resource management, with a focus on equity and social learning under environmental stress. Her interdisciplinary background spans psychology, women's studies, and anthropology, with expertise in participatory research, ethnographic fieldwork, and integrating grounded behavioral data into agent-based and epidemiological modeling. She is a fellow at the Zeit Stiftung Bucerius Institute, exploring creative approaches to uncertainty across disciplines."
  },
  { 
    name: "David Leparporori", 
    role: "Project Officer", 
    image: davidImage,
    bio: "David is a highly passionate individual with extensive experience in mentoring and poverty alleviation. He spent over seven years as a mentor with The BOMA Project and has implemented poverty graduation programs for over a decade. With a diverse background in farming, pastoralism, and tourism guiding, he is committed to making a positive impact in the lives of underprivileged communities.",
    email: "david@beaseedling.org"
  },
];

export const upcomingProjects = [
  { 
    title: "Rendille Indigenous Knowledge Initiative", 
    description: "A community-led preservation initiative in Ngurunit to document oral histories, ecological knowledge, and cultural practices of the Rendille community through digital archiving and intergenerational teaching.", 
    date: "Sept 2026 - May 2027", 
    location: "Ngurunit, Marsabit County" 
  },
  { title: "Tree Planting Drive 2026", description: "Planting 10,000 trees across 5 communities in Marsabit", date: "March 2026", location: "Laisamis Constituency" },
  { title: "Girls Education Summit", description: "Empowering 500 girls with life skills and menstrual health education", date: "April 2026", location: "Marsabit Central" },
];

export const completedProjects = [
  { title: "School Fees Program 2025", description: "Provided scholarships to 150 underprivileged students in Ngurunit", impact: "150 students supported" },
  { title: "Forest Restoration Initiative", description: "Restored 5 hectares of degraded forest land in Laisamis", impact: "2,000 trees planted" },
  { title: "Anti-FGM Campaign", description: "Community awareness reaching 20 villages across Marsabit County", impact: "500+ families educated" },
  { title: "Clean Water Project", description: "Installed water points in 3 schools in Marsabit Central", impact: "1,200 students benefited" },
];

export const initialVideos = [
  { id: "1", title: "Our Impact Story 2024", thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=225&fit=crop", duration: "5:32" },
  { id: "2", title: "Tree Planting Documentary", thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=225&fit=crop", duration: "12:45" },
  { id: "3", title: "Education Matters", thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=225&fit=crop", duration: "8:20" },
  { id: "4", title: "Community Education Initiative", thumbnail: "https://images.unsplash.com/photo-1577896335412-124745b4986d?w=400&h=225&fit=crop", duration: "10:15", link: "https://youtu.be/fj8qOyys65c?si=crs1FCZs0bbSC5bL" },
];

export const initialBlogs = [
  { id: "1", title: "Why Education is the Key to Breaking the Cycle of Poverty", excerpt: "Education transforms lives and communities...", date: "Jan 2026" },
  { id: "2", title: "Protecting Our Forests: A Community Approach", excerpt: "Sustainable conservation starts with people...", date: "Dec 2025" },
  { id: "3", title: "Empowering Girls: Stories of Hope", excerpt: "Meet the young women changing their communities...", date: "Nov 2025" },
];

export const researchItems = [
  {
    title: "Community Education Initiative",
    type: "Video",
    date: "Oct 2025",
    link: "https://youtu.be/fj8qOyys65c?si=crs1FCZs0bbSC5bL"
  },
  { title: "Impact Assessment Report 2024", type: "PDF", date: "Dec 2024" },
  { title: "Environmental Conservation Study", type: "PDF", date: "Oct 2024" },
  { title: "Girls Education Barriers Analysis", type: "PDF", date: "Aug 2024" },
];
