import { useState } from 'react'

const API_BASE = 'http://localhost:8000' // <-- change to your backend URL when deployed

export default function App() {
    const [q, setQ] = useState('')
    const [answer, setAnswer] = useState<string>('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    async function ask() {
        if (!q.trim() || loading) return
        setError(null)
        setLoading(true)
        setAnswer('…')
        try {
            const res = await fetch(`${API_BASE}/api/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: q.trim() })
            })
            if (!res.ok) throw new Error(`API ${res.status}`)
            // backend returns { answer: string }
            const data = await res.json()
            setAnswer(String(data.answer ?? ''))
        } catch (e) {
            const err = e as Error
            setAnswer('')
            setError(err.message || 'Network error')
        } finally {
            setLoading(false)
            setQ('') // clear input after request; remove if you prefer to keep text
        }
    }

    return (
        <div className="container">
            <h1>📚 Smart Librarian</h1>
            <p>Ask me for books by theme, genre, mood, or author.</p>

            <div className="row" style={{ marginTop: 12 }}>
                <input
                    className="input"
                    placeholder="e.g., friendship and magic"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && ask()}
                    disabled={loading}
                />
                <button className="btn" onClick={ask} disabled={loading}>Ask</button>
            </div>

            {error && <div className="card" style={{ borderColor: '#f55' }}>Error: {error}</div>}
            {answer && <div className="card pre">{answer}</div>}
        </div>
    )
}
