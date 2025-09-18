'use client';
import { useState } from 'react';
import { FileTextIcon, GitHubLogoIcon, DownloadIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';

type Tag = 'Free' | 'AppSource' | 'Edge' | 'Popular';

export type Product = {
  slug: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  tags?: Tag[];
  badge?: string;
  downloadUrl?: string; // external download or store link
};

export default function ProductCard({ product }: { product: Product }) {
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
            {/* Kebab menu removed */}
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
            {product.downloadUrl && (
              <motion.a
                href={product.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="product-cta product-cta--filled"
                onClick={() => track('download')}
              >
                <DownloadIcon /> Download
              </motion.a>
            )}
            <a
              href={`/products/${product.slug}`}
              className="product-cta product-cta--ghost"
              onClick={() => track('docs')}
            >
              Docs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
