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

// helper
const $ = (q) => document.querySelector(q);
const el = (tag, cls = "") => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  return n;
};

// inject hero
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

// highlights
const hiWrap = $("#highlights");
highlights.forEach(h => {
  const item = el("div", "p-4 border border-dashed border-line rounded-xl bg-panel2/60");
  item.innerHTML = `
    <div class="text-xs text-muted">${h.label}</div>
    <div class="font-semibold ${h.label === "GPA" ? "text-2xl font-extrabold" : "text-sm"}">${h.value}</div>
  `;
  hiWrap.appendChild(item);
});

// projects
const projWrap = $("#projectGrid");
projects.forEach(p => {
  const card = el("article", "project-card card p-5 flex flex-col gap-2");
  const techChips = p.tech.map(t => `<span class="chip">${t}</span>`).join("");

  const links = `
    ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noreferrer">Demo</a>` : ""}
    ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noreferrer">Repo</a>` : ""}
  `;

  card.innerHTML = `
    <h3 class="font-semibold text-lg">${p.title}</h3>
    <p class="text-sm text-muted">${p.desc}</p>
    <div class="flex flex-wrap gap-1.5">${techChips}</div>
    <div class="mt-auto pt-2 text-sm text-indigo-100 flex gap-3 underline underline-offset-4">
      ${links || ""}
    </div>
  `;
  projWrap.appendChild(card);
});

// skills
const chipRow = (arr) => arr.map(s => `<span class="chip">${s}</span>`).join("");
$("#skillsCore").innerHTML = chipRow(skills.core);
$("#skillsAi").innerHTML = chipRow(skills.aiFocus);
$("#skillsTools").innerHTML = chipRow(skills.tools);

// experience
const expWrap = $("#expList");
experience.forEach(e => {
  const item = el("div", "bg-panel2/80 border border-line rounded-xl p-4");
  item.innerHTML = `
    <div class="font-semibold">${e.role} — ${e.org}</div>
    <div class="text-sm text-muted">${e.time}</div>
    <p class="text-sm text-muted mt-1">${e.detail}</p>
  `;
  expWrap.appendChild(item);
});

// achievements
$("#achList").innerHTML = achievements.map(a => `<li>${a}</li>`).join("");
$("#certList").innerHTML = certifications.map(c => `<li>${c}</li>`).join("");

// organizations
const orgWrap = $("#orgList");
organizations.forEach(o => {
  const item = el("div", "bg-panel2/80 border border-line rounded-xl p-4");
  item.innerHTML = `
    <div class="font-semibold text-sm">${o.title} — ${o.org}</div>
    <div class="text-sm text-muted">${o.time}</div>
    <p class="text-sm text-muted mt-1">${o.detail}</p>
  `;
  orgWrap.appendChild(item);
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

// reveal animation
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
