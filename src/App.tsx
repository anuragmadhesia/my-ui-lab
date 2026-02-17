import { useState } from 'react'
import './App.css'

type DashboardPage = 'overview' | 'reports'

const navItems: Array<{ id: DashboardPage; label: string; description: string }> = [
  {
    id: 'overview',
    label: 'Overview',
    description: 'Track product performance and user growth in one place.',
  },
  {
    id: 'reports',
    label: 'Reports',
    description: 'Review weekly engagement trends and campaign outcomes.',
  },
]

function App() {
  const [activePage, setActivePage] = useState<DashboardPage>('overview')

  const activeItem = navItems.find((item) => item.id === activePage) ?? navItems[0]

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div>
          <p className="brand">UI Lab</p>
          <p className="subtitle">Dashboard</p>
        </div>

        <nav className="sidebar-nav" aria-label="Dashboard sections">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={activePage === item.id ? 'sidebar-link active' : 'sidebar-link'}
              onClick={() => setActivePage(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <div className="dashboard-content">
        <header className="navbar">
          <div>
            <h1>{activeItem.label}</h1>
            <p>{activeItem.description}</p>
          </div>
          <button className="profile-button">Admin</button>
        </header>

        <main className="page-content">
          {activePage === 'overview' ? (
            <section className="card-grid">
              <article className="metric-card">
                <h2>Revenue</h2>
                <p className="metric">$42,800</p>
                <span className="trend positive">+12% from last month</span>
              </article>
              <article className="metric-card">
                <h2>New Users</h2>
                <p className="metric">1,240</p>
                <span className="trend positive">+8% from last month</span>
              </article>
              <article className="metric-card">
                <h2>Churn Rate</h2>
                <p className="metric">2.4%</p>
                <span className="trend neutral">No significant change</span>
              </article>
            </section>
          ) : (
            <section className="report-list">
              <article>
                <h2>Weekly Product Usage</h2>
                <p>Average session duration increased by 14% over the last 7 days.</p>
              </article>
              <article>
                <h2>Campaign Conversion</h2>
                <p>Email campaign click-through rates improved from 2.9% to 4.1%.</p>
              </article>
              <article>
                <h2>Support Queue Snapshot</h2>
                <p>Open tickets reduced by 23% after shipping the self-serve help center.</p>
              </article>
            </section>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
