export const profile = {
  name: "Muhammad Varel Antoni",
  tagline: "Computer Vision Engineer Intern @ CADIT Consultants Asia Pte Ltd | Ex-Data Scientist Intern @ PT Telkom Indonesia | Undergraduate Information Technology Student @ University of Brawijaya",
  location: "Malang, Indonesia",
  email: "varelantoni@gmail.com",
  whatsapp: "6287836466177",
  github: "https://github.com/VarelAntoni",
  linkedin: "https://www.linkedin.com/in/muhammadvarelantoni/",
  cv: "https://drive.google.com/file/d/1bn4MXwnTIwdSniLUSfsysFHIk8dBI7bk/view?usp=sharing"
};

export const about = {
  title: "About Me",
  paragraphs: [
    "I’m Muhammad Varel Antoni, an Informatics student at the University of Brawijaya with a strong interest in Data Science and Artificial Intelligence. I enjoy transforming data into meaningful insights and building practical AI solutions that address real-world problems. My experience includes developing end-to-end machine learning pipelines from data preparation and modeling to evaluation and deployment across projects in computer vision and LLM-based applications.",
    "Beyond modeling, I focus on delivering usable and impactful products by designing clear workflows, ensuring high-quality data, and deploying prototypes using tools such as Streamlit for real-world testing. I am continuously learning and highly motivated to contribute to internship or project opportunities as a Data Scientist, Machine Learning Engineer, or Computer Vision Engineer, collaborating with teams to build reliable, user-centered AI systems."
  ]
};

export const experience = [
  {
    role: "Computer Vision Engineer Intern",
    org: "CADIT Consultants Asia Pte Ltd",
    time: "Oct 2025 - Present",
    detail:
      "Developing a Safety AI System for maritime logistics, maintaining dataset quality, and performing object classification related to safety and logistics (PPE, cargo).",
    logoPng: "/assets/company/cadit.png",
    icons: ["Computer Vision", "PyTorch", "YOLO", "Python"]
  },
  {
    role: "Data Scientist Intern",
    org: "PT Telkom Indonesia",
    time: "May 2025 - Aug 2025",
    detail:
      "Developed a RAG-based chatbot using internal documentation and built a YOLOv9 model for baby position detection.",
    logoPng: "/assets/company/telkom.png",
    icons: ["RAG", "LLM", "FAISS", "Computer Vision", "PyTorch", "YOLO", "Python"]
  },
  {
    role: "Machine Learning Engineer Bootcamp Participant",
    org: "DBS Coding Camp 2025",
    time: "Feb 2025 - Jun 2025",
    detail:
      "Completed hands-on ML/DL training covering recommender systems, time series forecasting, and NLP with transformers. Capstone project: Personal Color Detector.",
    logoPng: "/assets/company/dbs.png",
    icons: ["Machine Learning", "Deep Learning", "TensorFlow", "Python"]
  },
  {
    role: "Data Scientist (Project-Based Internship)",
    org: "Home Credit Indonesia (Rakamin)",
    time: "Dec 2024",
    detail:
      "End-to-end data science experience including Excel, Big Data, Data Warehousing, and Machine Learning, achieving an average score of 81.",
    logoPng: "/assets/company/homecredit.png",
    icons: ["Data Science", "SQL", "Microsoft Excel", "Machine Learning"]
  },
  {
    role: "Machine Learning & AI Bootcamp Participant",
    org: "DQLab",
    time: "Sep 2024 - Dec 2024",
    detail:
      "Learn about Machine Learning, Deep Learning and deploying a model to a dashboard and be One of the best participant by creating best portfolio.",
    logoPng: "/assets/company/dqlab.png",
    icons: ["Python", "Google Colab", "Streamlit", "Machine Learning"]
  }
];

