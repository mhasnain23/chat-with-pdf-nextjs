import Link from "next/link";
export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auhref py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Product
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-base text-gray-600 hover:text-gray-900"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-base text-gray-600 hover:text-gray-900"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-base text-gray-600 hover:text-gray-900"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-base text-gray-600 hover:text-gray-900"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-base text-gray-600 hover:text-gray-900"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-base text-gray-600 hover:text-gray-900"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-base text-gray-600 hover:text-gray-900"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-base text-gray-600 hover:text-gray-900"
                >
                  API Status
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-base text-gray-600 hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-base text-gray-600 hover:text-gray-900"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-base text-gray-600 hover:text-gray-900"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; 2024 ChatPDF. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
