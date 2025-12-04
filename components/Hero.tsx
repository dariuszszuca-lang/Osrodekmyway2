import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="@[480px]:p-0">
      <div
        className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-6 pb-10 @[480px]:px-12 @[480px]:pb-12"
        data-alt="Serene view of a calm lake at sunrise, representing peace and renewal."
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBH-Ky0rdA6lfV9eJxFUofYnT0keWJ8pGkmADGehRo1TiKLVfI4DhJiLfpYdmz7rgzYGrpy8-eQpnl_BOWqV8tr_gZhN_n2DYEMXjdTVyJw6fqIVGETyj80MW1m5EdjtvpuKG5TOq5RTUcjdqWsF6wrawlKw3bWam0FXFmvulrukocfch2ABszZWMaPlazo4EcSp-2FOTKAbOSo0zDHAc9P0LyhDazyyDMTFt1t_5VNMO0M8Sy-o1_2MYtf79exo3IwVd5aW1NMEAw")',
        }}
      >
        <div className="flex flex-col gap-4 text-left max-w-2xl">
          <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
            Twoja Droga do Pełni Zdrowia Zaczyna Się Tutaj
          </h1>
          <h2 className="text-white/90 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-relaxed">
            Odkryj siłę holistycznego podejścia do zdrowia w naszym centrum rehabilitacyjnym. Jesteśmy tu, by wspierać Cię na każdym kroku Twojej podróży do lepszego samopoczucia.
          </h2>
        </div>
        <div className="flex-wrap gap-3 flex">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-gray-900 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-primary/90 transition-colors">
            <span className="truncate">Zobacz Nasze Usługi</span>
          </button>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-orange-500 text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-orange-600 transition-colors">
            <span className="truncate">Umów Konsultację</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;