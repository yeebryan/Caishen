export default function CaishenSVG({ stage = 1, width = 100, height = 130 }) {
  const isDivine = stage >= 4
  const isGrand = stage >= 3
  const isProsperous = stage >= 2

  const robeColor = stage >= 3 ? '#A93226' : '#C0392B'
  const robeDark  = stage >= 3 ? '#7B241C' : '#922B21'
  const trimColor = isProsperous ? '#D4A017' : '#8B6914'
  const trimLight = isProsperous ? '#FFD700' : '#A07820'

  return (
    <svg viewBox="0 0 100 130" width={width} height={height} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id={`aura-${stage}`} cx="50%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity={isGrand ? '0.35' : '0'}/>
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id={`face-${stage}`} cx="45%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FDE8B0"/>
          <stop offset="100%" stopColor="#F0C878"/>
        </radialGradient>
      </defs>

      {/* Aura glow — stage 3+ */}
      {isGrand && <ellipse cx="50" cy="80" rx="52" ry="48" fill={`url(#aura-${stage})`}/>}

      {/* ── HAT ── */}
      {/* Left wing */}
      <path d="M10 28 Q14 22 30 24 L30 30 Q16 32 10 28Z" fill="#1A0A2E"/>
      {/* Right wing */}
      <path d="M90 28 Q86 22 70 24 L70 30 Q84 32 90 28Z" fill="#1A0A2E"/>
      {/* Hat body */}
      <rect x="28" y="18" width="44" height="15" rx="4" fill="#1A0A2E"/>
      {/* Hat dome */}
      <ellipse cx="50" cy="17" rx="19" ry="14" fill="#1A0A2E"/>
      {/* Hat highlight */}
      <ellipse cx="44" cy="12" rx="6" ry="4" fill="rgba(255,255,255,0.08)"/>
      {/* Hat top ornament */}
      {isProsperous ? (
        <g>
          <circle cx="50" cy="6" r="5.5" fill={trimColor}/>
          <circle cx="50" cy="6" r="3.5" fill={trimLight}/>
          <circle cx="50" cy="6" r="1.5" fill="white"/>
        </g>
      ) : (
        <circle cx="50" cy="6" r="4" fill="#444"/>
      )}
      {/* Hat gold brim trim — stage 2+ */}
      {isProsperous && (
        <rect x="28" y="30" width="44" height="3" rx="1.5" fill={trimColor}/>
      )}

      {/* ── FACE ── */}
      <circle cx="50" cy="44" r="23" fill="#E8C080"/>
      <circle cx="50" cy="43" r="22" fill={`url(#face-${stage})`}/>

      {/* Eyebrows */}
      <path d="M40 36 Q43 34 46 36.5" stroke="#5C3317" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
      <path d="M54 36 Q57 34 60 36.5" stroke="#5C3317" strokeWidth="1.4" fill="none" strokeLinecap="round"/>

      {/* Eyes */}
      <ellipse cx="43" cy="41" rx="3" ry="3.5" fill="#1A0A00"/>
      <ellipse cx="57" cy="41" rx="3" ry="3.5" fill="#1A0A00"/>
      <circle cx="44.5" cy="39.5" r="1.1" fill="white"/>
      <circle cx="58.5" cy="39.5" r="1.1" fill="white"/>

      {/* Rosy cheeks */}
      <ellipse cx="35" cy="47" rx="7" ry="5" fill="rgba(240,100,100,0.30)"/>
      <ellipse cx="65" cy="47" rx="7" ry="5" fill="rgba(240,100,100,0.30)"/>

      {/* Nose — tiny */}
      <ellipse cx="50" cy="47" rx="1.8" ry="1.2" fill="rgba(180,100,60,0.3)"/>

      {/* Mustache */}
      <path d="M44 51 Q47 49 50 51 Q53 49 56 51" stroke="#7A5230" strokeWidth="1.8" fill="none" strokeLinecap="round"/>

      {/* Smile */}
      <path d="M43 55 Q50 61 57 55" stroke="#C0392B" strokeWidth="1.6" fill="none" strokeLinecap="round"/>

      {/* ── BEARD ── */}
      <path d="M37 60 Q30 74 33 90 Q40 100 50 101 Q60 100 67 90 Q70 74 63 60 Q57 65 50 65 Q43 65 37 60Z" fill="white"/>
      {/* Beard texture lines */}
      <path d="M43 67 Q42 80 44 96" stroke="#ddd" strokeWidth="0.9" fill="none"/>
      <path d="M50 66 Q50 80 50 98" stroke="#ddd" strokeWidth="0.9" fill="none"/>
      <path d="M57 67 Q58 80 56 96" stroke="#ddd" strokeWidth="0.9" fill="none"/>

      {/* ── ROBE / BODY ── */}
      <path d="M23 67 Q13 76 11 94 L9 120 Q9 126 50 127 Q91 126 91 120 L89 94 Q87 76 77 67 Q64 74 50 74 Q36 74 23 67Z" fill={robeColor}/>
      {/* Robe shadow sides */}
      <path d="M9 100 Q9 120 9 120 Q9 126 50 127 Q91 126 91 120 L91 100 Q75 108 50 108 Q25 108 9 100Z" fill={robeDark}/>

      {/* Gold collar */}
      <ellipse cx="50" cy="70" rx="17" ry="7.5" fill={trimColor}/>
      <ellipse cx="50" cy="70" rx="13" ry="5.5" fill={trimLight}/>
      <ellipse cx="50" cy="69" rx="8" ry="3.5" fill={trimColor}/>

      {/* Robe center stripe — stage 3+ */}
      {isGrand && (
        <path d="M45 74 L43 127 L57 127 L55 74Z" fill="rgba(212,160,23,0.25)"/>
      )}

      {/* Robe bottom trim */}
      {isProsperous
        ? <path d="M9 118 Q50 122 91 118 L91 124 Q50 128 9 124Z" fill={trimColor}/>
        : <path d="M9 118 Q50 121 91 118 L91 123 Q50 126 9 123Z" fill={robeDark}/>
      }

      {/* ── SLEEVES ── */}
      <path d="M23 67 Q11 78 9 93 Q9 100 18 100 Q22 90 30 80Z" fill={robeColor}/>
      <path d="M77 67 Q89 78 91 93 Q91 100 82 100 Q78 90 70 80Z" fill={robeColor}/>
      {/* Sleeve cuffs */}
      {isProsperous ? (
        <>
          <ellipse cx="13" cy="100" rx="7" ry="4.5" fill={trimColor}/>
          <ellipse cx="87" cy="100" rx="7" ry="4.5" fill={trimColor}/>
        </>
      ) : (
        <>
          <ellipse cx="13" cy="100" rx="7" ry="4.5" fill={robeDark}/>
          <ellipse cx="87" cy="100" rx="7" ry="4.5" fill={robeDark}/>
        </>
      )}

      {/* Hands */}
      <ellipse cx="13" cy="102" rx="6" ry="5" fill="#F0C878"/>
      <ellipse cx="87" cy="102" rx="6" ry="5" fill="#F0C878"/>

      {/* ── INGOTS (元宝) ── */}
      {/* Main center ingot */}
      <g transform="translate(50, 112)">
        <ellipse cx="0" cy="2" rx="15" ry="8" fill="#B8860B"/>
        <path d="M-15 2 Q-15 11 0 13 Q15 11 15 2Z" fill="#8B6400"/>
        <ellipse cx="0" cy="0" rx="15" ry="8" fill={trimColor}/>
        <ellipse cx="0" cy="-1" rx="11" ry="5.5" fill={trimLight}/>
        <ellipse cx="-2" cy="-2" rx="5" ry="2.5" fill="rgba(255,255,255,0.4)"/>
      </g>

      {/* Stage 3: two flanking ingots */}
      {isGrand && (
        <>
          <g transform="translate(22, 120) scale(0.65)">
            <ellipse cx="0" cy="2" rx="15" ry="8" fill="#B8860B"/>
            <path d="M-15 2 Q-15 11 0 13 Q15 11 15 2Z" fill="#8B6400"/>
            <ellipse cx="0" cy="0" rx="15" ry="8" fill={trimColor}/>
            <ellipse cx="0" cy="-1" rx="10" ry="5" fill={trimLight}/>
          </g>
          <g transform="translate(78, 120) scale(0.65)">
            <ellipse cx="0" cy="2" rx="15" ry="8" fill="#B8860B"/>
            <path d="M-15 2 Q-15 11 0 13 Q15 11 15 2Z" fill="#8B6400"/>
            <ellipse cx="0" cy="0" rx="15" ry="8" fill={trimColor}/>
            <ellipse cx="0" cy="-1" rx="10" ry="5" fill={trimLight}/>
          </g>
        </>
      )}

      {/* Stage 4: two more ingots + sparkles */}
      {isDivine && (
        <>
          <g transform="translate(10, 112) scale(0.5)">
            <ellipse cx="0" cy="0" rx="15" ry="8" fill={trimColor}/>
            <ellipse cx="0" cy="-1" rx="10" ry="5" fill={trimLight}/>
          </g>
          <g transform="translate(90, 112) scale(0.5)">
            <ellipse cx="0" cy="0" rx="15" ry="8" fill={trimColor}/>
            <ellipse cx="0" cy="-1" rx="10" ry="5" fill={trimLight}/>
          </g>
          {/* Sparkles */}
          <g fill="#FFD700" fontSize="10">
            <text x="4"  y="58">✦</text>
            <text x="84" y="52">✦</text>
            <text x="6"  y="80" fontSize="7">✦</text>
            <text x="86" y="78" fontSize="7">✦</text>
          </g>
        </>
      )}
    </svg>
  )
}
