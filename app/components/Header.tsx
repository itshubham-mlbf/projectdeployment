import Link from 'next/link'
import { MapPin, Phone } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">MLBF Bricks</div>
          <div className="hidden md:flex space-x-6">
            <Link href="#products" className="text-gray-700 hover:text-gray-900">Products</Link>
            <Link 
              href="https://maps.app.goo.gl/Z8VRBrkHNHrdZTGB9" 
              target="_blank"
              className="text-gray-700 hover:text-gray-900 flex items-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              Location
            </Link>
            <div className="relative group">
              <div className="text-gray-700 hover:text-gray-900 flex items-center gap-2 cursor-pointer">
                <Phone className="w-4 h-4" />
                Call
              </div>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                <Link href="tel:+918581991197" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  +91 85819 91197
                </Link>
                <Link href="tel:+916203168337" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  +91 62031 68337
                </Link>
                <Link href="tel:+919199374297" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  +91 91993 74297
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

