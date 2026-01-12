// component/HUUlayoutro.js
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export default function HuuLayoutro({ frontmatter, content }) {
  // Remove <header> and <h1> tags from raw HTML
  const sanitizedContent = content
    .replace(/<header.*?>.*?<\/header>/gi, '')
    .replace(/<h1.*?>.*?<\/h1>/gi, '');

  return (
    <div style={{ padding: '0', background: '#fff', borderRadius: '12px' }}>
      {/* Media query for small screens */}
      <style>
        {`
          

          @media (max-width: 600px) {
            .responsive-img {
              width: 100%;      
            }
          }
        `}
      </style>

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: () => null, // remove h1 completely
          h2: ({ node, ...props }) => (
            <h2
              style={{
                textAlign: 'left',
                margin: '1em 0',
                fontWeight: 'bold'
              }}
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p
              style={{
                textAlign: 'left',
                lineHeight: '1.6',
                margin: '0.5em 0'
              }}
              {...props}
            />
          ),
          img: ({ node, ...props }) => (
            <img className="responsive-img" {...props} />
          ),
        }}
      >
        {sanitizedContent}
      </ReactMarkdown>
    </div>
  );
}
