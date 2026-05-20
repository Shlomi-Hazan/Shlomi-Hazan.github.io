> **Personal Portfolio Notice**  
> This project was developed as a personal portfolio and resume website, focused on presenting my professional background, academic journey, selected projects, technical skills, leadership experience, and contact information in a clean and accessible way.

# Shlomi Hazan Portfolio Website 👨‍💻🌐

A personal portfolio and resume website built with **HTML**, **CSS**, and **JavaScript**, hosted with **GitHub Pages**.

The website presents my background as a **Computer Science student** and **Software Developer**, including:

- Personal introduction
- About section
- Selected projects
- Technical skills
- Development tools
- Education timeline
- Military service
- Pre-military leadership program
- English / Hebrew resume support
- Contact links

The website is designed to be clean, responsive, bilingual, and easy to navigate.

---

## Shortcuts 🛣️

--> **Live website:**  
[Visit Portfolio](https://shlomi-hazan.github.io/)

--> **Main page:**  
[`index.html`](./index.html)

--> **Stylesheet:**  
[`style.css`](./style.css)

--> **JavaScript logic:**  
[`script.js`](./script.js)

--> **Assets folder:**  
[`assets/`](./assets)

---

## Table of Contents 📌

- [About the Website](#about-the-website-)
- [Main Features](#main-features-)
- [Website Sections](#website-sections-)
- [Projects Featured](#projects-featured-)
- [Bilingual Support](#bilingual-support-)
- [Resume Support](#resume-support-)
- [Light and Dark Mode](#light-and-dark-mode-)
- [Project Structure](#project-structure-)
- [Built With](#built-with-)
- [How to Run Locally](#how-to-run-locally-)
- [Deployment](#deployment-)
- [Development Notes](#development-notes-)
- [Key Takeaways](#key-takeaways-)
- [Contact](#contact-)
- [Final Note](#final-note-)

---

## About the Website 📌

This website was created as a personal portfolio and online resume.

The goal of the project is to present my professional profile in a clear and polished way, while also showing hands-on web development ability through a real deployed website.

The website includes information about:

- My background as a Computer Science student
- My software development interests
- My academic and personal projects
- My technical skills
- My development environment
- My education
- My military leadership experience
- My pre-military leadership program
- My resume in both English and Hebrew

The website is fully static and does not require a backend.

---

## Main Features ✨

The portfolio includes:

- Responsive layout for desktop and mobile
- Elegant warm visual design
- Light / Dark mode toggle
- English / Hebrew language toggle
- RTL support for Hebrew content
- Stable navigation layout in both languages
- Popup navigation menu
- Resume view and download buttons
- Separate English and Hebrew resume files
- Project showcase cards
- Skills section
- Development tools section
- Education timeline
- Military service section
- Pre-military leadership section
- Contact buttons for Email, GitHub, and LinkedIn
- Hosted using GitHub Pages

---

## Website Sections 🧩

The website is organized into the following sections:

| Section | Purpose |
| :--- | :--- |
| Hero / Introduction | Presents my name, role, short introduction, resume buttons, and social links |
| About Me | Provides a professional summary and personal background |
| Projects | Showcases selected academic and personal projects |
| Skills | Lists programming languages, technologies, and core CS topics |
| Development Environment | Shows tools and environments I work with |
| Education | Presents my academic background and degree timeline |
| Military Service | Highlights leadership and command experience |
| Pre-Military Program | Presents leadership, volunteering, and logistics experience |
| Contact | Provides direct ways to contact me |

---

## Projects Featured 🚀

### DogNeeds 🐶

A SwiftUI iOS application for managing dog care, family sharing, emergency contacts, walks, updates, reminders, and more.

Status: **In Progress**

Main technologies:

- Swift
- SwiftUI
- iOS Development
- App State Management

---

### Botchat 🤖💬

A Python TCP/IP networking project combining packet analysis, client-server architecture, raw sockets, and a real-time chat application.

Main topics:

- TCP/IP communication
- Client-server architecture
- Socket programming
- Packet analysis
- Wireshark
- NiceGUI

Repository:  
[Chat-Bot-](https://github.com/Shlomi-Hazan/Chat-Bot-)

---

### AI vs Real Images ML Project 🧠🖼️

A Machine Learning project for classifying AI-generated and real images using KNN from scratch and feature engineering.

Main topics:

- Supervised learning
- Image classification
- Feature engineering
- KNN from scratch
- Grid Search
- Cross Validation
- Model evaluation

Repository:  
[AI-vs-Real-Images-ML-Project](https://github.com/Shlomi-Hazan/AI-vs-Real-Images-ML-Project)

---

## Bilingual Support 🌍

The website supports both:

- English
- Hebrew

The language toggle allows switching between the two languages directly from the navigation bar.

The website uses custom `data-en`, `data-he`, `data-en-html`, and `data-he-html` attributes in the HTML.

The JavaScript reads these attributes and updates the page content according to the selected language.

### Language Logic

The selected language is saved using:

```javascript
localStorage
```

This means the browser remembers the selected language even after refreshing or reopening the website.

### RTL Support

Hebrew mode includes RTL support for the main content.

However, the navigation bar remains stable in both languages so the layout does not break when switching between English and Hebrew.

---

## Resume Support 📄

The website includes separate resume files for English and Hebrew:

```text
assets/resume-en.pdf
assets/resume-he.pdf
```

The resume buttons automatically switch between the correct files according to the selected language.

### English Mode

```text
View Resume      -> assets/resume-en.pdf
Download Resume  -> assets/resume-en.pdf
```

### Hebrew Mode

```text
צפייה בקורות חיים   -> assets/resume-he.pdf
הורדת קורות חיים   -> assets/resume-he.pdf
```

This allows visitors to access the resume in the language that matches the website mode.

---

## Light and Dark Mode 🌗

The website includes a custom light / dark mode toggle.

The selected theme is saved in the browser using:

```javascript
localStorage
```

This allows the website to remember the selected theme after refreshing the page.

### Light Mode

The light mode uses a warm and elegant color palette:

- Cream
- Warm white
- Sand
- Brown
- Soft gold

### Dark Mode

The dark mode keeps the same warm visual direction while using darker background colors and softer contrast.

---

## Project Structure 🧌

| File / Folder | Short Summary |
| :--- | :--- |
| `index.html` | Main website structure and content |
| `style.css` | Full website styling, responsive design, dark mode, RTL support, and visual layout |
| `script.js` | Theme toggle, language toggle, translation logic, resume switching, and popup menu logic |
| `README.md` | Project documentation |
| `assets/` | Images and resume files |
| `assets/profile.jpg` | Profile image used in the hero card |
| `assets/resume-en.pdf` | English resume file |
| `assets/resume-he.pdf` | Hebrew resume file |

Folder structure:

```text
Shlomi-Hazan.github.io/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── profile.jpg
    ├── resume-en.pdf
    └── resume-he.pdf
```

---

## Built With 🛠️

The project was built using:

| Technology | Purpose |
| :--- | :--- |
| HTML5 | Website structure and semantic content |
| CSS3 | Styling, layout, responsiveness, dark mode, and RTL design |
| JavaScript | Theme toggle, language toggle, translation logic, and resume switching |
| Font Awesome | Icons used across buttons, cards, and navigation |
| Google Fonts | Typography improvements |
| GitHub Pages | Hosting and deployment |
| VS Code | Development environment |
| Live Server | Local preview during development |

---

## How to Run Locally 🏃

To run the website locally:

1. Clone the repository:

```bash
git clone https://github.com/Shlomi-Hazan/Shlomi-Hazan.github.io.git
```

2. Open the project folder:

```bash
cd Shlomi-Hazan.github.io
```

3. Open the project in VS Code:

```bash
code .
```

4. Start the website using the **Live Server** extension.

The local development URL will usually look like:

```text
http://127.0.0.1:5500/
```

---

## Deployment 🚀

The website is deployed using **GitHub Pages** from the `main` branch.

After making changes locally, use:

```bash
git status
git add .
git commit -m "Update portfolio website"
git push
```

GitHub Pages will automatically rebuild and publish the updated website.

Live website:

[https://shlomi-hazan.github.io/](https://shlomi-hazan.github.io/)

---

## Development Notes 📝

### Browser Cache

Sometimes GitHub Pages or the browser may show an older version of the website.

To force refresh the website, a version query can be added:

```text
https://shlomi-hazan.github.io/?v=1
```

The same approach can be used for CSS and JavaScript files if needed.

### macOS System Files

The `.DS_Store` file should not be committed to the repository.

Recommended `.gitignore` entry:

```text
.DS_Store
```

### Static Website

This project is a static website.

It does not use:

- Backend server
- Database
- Authentication
- Build tools
- Frameworks

This keeps the website lightweight, fast, and easy to deploy.

---

## Key Takeaways 🧠

This project demonstrates:

- Building a responsive personal portfolio from scratch
- Structuring a clean static website
- Creating a bilingual website with JavaScript
- Handling Hebrew RTL content without breaking the layout
- Implementing persistent light/dark mode
- Dynamically switching resume files based on selected language
- Deploying a website using GitHub Pages
- Presenting academic, technical, and leadership experience professionally

---

## Contact 📬

- GitHub: [Shlomi-Hazan](https://github.com/Shlomi-Hazan)
- LinkedIn: [Shlomi Hazan](https://www.linkedin.com/in/shlomi-hazan-in)
- Email: [shlomih2806@gmail.com](mailto:shlomih2806@gmail.com)

---

## Final Note 🧠

This portfolio website was built to represent my professional identity as a Computer Science student and software developer.

It brings together my academic background, technical projects, development skills, leadership experience, and resume in one accessible place.

The project also serves as a practical example of building, organizing, styling, translating, and deploying a personal website using core web technologies.
