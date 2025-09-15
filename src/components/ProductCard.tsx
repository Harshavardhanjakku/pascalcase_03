'use client';
import { useState } from 'react';
import {
  DotsHorizontalIcon,
  FileTextIcon,
  PlayIcon,
  GitHubLogoIcon,
  DownloadIcon,
} from '@radix-ui/react-icons';
import { motion, AnimatePresence } from 'framer-motion';

type Tag = 'Free' | 'AppSource' | 'Edge' | 'Popular';

export type Product = {
  slug: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  tags?: Tag[];
  badge?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const track = (action: string) => {
    // Simple analytics hook placeholder
    console.log('product_cta_click', { slug: product.slug, action });
  };

  return (
    <div className="product-card group">
      {product.badge && (
        <span className="bg-accent/90 absolute -top-2 left-3 rounded-full px-2 py-0.5 text-[10px] font-semibold text-[color:var(--on-accent)] shadow">
          {product.badge}
        </span>
      )}
      <div className="flex items-start gap-3">
        <div className="product-icon shrink-0">
          {product.icon ?? <span className="text-xs">APP</span>}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="truncate text-base font-semibold">{product.title}</h3>
            <div className="relative">
              <button
                aria-haspopup="menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((o) => !o)}
                className="hover:bg-overlay-1 rounded-md p-1"
                aria-label="More options"
                title="More options"
              >
                <DotsHorizontalIcon />
              </button>
              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    role="menu"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="border-border-default bg-surface-popover absolute right-0 z-10 mt-2 min-w-44 rounded-lg border p-2 text-sm backdrop-blur-md"
                  >
                    <a
                      className="hover:bg-overlay-1 flex items-center gap-2 rounded-md px-3 py-2"
                      href={`/products/${product.slug}`}
                      onClick={() => track('menu_docs')}
                    >
                      <FileTextIcon /> View docs
                    </a>
                    <a
                      className="hover:bg-overlay-1 flex items-center gap-2 rounded-md px-3 py-2"
                      href="#"
                      onClick={() => track('menu_demo')}
                    >
                      <PlayIcon /> Demo
                    </a>
                    <a
                      className="hover:bg-overlay-1 flex items-center gap-2 rounded-md px-3 py-2"
                      href="#"
                      onClick={() => track('menu_github')}
                    >
                      <GitHubLogoIcon /> GitHub
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <p className="text-text-muted mt-1 line-clamp-2 text-sm">{product.description}</p>
          {product.tags && (
            <div className="mt-2 flex flex-wrap gap-2">
              {product.tags.map((t) => (
                <span
                  key={t}
                  className="border-border-subtle text-text-muted rounded-full border px-2 py-0.5 text-[10px]"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
          <div className="mt-3 flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="product-cta product-cta--filled"
              onClick={() => track('download')}
            >
              <DownloadIcon /> Download
            </motion.button>
            <a
              href={`/products/${product.slug}`}
              className="product-cta product-cta--ghost"
              onClick={() => track('docs')}
            >
              Docs
            </a>
            <a
              href="#"
              className="product-cta product-cta--ghost"
              onClick={() => track('demo')}
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
