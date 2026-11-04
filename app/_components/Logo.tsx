import Image from "next/image";
import Link from "next/link";

export function Logo({
  className = "",
  size = 32,
  light = false,
}: {
  className?: string;
  size?: number;
  light?: boolean;
}) {
  return (
    <Link href="/" aria-label="KeMa-Stahl — Startseite" className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/kema-logo.jpeg"
        alt="KeMa"
        width={size * 3}
        height={size}
        priority
        className={`h-7 w-auto md:h-8 object-contain ${light ? "brightness-0 invert" : "mix-blend-multiply"}`}
      />
    </Link>
  );
}

// Abstract spark mark — references the sparkle in the KeMa logo without duplicating the wordmark.
export function SparkMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
    >
      <g fill="currentColor">
        <path d="M24 2 L26 20 L44 24 L26 28 L24 46 L22 28 L4 24 L22 20 Z" />
      </g>
    </svg>
  );
}
