import {
  profile,
  projects,
  experience,
  achievements,
  organizations,
  about
} from "./data.js";

const $ = (q) => document.querySelector(q);
const el = (tag, cls = "") => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  return n;
};

// ---------------- HERO ----------------
$("#name").textContent = profile.name;
$("#tagline").textContent = profile.tagline;
$("#location").textContent = profile.location;

$("#email").textContent = profile.email;
$("#email").href = `mailto:${profile.email}`;

$("#wa").textContent = `+${profile.whatsapp}`;
$("#wa").href = `https://wa.me/${profile.whatsapp}`;

$("#github").href = profile.github;
$("#linkedin").href = profile.linkedin;

$("#cvBtn").href = profile.cv;

// Contact links text + href
const githubText = $("#githubText");
if (githubText) {
  githubText.textContent = profile.github.replace("https://", "");
  githubText.href = profile.github;
}
const linkedinText = $("#linkedinText");
if (linkedinText) {
  linkedinText.textContent = profile.linkedin.replace("https://", "");
  linkedinText.href = profile.linkedin;
}

// ---------------- ABOUT ----------------
const aboutTitle = $("#aboutTitle");
if (aboutTitle && about?.title) aboutTitle.textContent = about.title;

const aboutHeroBody = $("#aboutHeroBody");
if (aboutHeroBody && about?.paragraphs?.length) {
  aboutHeroBody.innerHTML = about.paragraphs
    .map((p) => `<p class="text-white/60 leading-relaxed">${p}</p>`)
    .join("");
}

const aboutHeroBullets = $("#aboutHeroBullets");
if (aboutHeroBullets && about?.bullets?.length) {
  aboutHeroBullets.innerHTML = about.bullets.map((b) => `<li>${b}</li>`).join("");
}

// ---------------- ICONIFY MAP ----------------
const iconifyMap = {
  // Interests
  "Data Science": "mdi:database-search",
  "Machine Learning Engineer": "mdi:chart-box-outline",
  "AI Engineer": "mdi:robot",

  // Skills
  "Python": "simple-icons:python",
  "SQL": "simple-icons:postgresql",
  "MySQL": "simple-icons:mysql",
  "Google Colab": "simple-icons:googlecolab",
  "Jupyter": "simple-icons:jupyter",
  "Roboflow": "simple-icons:roboflow",
  "Microsoft Excel": "simple-icons:microsoftexcel",
  "Streamlit": "simple-icons:streamlit",
  "Computer Vision": "mdi:eye-outline",
  "Machine Learning": "mdi:graph-outline",
  "Deep Learning": "mdi:brain",
  "LLM": "mdi:message-text-outline",
  "RAG": "mdi:layers-search-outline",
  "FAISS": "mdi:database-search-outline",
  "PyTorch": "simple-icons:pytorch",
  "TensorFlow": "simple-icons:tensorflow",
  "Scikit-learn": "simple-icons:scikitlearn",
  "Pandas": "simple-icons:pandas",
  "NumPy": "simple-icons:numpy",
  "OpenCV": "simple-icons:opencv",
  "YOLO": "mdi:target",
  "Docker": "simple-icons:docker",
  "GitHub": "simple-icons:github",
};

// chip builder
function chipRowIconify(labels, extraClass = "") {
  return labels.map((label) => {
    const icon = iconifyMap[label];
    return `
      <span class="skill-chip ${extraClass}">
        ${icon ? `<span class="iconify" data-icon="${icon}" aria-hidden="true"></span>` : ""}
        <span>${label}</span>
      </span>
    `;
  }).join("");
}

// ---------------- Interest chips ----------------
const interestWrap = $("#interestChips");
if (interestWrap) {
  const interests = ["Data Science", "Machine Learning Engineer", "AI Engineer"];
  interestWrap.innerHTML = chipRowIconify(interests, "skill-chip--photo");
}

// ---------------- Skills chips ----------------
const skillsWrap = $("#skillsChips");
if (skillsWrap) {
  const skillsList = [
    "Python", "SQL", "MySQL", "Google Colab", "Jupyter", "Roboflow", "Streamlit",
    "PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "YOLO", "FAISS", "GitHub", "Microsoft Excel", "Docker"
  ];
  skillsWrap.innerHTML = chipRowIconify(skillsList);
}

