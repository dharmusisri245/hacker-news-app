# hacker-news-app

# Hacker News App

A Full Stack MERN Hacker News Application built using React, Vite, Node.js, Express.js, and MongoDB.

## Features

- User Registration & Login
- JWT Authentication
- Fetch Top Hacker News Stories
- View Single Story Details
- Bookmark Stories
- Remove Bookmarks
- Persistent Bookmarks using MongoDB
- Pagination Support
- Responsive UI
- Toast Notifications
- Protected Routes

---

# Tech Stack

## Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router DOM
- Axios
- React Toastify

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs

---

# API Endpoints

## Auth APIs

### Register
POST /api/auth/register

### Login
POST /api/auth/login

---

## Story APIs

### Get All Stories
GET /api/stories?page=1&limit=10

### Get Single Story
GET /api/stories/:id

### Toggle Bookmark
POST /api/stories/:id/bookmark

### Get User Bookmarks
GET /api/stories/bookmarks/me

---

# Installation

## Clone Repository

```bash
git clone https://github.com/dharmusisri245/hacker-news-app.git