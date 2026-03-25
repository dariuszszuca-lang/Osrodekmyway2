import React, { useState } from 'react';
import wielkanocImg from '../wielkanoc-droga.png';

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
            src={wielkanocImg}
            alt="Droga ku nadziei — Wielkanoc MyWay"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 30%' }}
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%, rgba(255,253,248,0.4) 65%, rgba(255,253,248,0.85) 85%, #fffdf8 100%)'
          }} />

          {/* Fundacja + 50% — góra */}
          <div className="absolute top-4 left-0 right-0 text-center z-10 px-4">
            <div className="inline-block rounded-2xl px-6 py-4" style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)', animation: 'badgePulse 3s ease-in-out infinite', boxShadow: '0 8px 32px rgba(192,57,43,0.2), 0 2px 8px rgba(0,0,0,0.08)' }}>
              <p style={{ fontFamily: "'Georgia', serif", fontSize: '17px', fontWeight: '700', color: '#0D4F4F', lineHeight: '1.4' }}>
                Dzięki wsparciu <strong>Fundacji MyWay</strong>
              </p>
              <p className="font-extrabold leading-none my-1" style={{ fontFamily: "'Georgia', serif", fontSize: '42px', color: '#c0392b' }}>−50%</p>
              <p style={{ fontFamily: "'Georgia', serif", fontSize: '15px', fontWeight: '600', color: '#555' }}>obniżamy cenę na start dla 5 osób</p>
            </div>
          </div>

          <div className="absolute bottom-4 left-0 right-0 text-center z-10 px-6">
            <h2 className="leading-tight" style={{ fontFamily: "'Georgia', serif", fontSize: '30px', color: '#2a2520' }}>
              Wielkanoc = <em style={{ color: '#0D4F4F', fontStyle: 'italic' }}>Wielka Zmiana</em>
            </h2>
          </div>
        </div>

        {/* BODY */}
        <div className="text-center" style={{ background: '#fffdf8', padding: '16px 28px 28px' }}>
          <h3 className="mb-2 leading-snug" style={{ fontFamily: "'Georgia', serif", fontSize: '20px', fontWeight: 'bold', color: '#1a1a2e' }}>
            Nowy początek jest bliżej<br />niż myślisz.
          </h3>

          <p className="text-sm mb-5 leading-relaxed" style={{ color: '#666' }}>
            Wielkanoc to czas zmian. Dzięki Fundacji MyWay obniżamy ceny o&nbsp;połowę dla&nbsp;5&nbsp;osób.
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

        </div>
      </div>

      <style>{`
        @keyframes popupIn {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes badgePulse {
          0%, 100% { box-shadow: 0 8px 32px rgba(192,57,43,0.2), 0 2px 8px rgba(0,0,0,0.08); transform: scale(1); }
          50% { box-shadow: 0 12px 44px rgba(192,57,43,0.35), 0 4px 12px rgba(0,0,0,0.1); transform: scale(1.02); }
        }
      `}</style>
    </div>
  );
};

export default EasterPopup;
