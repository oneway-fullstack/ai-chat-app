import type { Message } from "../page";

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
          isUser
            ? "bg-user-bubble text-white rounded-br-md"
            : "bg-ai-bubble text-foreground rounded-bl-md"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}
