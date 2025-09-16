declare module '../src/app/blog/[slug]/page.js' {
  const _default: any;
  export default _default;
  export const revalidate: any;
  export const generateStaticParams: any;
}

// Wildcard fallback for dynamic route pages
declare module '../src/app/blog/*/page.js' {
  const _default: any;
  export default _default;
  export const revalidate: any;
  export const generateStaticParams: any;
}

// Blog index page
declare module '../src/app/blog/page.js' {
  const _default: any;
  export default _default;
  export const revalidate: any;
}

// Root page
declare module '../src/app/page.js' {
  const _default: any;
  export default _default;
  export const revalidate: any;
}

// Products dynamic slug page
declare module '../src/app/products/[slug]/page.js' {
  const _default: any;
  export default _default;
  export const revalidate: any;
}

// Products index page
declare module '../src/app/products/page.js' {
  const _default: any;
  export default _default;
  export const revalidate: any;
}

// Root layout
declare module '../src/app/layout.js' {
  const _default: any;
  export default _default;
}
