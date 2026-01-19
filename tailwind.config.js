/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,vue}", // Adjust paths to match your project structure
    "./public/**/*.html",
    "./*.html",
  ],
  theme: {
    extend: {
      colors:{
        'dark-bg': '#0f172a',
        'soft-bg': '#f8fafc',  
        bg: "#fafafa",
        primary: "#0066ff",
        'primary-hover': "#0052cc",
        success: "#00c48c",
         energy: "#ff6b00",
        heading: "#1a1a1a",
        body: "#333333",
        muted: "#666666",
        border: "#e5e5e5",
        navbar:'rgba(255,255,255,0.80)',
        'ocean-blue': '#3C7CFF',
        default:'#333333',
        softgray:"#f1f5f9",
      }
    },
  },
  plugins: [],
}


