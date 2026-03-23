import React, { useState } from 'react';

const EasterPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/65 flex items-center justify-center z-[9999] p-4"
      style={{ backdropFilter: 'blur(8px)' }}
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-[440px] rounded-3xl overflow-hidden shadow-2xl"
        style={{ animation: 'popupIn 0.4s ease-out' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-black/10 transition"
          style={{ background: 'rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)' }}
        >
          ✕
        </button>

        {/* HERO IMAGE */}
        <div className="relative overflow-hidden" style={{ height: '280px' }}>
          <img
            src="/wielkanoc-droga.png"
            alt="Droga ku nadziei — Wielkanoc MyWay"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 30%' }}
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%, rgba(255,253,248,0.4) 65%, rgba(255,253,248,0.85) 85%, #fffdf8 100%)'
          }} />

          <div className="absolute top-4 left-0 right-0 text-center z-10">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#9a7a3a', letterSpacing: '4px' }}>
              Wielkanoc 2026
            </span>
          </div>

          <div className="absolute bottom-4 left-0 right-0 text-center z-10 px-6">
            <h2 className="leading-tight" style={{ fontFamily: "'Georgia', serif", fontSize: '32px', color: '#2a2520' }}>
              Wielkanoc = <em style={{ color: '#0D4F4F', fontStyle: 'italic' }}>Wielka Zmiana</em>
            </h2>
          </div>
        </div>

        {/* BODY */}
        <div className="text-center" style={{ background: '#fffdf8', padding: '16px 28px 28px' }}>
          <div className="inline-flex items-center justify-center mb-4" style={{
            padding: '10px 28px',
            borderRadius: '12px',
            border: '3px solid #c0392b',
            background: 'linear-gradient(135deg, #fdeaea, #fff5f5)',
            boxShadow: '0 4px 20px rgba(192,57,43,0.15)'
          }}>
            <span style={{ fontFamily: "'Georgia', serif", fontSize: '30px', fontWeight: 'bold', color: '#c0392b' }}>−50%</span>
          </div>

          <h3 className="mb-2 leading-snug" style={{ fontFamily: "'Georgia', serif", fontSize: '20px', fontWeight: 'bold', color: '#1a1a2e' }}>
            Nowy początek jest bliżej<br />niż myślisz.
          </h3>

          <p className="text-sm mb-5 leading-relaxed" style={{ color: '#666' }}>
            Wielkanoc to czas zmian. Dlatego dajemy 50% zniżki na start leczenia w&nbsp;Ośrodku MyWay.
            <br /><br />
            Zadzwoń, porozmawiamy. Bez zobowiązań.
          </p>

          <a
            href="tel:+48731395295"
            className="block w-full py-4 rounded-2xl text-white font-bold text-base text-center transition"
            style={{ background: 'linear-gradient(135deg, #0D4F4F, #1a7a7a)', boxShadow: '0 8px 25px rgba(13,79,79,0.25)' }}
          >
            Zadzwoń — 731 395 295
          </a>

          <p className="mt-3 font-bold text-sm" style={{ color: '#c0392b' }}>Tylko 10 miejsc — zostało 7</p>

          <div className="mt-4 pt-3 text-xs font-semibold" style={{ borderTop: '1px solid #e8e4da', color: '#0D4F4F' }}>
            🕊 Pod patronatem <strong>Fundacji MyWay</strong>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes popupIn {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default EasterPopup;
