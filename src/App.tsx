import { FormEvent, useState } from 'react'
import './App.css'

type Page = 'landing' | 'login' | 'dashboard'

function App() {
  const [activePage, setActivePage] = useState<Page>('landing')

  const handleLoginSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setActivePage('dashboard')
  }

  return (
    <div className="app-shell">
      <header className="top-nav">
        <h1>UI Lab</h1>
        <nav>
          <button
            className={activePage === 'landing' ? 'nav-link active' : 'nav-link'}
            onClick={() => setActivePage('landing')}
          >
            Landing
          </button>
          <button
            className={activePage === 'login' ? 'nav-link active' : 'nav-link'}
            onClick={() => setActivePage('login')}
          >
            Login
          </button>
          <button
            className={activePage === 'dashboard' ? 'nav-link active' : 'nav-link'}
            onClick={() => setActivePage('dashboard')}
          >
            Dashboard
          </button>
        </nav>
      </header>

      {activePage === 'landing' && (
        <main className="landing-page">
          <div className="hero-copy">
            <p className="pill">Welcome to UI Lab</p>
            <h2>Design, build, and ship interfaces faster.</h2>
            <p>
              Create beautiful experiences with reusable UI patterns, thoughtful
              interactions, and a modern design system.
            </p>
            <button className="cta" onClick={() => setActivePage('login')}>
              Get started
            </button>
          </div>

          <section className="feature-grid">
            <article>
              <h3>Composable</h3>
              <p>Build pages quickly from modular and reusable components.</p>
            </article>
            <article>
              <h3>Accessible</h3>
              <p>Ship inclusive UIs with sensible defaults and keyboard support.</p>
            </article>
            <article>
              <h3>Fast</h3>
              <p>Keep your workflow snappy from prototyping to production.</p>
            </article>
          </section>
        </main>
      )}

      {activePage === 'login' && (
        <main className="login-page">
          <form className="login-card" onSubmit={handleLoginSubmit}>
            <h2>Welcome back</h2>
            <p>Sign in to continue to your dashboard.</p>

            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="you@example.com" required />

            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="••••••••" required />

            <button type="submit" className="cta">
              Sign in
            </button>
          </form>
        </main>
      )}

      {activePage === 'dashboard' && (
        <main className="dashboard-page">
          <section className="dashboard-header">
            <div>
              <p className="pill">Dashboard</p>
              <h2>Good morning, Alex 👋</h2>
              <p>Here&apos;s a quick snapshot of your product metrics.</p>
            </div>
            <button className="cta" onClick={() => setActivePage('landing')}>
              Back to landing
            </button>
          </section>

          <section className="stats-grid">
            <article className="stat-card">
              <h3>Active users</h3>
              <p className="stat-value">12,482</p>
              <span className="stat-trend up">+8.4% this week</span>
            </article>
            <article className="stat-card">
              <h3>Conversion rate</h3>
              <p className="stat-value">4.7%</p>
              <span className="stat-trend up">+0.9% this week</span>
            </article>
            <article className="stat-card">
              <h3>Churn rate</h3>
              <p className="stat-value">1.2%</p>
              <span className="stat-trend down">-0.3% this week</span>
            </article>
          </section>

          <section className="activity-card">
            <h3>Recent activity</h3>
            <ul>
              <li>New onboarding flow published to production.</li>
              <li>9 team members viewed the latest prototype.</li>
              <li>Design review scheduled for tomorrow at 10:00 AM.</li>
            </ul>
          </section>
        </main>
      )}
    </div>
  )
}

export default App
