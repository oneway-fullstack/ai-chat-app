export default function LoadingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="bg-ai-bubble rounded-2xl rounded-bl-md px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 bg-muted rounded-full animate-bounce [animation-delay:-0.3s]" />
          <span className="w-2 h-2 bg-muted rounded-full animate-bounce [animation-delay:-0.15s]" />
          <span className="w-2 h-2 bg-muted rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
}
