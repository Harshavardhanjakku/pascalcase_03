'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="py-8 md:py-12"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Keep in Touch */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                Keep in Touch
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Connect with us across platforms
              </p>

              <div className="flex flex-wrap gap-3">
                {/* Microsoft Teams */}

                {/* Organization (About) */}
                <motion.a
                  href="https://teams.microsoft.com/l/chat/0/0?users=satish@pascalcase.com,likitha@pascalcase.com&topicName=Website%20Inquiry"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="contact-icon h-12 w-12"
                  aria-label="About our organization"
                >
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 15H19V17H17V15Z" fill="currentColor" />
                    <path d="M19 11H17V13H19V11Z" fill="currentColor" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13 7H23V21H1V3H13V7ZM8 5H11V7H8V5ZM11 19V17H8V19H11ZM11 15V13H8V15H11ZM11 11V9H8V11H11ZM21 19V9H13V11H15V13H13V15H15V17H13V19H21ZM3 19V17H6V19H3ZM3 15H6V13H3V15ZM6 11V9H3V11H6ZM3 7H6V5H3V7Z"
                      fill="currentColor"
                    />
                  </svg>
                </motion.a>

                {/* Instagram */}
                <motion.a
                  href="https://www.instagram.com/pascal__case/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="contact-icon h-12 w-12"
                  aria-label="Follow us on Instagram"
                >
                  <svg
                    className="h-6 w-6 transition-colors group-hover:text-pink-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </motion.a>

                {/* LinkedIn (right end) */}
                <motion.a
                  href="https://www.linkedin.com/company/pascalcase/mycompany/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="contact-icon h-12 w-12"
                  aria-label="Visit our LinkedIn"
                >
                  <svg
                    className="h-6 w-6 transition-colors group-hover:text-blue-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 8.98h3.96V21H3V8.98Zm7.49 0H14.3v1.64h.05c.44-.83 1.51-1.7 3.11-1.7 3.33 0 3.94 2.19 3.94 5.05V21h-3.96v-5.2c0-1.24-.02-2.83-1.73-2.83-1.74 0-2.01 1.36-2.01 2.74V21H10.5V8.98Z" />
                  </svg>
                </motion.a>

                {/* YouTube */}
                <motion.a
                  href="https://www.youtube.com/@Pascalcase"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="contact-icon h-12 w-12"
                  aria-label="Subscribe to our YouTube channel"
                >
                  <svg
                    className="h-6 w-6 transition-colors group-hover:text-red-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    id="youtube"
                  >
                    <path d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z"></path>
                  </svg>
                </motion.a>
              </div>
            </div>

            {/* Pages */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                Pages
              </h3>
              <nav aria-label="Footer navigation">
                <ul className="space-y-3">
                  <li>
                    <motion.a
                      href="/blog"
                      whileHover={{ x: 4 }}
                      className="group dark:focus-visible:ring-accent relative text-sm transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <span className="relative">
                        Blog
                        <span
                          className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"
                          style={{ backgroundColor: 'var(--text-primary)' }}
                        ></span>
                      </span>
                    </motion.a>
                  </li>
                  <li>
                    <motion.a
                      href="/careers"
                      whileHover={{ x: 4 }}
                      className="group dark:focus-visible:ring-accent relative text-sm transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <span className="relative">
                        Careers
                        <span
                          className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"
                          style={{ backgroundColor: 'var(--text-primary)' }}
                        ></span>
                      </span>
                    </motion.a>
                  </li>
                  <li>
                    <motion.a
                      href="/terms"
                      whileHover={{ x: 4 }}
                      className="group dark:focus-visible:ring-accent relative text-sm transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <span className="relative">
                        Terms
                        <span
                          className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"
                          style={{ backgroundColor: 'var(--text-primary)' }}
                        ></span>
                      </span>
                    </motion.a>
                  </li>
                  <li>
                    <motion.a
                      href="/privacy"
                      whileHover={{ x: 4 }}
                      className="group dark:focus-visible:ring-accent relative text-sm transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <span className="relative">
                        Privacy Policy
                        <span
                          className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"
                          style={{ backgroundColor: 'var(--text-primary)' }}
                        ></span>
                      </span>
                    </motion.a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* About */}
            <div className="space-y-4 md:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                About
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:support@pascalcase.com"
                  className="dark:focus-visible:ring-accent block text-sm transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                  style={{ color: 'var(--accent-2)' }}
                >
                  support@pascalcase.com
                </a>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  At Pascalcase, we share Microsoft&apos;s vision of helping you and your
                  organization realize full potential. We specialize in building tools based on
                  Dynamics 365 and the Power Platform.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Copyright Bar */}
        <div className="border-t py-6" style={{ borderColor: 'var(--border-subtle)' }}>
          <p className="text-center text-xs" style={{ color: 'var(--text-secondary)' }}>
            ©2025 Pascalcase Software Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
