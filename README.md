
# 🧭 Page Navigation Component

An **interactive Page Navigation UI component** built with **React**, **TypeScript**, **Tailwind CSS**, and **@dnd-kit**.

This project was built as my **submission for the first-round take-home assignment** for Fillout.

It implements:

* Drag-and-drop page reordering
* Inline page insertion
* Per-page settings menus
* Clean, modular React component design

---

## 🌟 Overview

The Page Navigation Component lets users:

✅ Reorder pages via drag-and-drop
✅ Insert new pages between existing steps
✅ Access per-page settings to:

* Set as first page
* Rename
* Duplicate
* Copy
* Delete

All state is managed in-memory, with clear icons and hover interactions for an intuitive editing experience.

---

## 🚀 Features

* ⚡️ Drag-and-drop page reordering with @dnd-kit
* ➕ Inline “+” buttons to insert new pages
* ⚙️ Per-page settings menu with multiple actions
* ✨ Icon-based styling for page types
* ♻️ Fully client-side, no backend

---

## 🗂️ Project Structure

```
src/
  components/
    StepNav.tsx       # Main navigation UI with drag-and-drop
    StepSettings.tsx  # Per-page settings dropdown
  App.tsx             # App shell
```

---

## 🧰 Tech Stack

| Tool               | Purpose                              |
| ------------------ | ------------------------------------ |
| React + TypeScript | UI component development with typing |
| Tailwind CSS       | Utility-first, responsive styling    |
| @dnd-kit           | Accessible, performant drag-and-drop |
| Lucide Icons       | Clear, customizable SVG icons        |

---

## ⚙️ Getting Started

1️⃣ Clone the repo:

```bash
git clone https://github.com/your-username/page-navigation-component.git
cd page-navigation-component
```

2️⃣ Install dependencies:

```bash
npm install
```

3️⃣ Start the development server:

```bash
npm run dev
```

Open `http://localhost:5173/` in your browser to view the app.

---

## 📄 License

MIT – Free to use and adapt.

---

## 💡 Author

> I'm an early-career frontend developer focused on building solid React + TypeScript components with attention to UX, state management, and modern UI patterns.


