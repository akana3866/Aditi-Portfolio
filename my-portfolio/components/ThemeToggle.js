import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="flex items-center gap-3">
      {/* Icon Indicator */}
      <div className="relative group">
        <div className="w-10 h-10 border border-stroke rounded-lg flex items-center justify-center">
          {isDark ? (
            // Moon Icon
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            // Sun Icon
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>

        {/* Toggle Switch - appears on hover */}
        <div className="absolute left-14 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="flex border border-stroke rounded-lg overflow-hidden">
            <button
              onClick={toggleTheme}
              className={`px-3 w-14 h-10 text-xs font-medium transition-colors duration-200 flex items-center justify-center ${
                isDark 
                  ? 'bg-purple-400 text-background' 
                  : 'bg-background text-stroke'
              }`}
            >
              Night
            </button>
            <button
              onClick={toggleTheme}
              className={`px-3 w-14 h-10 text-xs font-medium transition-colors duration-200 flex items-center justify-center ${
                !isDark 
                  ? 'bg-black text-background' 
                  : 'bg-background text-stroke'
              }`}
            >
              Day
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