export const projects = [
  {
    title: "Facility Maintenance Request Website (CV + LLM)",
    thumb: "/assets/projects/warp.png",
    category: ["Computer Vision", "LLM", "Product"],
    desc:
      "An AI-powered system that detects facility damage using custom-trained YOLOv9 and automatically generates maintenance reports integrated with the Gemini API.",
    longDesc:
      "An end-to-end AI system involving custom YOLOv9 training for facility damage detection. Detection results are converted into automated maintenance reports using the Gemini API and deployed as a web application to support the maintenance request workflow.",
    tech: ["Python", "YOLOv9", "Gemini API", "Streamlit", "Roboflow"],
    demo: "https://warp1.up.railway.app/",
    repo: "https://github.com/adhiyasaa/Warp/tree/varel-docker"
  },
  {
    title: "Get To Know About Varel's Experience",
    thumb: "/assets/projects/get_to_know.png",
    category: ["LLM", "RAG"],
    desc:
      "An interactive RAG-based virtual assistant that allows recruiters to explore my professional profile through real-time conversations.",
    longDesc:
      "Developed an end-to-end chatbot system using LangChain and Google Gemini API. This project implements Retrieval-Augmented Generation (RAG) to extract information from PDF documents, uses FAISS for efficient vector search, and applies prompt engineering to ensure accurate and professional responses. The system is enhanced with a human-in-the-loop feedback mechanism for model evaluation.",
    tech: ["Python", "LangChain", "Google Gemini API", "FAISS", "Streamlit", "RAG"],
    demo: "https://gettoknowvarel.streamlit.app/",
    repo: "https://github.com/VarelAntoni/machine_learning_project/tree/main/chat_cv"
  },
  {
    title: "Short-Video Food Recommender System",
    thumb: "assets/projects/food_recommender.png",
    category: ["LLM", "RAG", "Data Science"],
    desc:
      "A recommendation system designed to leverage corporate documentation and improve knowledge retrieval accuracy.",
    longDesc:
      "Built a complete RAG pipeline including document chunking, embedding, indexing, and retrieval for internal Q&A. The project focused on improving answer relevance and simplifying access to company knowledge.",
    tech: ["Python", "System Recommendation", "Deep Learning"],
    demo: "https://drive.google.com/file/d/1Y1NsAsONjWcMM15Gwr2Npu6QwilvOBwv/view?usp=sharing",
    repo: "https://github.com/YusufLeoR/sistem-rekomendasi_mie-ayam-rohimah/tree/main",
    huggingface: "https://huggingface.co/YusufLR/model_mie-ayam-rohimah/tree/main"
  },
  {
    title: "RAG-based Intelligent Chatbot",
    thumb: "/assets/projects/kca.png",
    category: ["LLM", "RAG", "Data Science"],
    desc:
      "An internal Retrieval-Augmented Generation chatbot designed to leverage corporate documentation and improve knowledge retrieval accuracy.",
    longDesc:
      "Built a complete RAG pipeline including document chunking, embedding, indexing, and retrieval for internal Q&A. The project focused on improving answer relevance and simplifying access to company knowledge.",
    tech: ["Python", "LLM", "RAG", "Streamlit"],
    demo: "",
    repo: "https://github.com/VarelAntoni/machine_learning_project/tree/main/knowledge-continuity-assistant"
  },
  {
    title: "Baby Position Safety Detection (YOLOv9)",
    thumb: "/assets/projects/bod.png",
    category: ["Computer Vision", "Safety"],
    desc:
      "A computer vision model to detect baby positions (sleeping, standing, near bed edges) for safety monitoring purposes.",
    longDesc:
      "Developed a custom YOLOv9 model to classify baby positions under various conditions. The dataset was labeled and validated to improve robustness in real-world scenarios.",
    tech: ["Python", "YOLOv9", "Roboflow", "CVAT"],
    demo: "",
    repo: "https://github.com/VarelAntoni/machine_learning_project/tree/main/baby_object_detection"
  },
  {
    title: "Personal Color Detector (DBS Capstone Project)",
    thumb: "/assets/projects/dbs.png",
    category: ["Computer Vision", "Dashboard"],
    desc:
      "A computer vision application that detects personal color tones to provide fashion recommendations, deployed through a dashboard.",
    longDesc:
      "Capstone project of DBS Coding Camp: built a CNN-based classifier for personal color detection, performed dataset labeling and augmentation, evaluated model performance, and deployed the solution to a web dashboard for user testing.",
    tech: ["Python", "CNN", "Streamlit", "Computer Vision"],
    demo: "https://color-tone-detector.vercel.app/home",
    repo: "https://github.com/Capstone-Coding-Camp-CC25-CF139"
  },
  {
    title: "Heart Disease Prediction Dashboard",
    thumb: "/assets/projects/hdp.png",
    category: ["Data Science", "Dashboard"],
    desc:
      "A heart disease prediction classification model with hyperparameter tuning, presented through an interactive dashboard.",
    longDesc:
      "A health analytics classification project involving EDA, feature engineering, training multiple models, hyperparameter tuning, and presenting results via an interactive dashboard for better interpretability.",
    tech: ["Python", "Machine Learning", "Streamlit"],
    demo: "https://varelantoni-dashboard.streamlit.app/heart_disease_prediction",
    repo: "https://github.com/VarelAntoni/machine_learning_project/tree/main/heart_disease_prediction"
  },
  {
    title: "Brain Tumor Prediction",
    thumb: "/assets/projects/bt.png",
    category: ["Data Science", "Image Classification"],
    desc:
      "A brain tumor prediction classification model using CNN.",
    longDesc:
      "Brain Tumor Detection & Classification System Developed an end-to-end Deep Learning solution to classify brain MRI scans into four categories (Glioma, Meningioma, Pituitary, No Tumor). Leveraging Convolutional Neural Networks (CNN), the project involved extensive Exploratory Data Analysis (EDA) to handle class imbalances and image augmentation to prevent overfitting. ",
    tech: ["Python", "Deep Learning", "CNN"],
    demo: "",
    repo: "https://github.com/VarelAntoni/machine_learning_project/tree/main/brain-tumor-prediction"
  }
];

