import React from 'react';

const FAQ: React.FC = () => {
  return (
    <div className="py-20 max-w-4xl mx-auto w-full">
      <div className="text-center mb-10">
        <h2 className="text-gray-900 dark:text-gray-100 text-3xl font-bold leading-tight tracking-[-0.015em]">
          Często Zadawane Pytania
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          Znajdź odpowiedzi na często zadawane pytania dotyczące naszych programów i procesu przyjęcia.
        </p>
      </div>
      <div className="space-y-4">
        <details className="group rounded-lg bg-white dark:bg-gray-800/50 p-6 [&_summary::-webkit-details-marker]:hidden" open>
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-white">
            <h3 className="text-lg font-bold">Jakie rodzaje programów leczenia oferujecie?</h3>
            <span className="relative size-5 shrink-0">
              <span className="material-symbols-outlined transition-transform duration-300 group-open:-rotate-180">
                expand_more
              </span>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
            Oferujemy szereg programów, w tym leczenie stacjonarne, częściową hospitalizację (PHP) i intensywne programy ambulatoryjne (IOP). Każdy program jest dostosowany do indywidualnych potrzeb i obejmuje terapię indywidualną, sesje grupowe i zajęcia wellness.
          </p>
        </details>
        
        <details className="group rounded-lg bg-white dark:bg-gray-800/50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-white">
            <h3 className="text-lg font-bold">Czy akceptujecie ubezpieczenie?</h3>
            <span className="relative size-5 shrink-0">
              <span className="material-symbols-outlined transition-transform duration-300 group-open:-rotate-180">
                expand_more
              </span>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
            Tak, współpracujemy z większością głównych ubezpieczycieli. Nasz zespół ds. przyjęć pomoże Ci zweryfikować Twoje świadczenia i zrozumieć zakres ubezpieczenia. Zadzwoń do nas, aby uzyskać bezpłatną, poufną weryfikację ubezpieczenia.
          </p>
        </details>
        
        <details className="group rounded-lg bg-white dark:bg-gray-800/50 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-white">
            <h3 className="text-lg font-bold">Jak wygląda typowy dzień w ośrodku?</h3>
            <span className="relative size-5 shrink-0">
              <span className="material-symbols-outlined transition-transform duration-300 group-open:-rotate-180">
                expand_more
              </span>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
            Typowy dzień jest zorganizowany tak, aby promować leczenie i rutynę. Obejmuje mieszankę sesji terapeutycznych (zarówno indywidualnych, jak i grupowych), zajęć wellness, takich jak joga czy medytacja, pożywne posiłki oraz czas na osobistą refleksję i relaks.
          </p>
        </details>
      </div>
    </div>
  );
};

export default FAQ;