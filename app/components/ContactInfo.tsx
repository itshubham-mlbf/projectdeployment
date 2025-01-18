import { MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export default function ContactInfo() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href="https://maps.app.goo.gl/Z8VRBrkHNHrdZTGB9"
            target="_blank"
            className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <MapPin className="w-12 h-12 text-gray-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visit Our Location</h3>
            <p className="text-gray-600 text-center">Click to view on Google Maps</p>
          </Link>
          
          <Link
            href="tel:+918581991197"
            className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Phone className="w-12 h-12 text-gray-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <div className="text-gray-600 text-center">
              <p>+91 85819 91197</p>
              <p>+91 62031 68337</p>
              <p>+91 91993 74297</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

