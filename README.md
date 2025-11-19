# Redux Counter Demo

A minimal and professional counter app built with **React + Redux Toolkit + TypeScript + Vite**.  
This project demonstrates clean global state management using modern Redux patterns, suitable for junior-level portfolio presentation.

---

## 🎯 Purpose

This project was created to showcase practical understanding of Redux Toolkit in a real React + TypeScript environment.  
It focuses only on core concepts: slice creation, store setup, dispatching actions, and reading state with selectors.

---

## 🧠 Tech Stack

- **React 18** — UI framework
- **Redux Toolkit** — modern state management
- **TypeScript** — type safety and clarity
- **Vite** — fast development setup

---

## 📦 Features

- Global state managed via Redux Toolkit
- Typed slice and store with TypeScript
- Simple increment/decrement logic
- Clean folder structure and separation of concerns
- No styling or extra libraries — focused on logic only

---

## 📁 Project Structure

src/ ├── app/              # Redux store setup │   └── store.ts ├── features/ │   └── counter/      # Counter slice and component │       ├── counterSlice.ts │       └── Counter.tsx ├── App.tsx           # Main app component ├── main.tsx          # Entry point with Provider


---

🧪 How It Works
- counterSlice.ts defines the state (value) and two actions: increment and decrement
- store.ts registers the slice in the Redux store
- Counter.tsx reads the state with useSelector and dispatches actions with useDispatch
- main.tsx wraps the app with <Provider> to give access to the store

🧑‍💻 Author
Made by Soroush Iliyat
Junior React Developer | Focused on clean architecture and practical Redux usage

📄 License
This project is open-source and free to use for educational or portfolio purposes.