// ---------------- EXPERIENCE ----------------
const expWrap = $("#expList");
if (expWrap) {
  expWrap.innerHTML = "";
  experience.forEach((e) => {
    const item = el("div", "card surface-hover p-5");
    item.innerHTML = `
      <div class="flex gap-4 items-center">
        ${e.logoPng ? `
          <div class="company-badge shrink-0">
            <img src="${e.logoPng}" alt="${e.org} logo" class="company-logo" loading="lazy" />
          </div>
        ` : ""}
        <div class="min-w-0 w-full">
          <div class="font-semibold text-white/90">${e.role} - ${e.org}</div>
          <div class="text-sm text-white/50 mt-1">${e.time}</div>
          <p class="text-sm text-white/60 mt-2 leading-relaxed">${e.detail}</p>
          ${e.icons?.length ? `
            <div class="flex flex-wrap gap-2 mt-3">
              ${chipRowIconify(e.icons, "skill-chip--photo")}
            </div>
          ` : ""}
        </div>
      </div>
    `;
    expWrap.appendChild(item);
  });
}

// ---------------- ACHIEVEMENTS & ORG (GREEN CARDS) ----------------

// ---------------- ACHIEVEMENTS & ORG (MATCHING THEME) ----------------

function createCard(item, iconType) {
  const card = el("div", "card surface-hover group relative flex flex-col justify-between p-6 overflow-hidden");
  
  // Icon default (jika tidak ada logo gambar)
  const iconDefault = iconType === "trophy" ? "mdi:trophy-outline" : "mdi:account-group-outline";

  // Cek apakah ada item.logo?
  // Jika ada, render <img>. Jika tidak, render <span iconify>.
  const iconContent = item.logo 
    ? `<img src="${item.logo}" alt="${item.subtitle}" class="h-full w-full object-cover rounded-full" />`
    : `<span class="iconify text-xl" data-icon="${iconDefault}"></span>`;

  card.innerHTML = `
    <div class="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-500/0 blur-2xl group-hover:bg-emerald-500/10 transition duration-500"></div>

    <div class="relative z-10">
        <div class="flex items-start justify-between gap-4 mb-4">
            <div class="h-12 w-12 flex items-center justify-center rounded-full bg-emerald-500/5 border border-emerald-500/20 shrink-0 overflow-hidden group-hover:scale-105 transition-transform">
                ${iconContent}
            </div>
            
            <span class="text-xs font-mono text-white/40 bg-white/5 px-2 py-1 rounded border border-white/5 group-hover:border-emerald-500/30 transition-colors h-fit">
              ${item.date}
            </span>
        </div>

        <h3 class="text-lg font-bold text-white/90 leading-tight mb-1 group-hover:text-emerald-400 transition-colors">
            ${item.title}
        </h3>
        
        ${item.subtitle ? `<div class="text-sm font-medium text-emerald-100/60 mb-3">${item.subtitle}</div>` : ""}
        
        <p class="text-sm text-white/55 leading-relaxed">
            ${item.desc}
        </p>
    </div>
  `;
  return card;
}

const achGrid = $("#achGrid");
if (achGrid) {
  achGrid.innerHTML = "";
  achievements.forEach(item => {
    achGrid.appendChild(createCard(item, "trophy"));
  });
}

const orgGrid = $("#orgGrid");
if (orgGrid) {
  orgGrid.innerHTML = "";
  organizations.forEach(item => {
    orgGrid.appendChild(createCard(item, "group"));
  });
}

// ---------- Projects: filter + search + modal ----------
const projectGrid = $("#projectGrid");
const searchInput = $("#projectSearch");
const filterWrap = $("#filterWrap");
const modalRoot = $("#modalRoot");

const cats = ["All", ...new Set(projects.flatMap((p) => p.category))];
let activeCat = "All";
let searchTerm = "";

if (filterWrap) {
  cats.forEach((c) => {
    const b = el("button", "btn !px-3 !py-1.5 text-xs");
    b.textContent = c;
    if (c === "All") b.classList.add("btn-primary");
    b.addEventListener("click", () => {
      activeCat = c;
      [...filterWrap.children].forEach((x) => x.classList.remove("btn-primary"));
      b.classList.add("btn-primary");
      renderProjects();
    });
    filterWrap.appendChild(b);
  });
}

searchInput?.addEventListener("input", (e) => {
  searchTerm = e.target.value.toLowerCase();
  renderProjects();
});

