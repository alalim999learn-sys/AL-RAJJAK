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
       .hint{
       color: black;
       }
        @media (max-width: 600px) {
          .responsive-img {
            width: 100%;
          }
        }
      `}</style>

      {/* Render the title from frontmatter if available */}
      {frontmatter?.title && (
        <h1
          style={{
            textAlign: 'center',
            margin: '2em 0',
            fontWeight: 'bold',
            fontSize: '2.5em',
          }}
        >
          {frontmatter.title}
        </h1>
      )}

      {/* Markdown Content */}
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: () => null,  // This will suppress h1 from the Markdown content

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

      {/* Disclaimer Section at the bottom */}
      
   <section className="hint" style={{ color: 'black' }}>
        <h3 className="hint" style={{ color: 'black' , textAlign: "center",margin: "15px 0px "}}>Notă medicală importantă</h3>
        <p className="hint" style={{ color: 'black' }}>
          Acest articol are scop informativ și <strong>nu constituie sfat medical.</strong>
          Rezultatele pot varia în funcție de tipul de piele sau alergii.
          <strong>Consultați un dermatolog înainte de a modifica rutina de îngrijire.</strong>
        </p>
      </section>
    </div>
  )
}
