import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default ({ markdownString }: { markdownString: string }) => (
  <article className="content-section">
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownString}</ReactMarkdown>
  </article>
);
