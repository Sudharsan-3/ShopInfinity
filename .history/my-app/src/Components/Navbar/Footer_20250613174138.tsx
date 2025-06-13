'use client';

import { FaFacebookF, FaInstagram, FaXTwitter, FaGithub, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 px-4 md:px-20 text-sm">
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {/* Logo */}
        <div className="col-span-2 lg:col-span-1">
          <div className="text-3xl font-bold text-violet-800 mb-4">∞</div>
        </div>

        {/* Column 1 */}
        <div>
          <h4 className="font-semibold text-white mb-2">Solutions</h4>
          <ul className="space-y-1 text-gray-300">
            <li>Marketing</li>
            <li>Analytics</li>
            <li>Automation</li>
            <li>Commerce</li>
            <li>Insights</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold text-white mb-2">Support</h4>
          <ul className="space-y-1 text-gray-300">
            <li>Submit ticket</li>
            <li>Documentation</li>
            <li>Guides</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold text-white mb-2">Company</h4>
          <ul className="space-y-1 text-gray-300">
            <li>About</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Press</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-semibold text-white mb-2">Legal</h4>
          <ul className="space-y-1 text-gray-300">
            <li>Terms of service</li>
            <li>Privacy policy</li>
            <li>License</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-400 text-xs">&copy; 2025 Shopinfinity, Inc. All rights reserved.</p>
        <div className="flex gap-4 text-white text-lg mt-4 md:mt-0">
          <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          <FaXTwitter className="hover:text-gray-300 cursor-pointer" />
          <FaGithub className="hover:text-gray-300 cursor-pointer" />
          <FaYoutube className="hover:text-red-600 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
