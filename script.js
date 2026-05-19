const body = document.body;

const themeToggle = document.getElementById("themeToggle");
const languageToggle = document.getElementById("languageToggle");
const menuToggle = document.getElementById("menuToggle");
const popupMenu = document.getElementById("popupMenu");

const resumeViewLink = document.getElementById("resumeViewLink");
const resumeDownloadLink = document.getElementById("resumeDownloadLink");

/* =========================================================
   Theme Toggle
   ========================================================= */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark-theme");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    const isDark = body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

/* =========================================================
   Language Toggle
   ========================================================= */

const savedLanguage = localStorage.getItem("language") || "en";

function applyLanguageMode(language) {
  if (language === "he") {
    body.classList.add("he-mode");
    document.documentElement.lang = "he";
  } else {
    body.classList.remove("he-mode");
    document.documentElement.lang = "en";
  }

  translatePage(language);
  updateResumeLinks(language);
}

function translatePage(language) {
  document.querySelectorAll("[data-en][data-he]").forEach((element) => {
    element.textContent = element.dataset[language];
  });

  document.querySelectorAll("[data-en-html][data-he-html]").forEach((element) => {
    element.innerHTML = language === "he"
      ? element.dataset.heHtml
      : element.dataset.enHtml;
  });
}

function updateResumeLinks(language) {
  if (!resumeViewLink || !resumeDownloadLink) return;

  const isHebrew = language === "he";

  const resumePath = isHebrew
    ? "assets/resume-he.pdf"
    : "assets/resume-en.pdf";

  const downloadName = isHebrew
    ? "Shlomi-Hazan-Resume-Hebrew.pdf"
    : "Shlomi-Hazan-Resume-English.pdf";

  resumeViewLink.href = resumePath;
  resumeDownloadLink.href = resumePath;
  resumeDownloadLink.setAttribute("download", downloadName);
}

applyLanguageMode(savedLanguage);

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const isCurrentlyHebrew = body.classList.contains("he-mode");
    const newLanguage = isCurrentlyHebrew ? "en" : "he";

    localStorage.setItem("language", newLanguage);
    applyLanguageMode(newLanguage);
  });
}

/* =========================================================
   Popup Menu
   ========================================================= */

if (menuToggle && popupMenu) {
  menuToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    popupMenu.classList.toggle("open");
  });

  popupMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      popupMenu.classList.remove("open");
    });
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu = popupMenu.contains(event.target);
    const clickedMenuButton = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {
      popupMenu.classList.remove("open");
    }
  });
}