import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200/50 dark:border-gray-700/50 py-4">
      <div className="flex items-center gap-4 text-gray-900 dark:text-gray-100">
        <div className="size-6 text-primary">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Ostoja Spokoju</h2>
      </div>
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-8">
          {['Co Oferujemy', 'Nasze Centrum', 'Filozofia', 'O Nas', 'FAQ'].map((item) => (
            <a
              key={item}
              className="text-sm font-medium leading-normal text-gray-800 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              href="#"
            >
              {item}
            </a>
          ))}
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary text-gray-900 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
          <span className="truncate">Kontakt</span>
        </button>
      </div>
      {/* Mobile Menu Icon (Placeholder for full mobile menu implementation) */}
      <div className="md:hidden flex items-center">
        <span className="material-symbols-outlined text-gray-800 dark:text-gray-300 cursor-pointer">menu</span>
      </div>
    </header>
  );
};

export default Header;