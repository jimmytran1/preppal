import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="w-full bg-cream-light py-4 flex items-center justify-center">
      <Link to="/" className="heading-md text-green">
        PREPPAL
      </Link>
    </nav>
  )
}
