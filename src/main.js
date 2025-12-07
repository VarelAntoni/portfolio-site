import {
  profile,
  highlights,
  projects,
  skills,
  experience,
  achievements,
  certifications,
  organizations
} from "./data.js";

const $ = (q) => document.querySelector(q);
const el = (tag, cls = "") => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  return n;
};

// HERO
$("#name").textContent = profile.name;
$("#tagline").textContent = profile.tagline;
$("#location").textContent = profile.location;

$("#email").textContent = profile.email;
$("#email").href = `mailto:${profile.email}`;

$("#wa").textContent = `+${profile.whatsapp}`;
$("#wa").href = `https://wa.me/${profile.whatsapp}`;

$("#github").href = profile.github;
$("#githubText").textContent = profile.github.replace("https://", "");

$("#linkedin").href = profile.linkedin;
$("#linkedinText").textContent = profile.linkedin.replace("https://", "");

$("#cvBtn").href = profile.cv;

// Highlights
const hiWrap = $("#highlights");
highlights.forEach(h => {
  const item = el("div", "p-4 border border-dashed border-line rounded-xl bg-panel2/60 hover-card hover-glow");
  item.innerHTML = `
    <div class="text-xs text-muted">${h.label}</div>
    <div class="font-semibold ${h.label==="GPA" ? "text-2xl font-extrabold" : "text-sm"}">${h.value}</div>
  `;
  hiWrap.appendChild(item);
});

// Skills
const chipRow = (arr) => arr.map(s => `<span class="chip hover-chip">${s}</span>`).join("");
$("#skillsCore").innerHTML = chipRow(skills.core);
$("#skillsAi").innerHTML = chipRow(skills.aiFocus);
$("#skillsTools").innerHTML = chipRow(skills.tools);

// Experience
const expWrap = $("#expList");
experience.forEach(e => {
  const item = el("div", "bg-panel2/80 border border-line rounded-xl p-4 hover-card hover-glow");
  item.innerHTML = `
    <div class="font-semibold">${e.role} — ${e.org}</div>
    <div class="text-sm text-muted">${e.time}</div>
    <p class="text-sm text-muted mt-1">${e.detail}</p>
  `;
  expWrap.appendChild(item);
});

// Achievements
$("#achList").innerHTML = achievements.map(a => `<li>${a}</li>`).join("");
$("#certList").innerHTML = certifications.map(c => `<li>${c}</li>`).join("");

// Organizations
const orgWrap = $("#orgList");
organizations.forEach(o => {
  const item = el("div", "bg-panel2/80 border border-line rounded-xl p-4 hover-card hover-glow");
  item.innerHTML = `
    <div class="font-semibold text-sm">${o.title} — ${o.org}</div>
    <div class="text-sm text-muted">${o.time}</div>
    <p class="text-sm text-muted mt-1">${o.detail}</p>
  `;
  orgWrap.appendChild(item);
});

// ---------- Projects: filter + search + modal ----------
const projectGrid = $("#projectGrid");
const searchInput = $("#projectSearch");
const filterWrap = $("#filterWrap");
const modalRoot = $("#modalRoot");

const cats = ["All", ...new Set(projects.flatMap(p => p.category))];
let activeCat = "All";
let searchTerm = "";

// filters
cats.forEach(c => {
  const b = el("button", "btn !px-3 !py-1.5 text-xs hover-card");
  b.textContent = c;
  if (c === "All") b.classList.add("btn-primary");
  b.addEventListener("click", () => {
    activeCat = c;
    [...filterWrap.children].forEach(x => x.classList.remove("btn-primary"));
    b.classList.add("btn-primary");
    renderProjects();
  });
  filterWrap.appendChild(b);
});

// search
searchInput?.addEventListener("input", (e) => {
  searchTerm = e.target.value.toLowerCase();
  renderProjects();
});

