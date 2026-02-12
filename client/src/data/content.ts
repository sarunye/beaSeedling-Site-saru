
// ... existing imports ...
import heroImage from "@assets/seedlings_merille.avif";
import childrenImage from "@assets/mentorship.avif";
import treePlantingImage from "@assets/fight_prosopis.avif";
import communityImage from "@assets/community_gift.avif";
import founderImage from "@assets/20260109_073202_1768269100356.jpg";
import carolineImage from "@assets/20260117_160940_1768830964832.jpg";
import eleonoraImage from "@assets/IMG-20260119-WA0029_1768830769372.jpg";
import davidImage from "@assets/Image-empty-state_1768832269234.jpg";
import logoImage from "@assets/generated_images/seedling_nonprofit_logo_design.png";
import martinImage from "@assets/martin_korleyte.jpeg";
import davidNewImage from "@assets/david_leparporori.jpeg";

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
    accountName: "beaseedling",
    accountNumber: "1010183178568", 
  }
};

// 3. IMAGES (Map your imported images here)
export const images = {
  hero: heroImage,
  children: childrenImage,
  treePlanting: treePlantingImage,
  community: communityImage,
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
    name: "Caroline Kaldale", 
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
    role: "Director of Field Operations", 
    image: davidNewImage,
    bio: "David is a highly passionate leader with extensive experience in mentoring and poverty alleviation. He spent over seven years as a mentor with The BOMA Project and has implemented poverty graduation programs for over a decade. With a diverse background in farming, pastoralism, and tourism guiding, he leads our on-the-ground impact strategies.",
    email: "david@beaseedling.org"
  },
  { 
    name: "Martin Hirkena Korleyte", 
    role: "Education & Development Lead", 
    image: martinImage,
    bio: "A dedicated educator with over 15 years of experience in Northern Kenya, Martin has served as both a teacher and administrator. He brings deep expertise in overcoming educational barriers for marginalized learners and is a passionate advocate for community empowerment and sustainable development."
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
  { id: "1", title: "Education Space: Transforming Lives", thumbnail: "https://images.unsplash.com/photo-1577896335412-124745b4986d?w=400&h=225&fit=crop", duration: "10:15", link: "https://www.youtube.com/embed/sHNUDyqdI2c?si=V-VnVkiI0Q5ue4Mw" },
  { id: "2", title: "Planting Trees for the Future", thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=225&fit=crop", duration: "12:45", link: "https://www.youtube.com/embed/8dmzZMVP_yY?si=ms3dPYaWM-eDPVxL" },
  { id: "3", title: "Our Impact Story 2024", thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=225&fit=crop", duration: "5:32", link: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
];

export const initialBlogs = [
  { 
    id: "1", 
    title: "Why Education is the Key to Breaking the Cycle of Poverty", 
    excerpt: "Education transforms lives and communities...", 
    date: "Jan 2026",
    author: "Jeremiah Lengure",
    content: `
      <p>Education is more than just reading and writing; it is a fundamental human right and a powerful tool for social and economic transformation. In Marsabit County, where poverty rates are high, access to quality education remains a significant challenge.</p>
      
      <h3>The Current Challenge</h3>
      <p>Many children in our region face barriers such as lack of school fees, long distances to schools, and cultural practices that prioritize early marriage over education for girls. These challenges perpetuate a cycle of poverty that is difficult to break without intervention.</p>
      
      <h3>Our Approach</h3>
      <p>Be a Seedling is committed to removing these barriers through our scholarship programs and community advocacy. By providing school fees, uniforms, and learning materials, we ensure that vulnerable children can stay in school and focus on their studies.</p>
      
      <h3>The Impact</h3>
      <p>Educated children are more likely to secure better jobs, support their families, and contribute positively to their communities. They become agents of change, advocating for environmental conservation, health, and social justice.</p>
      
      <blockquote>"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela</blockquote>
      
      <p>Join us in this mission. Your support can change a life forever.</p>
    `
  },
  { 
    id: "2", 
    title: "Protecting Our Forests: A Community Approach", 
    excerpt: "Sustainable conservation starts with people...", 
    date: "Dec 2025",
    author: "Caroline Sarunye",
    content: `
      <p>Marsabit's unique ecosystem is under threat from deforestation and climate change. Protecting our forests is not just about saving trees; it's about preserving our heritage and securing our future.</p>
      
      <h3>Community-Led Conservation</h3>
      <p>We believe that true conservation happens when the community is involved. Our programs educate local residents on the importance of trees for water retention, soil health, and biodiversity.</p>
      
      <p>Through our "Sponsor a Tree" initiative, we have planted over 10,000 indigenous trees in the last year alone. Each tree is cared for by a community member, ensuring its survival and growth.</p>
    `
  },
  { 
    id: "3", 
    title: "Empowering Girls: Stories of Hope", 
    excerpt: "Meet the young women changing their communities...", 
    date: "Nov 2025",
    author: "David Leparporori",
    content: `
      <p>Meet Amina, a 16-year-old girl from Laisamis who dreams of becoming a doctor. Just two years ago, she was at risk of dropping out of school due to lack of funds. Today, thanks to our supporters, she is top of her class.</p>
      
      <p>Amina's story is one of many. Across Marsabit, girls are defying odds and pursuing their dreams. But they need our help.</p>
      
      <p>Investing in a girl's education has a ripple effect. She is more likely to reinvest her income into her family, ensuring better health and education for the next generation.</p>
    `
  },
];

export const researchItems = [
  {
    title: "Community Education Initiative Video",
    type: "Video",
    date: "Oct 2025",
    link: "https://www.youtube.com/embed/fj8qOyys65c",
    description: "A documentary showcasing our recent education initiative in Marsabit Central."
  },
  { 
    title: "Impact Assessment Report 2024", 
    type: "PDF", 
    date: "Dec 2024",
    description: "A comprehensive analysis of our programs' effectiveness and reach in the past year. Download the full PDF to learn more about our metrics and success stories."
  },
  { 
    title: "Environmental Conservation Study", 
    type: "PDF", 
    date: "Oct 2024",
    description: "Research findings on the impact of our reforestation efforts on local microclimates."
  },
  { 
    title: "Girls Education Barriers Analysis", 
    type: "PDF", 
    date: "Aug 2024",
    description: "An in-depth look at the socio-economic factors preventing girls from accessing secondary education."
  },
];

export const initialStories = [
  {
    id: "1",
    author: "Fatuma Ali",
    role: "Community Member",
    content: "Be a Seedling has transformed our village. The water project means my daughters can go to school instead of walking miles for water. We are forever grateful.",
    status: "approved",
    date: "Jan 15, 2026",
    rating: 5
  },
  {
    id: "2",
    author: "John Kamau",
    role: "Volunteer",
    content: "Volunteering with this team was a life-changing experience. The dedication of the staff and the resilience of the community is inspiring.",
    status: "approved",
    date: "Dec 20, 2025",
    rating: 5
  },
  {
    id: "3",
    author: "Sarah O.",
    role: "Donor",
    content: "I love seeing the regular updates and transparency. Knowing exactly where my donation goes makes me confident in supporting this cause.",
    status: "pending",
    date: "Jan 24, 2026",
    rating: 4
  }
];
