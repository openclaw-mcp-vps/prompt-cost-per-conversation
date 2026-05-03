import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PromptCost — Track AI Costs Per Conversation',
  description: 'Monitor AI API usage and calculate exact costs per customer conversation to optimize prompt efficiency.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="17cb4635-b77b-439f-9255-502dd9091087"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
