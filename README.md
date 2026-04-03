# Arjel Cosmeceuticals 🌿✨

![Arjel Banner](https://via.placeholder.com/1200x400/FAFAFA/1A1A2E?text=Arjel+Cosmeceuticals)

A premium, high-performance e-commerce frontend tailored for Arjel Cosmeceuticals. This application delivers a sophisticated and seamless shopping experience for premium skincare products, featuring elegant scroll animations, dynamic routing, and a clean, accessible user interface.

## ✨ Features

- **Modern Tech Stack**: Built on the robust **Next.js 15** App Router.
- **Dynamic Routing**: Dedicated, SEO-friendly pages for products (`/product/[slug]`), categories, and shop catalog (`/shop`).
- **Premium UI/UX**: Meticulously designed with custom **Tailwind CSS v4** styling. Includes sleek hover effects, glassmorphism elements, and smooth scroll-reveal animations (`ScrollRevealProvider`).
- **Responsive Design**: Flawlessly adapts across all devices, from mobile to ultra-wide desktop monitors.
- **Global State Cart**: Ready structure for global cart state management across multiple pages.
- **Typography & Branding**: Utilizes *Inter* for clean sans-serif readability and *Playfair Display* for elegant, premium serif headings.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (React 19 RC)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: React Icons / Lucide React (where applicable)
- **Animations**: Custom CSS Keyframes & Intersection Observer API (Scroll Reveal)
- **Fonts**: Google Fonts

## 📁 Project Structure

```text
Arjel/
├── app/
│   ├── bundles/            # Bundles page
│   ├── components/         # Reusable UI components (Hero, Bestsellers, etc.)
│   ├── product/[slug]/     # Dynamic product detail pages
│   ├── shop/               # Full catalog page
│   ├── globals.css         # Global Tailwind v4 theme & custom utilities
│   ├── layout.js           # Root layout featuring NavBar and Footer
│   └── page.js             # Landing page
├── lib/
│   └── data.js             # Mock database / product catalogue data
├── public/                 # Static assets (images, icons, etc.)
└── .vscode/                # IDE configurations
```

## 🛠️ Getting Started

First, ensure you have robust execution policies configured if running on Windows, and that you have `npm` installed.

### 1. Clone the repository

```bash
git clone https://github.com/iam-neo/Arjel-Cosmeceuticals.git
cd Arjel
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application running locally.

## 🎨 Customizing the Theme

The application theme is customized inside `app/globals.css` utilizing Tailwind CSS v4's new `@theme` directive. You can easily adjust the brand colors:

```css
@theme inline {
  --color-background: #FAFAFA;
  --color-primary: #2A7FFF;
  --color-accent: #E8C87E;
  /* ... */
}
```

## 📝 License

This project is licensed under the MIT License.
