// component/HUUlayoutro.js
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

export default function HuuLayoutro({ frontmatter, content }) {
  const sanitizedContent = content
    .replace(/<header.*?>.*?<\/header>/gi, '')
    .replace(/<h1.*?>.*?<\/h1>/gi, '')

  return (
    <div style={{ padding: '0', background: '#fff', borderRadius: '12px' }}>
      <style>{`
       

        @media (max-width: 600px) {
          .responsive-img {
            width: 100%;
          }
        }
      `}</style>

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: () => null,

          h2: ({ children }) => (
            <h2
              style={{
                textAlign: 'left',
                margin: '1em 0',
                fontWeight: 'bold',
              }}
            >
              {children}
            </h2>
          ),

          p: ({ children }) => (
            <p
              style={{
                textAlign: 'left',
                lineHeight: '1.6',
                margin: '0.5em 0',
              }}
            >
              {children}
            </p>
          ),

          img: (props) => (
            <img
              {...props}
              className="responsive-img"
              alt={props.alt || ''}
            />
          ),
        }}
      >
        {sanitizedContent}
      </ReactMarkdown>
    </div>
  )
}
