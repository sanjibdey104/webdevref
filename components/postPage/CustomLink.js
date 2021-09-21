import Link from "next/link";

export default function CustomLink({ children, href }) {
  return href.startsWith("/") || href === "" ? (
    <Link>
      <a href={href}>{children}</a>
    </Link>
  ) : (
    <a href={href ? href : "#"} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
