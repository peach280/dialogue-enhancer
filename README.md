# 🧠 Smart Dialogue Enhancer

A mini AI-powered tool that rewrites user dialogue into different tones like **Friendly**, **Romantic**, or **Funny** — designed to help creators of visual novels and interactive stories write expressive, tone-matching dialogue faster.

---

## 🎯 Motivation

This project was built as a creative prototype inspired by [RouteVN](https://routevn.com), a platform for visual novel creation. Writing dialogue that resonates with the story's tone is often hard, and this tool aims to enhance that process using AI.

---

## 🚀 Demo



https://github.com/user-attachments/assets/30a062ac-9d96-4eee-9749-1f6ce0da59ce







---

## ✨ Features

- Input any dialogue line
- Select a tone: Friendly, Romantic, Funny
- Get a rewritten version using the **Mixtral-8x7B** model via **OpenRouter**
- Built with product sense: supports visual storytelling workflows

---

## 🧱 Tech Stack

### Frontend
- React

### Backend
- Flask (Python)
- OpenRouter API (using `mistralai/mixtral-8x7b-instruct`)

---

## 📦 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/dialogue-enhancer.git
cd dialogue-enhancer
npm run frontend
cd server
source venv/bin/activate
python app.py
