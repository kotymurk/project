# Fullstack Project: React + TypeScript + JWT Auth

Комплексное приложение с авторизацией и типизацией на стороне клиента. Проект демонстрирует работу с защищенными маршрутами и современным стеком фронтенд-разработки.

## 🛠 Стек технологий

- Frontend: React, TypeScript, Redux Toolkit, Tailwind CSS, Vite.
- Backend: Node.js, JSON Server + JWT Auth.

## 📂 Структура проекта

- frontend/ — Клиентская часть приложения (React + TS).
- backend/json-server-with-jwt-auth/ — Серверная часть с настроенной авторизацией.

## 🚀 Как запустить проект

### 1. Запуск Бэкенда (Сервер)
Откройте терминал и выполните:

`cd backend/json-server-with-jwt-auth`
`npm install`
`npm run start-auth`
Сервер запустится на порту 8000 (согласно инструкции в бэкенде).
​2. Запуск Фронтенда (Клиент)
​Откройте второй терминал и выполните
`cd frontend`
`npm install`
`npm run dev`
Тестовые данные для входа
​Вы можете зарегистрировать нового пользователя или использовать существующего (если он есть в users.json).
Для входа через API используйте эндпоинт: POST http://localhost:8000/auth/login.
​Подробную информацию о работе API и авторизации можно найти в файле backend/json-server-with-jwt-auth/README.md.
