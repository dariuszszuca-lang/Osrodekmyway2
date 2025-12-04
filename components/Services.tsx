import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-gray-900 dark:text-gray-100 tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
        Co Oferujemy
      </h1>
      <p className="text-gray-700 dark:text-gray-300 text-base font-normal leading-relaxed max-w-[720px]">
        Nasze programy są starannie opracowane, aby leczyć umysł, ciało i ducha, zapewniając kompleksową opiekę dostosowaną do Twoich indywidualnych potrzeb.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-0 mt-6">
        <div className="flex flex-1 gap-4 rounded-xl border border-gray-200/80 dark:border-gray-700/60 bg-white dark:bg-background-dark p-6 flex-col hover:shadow-lg transition-shadow">
          <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
          <div className="flex flex-col gap-1">
            <h2 className="text-gray-900 dark:text-gray-100 text-lg font-bold leading-tight">Terapia Indywidualna</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">
              Spersonalizowane sesje 1 na 1 z naszymi certyfikowanymi terapeutami, aby zająć się Twoimi unikalnymi wyzwaniami i celami.
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-4 rounded-xl border border-gray-200/80 dark:border-gray-700/60 bg-white dark:bg-background-dark p-6 flex-col hover:shadow-lg transition-shadow">
          <span className="material-symbols-outlined text-primary text-3xl">diversity_3</span>
          <div className="flex flex-col gap-1">
            <h2 className="text-gray-900 dark:text-gray-100 text-lg font-bold leading-tight">Zajęcia Grupowe</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">
              Połącz się z innymi w wspierającym środowisku, aby dzielić się doświadczeniami i budować silną społeczność.
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-4 rounded-xl border border-gray-200/80 dark:border-gray-700/60 bg-white dark:bg-background-dark p-6 flex-col hover:shadow-lg transition-shadow">
          <span className="material-symbols-outlined text-primary text-3xl">self_improvement</span>
          <div className="flex flex-col gap-1">
            <h2 className="text-gray-900 dark:text-gray-100 text-lg font-bold leading-tight">Holistyczne Dobre Samopoczucie</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">
              Uczestnicz w zajęciach takich jak joga, medytacja i warsztaty żywieniowe, aby wspierać swoje ogólne zdrowie.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;