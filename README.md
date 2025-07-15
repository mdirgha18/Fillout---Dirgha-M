

# 🧭 Drag-and-Drop Step Navigator

An **interactive Step Navigation UI** built with **React**, **TypeScript**, **Tailwind CSS**, and **@dnd-kit**.

Created as part of a **frontend take-home assignment**.

It demonstrates:

* Custom drag-and-drop behavior
* Inline page insertion
* Per-step context menus
* Clean, modular component design in React + TypeScript

---

## 🌟 Motivation

This project was built for a **first-round take-home assignment**.

As an early-career developer, I used this challenge to practice:

* Implementing **drag-and-drop** with @dnd-kit
* Managing component state with **React hooks**
* Designing UI with **Tailwind CSS**
* Structuring requirements into **reusable components**

---

## 🚀 Features

* ✅ Drag-and-drop step reordering
* ➕ Inline "+" button to insert new pages
* ⚙️ Per-step settings menu:

  * Set as first
  * Rename
  * Duplicate
  * Copy
  * Delete
* ✨ Icon-based styling for clear step types
* ⚛️ All state handled in-memory

---

## 📁 Project Structure

```
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

Visit `http://localhost:5173/` (or your local port) to view it.

---

## 🧠 What I Practiced

✅ Using @dnd-kit for sortable lists
✅ Managing React state with hooks
✅ Handling click-outside events with `useRef` and `useEffect`
✅ Structuring reusable React components
✅ Styling with Tailwind CSS

---

## 📄 License

MIT – free to use and adapt.

---

## 🙌 Acknowledgements

* [@dnd-kit](https://github.com/clauderic/dnd-kit) – drag-and-drop utilities
* [Tailwind CSS](https://tailwindcss.com/) – utility-first styling
* [Lucide](https://lucide.dev/) – beautiful open-source icons

---

## 💡 Author Note

> I'm an early-career frontend developer actively building projects like this to strengthen my React + TypeScript skills.

