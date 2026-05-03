export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          AI Cost Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know exactly what each customer conversation costs you
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your OpenAI or Anthropic account and instantly see token usage, dollar costs, and ROI broken down per conversation — so you stop guessing and start optimizing.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start tracking for $39/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl bg-[#161b22] p-6">
          <div>
            <p className="text-2xl font-bold text-white">$0.003</p>
            <p className="text-xs text-[#8b949e] mt-1">avg cost per convo</p>
          </div>
          <div className="border-x border-[#30363d]">
            <p className="text-2xl font-bold text-white">Real-time</p>
            <p className="text-xs text-[#8b949e] mt-1">webhook ingestion</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">OpenAI + Anthropic</p>
            <p className="text-xs text-[#8b949e] mt-1">providers supported</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$39</p>
          <p className="text-[#8b949e] text-sm mb-6">/month · billed monthly</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited conversations tracked',
              'OpenAI & Anthropic integration',
              'Real-time webhook ingestion',
              'Per-conversation cost breakdown',
              'CSV export & API access',
              'Email alerts for cost spikes',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-lg p-5 bg-[#161b22]">
            <p className="font-semibold text-white mb-2">How does it connect to my AI provider?</p>
            <p className="text-sm text-[#8b949e]">You paste your API key or configure a webhook endpoint. PromptCost listens for usage events and logs token counts and costs automatically — no code changes needed.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-5 bg-[#161b22]">
            <p className="font-semibold text-white mb-2">What counts as a "conversation"?</p>
            <p className="text-sm text-[#8b949e]">A conversation is a session ID you pass in the webhook payload. It can map to a support ticket, a chat thread, or any logical unit you define — fully flexible.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-5 bg-[#161b22]">
            <p className="font-semibold text-white mb-2">Can I cancel anytime?</p>
            <p className="text-sm text-[#8b949e]">Yes. Cancel from your billing dashboard with one click. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} PromptCost. All rights reserved.
      </footer>
    </main>
  )
}
