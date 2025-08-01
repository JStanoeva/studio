export interface Project {
  id: number;
  projectId: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  tags: string[];
  viewCount: number;
  interactionCount: number;
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    projectId: 'project-a',
    title: 'E-commerce Platform',
    description: 'A modern and scalable e-commerce solution.',
    longDescription: 'Developed a feature-rich e-commerce platform from scratch, focusing on performance and user experience. Integrated with Stripe for payments and implemented a custom admin dashboard for managing products, orders, and customers.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
    viewCount: 1500,
    interactionCount: 250,
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 2,
    projectId: 'project-b',
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for visualizing complex datasets.',
    longDescription: 'Built a dynamic data visualization tool using D3.js and React. The dashboard allows users to upload their data, choose from various chart types, and create interactive reports. It handles large datasets efficiently through data chunking and lazy loading.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['React', 'D3.js', 'Firebase'],
    viewCount: 2200,
    interactionCount: 450,
    liveUrl: '#',
  },
  {
    id: 3,
    projectId: 'project-c',
    title: 'Mobile Banking App',
    description: 'A secure and intuitive mobile banking application.',
    longDescription: 'Designed and developed a cross-platform mobile banking app using React Native. The app features biometric authentication, transaction history, fund transfers, and bill payments. Security was a top priority, with end-to-end encryption for all communications.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['React Native', 'TypeScript', 'Redux'],
    viewCount: 800,
    interactionCount: 120,
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 4,
    projectId: 'project-d',
    title: 'Customer Service Assistant',
    description: 'An intelligent assistant for customer service.',
    longDescription: 'Created an intelligent chatbot for a client\'s website to handle customer queries 24/7. The chatbot was built using Google\'s Dialogflow and integrated with a custom backend to fetch information from the company\'s knowledge base.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['AI', 'Dialogflow', 'Node.js', 'Next.js'],
    viewCount: 3100,
    interactionCount: 600,
    liveUrl: '#',
  },
  {
    id: 5,
    projectId: 'project-e',
    title: 'Content Management System',
    description: 'A headless CMS for a large-scale publication.',
    longDescription: 'Architected and built a custom headless CMS to give editors a powerful and flexible tool for content creation. The system provides a rich text editor, version control, and a GraphQL API for delivering content to various frontends (web, mobile).',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['GraphQL', 'TypeScript', 'Next.js', 'Prisma'],
    viewCount: 1250,
    interactionCount: 180,
    repoUrl: '#',
  },
  {
    id: 6,
    projectId: 'project-f',
    title: 'Smart Home IoT Controller',
    description: 'A web interface to control IoT devices in a smart home.',
    longDescription: 'A responsive web application that communicates with various smart home devices over MQTT. Users can control lights, thermostats, and view sensor data in real-time. The interface features a customizable dashboard and scheduling capabilities.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['IoT', 'MQTT', 'Vue.js', 'Firebase'],
    viewCount: 950,
    interactionCount: 95,
    liveUrl: '#',
  }
];
