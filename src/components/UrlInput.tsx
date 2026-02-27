import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function UrlInput() {
  const [url, setUrl] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!url.trim()) return
    navigate('/processing', { state: { url } })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full max-w-2xl bg-white rounded-full pr-2 py-2 pl-4 gap-3"
    >
      {/* Search icon */}
      <svg className="w-6 h-6 text-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="11" cy="11" r="8" />
        <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
      </svg>

      <input
        type="url"
        value={url}
        onChange={e => setUrl(e.target.value)}
        placeholder="Paste URL Here"
        className="flex-1 bg-transparent outline-none font-body text-green-dark placeholder:text-green/60 text-base"
      />

      <button
        type="submit"
        className="shrink-0 px-8 py-3 bg-green text-white font-body font-semibold rounded-full hover:brightness-110 transition"
      >
        Get Recipe
      </button>
    </form>
  )
}
