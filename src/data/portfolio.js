export const PROJECTS = [
  {
    id: 1,
    name: 'Nexora MedAssist',
    tagline: 'Healthcare AI Support System',
    description:
      'A healthcare support system that suggests the top 5 possible conditions based on user-input symptoms with probability scores and reasoning. Built using NLP models like BERT and BioGPT for intelligent symptom analysis. Includes a doctor panel that prioritizes patients based on condition severity, improving hospital workflow efficiency. Designed to support users in low-access healthcare environments by providing early-stage insights before consulting a doctor.',
    badge: 'Top 10 Finalist – Infosys TechZooka',
    tags: ['BERT', 'BioGPT', 'NLP', 'Python', 'Healthcare AI'],
    color: '#1ab8c8',
    icon: '🏥',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
  },
  {
    id: 2,
    name: 'Object Identifier',
    tagline: 'Real-time Object Detection System',
    description:
      'Developed using OpenCV and YOLO for detecting and identifying objects in real-time with high accuracy. Applied to a waste segregation use-case, enabling classification of objects for improved processing efficiency. Extended as a practical solution for Smart India Hackathon (SIH 2025) for automated waste segregation systems across municipalities.',
    badge: 'SIH 2025 Submission',
    tags: ['OpenCV', 'YOLO', 'Computer Vision', 'Python', 'Real-time'],
    color: '#f85001',
    icon: '👁️',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    id: 3,
    name: 'Customer Churn Predictor',
    tagline: 'ML-Based Retention Analytics',
    description:
      'A predictive system to identify potential customer churn based on behavioral patterns and transaction data. Provides AI-generated feedback summaries and recommendations for improving retention. Supports retail analytics including customer-level insights, loyalty tracking, and targeted marketing strategies such as email and WhatsApp campaigns. Helps businesses understand performance gaps and optimize decision-making.',
    badge: 'Retail Analytics Solution',
    tags: ['Machine Learning', 'Pandas', 'Scikit-learn', 'Python', 'Analytics'],
    color: '#ffd700',
    icon: '📊',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    id: 4,
    name: 'CV Traffic Violation',
    tagline: 'Portable AI Traffic Detection',
    description:
      'A lightweight computer vision system that detects traffic violations in real-time using mobile or laptop cameras — no fixed CCTV infrastructure needed. Features helmet detection, seatbelt detection, signal violation detection, multi-violation detection in a single frame, and evidence capture (image/video). Designed for deployment in temporary zones, rural areas, and low-resource environments.',
    badge: 'Smart City Solution',
    tags: ['Computer Vision', 'YOLO', 'OpenCV', 'Python', 'Edge AI'],
    color: '#ff6b00',
    icon: '🚦',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80',
  },
  {
    id: 5,
    name: 'Expense Tracker',
    tagline: 'Financial Awareness System',
    description:
      'Developed during the SIMATS Hackathon. Provides a structured system for logging and monitoring expenses with simple data handling for financial awareness. Features clean UI for recording daily expenses, category breakdowns, monthly summaries, and visual charts to help users understand their spending habits and make better financial decisions.',
    badge: 'SIMATS Hackathon Build',
    tags: ['React', 'Node.js', 'MongoDB', 'Data Visualization'],
    color: '#1ab8c8',
    icon: '💰',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
  },
  {
    id: 6,
    name: 'Maze Game',
    tagline: 'Java-Based GUI Maze Game',
    description:
      'A maze-based GUI game built using Java Swing and AWT from scratch. Implements full navigation logic through keyboard controls (W, A, S, D and arrow keys) allowing users to traverse dynamically generated maze layouts. Features multiple difficulty levels, a timer system, score tracking, and custom-painted graphics for an immersive experience.',
    badge: 'Java Project',
    tags: ['Java', 'Swing', 'AWT', 'GUI', 'Game Dev'],
    color: '#f85001',
    icon: '🎮',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80',
  },
]

export const ACHIEVEMENTS = [
  { icon: '🏆', title: 'Top 10 Finalist', event: 'Infosys TechZooka' },
  { icon: '🥇', title: 'Winner', event: 'IEEE Codeathon' },
  { icon: '🥇', title: 'Winner', event: 'Try.Code Codeathon' },
  { icon: '🏅', title: 'Top 10 Finalist', event: 'DSCET BrainStromX\'26' },
  { icon: '🎖️', title: 'Finalist', event: 'MIT Prayatna\'26' },
]

export const SKILLS = [
  { name: 'Python', icon: 'python', color: '#3776ab' },
  { name: 'Java', icon: 'java', color: '#f89820' },
  { name: 'C', icon: 'c', color: '#a8b9cc' },
  { name: 'React', icon: 'react', color: '#61dafb' },
  { name: 'Tailwind', icon: 'tailwind', color: '#06b6d4' },
  { name: 'Node.js', icon: 'nodejs', color: '#339933' },
  { name: 'SQL', icon: 'sql', color: '#f85001' },
  { name: 'ML', icon: 'ml', color: '#ff6f00' },
  { name: 'Data Eng', icon: 'data', color: '#1ab8c8' },
  { name: 'DSA', icon: 'dsa', color: '#ffd700' },
  { name: 'OpenCV', icon: 'opencv', color: '#5c3ee8' },
  { name: 'YOLO', icon: 'yolo', color: '#f85001' },
  { name: 'BERT', icon: 'bert', color: '#4285f4' },
  { name: 'BioGPT', icon: 'biogpt', color: '#34a853' },
  { name: 'Prompt Eng', icon: 'prompt', color: '#1ab8c8' },
  { name: 'GitHub', icon: 'github', color: '#ffffff' },
  { name: 'MongoDB', icon: 'mongodb', color: '#47a248' },
  { name: 'VS Code', icon: 'vscode', color: '#007acc' },
  { name: 'Anaconda', icon: 'anaconda', color: '#44a833' },
  { name: 'Jupyter', icon: 'jupyter', color: '#f37626' },
  { name: 'Video Edit', icon: 'video', color: '#f85001' },
  { name: 'Filmmaking', icon: 'film', color: '#ffd700' },
  { name: 'Event Host', icon: 'event', color: '#1ab8c8' },
]

export const CONTACT = {
  phone: '9566687085',
  email: 'dalbertjoe.28ad@licet.ac.in',
  linkedin: 'https://www.linkedin.com/in/dalbert-joe-j/',
  github: 'https://github.com/Dalbert-joe',
}
