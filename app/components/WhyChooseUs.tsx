import { CheckCircle } from 'lucide-react'

const reasons = [
  'High-quality materials',
  'Sustainable production',
  'Wide range of products',
  'Expert customer support',
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose MLBF Bricks?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div key={reason} className="flex items-center">
              <CheckCircle className="text-green-500 mr-4" />
              <span className="text-gray-700">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

