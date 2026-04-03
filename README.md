# AI Chat App

A lightweight AI-powered chat application built with Next.js, TypeScript, and Tailwind CSS. Users can input prompts, submit them to OpenAI, and view responses in a clean chat interface.

## Features

- **Chat Interface** — Clean, responsive chat UI with user and AI message bubbles
- **OpenAI Integration** — Server-side API route proxies requests to OpenAI (API key never exposed to client)
- **Message Timestamps** — Each message displays a human-readable timestamp
- **Loading States** — Animated typing indicator while waiting for AI responses
- **Error Handling** — Inline error banners for API failures with clear messaging
- **Chat History** — Conversations persist in a local JSON file and restore on page reload
- **Clear Chat** — One-click button to reset the conversation
- **Dark/Light Theme** — Manual theme toggle with dark and light mode support
- **Keyboard Support** — Enter to send, Shift+Enter for new lines

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [OpenAI API](https://platform.openai.com/)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- An OpenAI API key ([get one here](https://platform.openai.com/api-keys))

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/oneway-fullstack/ai-chat-app.git
   cd ai-chat-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Open `.env.local` and replace `your_openai_api_key_here` with your actual OpenAI API key.

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open the app**

   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── api/
│   ├── chat/route.ts        # API route handler for OpenAI
│   └── history/route.ts     # API route for chat history persistence
├── components/
│   ├── ChatHistory.tsx      # Message list with empty state
│   ├── ChatInput.tsx        # Input textarea with send button
│   ├── ChatMessage.tsx      # Individual message bubble
│   ├── LoadingIndicator.tsx # Typing animation dots
│   └── ThemeToggle.tsx      # Dark/light theme switcher
├── globals.css              # Theme variables and Tailwind config
├── layout.tsx               # Root layout with fonts and metadata
└── page.tsx                 # Main chat page with state management
data/
└── messages.json            # Persistent chat history storage
```

## Environment Variables

| Variable         | Description              | Required |
| ---------------- | ------------------------ | -------- |
| `OPENAI_API_KEY` | Your OpenAI API key      | Yes      |

## Scripts

| Command         | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Start development server   |
| `npm run build` | Build for production       |
| `npm run start` | Start production server    |
| `npm run lint`  | Run ESLint                 |
