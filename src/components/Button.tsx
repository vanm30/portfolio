import { IButton } from '@/types/globals';

export default function Button({ children, onClick, disabled, type = "primary" }: IButton) {
  const typeStyles = { primary: "bg-yellow text-black", secondary: "border-2 border-yellow text-yellow" };

  return (
    <button
      className={`relative min-w-32 w-fit rounded-xl z-0 p-2 overflow-hidden ${typeStyles[type]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
