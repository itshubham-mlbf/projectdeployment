import Image from 'next/image'

const products = [
  { 
    name: 'Red Brick', 
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250116-WA0015.jpg-t0Lpq4OVZAZ7BR0R8E0TFZjUblGuhG.jpeg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250116-WA0020.jpg-KdxVFWTs5RTLSjhHbtRdM8xEL8wNWt.jpeg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250116-WA0022.jpg-vymzxdt1f4nujF57BSvpi9noFsBTgR.jpeg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250116-WA0026.jpg-KuKRZeweLCf8Buky8tsRpw19GJfxZb.jpeg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250116-WA0018.jpg-H3RNG0qGeZUOcOw9TU0k7tISC8aaly.jpeg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250116-WA0023.jpg-FEEq35Std6rdISrzhfhNS4uwUvRSFm.jpeg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250116-WA0019.jpg-Fcdy20N4sK9URZos7vPaRIpMjwiGVk.jpeg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250116-WA0016.jpg-Jm2MloSkKSZafVU6d1SIHkjQPMW31g.jpeg'
    ]
  }
]

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products[0].images.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-square relative">
                <Image 
                  src={image || "/placeholder.svg"}
                  alt={`MLBF Red Brick ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">Red Brick</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

