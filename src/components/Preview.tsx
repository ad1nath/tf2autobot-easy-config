import ReactMarkdown from "react-markdown";
import "github-markdown-css";
import remarkGfm from "remark-gfm";

export default ({ markdownString }: { markdownString: string }) => (
  <article className="markdown-body py-2 px-4 rounded-md  mt-5 ">
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownString}</ReactMarkdown>
  </article>
);
