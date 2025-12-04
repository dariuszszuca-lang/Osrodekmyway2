import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center py-20">
      <div className="flex flex-col gap-4 order-2 md:order-1">
        <h2 className="text-gray-900 dark:text-gray-100 text-[28px] font-bold leading-tight tracking-[-0.015em]">
          Nasza Filozofia: Ścieżka do Pełni Dobrostanu
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Wierzymy, że prawdziwe uzdrowienie wykracza poza leczenie objawów. Nasza filozofia opiera się na holistycznym podejściu, które pielęgnuje umysł, ciało i ducha. Tworzymy spersonalizowane plany leczenia, które integrują terapie oparte na dowodach z praktykami wellness, aby wzmocnić Cię na Twojej drodze do zrównoważonego, satysfakcjonującego życia.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Współczucie, szacunek i zrozumienie są kamieniami węgielnymi naszej opieki. Zapewniamy bezpieczne, wspierające środowisko, w którym możesz leczyć, rosnąć i odkrywać na nowo swoją siłę.
        </p>
      </div>
      <div className="order-1 md:order-2">
        <div
          className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl shadow-md"
          data-alt="Close-up of a cairn of balanced stones on a blurred natural background, symbolizing balance and harmony."
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAxIYlOmele1WFTeLhUxFeFleMvPj22EmaADPirR2PySDzAO5okHgq4Hi4T_C2dfrC2bejDa0UWhnIsnOMgQ9OTqlWcWbalvLFk1UOza1fZUP5nflXx4757q-szQUr428nx7R7-4VKDC0gEG9VWm_13JXIZCZm4FxVOSbdPIlXCoajRtVbcjP9y-19fh7jEe1OggDGxL4I9phzLmWSTEjg5Q1fpOPkUNDlhf_rFLyMLKerHKeXC9SenIch3uGv1O0K1NI7DORs_-6A")',
          }}
        />
      </div>
    </div>
  );
};

export default Philosophy;