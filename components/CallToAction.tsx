import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <div className="bg-gray-800 dark:bg-gray-900 rounded-xl p-10 md:p-16 text-center flex flex-col items-center gap-6 shadow-2xl">
      <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight max-w-2xl">
        Gotowy Zrobić Pierwszy Krok? Jesteśmy Tutaj, Aby Pomóc.
      </h2>
      <p className="text-gray-300 max-w-2xl">
        Nasz zespół jest dostępny 24/7, aby odpowiedzieć na Twoje pytania i przeprowadzić Cię przez proces. Twoja podróż do zdrowia zaczyna się od prostej rozmowy.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary text-gray-900 text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
          <span className="material-symbols-outlined mr-2">call</span>
          <span className="truncate">Zadzwoń Teraz: 123-456-789</span>
        </button>
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-orange-500 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-orange-600 transition-colors">
          <span className="truncate">Zapytaj o Ofertę</span>
        </button>
      </div>
    </div>
  );
};

export default CallToAction;