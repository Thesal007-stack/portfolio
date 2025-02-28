import 'react';
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    bg?: string;
    text?: string;
    font?: string;
    p?: string;
    border?: string;
    shadow?: string;
    cursor?: string;
    display?: string;
    flex?: string; 
    grid?: string; 
    gap?: string; 
    justify?: string; 
    items?: string; 
    self?: string; 
    position?: string; 
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    z?: string;
    p?: string;
    gap?: string;
    space?:string;
    w?:string;
    h?:string;
    transition?:string;
    m?:string;
    // Add other attributes you plan to use
  }
}

