import './Dashboard.css'

const replaces = [
  { old: 'Excel', now: 'Invoicing & Payments' },
  { old: 'WhatsApp', now: 'Client Notes & Activity' },
  { old: 'Google Drive', now: 'Documents' },
  { old: 'Notion', now: 'Project & Task Boards' },
  { old: 'Calendar', now: 'Meetings & Reminders' },
]

const ledger = [
  { step: '01', label: 'Client added', detail: 'Acme Co.' },
  { step: '02', label: 'Project started', detail: 'Website Redesign' },
  { step: '03', label: 'Invoice sent', detail: 'INV-0042 · ₹45,000' },
  { step: '04', label: 'Payment received', detail: 'Paid', done: true },
]

function App() {
  return (
    <div className="page">
      <header className="nav">
        <span className="nav-mark">Freelo</span>
        <a href="/continue" className="nav-cta">Continue</a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Freelance operations, unified</p>
            <h1>Every client.<br />Every invoice.<br />One flow.</h1>
            <p className="hero-sub">
              Freelo replaces the tools you juggle today with one dashboard
              built for how freelance work actually moves — client in,
              project running, invoice out, payment in.
            </p>
            <div className="hero-actions">
              <a href="/continue" className="btn-primary">Continue</a>
              <a href="#docs" className="btn-ghost">View documentation</a>
            </div>
          </div>

          <div className="ledger-card" aria-hidden="true">
            <div className="ledger-head">
              <span>FLOW-0001</span>
              <span>ACTIVE</span>
            </div>
            {ledger.map((row) => (
              <div className={`ledger-row${row.done ? ' is-done' : ''}`} key={row.step}>
                <span className="ledger-step">{row.step}</span>
                <div className="ledger-text">
                  <span className="ledger-label">{row.label}</span>
                  <span className="ledger-detail">{row.detail}</span>
                </div>
                <span className="ledger-mark">{row.done ? '✓' : ''}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="replaces">
          <h2>One flow instead of six tabs</h2>
          <ul className="replaces-list">
            {replaces.map((r) => (
              <li key={r.old}>
                <span className="tool-old">{r.old}</span>
                <span className="tool-arrow">→</span>
                <span className="tool-new">{r.now}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="divider" />

        <section className="next-steps" id="docs">
          <div className="info-card">
            <h2>Documentation</h2>
            <p>
              One dashboard for your entire freelance business. Freelo brings
              your clients, projects, invoices, payments, and meetings into a
              single, clean workspace — so you spend less time managing tools
              and more time doing the work that pays.
            </p>
          </div>

          <div className="info-card">
            <h2>Connect with us</h2>
            <p>Join the Freelo community.</p>
            <ul className="social-list">
              <li>
                <a href="https://github.com/Chetan13334/Freelo" target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 16 16" className="social-icon" aria-hidden="true">
                    <path fill="currentColor" d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.23.48-2.7-1.08-2.7-1.08-.36-.93-.89-1.17-.89-1.17-.72-.5.06-.49.06-.49.8.06 1.22.83 1.22.83.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.12 0 0 .67-.22 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8 8 0 0 0 8 0Z" />
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://chat.vite.dev/" target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 16 16" className="social-icon" aria-hidden="true">
                    <path fill="currentColor" d="M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H4l-.5 2.5L7 12h7.5A1.5 1.5 0 0 0 16 10.5v-7A1.5 1.5 0 0 0 14.5 2h-13Z" />
                  </svg>
                  Community
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>Freelo</span>
        <span>Built for freelancers who'd rather bill than juggle tabs.</span>
      </footer>
    </div>
  )
}

export default App