function openModal(p) {
  if (!modalRoot) return;
  modalRoot.className = "modal-backdrop";
  modalRoot.innerHTML = `
    <div class="modal-panel">
      <button id="closeModal" class="absolute top-3 right-3 btn !px-3 !py-1.5 text-xs">Close</button>
      ${p.thumb ? `<div class="project-thumb rounded-2xl overflow-hidden mb-4"><img src="${p.thumb}" alt="${p.title}" loading="lazy" /></div>` : ""}
      <h3 class="text-xl font-semibold text-white/90">${p.title}</h3>
      <div class="h-px bg-white/[0.08] my-4"></div>
      <p class="text-sm text-white/60 leading-relaxed">${p.longDesc || p.desc}</p>
      <div class="mt-4 flex flex-wrap gap-2">
        ${p.tech.map((t) => `<span class="skill-chip skill-chip--photo"><span>${t}</span></span>`).join("")}
      </div>
      <div class="mt-5 flex flex-wrap gap-4 text-sm underline underline-offset-4 text-emerald-200">
        ${p.demo ? `<a class="hover-link" href="${p.demo}" target="_blank" rel="noreferrer">Demo</a>` : ""}
        ${p.repo ? `<a class="hover-link" href="${p.repo}" target="_blank" rel="noreferrer">Repo</a>` : ""}
        ${p.huggingface ? `<a class="hover-link" href="${p.huggingface}" target="_blank" rel="noreferrer">HuggingFace</a>` : ""}
      </div>
    </div>
  `;
  modalRoot.querySelector("#closeModal").onclick = closeModal;
  modalRoot.onclick = (e) => { if (e.target === modalRoot) closeModal(); };
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!modalRoot) return;
  modalRoot.className = "hidden";
  modalRoot.innerHTML = "";
  document.body.style.overflow = "";
}

function renderProjects() {
  if (!projectGrid) return;
  projectGrid.innerHTML = "";

  const filtered = projects.filter((p) => {
    const byCat = activeCat === "All" || p.category.includes(activeCat);
    const bySearch = !searchTerm ||
      p.title.toLowerCase().includes(searchTerm) ||
      p.desc.toLowerCase().includes(searchTerm) ||
      p.tech.join(" ").toLowerCase().includes(searchTerm);
    return byCat && bySearch;
  });

  filtered.forEach((p) => {
    const card = el("article", "project-card card surface-hover cursor-pointer");
    const links = `
      ${p.demo ? `<a class="hover-link" href="${p.demo}" target="_blank" rel="noreferrer">Demo</a>` : ""}
      ${p.repo ? `<a class="hover-link" href="${p.repo}" target="_blank" rel="noreferrer">Repo</a>` : ""}
      ${p.huggingface ? `<a class="hover-link" href="${p.huggingface}" target="_blank" rel="noreferrer">HuggingFace</a>` : ""}
    `;

    card.innerHTML = `
      <div class="project-thumb">
        ${p.thumb ? `<img src="${p.thumb}" alt="${p.title}" loading="lazy" />` : ""}
      </div>
      <div class="p-5 flex flex-col gap-2">
        <h3 class="font-semibold text-lg text-white/90 leading-snug">${p.title}</h3>
        <p class="text-sm text-white/60 leading-relaxed">${p.desc}</p>
        <div class="flex flex-wrap gap-2 mt-1">
          ${p.tech.map((t) => `<span class="skill-chip skill-chip--photo"><span>${t}</span></span>`).join("")}
        </div>
        <div class="mt-3 text-sm flex gap-4 underline underline-offset-4 text-emerald-200">
          ${links}
        </div>
      </div>
    `;
    card.addEventListener("click", () => openModal(p));
    projectGrid.appendChild(card);
  });

  revealCards();
}

function revealCards() {
  const cards = document.querySelectorAll(".project-card");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.remove("opacity-0", "translate-y-2");
          en.target.classList.add("opacity-100", "translate-y-0");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  cards.forEach((c) => {
    c.classList.add("opacity-0", "translate-y-2", "transition", "duration-500");
    io.observe(c);
  });
}
renderProjects();

// ---------- Toast + Utils ----------
const toast = $("#toast");
function showToast(msg = "Copied!") {
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1400);
}

$("#copyEmail")?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(profile.email);
    showToast("Email copied!");
  } catch {
    showToast("Failed to copy");
  }
});

$("#year").textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (id.length > 1) {
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", id);
    }
  });
});

const navLinks = [...document.querySelectorAll(".nav-link")];
const sections = navLinks
  .map((l) => document.querySelector(l.getAttribute("href")))
  .filter(Boolean);

const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        navLinks.forEach((l) => l.classList.remove("nav-active"));
        const id = "#" + en.target.id;
        const active = navLinks.find((l) => l.getAttribute("href") === id);
        active?.classList.add("nav-active");
      }
    });
  },
  { threshold: 0.55 }
);
sections.forEach((s) => spy.observe(s));

const toTop = $("#toTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) toTop.classList.remove("hidden");
  else toTop.classList.add("hidden");
});
toTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});