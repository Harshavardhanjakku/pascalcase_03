"use client";
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/components/theme/ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretDownIcon, MagnifyingGlassIcon, SunIcon, MoonIcon, RocketIcon, MagicWandIcon, FileTextIcon, LayersIcon, ReaderIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import Image from 'next/image';

type NavItem =
  | { label: string; href: string }
  | { label: string; children: Array<{ label: string; href: string }> };

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/#blog' },
  { label: 'About', href: '/#why' },
  {
    label: 'Our Products',
    children: [
      { label: 'Metadata Browser', href: '/products/metadata-browser' },
      { label: 'HTML To PDF Converter', href: '/products/html-to-pdf' },
      { label: 'Data Mask for Dataverse', href: '/products/data-mask' },
      { label: 'Commission 365', href: '/products/commission-365' },
      { label: 'AI Autocloser', href: '/products/ai-autocloser' },
      { label: 'Flow Monitor', href: '/products/flow-monitor' },
    ],
  },
  { label: 'Contact', href: '/#contact' },
];

const productCatalog = [
  {
    category: 'Data Tools',
    items: [
      { label: 'Metadata Browser', href: '/products/metadata-browser', icon: ReaderIcon },
      { label: 'Data Mask for Dataverse', href: '/products/data-mask', icon: LayersIcon },
    ],
  },
  {
    category: 'AI Tools',
    items: [
      { label: 'AI Autocloser', href: '/products/ai-autocloser', icon: MagicWandIcon },
    ],
  },
  {
    category: 'Business Tools',
    items: [
      { label: 'Commission 365', href: '/products/commission-365', icon: RocketIcon, badge: 'Popular' },
      { label: 'HTML To PDF Converter', href: '/products/html-to-pdf', icon: FileTextIcon },
      { label: 'Flow Monitor', href: '/products/flow-monitor', icon: RocketIcon },
    ],
  },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-mega-open', servicesOpen ? 'true' : 'false');
  }, [servicesOpen]);

  return (
    <div className="navbar">
      <nav aria-label="Primary" className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between gap-4">
          {/* Left: Logo */}
          <Link href="/" className="shrink-0 flex items-center gap-2 text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
            <Image src="/image.png" alt="Pascalcase logo" className="w-7 h-7 rounded-md object-contain" width={28} height={28} />
            <span className="hidden sm:inline">Pascalcase</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1" ref={menuRef}>
            {navItems.map((item) => {
              const hasChildren = 'children' in item;
              return (
                <div key={item.label} className="relative">
                  {hasChildren ? (
                    <button
                      className="nav-link inline-flex items-center gap-1"
                      aria-haspopup="menu"
                      aria-expanded={servicesOpen}
                      onClick={() => setServicesOpen((o) => !o)}
                    >
                      {item.label}
                      <CaretDownIcon className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link className="nav-link" href={item.href}>
                      {item.label}
                    </Link>
                  )}
                  {/* Dropdown */}
                  <AnimatePresence>
                    {hasChildren && servicesOpen && (
                      <motion.div
                        role="menu"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="absolute left-0 mt-2 w-[720px] max-w-[90vw] rounded-2xl p-4 products-dropdown"
                        style={{
                          backgroundColor: isDark ? '#111827' : '#ffffff',
                          borderColor: isDark ? '#334155' : '#e2e8f0',
                          boxShadow:
                            '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.25)',
                          border: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
                          opacity: 1,
                          backdropFilter: 'none'
                        }}
                      >
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 dropdown-content">
                          {productCatalog.map((group) => (
                            <div key={group.category}>
                              <h3
                                className="px-2 pb-2 text-xs font-semibold uppercase tracking-wider"
                                style={{ color: isDark ? '#94a3b8' : '#64748b' }}
                              >
                                {group.category}
                              </h3>
                              <ul className="space-y-2">
                                {group.items.map((p) => {
                                  const Icon = p.icon;
                                  return (
                                    <li key={p.label}>
                                      <a
                                        href={p.href}
                                        className="group flex items-start gap-3 rounded-xl px-3 py-3 transition-colors"
                                        style={{
                                          backgroundColor: 'transparent'
                                        }}
                                        onMouseEnter={(e) => {
                                          e.currentTarget.style.backgroundColor = isDark ? '#1f2937' : '#f1f5f9';
                                        }}
                                        onMouseLeave={(e) => {
                                          e.currentTarget.style.backgroundColor = 'transparent';
                                        }}
                                        role="menuitem"
                                      >
                                        <span
                                          className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                                          style={{
                                            backgroundColor: isDark ? '#374151' : '#f1f5f9',
                                            color: isDark ? '#e5e7eb' : '#1e293b'
                                          }}
                                        >
                                          <Icon className="h-4 w-4" aria-hidden />
                                        </span>
                                        <span className="flex min-w-0 flex-col">
                                          <span
                                            className="flex items-center gap-2 text-sm font-medium"
                                            style={{ color: isDark ? '#e5e7eb' : '#1e293b' }}
                                          >
                                            {p.label}
                                            {p.badge && (
                                              <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold text-white" style={{ backgroundColor: '#ea580c' }}>
                                                {p.badge}
                                              </span>
                                            )}
                                          </span>
                                          <span className="text-xs truncate" style={{ color: isDark ? '#94a3b8' : '#64748b' }}>Click to learn more</span>
                                        </span>
                                      </a>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 flex justify-end">
                          <Link
                            href="/products"
                            className="rounded-lg border px-3 py-2 text-sm transition-colors"
                            style={{
                              borderColor: isDark ? '#334155' : '#e2e8f0',
                              color: isDark ? '#e5e7eb' : '#1e293b',
                              backgroundColor: 'transparent'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = isDark ? '#1f2937' : '#f1f5f9';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                          >
                            View All Products
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Center: Search (desktop) */}
          <div className="hidden md:flex items-center max-w-sm w-full">
            <div className="relative group w-full">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--text-secondary)' }} aria-hidden />
              <input
                aria-label="Search"
                placeholder="Search..."
                className="search-input"
              />
              <button aria-label="Clear search" className="absolute right-2 top-1/2 -translate-y-1/2 text-xs" style={{ color: 'var(--text-secondary)' }}>
                Esc
              </button>
            </div>
          </div>

          {/* Right: Theme + Profile + Mobile toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleTheme();
                }
              }}
              aria-label="Toggle color theme"
              role="switch"
              aria-checked={theme === 'dark'}
              className="theme-toggle"
            >
              <span className="sr-only">{theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}</span>
              {/* Icons */}
              <SunIcon aria-hidden className="absolute left-2 w-4 h-4 transition-colors" style={{ color: theme === 'dark' ? 'var(--text-primary)' : 'var(--text-primary)' }} />
              <MoonIcon aria-hidden className="absolute right-2 w-4 h-4 transition-colors" style={{ color: theme === 'dark' ? 'var(--text-primary)' : 'var(--text-secondary)' }} />
              {/* Knob */}
              <motion.span
                aria-hidden
                className="theme-toggle-knob"
                animate={{ x: theme === 'dark' ? 32 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 32 }}
              />
            </button>

            <button
              className="md:hidden nav-link"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((o) => !o)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-3 space-y-1">
                <div className="px-3 pb-2">
                  <div className="relative">
                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: 'var(--text-secondary)' }} aria-hidden />
                    <input
                      aria-label="Search"
                      placeholder="Search..."
                      className="search-input pl-9 pr-3"
                    />
                  </div>
                </div>
                {navItems.map((item) => {
                  const hasChildren = 'children' in item;
                  return (
                    <div key={item.label} className="px-2">
                      {hasChildren ? (
                        <details className="group">
                          <summary className="cursor-pointer nav-link flex items-center justify-between">
                            <span>{item.label}</span>
                            <CaretDownIcon className="w-4 h-4" />
                          </summary>
                          <div className="pl-3">
                            {item.children.map((c: { label: string; href: string }) => (
                              <a key={c.label} className="block nav-link" href={c.href}>{c.label}</a>
                            ))}
                          </div>
                        </details>
                      ) : (
                        <a className="block nav-link" href={item.href}>{item.label}</a>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}


