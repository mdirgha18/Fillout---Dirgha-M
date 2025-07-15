

# 🧭 Drag-and-Drop Step Navigator

A learning project: **Interactive Step Navigation UI** built with **React**, **TypeScript**, **Tailwind CSS**, and **@dnd-kit**.

I created this as part of a **frontend take-home assignment**, using online resources and AI guidance to complete it.

It demonstrates:
- Custom drag-and-drop
- Inline page insertion
- Context menus per step
- Clean component design in React + TypeScript

---

## 🌟 Motivation

This project was my submission for the **first-round assignment** of Fillout's Senior Frontend Engineer interview.

While I'm early in my career and don't have professional experience yet, I used this challenge to learn:

* How to implement **drag-and-drop** with @dnd-kit
* How to manage component state with **React hooks**
* How to design UI with **Tailwind CSS**
* How to break down requirements into **reusable components**

I did this with help (including ChatGPT suggestions), reading docs, and trial-and-error to *finish* the spec.

---

## 🚀 Features

* ✅ Drag-and-drop step reordering
* ➕ Inline "+" button to insert a new page between steps
* ⚙️ Per-step dropdown menu with:

  * Set as first
  * Rename
  * Duplicate
  * Copy
  * Delete
* ✨ Icon-based styling for clear step types
* ⚛️ All state fully in-memory

---

## 📁 Project Structure

```bash
src/
  components/
    StepNav.tsx       # Main drag-and-drop UI
    StepSettings.tsx  # Dropdown settings menu
  App.tsx             # App shell
```

---

## 🧰 Tech Stack

| Tool               | Purpose                               |
| ------------------ | ------------------------------------- |
| React + TypeScript | UI components with static typing      |
| Tailwind CSS       | Utility-first styling                 |
| @dnd-kit           | Accessible drag-and-drop interactions |
| Lucide Icons       | SVG icons for steps and settings      |

---

## ⚙️ Installation

1. Clone the repo:

```bash
git clone https://github.com/your-username/step-navigator.git
cd step-navigator
```

2. Install dependencies:

```bash
npm install
```

3. Start the dev server:

```bash
npm run dev
```

Visit `http://localhost:5173/` (or your Vite port) to see it.

---

## 🧠 What I Learned

✅ Using @dnd-kit for sortable lists
✅ Managing component state in React
✅ Handling click-outside events with `useRef` and `useEffect`
✅ Structuring React components for reusability
✅ Styling with Tailwind CSS

---

## 📌 Note on Authorship

> I completed this project with guidance from online resources and ChatGPT, customizing and assembling the final code myself.

My goal was **not** to invent every line from scratch, but to **learn to deliver a real-world UI** given a clear spec.

---

## 📄 License

MIT – use freely, adapt, and learn from it!

---

## 🙌 Acknowledgements

* [@dnd-kit](https://github.com/clauderic/dnd-kit) – for amazing drag-and-drop utilities
* [Tailwind CSS](https://tailwindcss.com/) – for rapid, consistent styling
* [Lucide](https://lucide.dev/) – for beautiful, free icons
* ChatGPT – for step-by-step code guidance

---

## 💡 Author Note

> I'm an early-career frontend developer with no professional experience yet, but I'm actively building projects like this to learn React + TypeScript.

---
