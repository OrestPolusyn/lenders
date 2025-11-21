// CSS Modules type declarations
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// External libraries without type definitions
declare module 'react-toastify' {
  export const ToastContainer: any;
  export const toast: any;
}

declare module 'react-toastify/dist/ReactToastify.css';

// Swiper modules
declare module 'swiper';
declare module 'swiper/modules';
declare module 'swiper/css';
declare module 'swiper/css/navigation';
declare module 'swiper/css/pagination';
