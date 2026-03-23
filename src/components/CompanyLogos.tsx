// SVG company logos — pass dark={true} when rendering on dark backgrounds

export function AnthropicLogo({ height = 20, dark = false }: { height?: number; dark?: boolean }) {
  const txt = dark ? '#f5f5f7' : '#1d1d1f'
  return (
    <svg height={height} viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="14" r="3" fill="#C2461E"/>
      <circle cx="20" cy="7" r="2.5" fill="#C2461E"/>
      <circle cx="20" cy="21" r="2.5" fill="#C2461E"/>
      <line x1="13" y1="12" x2="18" y2="9" stroke="#C2461E" strokeWidth="1.5"/>
      <line x1="13" y1="16" x2="18" y2="19" stroke="#C2461E" strokeWidth="1.5"/>
      <text x="28" y="19" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif" fontWeight="700" fontSize="13" fill={txt} letterSpacing="0.5">ANTHROPIC</text>
    </svg>
  )
}

export function NvidiaLogo({ height = 22, dark = false }: { height?: number; dark?: boolean }) {
  return (
    <svg height={height} width={height * 3.2} viewBox="0 0 70 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="70" height="22" rx="3" fill="#76B900"/>
      <circle cx="12" cy="11" r="5" fill="none" stroke="white" strokeWidth="1.5"/>
      <circle cx="12" cy="11" r="2.2" fill="white"/>
      <path d="M8 11 Q12 6 16 11" stroke="white" strokeWidth="1.2" fill="none"/>
      <text x="22" y="15.5" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif" fontWeight="700" fontSize="11" fill="white" letterSpacing="0.2">nvidia</text>
    </svg>
  )
}

export function MicrosoftLogo({ height = 22, dark = false }: { height?: number; dark?: boolean }) {
  const sq = height * 0.43
  const gap = height * 0.07
  const totalW = sq * 2 + gap
  const txt = dark ? '#d0d0d0' : '#737373'
  return (
    <svg height={height} width={totalW + 62} viewBox={`0 0 ${totalW + 62} ${height}`} fill="none">
      <rect x="0" y="0" width={sq} height={sq} fill="#F35325"/>
      <rect x={sq + gap} y="0" width={sq} height={sq} fill="#81BC06"/>
      <rect x="0" y={sq + gap} width={sq} height={sq} fill="#05A6F0"/>
      <rect x={sq + gap} y={sq + gap} width={sq} height={sq} fill="#FFBA08"/>
      <text x={totalW + 7} y={height * 0.72} fontFamily="-apple-system,BlinkMacSystemFont,sans-serif" fontWeight="600" fontSize={height * 0.58} fill={txt}>Microsoft</text>
    </svg>
  )
}

export function AWSLogo({ height = 22, dark = false }: { height?: number; dark?: boolean }) {
  const txt = dark ? '#f5f5f7' : '#232F3E'
  return (
    <svg height={height} width={height * 3} viewBox="0 0 66 22" fill="none">
      <text x="0" y="14" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif" fontWeight="800" fontSize="15" fill={txt} letterSpacing="0.8">aws</text>
      <path d="M1 18 Q33 24 65 18" stroke="#FF9900" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
    </svg>
  )
}

export function AppleLogo({ height = 22, dark = false }: { height?: number; dark?: boolean }) {
  const fill = dark ? '#f5f5f7' : '#1d1d1f'
  return (
    <svg height={height} width={height * 0.82} viewBox="0 0 18 22" fill="none">
      <path d="M14.2 11.3c.1-2.9 2.4-4.2 2.5-4.3-1.4-2-3.5-2.2-4.2-2.3-1.8-.2-3.5 1.1-4.4 1.1-.9 0-2.3-1-3.8-1C2.5 4.9.8 6 0 7.5c-1.9 3.3-.5 8.2 1.4 10.9.9 1.3 2 2.8 3.5 2.7 1.4-.1 1.9-.9 3.6-.9s2.1.9 3.6.8c1.5 0 2.5-1.3 3.5-2.6.7-1 1.2-2.1 1.5-3.3-3.3-1.3-4-4.5-3.9-5.8z" fill={fill}/>
      <path d="M11.5 3.1c.8-.9 1.3-2.2 1.1-3.1-1.1.1-2.4.7-3.2 1.6-.7.8-1.3 2-.1 3.1 1.3.1 2.5-.6 3.2-1.6z" fill={fill}/>
    </svg>
  )
}

