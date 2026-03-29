import Image from "next/image";

export function LoopaLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/logos/loopa-logo.png"
      alt="Loopa"
      width={100}
      height={40}
      className={className}
      style={{ width: "auto", mixBlendMode: "screen" }}
    />
  );
}
