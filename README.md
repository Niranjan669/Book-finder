# Book Finder

## Level 1: Working with AI (ChatGPT)

While the **project structure, routing, and file templates** were designed and implemented by me, I used **ChatGPT** for guidance on specific functionalities:

- Implementing **search functionality** with the Open Library API  
- Creating reusable **BookCard** and **BookList** components  
- Managing **Favorites** with `localStorage`  
- Integrating **Bootstrap** for responsive and uniform UI  
- Suggesting **extra features** like a dedicated Favorites page and card styling  

> ChatGPT served as a reference for implementing specific features, but all project planning and coding decisions were made by me.

A React + Bootstrap web application that allows users to search for books using the **Open Library API**, view book details, and save their favorite books.

## Features

- Search books by title
- Display book details:
  - Author(s)
  - Published year
  - Cover image
- Add/Remove books to Favorites
- Favorites persist across page reloads using `localStorage`
- Responsive and mobile-friendly layout
- Extra features:
  - Favorites page
  - Immediate update of favorite status
  - Uniform card layout

## Tech Stack

- React (with Hooks: `useState`, `useEffect`)
- React Router DOM for navigation
- Bootstrap 5 for styling
- Open Library API

## Project Structure

book-finder/
├─ client/
│ ├─ index.html
│ ├─ package.json
│ ├─ src/
│ │ ├─ main.jsx
│ │ ├─ App.jsx
│ │ ├─ components/
│ │ │ ├─ Header.jsx
│ │ │ ├─ Footer.jsx
│ │ │ ├─ SearchBar.jsx
│ │ │ ├─ BookCard.jsx
│ │ │ ├─ BookList.jsx
│ │ ├─ pages/
│ │ │ ├─ Home.jsx
│ │ │ ├─ Search.jsx
│ │ │ ├─ Favorites.jsx
│ │ │ ├─ About.jsx
│ │ ├─ services/
│ │ │ └─ api.js