function openModal(p){
  modalRoot.className = "modal-backdrop";
  modalRoot.innerHTML = `
    <div class="modal-panel hover-glow">
      <button id="closeModal" class="absolute top-3 right-3 btn !px-2 !py-1 text-xs">Close</button>

      <h3 class="text-xl font-bold">${p.title}</h3>
      <p class="text-sm text-muted mt-2">${p.longDesc || p.desc}</p>

      <div class="mt-3 flex flex-wrap gap-1.5">
        ${p.tech.map(t=>`<span class="chip hover-chip">${t}</span>`).join("")}
      </div>

      <div class="mt-4 flex flex-wrap gap-2 text-sm underline underline-offset-4 text-indigo-100">
        ${p.demo ? `<a class="hover-link" href="${p.demo}" target="_blank" rel="noreferrer">Demo</a>` : ""}
        ${p.repo ? `<a class="hover-link" href="${p.repo}" target="_blank" rel="noreferrer">Repo</a>` : ""}
      </div>
    </div>
  `;

  modalRoot.querySelector("#closeModal").onclick = closeModal;
  modalRoot.onclick = (e)=>{ if(e.target === modalRoot) closeModal(); };
  document.body.style.overflow = "hidden";
}

function closeModal(){
  modalRoot.className = "hidden";
  modalRoot.innerHTML = "";
  document.body.style.overflow = "";
}

function renderProjects(){
  projectGrid.innerHTML = "";

  const filtered = projects.filter(p => {
    const byCat = activeCat === "All" || p.category.includes(activeCat);
    const bySearch =
      !searchTerm ||
      p.title.toLowerCase().includes(searchTerm) ||
      p.desc.toLowerCase().includes(searchTerm) ||
      p.tech.join(" ").toLowerCase().includes(searchTerm);
    return byCat && bySearch;
  });

  filtered.forEach(p => {
    const card = el(
      "article",
      "project-card card hover-card hover-glow p-5 flex flex-col gap-2 cursor-pointer"
    );

    const techChips = p.tech.map(t => `<span class="chip hover-chip">${t}</span>`).join("");

    const links = `
      ${p.demo ? `<a class="hover-link" href="${p.demo}" target="_blank" rel="noreferrer">Demo</a>` : ""}
      ${p.repo ? `<a class="hover-link" href="${p.repo}" target="_blank" rel="noreferrer">Repo</a>` : ""}
    `;

    card.innerHTML = `
      <h3 class="font-semibold text-lg">${p.title}</h3>
      <p class="text-sm text-muted">${p.desc}</p>
      <div class="flex flex-wrap gap-1.5">${techChips}</div>
      <div class="mt-auto pt-2 text-sm text-indigo-100 flex gap-3 underline underline-offset-4">
        ${links}
      </div>
    `;

    card.addEventListener("click", ()=>openModal(p));
    projectGrid.appendChild(card);
  });

  revealCards();
}

function revealCards(){
  const cards = document.querySelectorAll(".project-card");
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){
        en.target.classList.remove("opacity-0", "translate-y-2");
        en.target.classList.add("opacity-100", "translate-y-0");
        io.unobserve(en.target);
      }
    });
  },{threshold:.15});

  cards.forEach(c=>{
    c.classList.add("opacity-0","translate-y-2","transition","duration-500");
    io.observe(c);
  });
}
renderProjects();

// ---------- Toast + copy email ----------
const toast = $("#toast");
function showToast(msg="Copied!"){
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"), 1400);
}

$("#copyEmail")?.addEventListener("click", async ()=>{
  try{
    await navigator.clipboard.writeText(profile.email);
    showToast("Email copied!");
  }catch{
    showToast("Failed to copy");
  }
});

// year
$("#year").textContent = new Date().getFullYear();

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const id = a.getAttribute("href");
    if (id.length > 1) {
      e.preventDefault();
      document.querySelector(id).scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", id);
    }
  });
});

// scrollspy
const navLinks = [...document.querySelectorAll(".nav-link")];
const sections = navLinks
  .map(l => document.querySelector(l.getAttribute("href")))
  .filter(Boolean);

const spy = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{
    if(en.isIntersecting){
      navLinks.forEach(l => l.classList.remove("nav-active"));
      const id = "#" + en.target.id;
      const active = navLinks.find(l => l.getAttribute("href") === id);
      active?.classList.add("nav-active");
    }
  });
},{threshold:0.55});

sections.forEach(s => spy.observe(s));

// back to top
const toTop = $("#toTop");
window.addEventListener("scroll", ()=>{
  if(window.scrollY > 500) toTop.classList.remove("hidden");
  else toTop.classList.add("hidden");
});
toTop?.addEventListener("click", ()=>{
  window.scrollTo({top:0, behavior:"smooth"});
});
