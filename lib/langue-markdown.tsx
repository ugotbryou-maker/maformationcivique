import type { ReactNode } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// Petit moteur markdown autonome (sans dépendance) pour le contenu des leçons
// de langue : titres ##/###, gras/italique, listes à puces/numérotées,
// tableaux, citations "**Personnage :** texte", paragraphes.
// ─────────────────────────────────────────────────────────────────────────────

function renderInlineMd(text: string, keyPrefix: string): ReactNode[] {
  // Découpe en alternant gras (**...**) et italique (*...*), le reste en texte brut.
  const tokens = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter((t) => t !== '');
  return tokens.map((tok, i) => {
    if (tok.startsWith('**') && tok.endsWith('**')) {
      return <strong key={`${keyPrefix}-b${i}`} style={{ fontWeight: 700, color: 'var(--color-text-primary)' }}>{tok.slice(2, -2)}</strong>;
    }
    if (tok.startsWith('*') && tok.endsWith('*') && tok.length > 1) {
      return <em key={`${keyPrefix}-i${i}`}>{tok.slice(1, -1)}</em>;
    }
    return <span key={`${keyPrefix}-t${i}`}>{tok}</span>;
  });
}

type Block =
  | { type: 'h2' | 'h3'; text: string }
  | { type: 'ul' | 'ol'; items: string[] }
  | { type: 'table'; header: string[]; rows: string[][] }
  | { type: 'hr' }
  | { type: 'p'; text: string };

function parseBlocks(markdown: string): Block[] {
  const lines = markdown.split('\n');
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed === '') { i++; continue; }

    if (trimmed === '---') { blocks.push({ type: 'hr' }); i++; continue; }

    if (trimmed.startsWith('### ')) { blocks.push({ type: 'h3', text: trimmed.slice(4) }); i++; continue; }
    if (trimmed.startsWith('## ')) { blocks.push({ type: 'h2', text: trimmed.slice(3) }); i++; continue; }

    // Table: ligne avec | ... | suivie d'une ligne séparateur |---|---|
    if (trimmed.startsWith('|') && lines[i + 1]?.trim().match(/^\|[\s:-]+\|/)) {
      const header = trimmed.split('|').map((c) => c.trim()).filter((c) => c !== '');
      i += 2; // saute l'en-tête + le séparateur
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        rows.push(lines[i].trim().split('|').map((c) => c.trim()).filter((c) => c !== ''));
        i++;
      }
      blocks.push({ type: 'table', header, rows });
      continue;
    }

    // Liste à puces
    if (/^[-•]\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^[-•]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-•]\s+/, ''));
        i++;
      }
      blocks.push({ type: 'ul', items });
      continue;
    }

    // Liste numérotée
    if (/^\d+[.)]\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+[.)]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+[.)]\s+/, ''));
        i++;
      }
      blocks.push({ type: 'ol', items });
      continue;
    }

    // Paragraphe : on regroupe les lignes consécutives non vides / non spéciales
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      lines[i].trim() !== '---' &&
      !lines[i].trim().startsWith('## ') &&
      !lines[i].trim().startsWith('### ') &&
      !lines[i].trim().startsWith('|') &&
      !/^[-•]\s+/.test(lines[i].trim()) &&
      !/^\d+[.)]\s+/.test(lines[i].trim())
    ) {
      paraLines.push(lines[i].trim());
      i++;
    }
    blocks.push({ type: 'p', text: paraLines.join(' ') });
  }

  return blocks;
}

export function renderLangMarkdown(markdown: string, accent: string = 'var(--color-blue-france)'): ReactNode {
  const blocks = parseBlocks(markdown);

  return (
    <div>
      {blocks.map((block, idx) => {
        const key = `b${idx}`;
        switch (block.type) {
          case 'h2':
            return (
              <h3 key={key} style={{ fontSize: 'var(--font-size-md)', fontWeight: 700, color: 'var(--color-text-primary)', margin: idx === 0 ? '0 0 12px' : '24px 0 12px' }}>
                {renderInlineMd(block.text, key)}
              </h3>
            );
          case 'h3':
            return (
              <h4 key={key} style={{ fontSize: 'var(--font-size-base)', fontWeight: 700, color: accent, margin: '18px 0 8px' }}>
                {renderInlineMd(block.text, key)}
              </h4>
            );
          case 'hr':
            return <hr key={key} style={{ border: 'none', borderTop: 'var(--border-default)', margin: '16px 0' }} />;
          case 'ul':
            return (
              <ul key={key} style={{ listStyle: 'none', margin: '0 0 14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {block.items.map((item, j) => (
                  <li key={j} style={{ display: 'flex', gap: '8px', fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                    <span style={{ color: accent, fontWeight: 700, flexShrink: 0 }}>·</span>
                    <span>{renderInlineMd(item, `${key}-${j}`)}</span>
                  </li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={key} style={{ margin: '0 0 14px 0', paddingLeft: '22px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {block.items.map((item, j) => (
                  <li key={j} style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                    {renderInlineMd(item, `${key}-${j}`)}
                  </li>
                ))}
              </ol>
            );
          case 'table':
            return (
              <div key={key} style={{ overflowX: 'auto', margin: '0 0 16px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--font-size-sm)' }}>
                  <thead>
                    <tr>
                      {block.header.map((h, j) => (
                        <th key={j} style={{ textAlign: 'left', padding: '8px 12px', background: 'var(--color-off-white)', color: 'var(--color-text-primary)', fontWeight: 700, borderBottom: `2px solid ${accent}` }}>
                          {renderInlineMd(h, `${key}-h${j}`)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, ri) => (
                      <tr key={ri} style={{ borderBottom: 'var(--border-default)' }}>
                        {row.map((cell, ci) => (
                          <td key={ci} style={{ padding: '8px 12px', color: 'var(--color-text-secondary)' }}>
                            {renderInlineMd(cell, `${key}-${ri}-${ci}`)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case 'p':
          default:
            if (!block.text) return null;
            return (
              <p key={key} style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-secondary)', lineHeight: 1.72, margin: '0 0 12px' }}>
                {renderInlineMd(block.text, key)}
              </p>
            );
        }
      })}
    </div>
  );
}
