/// <reference types="astro/client" />

// CSS Modules
declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}

// SCSS Modules
declare module '*.module.scss' {
  const classes: { [key: string]: string }
  export default classes
}

declare module '*.scss' {
  const classes: { [key: string]: string }
  export default classes
}

// Image files
interface ImageMetadata {
  src: string
  width: number
  height: number
  format: string
}

declare module '*.jpg' {
  const value: ImageMetadata
  export default value
}

declare module '*.jpeg' {
  const value: ImageMetadata
  export default value
}

declare module '*.png' {
  const value: ImageMetadata
  export default value
}

declare module '*.webp' {
  const value: ImageMetadata
  export default value
}

declare module '*.svg' {
  const value: string
  export default value
}

declare module '*.gif' {
  const value: ImageMetadata
  export default value
}

// External libraries
declare module 'react-toastify' {
  export const ToastContainer: any
  export const toast: any
}

declare module 'react-toastify/dist/ReactToastify.css'

// Swiper
declare module 'swiper'
declare module 'swiper/modules'
declare module 'swiper/css'
declare module 'swiper/css/navigation'
declare module 'swiper/css/pagination'
