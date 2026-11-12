// Renders doc-verbatim text segments: strings stay plain, {link, href} become anchors.
export default function Segments({ parts }) {
  return (
    <>
      {parts.map((part, i) =>
        typeof part === "string" ? (
          <span key={i}>{part}</span>
        ) : (
          <a key={i} href={part.href}>
            {part.link}
          </a>
        )
      )}
    </>
  );
}
