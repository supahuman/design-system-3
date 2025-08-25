/// <reference types="react" />

// This file adds global JSX namespace support to our TypeScript configuration
declare namespace JSX {
  interface IntrinsicElements {
    // Add HTML elements that we use in our components
    button: React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >;
    span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
    svg: React.SVGProps<SVGSVGElement>;
    circle: React.SVGProps<SVGCircleElement>;
    path: React.SVGProps<SVGPathElement>;
    // Add any other elements you need
  }
}

// CSS Modules support
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
