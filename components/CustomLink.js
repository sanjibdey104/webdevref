import Link from "next/link";
import { VscRocket } from "react-icons/vsc";

export default function CustomLink({ children, href }) {
  return href.startsWith("/") || href === "" ? (
    <Link>
      <a href={href}>{children}</a>
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <VscRocket />
      {children}
    </a>
  );
}
