export const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Our Services</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="text-gray-400">Email:</span>{' '}
              <a href="mailto:info@bsdlight.com" className="hover:text-white transition-colors">
                info@bsdlight.com
              </a>
            </li>
            <li>
              <span className="text-gray-400">Phone:</span>{' '}
              <a href="tel:+2347018373588" className="hover:text-white transition-colors">
                070 1837 3588
              </a>
            </li>
            <li>
              <span className="text-gray-400">Location:</span> Lagos, Nigeria
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm mb-4 text-gray-300">Get the latest updates and industry news.</p>
          <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email"
              required
              className="w-full p-2 rounded-md bg-gray-800 text-gray-100 placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
            />
            <button 
              type="submit"
              className="bg-green-700 hover:bg-green-800 px-4 py-2 rounded-md text-white text-sm font-medium transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-12 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} BSDLight. All rights reserved.
      </div>
    </footer>
  );
};