export const achievements = [
  {
    title: "Finalist",
    subtitle: "AI Innovation Challenge COMPFEST 17",
    desc: "Selected as a finalist in a prestigious national AI competition developing cutting-edge solutions.",
    date: "2025"
  },
  {
    title: "1st Place Winner",
    subtitle: "ICT Business Idea Competition ITCC",
    desc: "Secured the top position by presenting an innovative ICT-based business solution.",
    date: "2024"
  },
  {
    title: "1st Place Winner",
    subtitle: "Business Plan Pokja Scientific Competition",
    desc: "Won first place for a comprehensive business plan strategy validating feasibility.",
    date: "2024"
  },
  {
    title: "Best Portfolio / Graduate",
    subtitle: "DQLab Machine Learning & AI Bootcamp",
    desc: "Learn about Machine Learning, Deep Learning and deploying a model to a dashboard. Recognized as one of the best participants.",
    date: "2024"
  }
];

export const certifications = [];

export const organizations = [
  {
    title: "Manager of Organizational Development",
    subtitle: "Society of Renewable Energy UB",
    desc: "Built organizational culture, evaluated development programs, and conducted soft skills training.",
    date: "Sep 2024 - Present",
    logo: "/assets/org/SREUB.png" 
  },
  {
    title: "Project Officer",
    subtitle: "Study With SRE x Lawnergy Talks 2024",
    desc: "Led four divisions and coordinated strategic planning to ensure successful seminar execution.",
    date: "Oct 2024 - Nov 2024",
    logo: "/assets/org/SREUB.png"
  },
  {
    title: "Head of Event",
    subtitle: "Company Visit & Power Plant Visit SRE UB 2024",
    desc: "Led renewable energy company visits, managing logistics and strategic partnerships.",
    date: "Mar 2024 - May 2024",
    logo: "/assets/org/SREUB.png"
  },
  {
    title: "Associate of Human Resources",
    subtitle: "Society of Renewable Energy UB",
    desc: "Streamlined operations, screened 80+ candidates, and hosted key organizational events.",
    date: "Nov 2023 - Sep 2024",
    logo: "/assets/org/SREUB.png"
  },
  {
    title: "Public Relations Staff of FILKOMPRENEUR 2023",
    subtitle: "BEM FILKOM UB",
    desc: "Managed public relations, media outreach, and communication to promote student entrepreneurship.",
    date: "Jun 2023 - Nov 2023",
    logo: "/assets/org/filkomprenuer.png" 
  },
  {
    title: "Facilitator of Synergy of Symphony 2023",
    subtitle: "KBMDSI FILKOM UB",
    desc: "Served as a Facilitator to guide new students and foster an inclusive environment.",
    date: "Sep 2023 - Nov 2023",
    logo: "/assets/org/sos.png" 
  },
  {
    title: "Public Relations Staff of Leader of Tomorrow 5.0",
    subtitle: "BEM FILKOM UB",
    desc: "Handled external communications and public relations strategies to shape future leaders.",
    date: "Jun 2023 - Oct 2023",
    logo: "/assets/org/lot.png"
  },
  {
    title: "Security Staff of Inauguration FILKOM 2022",
    subtitle: "BEM FILKOM UB",
    desc: "Ensured event safety, crowd control, and protocol enforcement as Security Staff.",
    date: "Dec 2022 - Jan 2023",
    logo: "/assets/org/inau.png"
  }
];
