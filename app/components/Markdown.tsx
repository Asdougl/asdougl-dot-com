import ReactMarkdown from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx'
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'
import type { ReactMarkdownOptions } from 'react-markdown/lib/react-markdown'
import theme from '~/styles/codetheme'

SyntaxHighlighter.registerLanguage('tsx', tsx)
SyntaxHighlighter.registerLanguage('typescript', typescript)

interface MarkdownProps {
  children: string
}

export const Markdown = ({ children }: MarkdownProps) => {
  const MarkdownComponents: ReactMarkdownOptions['components'] = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          style={theme}
          language={match[1]}
          PreTag="div"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <code className={className} {...props}>
          {children}
        </code>
      )
    },
  }
  return (
    <ReactMarkdown components={MarkdownComponents}>{children}</ReactMarkdown>
  )
}
