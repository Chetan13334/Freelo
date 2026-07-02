import { useState } from 'react'
import './Settings.css'

type Tab = 'profile' | 'company' | 'password' | 'preferences' | 'notifications'

const tabs: { id: Tab; label: string }[] = [
  { id: 'profile', label: 'Profile' },
  { id: 'company', label: 'Company' },
  { id: 'password', label: 'Password' },
  { id: 'preferences', label: 'Theme & Language' },
  { id: 'notifications', label: 'Notifications' },
]

function Settings() {
  const [activeTab, setActiveTab] = useState<Tab>('profile')
  const [notifications, setNotifications] = useState({
    paymentDue: true,
    invoiceOverdue: true,
    meetingReminder: true,
    taskDeadline: false,
    newDocument: false,
  })

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="settings-page">
      <div className="settings-header">
        <p className="eyebrow">Account</p>
        <h1>Settings</h1>
        <p className="settings-sub">Manage your profile, company details, and preferences.</p>
      </div>

      <div className="settings-body">
        <aside className="settings-nav">
          <ul>
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  className={activeTab === tab.id ? 'is-active' : ''}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <section className="settings-panel">
          {activeTab === 'profile' && (
            <div className="panel-card">
              <h2>Profile</h2>
              <p className="panel-desc">Your personal details as shown across Freelo.</p>

              <div className="avatar-row">
                <div className="avatar-placeholder">CH</div>
                <div>
                  <button className="btn-ghost">Upload photo</button>
                  <p className="hint">PNG or JPG, up to 2MB</p>
                </div>
              </div>

              <div className="field-grid">
                <label>
                  <span>Full name</span>
                  <input type="text" defaultValue="Chetan" placeholder="Your name" />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" placeholder="you@example.com" />
                </label>
                <label>
                  <span>Phone</span>
                  <input type="tel" placeholder="+91 00000 00000" />
                </label>
                <label>
                  <span>Role</span>
                  <select defaultValue="owner">
                    <option value="owner">Owner</option>
                    <option value="manager">Manager</option>
                    <option value="member">Team Member</option>
                  </select>
                </label>
              </div>

              <button className="btn-primary">Save changes</button>
            </div>
          )}

          {activeTab === 'company' && (
            <div className="panel-card">
              <h2>Company</h2>
              <p className="panel-desc">Shown on invoices and client-facing documents.</p>

              <div className="field-grid">
                <label>
                  <span>Company name</span>
                  <input type="text" placeholder="Your company" />
                </label>
                <label>
                  <span>GST number</span>
                  <input type="text" placeholder="22AAAAA0000A1Z5" />
                </label>
                <label className="span-2">
                  <span>Address</span>
                  <input type="text" placeholder="Street, city, state, PIN" />
                </label>
                <label>
                  <span>Default currency</span>
                  <select defaultValue="INR">
                    <option value="INR">INR — ₹</option>
                    <option value="USD">USD — $</option>
                    <option value="EUR">EUR — €</option>
                  </select>
                </label>
                <label>
                  <span>Website</span>
                  <input type="url" placeholder="https://" />
                </label>
              </div>

              <button className="btn-primary">Save changes</button>
            </div>
          )}

          {activeTab === 'password' && (
            <div className="panel-card">
              <h2>Password</h2>
              <p className="panel-desc">Use a strong password you don't use elsewhere.</p>

              <div className="field-grid">
                <label className="span-2">
                  <span>Current password</span>
                  <input type="password" placeholder="••••••••" />
                </label>
                <label>
                  <span>New password</span>
                  <input type="password" placeholder="••••••••" />
                </label>
                <label>
                  <span>Confirm new password</span>
                  <input type="password" placeholder="••••••••" />
                </label>
              </div>

              <button className="btn-primary">Update password</button>
            </div>
          )}

          {activeTab === 'preferences' && (
            <div className="panel-card">
              <h2>Theme & Language</h2>
              <p className="panel-desc">Choose how Freelo looks and speaks to you.</p>

              <div className="pref-block">
                <span className="pref-label">Theme</span>
                <div className="theme-options">
                  <button className="theme-option is-active">
                    <span className="swatch swatch-dark" />
                    Dark
                  </button>
                  <button className="theme-option">
                    <span className="swatch swatch-light" />
                    Light
                  </button>
                  <button className="theme-option">
                    <span className="swatch swatch-system" />
                    System
                  </button>
                </div>
              </div>

              <div className="pref-block">
                <label>
                  <span>Language</span>
                  <select defaultValue="en">
                    <option value="en">English</option>
                    <option value="hi">हिंदी</option>
                    <option value="mr">मराठी</option>
                  </select>
                </label>
              </div>

              <button className="btn-primary">Save preferences</button>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="panel-card">
              <h2>Notifications</h2>
              <p className="panel-desc">Choose what Freelo should alert you about.</p>

              <div className="toggle-list">
                <div className="toggle-row">
                  <div>
                    <span className="toggle-label">Payment due tomorrow</span>
                    <span className="toggle-detail">Reminder the day before a payment is due</span>
                  </div>
                  <button
                    className={`switch${notifications.paymentDue ? ' is-on' : ''}`}
                    onClick={() => toggleNotification('paymentDue')}
                    aria-pressed={notifications.paymentDue}
                  >
                    <span className="switch-knob" />
                  </button>
                </div>

                <div className="toggle-row">
                  <div>
                    <span className="toggle-label">Invoice overdue</span>
                    <span className="toggle-detail">Alert when a sent invoice passes its due date</span>
                  </div>
                  <button
                    className={`switch${notifications.invoiceOverdue ? ' is-on' : ''}`}
                    onClick={() => toggleNotification('invoiceOverdue')}
                    aria-pressed={notifications.invoiceOverdue}
                  >
                    <span className="switch-knob" />
                  </button>
                </div>

                <div className="toggle-row">
                  <div>
                    <span className="toggle-label">Meeting starts in 15 minutes</span>
                    <span className="toggle-detail">Reminder before scheduled meetings</span>
                  </div>
                  <button
                    className={`switch${notifications.meetingReminder ? ' is-on' : ''}`}
                    onClick={() => toggleNotification('meetingReminder')}
                    aria-pressed={notifications.meetingReminder}
                  >
                    <span className="switch-knob" />
                  </button>
                </div>

                <div className="toggle-row">
                  <div>
                    <span className="toggle-label">Task deadline today</span>
                    <span className="toggle-detail">Alert when a task is due today</span>
                  </div>
                  <button
                    className={`switch${notifications.taskDeadline ? ' is-on' : ''}`}
                    onClick={() => toggleNotification('taskDeadline')}
                    aria-pressed={notifications.taskDeadline}
                  >
                    <span className="switch-knob" />
                  </button>
                </div>

                <div className="toggle-row">
                  <div>
                    <span className="toggle-label">New document uploaded</span>
                    <span className="toggle-detail">Notify when a client or teammate adds a file</span>
                  </div>
                  <button
                    className={`switch${notifications.newDocument ? ' is-on' : ''}`}
                    onClick={() => toggleNotification('newDocument')}
                    aria-pressed={notifications.newDocument}
                  >
                    <span className="switch-knob" />
                  </button>
                </div>
              </div>

              <button className="btn-primary">Save preferences</button>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default Settings