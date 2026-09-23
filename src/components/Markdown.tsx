import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

type PromptSeqMap = Record<string, number>;

/**
 * Inject `id="prompt-{promptId}"` anchors on prompt-box divs.
 * Optionally inject `data-seq` attribute when seqMap is provided.
 */
function injectPromptAnchors(html: string, seqMap?: PromptSeqMap): string {
  return html.replace(
    /<div\s+(class="prompt-box[^"]*")\s+(data-prompt="([^"]+)")/g,
    (_match, cls, dataPrompt, promptId) => {
      const seqAttr = seqMap && seqMap[promptId] != null ? ` data-seq="${seqMap[promptId]}"` : "";
      return `<div id="prompt-${promptId}" ${cls} ${dataPrompt}${seqAttr}`;
    },
  );
}

/**
 * Inject seq number into the prompt-box-badge text.
 * Changes "프롬프트 6-1" to "#12 프롬프트 6-1" when seq is available.
 */
function injectSeqBadge(html: string, seqMap?: PromptSeqMap): string {
  if (!seqMap) return html;
  return html.replace(
    /<span class="prompt-box-badge">(프롬프트 ([^<]+))<\/span>/g,
    (_match, _full, promptId) => {
      const seq = seqMap[promptId.trim()];
      if (seq == null) return _match;
      return `<span class="prompt-box-badge"><span class="prompt-seq-num">#${seq}</span> 프롬프트 ${promptId}</span>`;
    },
  );
}

export function Markdown({
  children,
  seqMap,
}: {
  children: string;
  seqMap?: PromptSeqMap;
}) {
  const processed = injectSeqBadge(injectPromptAnchors(children, seqMap), seqMap);

  return (
    <div className="prose-lesson">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {processed}
      </ReactMarkdown>
    </div>
  );
}

