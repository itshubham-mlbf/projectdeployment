export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold">MLBF Bricks</h3>
            <p className="mt-2 text-sm">Building a stronger future, one brick at a time.</p>
          </div>
          <div className="w-full md:w-1/3 text-center mt-4 md:mt-0">
            <p>&copy; 2025 MLBF Bricks. All rights reserved.</p>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-gray-400 mr-4">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

