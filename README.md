# Rohit's Developer Portfolio 🚀

A modern, responsive personal portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS. Designed to showcase my engineering projects, technical skill set, and experience.

🔗 Live Site: https://www.rohitcodes.co.in

---

## 🛠️ Tech Stack

- Framework: Next.js (App Router & Turbopack)
- Language: TypeScript
- Styling: Tailwind CSS / PostCSS
- Icons: Lucide React
- Deployment & Hosting: Vercel

---

## 📁 Repository Structure

OGPortfolio/
├── portfolio/             # Next.js application root
│   ├── app/               # Next.js App Router (pages & layouts)
│   ├── components/        # Reusable UI components
│   ├── data/              # Static content, project details, bio
│   ├── public/            # Static assets, images, resume.pdf
│   ├── package.json       # Project dependencies & scripts
│   ├── tsconfig.json      # TypeScript configuration
│   └── next.config.ts     # Next.js configuration
└── README.md              # Repository documentation

---

## 🚀 Getting Started Locally

### Prerequisites

Ensure you have Node.js (v18.17+ or v20+) and npm installed:

node -v
npm -v

### Installation & Setup

1. Clone the repository:
   git clone https://github.com/Rohitdas06/OGPortfolio.git
   cd OGPortfolio/portfolio

2. Install dependencies:
   npm install

3. Run the local development server:
   npm run dev

4. Open http://localhost:3000 in your browser to view the application.

---

## 📜 Available Scripts

Inside the portfolio/ directory, you can run:

- npm run dev: Starts the local development server with Turbopack
- npm run build: Builds the optimized production build
- npm run start: Runs the built production server locally
- npm run lint: Runs ESLint to check for code issues

---

## 🌐 Deployment Note

This project is deployed on Vercel. Because the Next.js application resides inside a subfolder, the Root Directory in Vercel project settings is explicitly set to:

portfolio

---

## 📬 Contact & Connect

- Portfolio: https://www.rohitcodes.co.in
- GitHub: https://github.com/Rohitdas06