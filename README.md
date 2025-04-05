# zBlog 🚀

![Peek+2025-03-29+08-39(1)](https://github.com/user-attachments/assets/551ee40a-643b-430f-a0ec-7b5974d05372)


**zBlog** is a modern, full-stack content-sharing platform built using **Next.js**, **Spring Boot**, **microservices architecture**, and **AWS**. It’s designed to showcase both strong technical foundations and a clean, user-centric experience.

> “My vision of what a truly meaningful, social platform should be — rich in content, not just scrolling.”

---

## 🌟 What is zBlog?

zBlog isn’t your average blogging platform. It’s a **multi-purpose content hub** where users can:

- ✍️ Write and share long-form content (life stories, travel, thoughts)
- 🎬 Review movies, 📚 critique books, 🧑‍💻 publish code reviews
- 💻 Run live code snippets (with tools like **CodeBox**, or other embedded code execution environments)
- 🌐 Connect through authentic, quality-driven posts — not just noise

Whether it's a reflective journal entry, a dev tutorial, or a book review, zBlog encourages **substance over speed**.

---

## 🛠 Tech Stack

### Frontend (📘 `zblog-frontend`)
- **Next.js 15+ (App Router)**
- **TailwindCSS** + **Framer Motion** for beautiful animations and UX
- **NextAuth.js** for authentication
- **Lucide Icons** for UI polish
- **React TSParticles** for animated backgrounds

t
### Backend (📙 `zblog-backend`)
- **Spring Boot 3** (Java 21+)
- **Spring Security** + JWT Auth
- **RESTful Microservices**
- **PostgreSQL** for data persistence
- **OpenAPI / Swagger** for documentation

### DevOps & Deployment
- **Dockerized services**
- **AWS (EC2, RDS, S3, Cognito, etc.)**
- GitHub Actions for CI/CD (planned)

---

## ✨ Features

| Feature                         | Status     | Description                                                                 |
|-------------------------------|------------|-----------------------------------------------------------------------------|
| User Registration/Login        | ✅ Done     | NextAuth integration with Spring Boot auth APIs                             |
| Authenticated Sessions         | ✅ Done     | JWT-based session management                                                |
| Post Creation & Browsing       | 🛠 WIP      | Rich editor for writing articles/posts with media/code                      |
| Live Code Execution            | 🔜 Planned  | Code snippets runnable via embedded tools like CodeBox or WebContainers     |
| Review System (Books, Movies)  | 🔜 Planned  | Custom templates for reviews + star ratings                                 |
| Responsive & Animated UI       | ✅ Done     | Fully responsive and mobile-friendly with smooth transitions                |
| AWS Integration                | 🛠 WIP      | Planned deployment to AWS stack                                             |

---

## 📂 Project Structure

```
zBlog/
│
├── frontend/        # Next.js 15+ app (App Router)
│   ├── components/
│   ├── app/
│   └── ...
│
├── backend/         # Spring Boot microservices
│   ├── auth-service/
│   ├── post-service/
│   └── ...
│
└── README.md       
```

---

## 🧪 Getting Started (Locally)

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
./mvnw spring-boot:run
```

Ensure PostgreSQL is running and `application.yml` is configured.

---

## 📦 Future Plans

- ✨ Full markdown support + WYSIWYG post editor
- 🧑‍🏫 Community curation and topic-based discovery
- 🎯 Gamification and follower system
- 📊 Analytics dashboard for writers
- ☁️ Full AWS migration (CloudFront, RDS, S3, Cognito)

---

## 🤝 Contributing

Interested in helping improve zBlog or adding features?  
Open a pull request or start a discussion in the Issues tab!

---

## 🧑‍💻 Author

**Zakaria — Full Stack Developer & Cloud Enthusiast**  
> Building zBlog as both a portfolio and a real project worth using.

---

## 📜 License

MIT License. See `LICENSE` file for details.

---

## 🚀 The Goal

> A social platform with **depth**, not distractions.  
> Built with ❤️ for people who want to **create** and **connect** meaningfully.