export function AnyScaleLogo({ height = 22, dark = false }: { height?: number; dark?: boolean }) {
  const txt = dark ? '#f5f5f7' : '#1d1d1f'
  return (
    <svg height={height} width={height * 3.6} viewBox="0 0 80 22" fill="none">
      <text x="0" y="16" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif" fontWeight="700" fontSize="14" fill="#FF6B35">any</text>
      <text x="34" y="16" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif" fontWeight="700" fontSize="14" fill={txt}>scale</text>
    </svg>
  )
}

export function RedHatLogo({ height = 22, dark = false }: { height?: number; dark?: boolean }) {
  const txt = dark ? '#f5f5f7' : '#1d1d1f'
  return (
    <svg height={height} width={height * 3.8} viewBox="0 0 84 22" fill="none">
      <ellipse cx="12" cy="15" rx="9" ry="3.5" fill="#EE0000"/>
      <path d="M5 15 Q7 7 12 5 Q17 7 19 15Z" fill="#EE0000"/>
      <path d="M3.5 15.5 Q12 12 20.5 15.5" stroke="#CC0000" strokeWidth="1" fill="none"/>
      <text x="25" y="16" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif" fontWeight="700" fontSize="12" fill={txt}>Red Hat</text>
    </svg>
  )
}

export function MastercardLogo({ height = 22, dark = false }: { height?: number; dark?: boolean }) {
  const txt = dark ? '#f5f5f7' : '#1d1d1f'
  return (
    <svg height={height} width={height * 4.5} viewBox="0 0 99 22" fill="none">
      <circle cx="13" cy="11" r="10" fill="#EB001B"/>
      <circle cx="25" cy="11" r="10" fill="#F79E1B"/>
      <path d="M19 3.2C16 5.7 14.5 8.2 14.5 11S16 16.3 19 18.8C22 16.3 23.5 13.8 23.5 11S22 5.7 19 3.2Z" fill="#FF5F00"/>
      <text x="40" y="15.5" fontFamily="-apple-system,BlinkMacSystemFont,sans-serif" fontWeight="600" fontSize="11" fill={txt} letterSpacing="-0.2">mastercard</text>
    </svg>
  )
}

// Dispatcher — pass dark={true} on dark backgrounds
export function CompanyLogo({ company, height = 20, dark = false }: { company: string; height?: number; dark?: boolean }) {
  const name = company.toLowerCase()
  if (name.includes('anthropic'))   return <AnthropicLogo height={height} dark={dark} />
  if (name.includes('nvidia'))      return <NvidiaLogo height={height} dark={dark} />
  if (name.includes('microsoft'))   return <MicrosoftLogo height={height} dark={dark} />
  if (name.includes('amazon') || name.includes('aws') || name.includes('audible')) return <AWSLogo height={height} dark={dark} />
  if (name.includes('apple'))       return <AppleLogo height={height} dark={dark} />
  if (name.includes('anyscale'))    return <AnyScaleLogo height={height} dark={dark} />
  if (name.includes('red hat'))     return <RedHatLogo height={height} dark={dark} />
  if (name.includes('mastercard'))  return <MastercardLogo height={height} dark={dark} />
  return (
    <span style={{ fontFamily: 'var(--font)', fontSize: 12, fontWeight: 700, color: dark ? '#f5f5f7' : '#1d1d1f' }}>
      {company}
    </span>
  )
}

// Simple colored text badge
export function CompanyBadge({ company, color }: { company: string; color: string }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      fontSize: 11, fontWeight: 600, padding: '3px 10px',
      borderRadius: 980, background: color + '1A', color,
      letterSpacing: '0.02em', fontFamily: 'var(--font)',
    }}>
      {company}
    </span>
  )
}
