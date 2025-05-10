export default function Header() {
  return (
    <div className="flex flex-col justify-between h-full">
      {/* Header Navigation */}
      <header className="flex flex-col items-center py-8 space-y-6">
        <img src="/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full" />
        <a href="/" className="text-xl font-bold">
          Ahmed Mahmood
        </a>
        <a className="text-2xl font-semibold pointer-events-none">
          Fresh Graduate Software Engineer
        </a>
        <br />
        <a href="#about" className="hover:text-gray-500">About</a>
        <a href="#experience" className="hover:text-gray-500">Experience</a>
        <a href="#projects" className="hover:text-gray-500">Projects</a>
      </header>

      {/* Footer Links */}
      <footer className="flex gap-6 flex-wrap items-center justify-center text-sm text-gray-500 dark:text-gray-400 py-6">
        <a href="https://github.com/ahmed2309" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.69 5.41-5.25 5.69.42.36.8 1.08.8 2.18v3.24c0 .31.21.67.8.56A10.51 10.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
          </svg>
        </a>
        <a href="https://linkedin.com/in/ahmed-mahmood-08582a292" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM2.5 8.5h5v13h-5v-13zm7.5 0h4.78v1.79h.07c.66-1.25 2.28-2.57 4.7-2.57 5.03 0 5.95 3.31 5.95 7.61v8.17h-5v-7.23c0-1.72-.03-3.93-2.4-3.93-2.4 0-2.77 1.87-2.77 3.8v7.36h-5v-13z" />
          </svg>
        </a>
        <a href="mailto:ahmed.mahmood.aldrazi@gmail.com" aria-label="Email">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 13.5 0 6.75V18c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6.75L12 13.5zM22 4H2c-1.1 0-2 .9-2 2l12 6.75L24 6c0-1.1-.9-2-2-2z" />
          </svg>
        </a>
        <a href="https://instagram.com/a7med.2309" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.41.59.22 1.01.48 1.46.93.45.45.71.87.93 1.46.17.46.36 1.26.41 2.43.058 1.27.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.93 1.46-.45.45-.87.71-1.46.93-.46.17-1.26.36-2.43.41-1.27.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.41-.59-.22-1.01-.48-1.46-.93-.45-.45-.71-.87-.93-1.46-.17-.46-.36-1.26-.41-2.43-.058-1.27-.07-1.65-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.97.41-2.43.22-.59.48-1.01.93-1.46.45-.45.87-.71 1.46-.93.46-.17 1.26-.36 2.43-.41 1.27-.058 1.65-.07 4.85-.07zm0-2.16C8.74 0 8.332.012 7.05.07 5.77.128 4.89.31 4.18.55c-.78.27-1.45.63-2.12 1.3-.67.67-1.03 1.34-1.3 2.12-.24.71-.42 1.59-.48 2.87C.012 8.332 0 8.74 0 12s.012 3.668.07 4.95c.058 1.28.24 2.16.48 2.87.27.78.63 1.45 1.3 2.12.67.67 1.34 1.03 2.12 1.3.71.24 1.59.42 2.87.48 1.28.058 1.69.07 4.95.07s3.668-.012 4.95-.07c1.28-.058 2.16-.24 2.87-.48.78-.27 1.45-.63 2.12-1.3.67-.67 1.03-1.34 1.3-2.12.24-.71.42-1.59.48-2.87.058-1.28.07-1.69.07-4.95s-.012-3.668-.07-4.95c-.058-1.28-.24-2.16-.48-2.87-.27-.78-.63-1.45-1.3-2.12-.67-.67-1.34-1.03-2.12-1.3-.71-.24-1.59-.42-2.87-.48C15.668.012 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.88a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88z" />
          </svg>
        </a>
      </footer>
    </div>
  );
}
