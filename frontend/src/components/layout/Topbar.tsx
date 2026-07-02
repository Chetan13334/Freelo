import { useState } from 'react'
import './Topbar.css'

function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="topbar">
      <div className="topbar-container">
        <a href="/" className="logo">
          <span className="logo-mark">Freelo</span>
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-menu${menuOpen ? ' is-open' : ''}`}>
          <ul>
            <li><a href="/dashboard" className="active">Dashboard</a></li>
            <li><a href="/clients">Clients</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/invoices">Invoices</a></li>
            <li><a href="/reports">Reports</a></li>
          </ul>
          <a href="/settings" className="nav-cta">Settings</a>
        </div>
      </div>
    </nav>
  )
}

export default Topbar