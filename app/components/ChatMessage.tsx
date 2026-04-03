import type { Message } from "../page";

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="w-7 h-7 rounded-full bg-primary-light flex items-center justify-center shrink-0 mr-2 mt-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 text-primary">
            <path d="M8 1a4 4 0 0 0-4 4v1.243a3 3 0 0 0 .879 2.121l.17.17a1.25 1.25 0 0 1-1.768 1.768l-.17-.17A5.5 5.5 0 0 1 1.5 6.244V5a6.5 6.5 0 1 1 13 0v1.243a5.5 5.5 0 0 1-1.611 3.889l-.17.17a1.25 1.25 0 0 1-1.768-1.768l.17-.17A3 3 0 0 0 12 6.244V5a4 4 0 0 0-4-4Z" />
            <path d="M5 10.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM6.5 13a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z" />
          </svg>
        </div>
      )}
      <div
        className={`max-w-[75%] px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
          isUser
            ? "text-white rounded-2xl rounded-br-sm"
            : "bg-ai-bubble text-foreground rounded-2xl rounded-bl-sm"
        }`}
        style={isUser ? { background: "var(--user-bubble)" } : undefined}
      >
        {message.content}
      </div>
    </div>
  );
}
