/**
 * Petit helper de rendu Markdown inline — convertit **gras** en <strong>
 * coloré, utilisé par les pages leçon et fiches.
 */
export function renderInline(text: string, color: string, keyPrefix: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1
      ? <strong key={`${keyPrefix}-b${i}`} style={{ fontWeight: 700, color }}>{part}</strong>
      : <span key={`${keyPrefix}-t${i}`}>{part}</span>
  );
}
