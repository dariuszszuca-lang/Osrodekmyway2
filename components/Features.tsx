import React from 'react';

const Features: React.FC = () => {
  return (
    <div className="py-20 max-w-4xl mx-auto w-full text-center">
      <h2 className="text-gray-900 dark:text-gray-100 text-3xl font-bold leading-tight tracking-[-0.015em]">
        Dlaczego My?
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mt-2 mb-10">
        Nasze unikalne podejście wyróżnia nas na tle innych. Oto, co sprawia, że jesteśmy wyjątkowi.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="p-3 bg-primary/20 rounded-full mb-4">
            <span className="material-symbols-outlined text-primary text-3xl">spa</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Podejście Holistyczne</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
            Integrujemy umysł, ciało i ducha, aby zapewnić kompleksowe leczenie.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="p-3 bg-primary/20 rounded-full mb-4">
            <span className="material-symbols-outlined text-primary text-3xl">groups</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Wspierająca Społeczność</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
            Tworzymy bezpieczne środowisko, które sprzyja uzdrowieniu i rozwojowi.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="p-3 bg-primary/20 rounded-full mb-4">
            <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Doświadczony Zespół</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
            Nasi eksperci są oddani Twojemu sukcesowi na drodze do zdrowia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;