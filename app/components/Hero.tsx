import { Button } from "@/components/ui/button"
import { Phone } from 'lucide-react'
import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Building the Future with MLBF Bricks</h1>
        <p className="text-xl mb-8">Quality materials for lasting constructions</p>
        <p className="text-xl mb-8">MLBF (Maa Laxmi Bricks Field) Margohi, Tilouthu East, Bihar 821312</p>
        <div className="flex flex-col items-center gap-4">
          <Link href="tel:+918581991197">
            <Button size="lg" className="gap-2">
              <Phone className="w-5 h-5" />
              Call for Order
            </Button>
          </Link>
          <div className="text-sm space-y-1">
            <p>Additional Contact Numbers:</p>
            <Link href="tel:+916203168337" className="block hover:underline">+91 62031 68337</Link>
            <Link href="tel:+919199374297" className="block hover:underline">+91 91993 74297</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

