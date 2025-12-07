export const profile = {
  name: "Muhammad Varel Antoni",
  tagline: "Data Science & AI Enthusiast | Aspiring Data Scientist / ML-AI Engineer",
  location: "Malang, Indonesia",
  email: "varelantoni@gmail.com",
  whatsapp: "6287836466177",
  github: "https://github.com/VarelAntoni",
  linkedin: "https://www.linkedin.com/in/muhammadvarelantoni/",
  cv: "https://drive.google.com/file/d/1bn4MXwnTIwdSniLUSfsysFHIk8dBI7bk/view?usp=sharing"
};

export const highlights = [
  { label: "GPA", value: "3.80" },
  { label: "Role Target", value: "Data Scientist / ML-AI / CV Engineer" },
  { label: "Latest Internship", value: "CV Engineer - CADIT" },
  { label: "Achievement", value: "COMPFEST AI Finalist 2025" }
];

export const projects = [
  {
    title: "Facility Maintenance Request Website (CV + LLM)",
    desc:
      "Sistem AI untuk mendeteksi kerusakan fasilitas via YOLOv9 custom training, lalu menghasilkan laporan otomatis dengan integrasi Gemini API.",
    tech: ["Python", "YOLOv9", "Gemini API", "Streamlit", "Roboflow"],
    demo: "https://warp1.up.railway.app/",
    repo: "https://github.com/adhiyasaa/Warp/tree/varel-docker"
  },
  {
    title: "RAG-based Intelligent Chatbot (PT Telkom)",
    desc:
      "Chatbot internal berbasis Retrieval-Augmented Generation untuk memanfaatkan dokumentasi perusahaan dan meningkatkan akurasi pencarian knowledge.",
    tech: ["Python", "LLM", "RAG", "Streamlit"],
    demo: "https://case-study-link",
    repo: "https://github.com/USERNAME/repo"
  },
  {
    title: "Baby Position Safety Detection (YOLOv9)",
    desc:
      "Model vision untuk mendeteksi posisi bayi (tidur, berdiri, dekat tepi ranjang) sebagai bagian dari monitoring keselamatan.",
    tech: ["Python", "YOLOv9", "Roboflow", "CVAT"],
    demo: "",
    repo: "https://github.com/USERNAME/repo"
  },
  {
    title: "Personal Color Detector (Capstone DBS)",
    desc:
      "Aplikasi CV untuk mendeteksi personal color sebagai rekomendasi fashion. Dataset labeling + CNN modeling, lalu deploy ke dashboard.",
    tech: ["Python", "CNN", "Streamlit", "Computer Vision"],
    demo: "https://demo-link-kamu",
    repo: "https://github.com/USERNAME/repo"
  },
  {
    title: "Heart Disease Prediction Dashboard",
    desc:
      "Model klasifikasi prediksi penyakit jantung dengan hyperparameter tuning, ditampilkan pada dashboard interaktif.",
    tech: ["Python", "ML Classification", "Streamlit"],
    demo: "https://dashboard-link",
    repo: "https://github.com/USERNAME/repo"
  },
  {
    title: "Home Credit Scorecard Model (Rakamin)",
    desc:
      "Pemodelan credit risk scorecard end-to-end untuk prediksi risiko kredit dalam program project-based internship.",
    tech: ["Python", "SQL/MySQL", "Feature Engineering", "ML"],
    demo: "",
    repo: "https://github.com/USERNAME/repo"
  }
];

export const skills = {
  core: ["Python", "SQL", "MySQL", "Data Science", "Machine Learning", "Deep Learning"],
  aiFocus: [
    "Computer Vision (YOLO, CNN)",
    "LLM & RAG",
    "NLP Classification",
    "Time Series",
    "Recommendation System"
  ],
  tools: ["Google Colab", "Roboflow", "CVAT", "Streamlit", "GitHub/GitLab", "VS Code", "Excel"]
};

export const experience = [
  {
    role: "Computer Vision Engineer Intern",
    org: "CADIT Consultants Asia Pte Ltd",
    time: "Oct 2025 - Present",
    detail:
      "Mengembangkan Safety AI System untuk maritime logistics, menjaga kualitas dataset, serta klasifikasi objek keselamatan & logistik (PPE, Cargo)."
  },
  {
    role: "Data Scientist Intern",
    org: "PT Telkom Indonesia",
    time: "May 2025 - Aug 2025",
    detail:
      "Membangun RAG chatbot berbasis dokumentasi internal dan mengembangkan model YOLOv9 untuk deteksi posisi bayi."
  },
  {
    role: "Machine Learning Engineer Bootcamp",
    org: "DBS Coding Camp 2025",
    time: "Feb 2025 - Jun 2025",
    detail:
      "Pelatihan ML/DL dengan proyek hands-on (recommender, time series, NLP transformer), capstone Personal Color Detector."
  },
  {
    role: "Data Scientist Project-Based Internship",
    org: "Home Credit Indonesia (Rakamin)",
    time: "Dec 2024",
    detail:
      "Data science end-to-end (Excel, Big Data, Data Warehousing, ML), rata-rata skor 81."
  }
];

export const achievements = [
  "Finalis AI Innovation Challenge COMPFEST 17 (2025)",
  "1st Winner ICT Business Idea Competition ITCC 2024",
  "1st Winner Business Plan Pokja Scientific Competition 2024"
];

export const certifications = [
  "DBS Coding Camp 2025 — 13 sertifikat ML/DL (Dicoding)",
  "Home Credit DS Project-Based Internship (Rakamin)",
  "Accenture Data Analytics & Visualization (Forage)",
  "10+ SQL/MySQL Certifications (DQLab)"
];

export const organizations = [
  {
    title: "Manager of Organizational Development (HR)",
    org: "Society of Renewable Energy UB",
    time: "Sep 2024 - Present",
    detail:
      "Membangun kultur organisasi, evaluasi program pengembangan, dan training soft skills."
  },
  {
    title: "Project Officer",
    org: "Study With SRE x Lawnergy Talks 2024",
    time: "Oct 2024 - Nov 2024",
    detail:
      "Memimpin 4 divisi dan memastikan acara seminar berjalan sukses."
  }
];
