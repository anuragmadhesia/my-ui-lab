import { FormEvent, useState } from 'react'
import './App.css'

type Page = 'landing' | 'login' | 'dashboard'

function App() {
  const [activePage, setActivePage] = useState<'landing' | 'login'>('landing')

  const handleLoginSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
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
        </nav>
      </header>

      {activePage === 'landing' ? (
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
      ) : (
        <main className="login-page">
          <form className="login-card" onSubmit={handleLoginSubmit}>
            <h2>Welcome back</h2>
            <p>Sign in to continue to your dashboard.</p>

            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="you@example.com" required />

            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="••••••••" required />

            <button type="submit" className="cta">Sign in</button>
          </form>
        </main>
      )}
    </div>
  )
}

export default App
