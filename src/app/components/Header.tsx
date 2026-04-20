import { ImageWithFallback } from './figma/ImageWithFallback';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/src/imports/WhatsApp_Image_2026-04-13_at_12.30.14.jpeg"
            alt="Kigali Harvest School Logo"
            className="w-16 h-16 object-contain"
          />
          <div>
            <h2 className="text-blue-900">Kigali Harvest School</h2>
            <p className="text-sm text-gray-600">Excellence in Education</p>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#about" className="text-blue-900 hover:text-green-600 transition-colors">About Us</a>
            <a href="#programs" className="text-blue-900 hover:text-green-600 transition-colors">Programs</a>
            <a href="#gallery" className="text-blue-900 hover:text-green-600 transition-colors">Gallery</a>
            <a href="#contact" className="text-blue-900 hover:text-green-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <a href="tel:+250788510446" className="text-blue-900">+250 788 510 446</a>
          </div>
        </div>
      </div>
    </header>
  );
}
