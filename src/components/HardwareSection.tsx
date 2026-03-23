'use client'


// SVG board illustrations
function MacMiniIllustration() {
  return (
    <svg width="140" height="100" viewBox="0 0 140 100" fill="none">
      <rect x="15" y="30" width="110" height="55" rx="10" fill="#d1d1d1"/>
      <rect x="18" y="33" width="104" height="49" rx="8" fill="#e8e8e8"/>
      <rect x="22" y="37" width="96" height="41" rx="6" fill="#c8c8c8"/>
      <rect x="24" y="39" width="92" height="37" rx="5" fill="#b8b8b8"/>
      <circle cx="70" cy="57" r="8" fill="#888"/>
      <circle cx="70" cy="57" r="5" fill="#666"/>
      <rect x="55" y="78" width="30" height="4" rx="2" fill="#b0b0b0"/>
      <circle cx="110" cy="45" r="3" fill="#76B900"/>
    </svg>
  )
}

function RaspberryPiIllustration() {
  return (
    <svg width="150" height="110" viewBox="0 0 150 110" fill="none">
      {/* PCB */}
      <rect x="8" y="10" width="134" height="90" rx="5" fill="#1a7a1a"/>
      <rect x="10" y="12" width="130" height="86" rx="4" fill="#1e8a1e"/>
      {/* GPIO pins - two rows */}
      {Array.from({length:20},(_,i)=>(
        <rect key={`p${i}`} x={14+i*5.5} y={14} width={3} height={5} rx="0.5" fill="#c8c8c8"/>
      ))}
      {Array.from({length:20},(_,i)=>(
        <rect key={`p2${i}`} x={14+i*5.5} y={20} width={3} height={5} rx="0.5" fill="#a0a0a0"/>
      ))}
      {/* CPU */}
      <rect x="45" y="38" width="45" height="40" rx="2" fill="#111"/>
      <rect x="48" y="41" width="39" height="34" rx="1" fill="#222"/>
      <text x="67" y="62" textAnchor="middle" fontFamily="monospace" fontSize="5" fill="#555">BCM2712</text>
      {/* RAM chip */}
      <rect x="14" y="42" width="24" height="18" rx="1" fill="#1a1a2e"/>
      <text x="26" y="54" textAnchor="middle" fontFamily="monospace" fontSize="4.5" fill="#4466aa">LPDDR5</text>
      {/* USB ports */}
      <rect x="115" y="38" width="22" height="9" rx="1" fill="#333"/>
      <rect x="115" y="50" width="22" height="9" rx="1" fill="#333"/>
      {/* Ethernet */}
      <rect x="115" y="65" width="22" height="16" rx="1" fill="#222"/>
      {/* HDMI x2 */}
      <rect x="14" y="78" width="16" height="12" rx="1" fill="#111"/>
      <rect x="34" y="78" width="16" height="12" rx="1" fill="#111"/>
      {/* USB-C power */}
      <rect x="56" y="78" width="12" height="10" rx="3" fill="#444"/>
      {/* Raspberry dot accent */}
      <circle cx="96" cy="84" r="5" fill="#C51A4A" opacity="0.9"/>
      <circle cx="96" cy="84" r="2.5" fill="#ff4488"/>
    </svg>
  )
}

function AndroidIllustration() {
  return (
    <svg width="80" height="130" viewBox="0 0 80 130" fill="none">
      <rect x="5" y="5" width="70" height="120" rx="12" fill="#1a1a2e"/>
      <rect x="8" y="8" width="64" height="114" rx="10" fill="#12121e"/>
      <rect x="10" y="18" width="60" height="90" rx="4" fill="#1e2d40"/>
      {/* Screen content - LLM output lines */}
      <rect x="14" y="24" width="52" height="3" rx="1" fill="#3DDC84" opacity="0.8"/>
      <rect x="14" y="30" width="38" height="2" rx="1" fill="#ffffff" opacity="0.3"/>
      <rect x="14" y="35" width="45" height="2" rx="1" fill="#ffffff" opacity="0.3"/>
      <rect x="14" y="40" width="30" height="2" rx="1" fill="#ffffff" opacity="0.3"/>
      <rect x="14" y="50" width="52" height="2" rx="1" fill="#3DDC84" opacity="0.5"/>
      <rect x="14" y="56" width="42" height="2" rx="1" fill="#ffffff" opacity="0.25"/>
      <rect x="14" y="62" width="48" height="2" rx="1" fill="#ffffff" opacity="0.25"/>
      <rect x="14" y="68" width="35" height="2" rx="1" fill="#ffffff" opacity="0.25"/>
      <rect x="14" y="78" width="52" height="16" rx="3" fill="#3DDC84" opacity="0.15"/>
      <text x="40" y="90" textAnchor="middle" fontFamily="-apple-system,sans-serif" fontSize="6" fill="#3DDC84" fontWeight="bold">SmolChat</text>
      {/* Home button area */}
      <rect x="28" y="112" width="24" height="4" rx="2" fill="#333"/>
      {/* Front camera */}
      <circle cx="40" cy="13" r="2" fill="#333"/>
    </svg>
  )
}

function JetsonIllustration() {
  return (
    <svg width="155" height="115" viewBox="0 0 155 115" fill="none">
      {/* PCB */}
      <rect x="5" y="8" width="145" height="99" rx="4" fill="#1a1a1a"/>
      <rect x="7" y="10" width="141" height="95" rx="3" fill="#111"/>
      {/* Module / SoM - large heatsink */}
      <rect x="28" y="18" width="80" height="55" rx="3" fill="#2a2a2a"/>
      {/* Heatsink fins */}
      {Array.from({length:9},(_,i)=>(
        <rect key={`h${i}`} x={30+i*8} y={20} width={5} height={51} rx="0.5" fill="#222"/>
      ))}
      <rect x="28" y="18" width="80" height="55" rx="3" fill="none" stroke="#76B900" strokeWidth="1" strokeOpacity="0.6"/>
      {/* NVIDIA text */}
      <text x="68" y="49" textAnchor="middle" fontFamily="-apple-system,sans-serif" fontSize="7" fill="#76B900" fontWeight="bold" letterSpacing="1">NVIDIA</text>
      <text x="68" y="58" textAnchor="middle" fontFamily="monospace" fontSize="5" fill="#555">Orin Nano</text>
      {/* GPIO */}
      {Array.from({length:14},(_,i)=>(
        <rect key={`j${i}`} x={28+i*5.5} y={78} width={3} height={6} rx="0.5" fill="#888"/>
      ))}
      {/* Connectors */}
      <rect x="118" y="22" width="25" height="10" rx="1" fill="#222"/>
      <rect x="118" y="36" width="25" height="10" rx="1" fill="#222"/>
      <rect x="118" y="52" width="25" height="14" rx="1" fill="#1a1a1a"/>
      {/* Bottom ports */}
      <rect x="10" y="88" width="16" height="12" rx="1" fill="#222"/>
      <rect x="30" y="88" width="16" height="12" rx="1" fill="#222"/>
      <rect x="50" y="88" width="10" height="10" rx="3" fill="#333"/>
      {/* GPU indicator */}
      <circle cx="15" cy="25" r="4" fill="#76B900" opacity="0.8"/>
      <circle cx="15" cy="25" r="2" fill="#a0e000"/>
    </svg>
  )
}

const devices = [
  {
    name: 'Mac Mini',
    subtitle: 'Apple Silicon · Lab Day 1',
    desc: 'Set up llama.cpp, run your first inference, benchmark tok/s across model sizes.',
    color: '#6B7280',
    Illustration: MacMiniIllustration,
  },
  {
    name: 'Raspberry Pi 5',
    subtitle: 'ARM · Lab Day 2',
    desc: 'Quantization experiments on ARM. Compare INT4 vs INT8 latency. Power-aware inference.',
    color: '#22C55E',
    Illustration: RaspberryPiIllustration,
  },
  {
    name: 'Android Device',
    subtitle: 'Mobile · Lab Day 3',
    desc: 'SmolChat-Android live session with Shubham Panchal. Deploy a real LLM on your phone.',
    color: '#3B82F6',
    Illustration: AndroidIllustration,
  },
  {
    name: 'Jetson Orin Nano',
    subtitle: 'NVIDIA CUDA · Lab Day 4',
    desc: 'CUDA inference on edge GPU. TensorRT-LLM on Jetson. GPU vs CPU throughput battle.',
    color: '#EAB308',
    Illustration: JetsonIllustration,
  },
]

export default function HardwareSection() {
  return (
    <section id="hardware" className="py-24 overflow-hidden" style={{ background: '#f5f5f7' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16" data-reveal>
          <div className="label-pill">Hardware Labs</div>
          <h2 className="headline-lg mb-4">
            Don't just learn it.
          </h2>
          <h2 className="headline-lg mb-6">
            <span className="text-gradient">Run it on real hardware.</span>
          </h2>
          <p className="subhead max-w-xl mx-auto">
            4 dedicated lab days. Every device has a different bottleneck —
            and you'll benchmark each one live.
          </p>
        </div>

        {/* Device grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {devices.map((d, i) => (
            <div
              key={d.name}
              className="card rounded-2xl overflow-hidden group"
              data-reveal="scale"
              data-delay={String(i + 1)}
            >
              {/* SVG board illustration */}
              <div
                className="w-full h-44 rounded-xl mb-4 flex items-center justify-center overflow-hidden"
                style={{ background: `radial-gradient(ellipse at center, ${d.color}18, #f5f5f7)` }}
              >
                <d.Illustration />
              </div>

              <div
                className="text-[10px] font-semibold uppercase tracking-widest mb-1"
                style={{ color: d.color }}
              >
                {d.subtitle}
              </div>
              <h4 className="font-bold text-lg mb-2" style={{ letterSpacing: '-0.02em', color: '#1d1d1f' }}>
                {d.name}
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: '#86868b' }}>
                {d.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-6 text-center" data-reveal>
          <p className="text-sm text-[#6e6e73]">
            Lab Day 3 (Android · Shubham Panchal) is a confirmed 3-hour workshop. All other labs conducted by Dr. Raj Dandekar.
          </p>
        </div>

        {/* Hardware purchase guide */}
        <div className="mt-14" data-reveal>
          <div className="rounded-2xl border border-[#e8e8ed] bg-white p-8">
            <div className="label-pill">Hardware Purchasing Guide</div>
            <h3 className="text-xl font-bold text-[#1d1d1f] mb-2" style={{ letterSpacing: '-0.02em' }}>
              Order everything together — save on shipping & customs
            </h3>
            <p className="text-sm text-[#6e6e73] mb-8 max-w-2xl">
              Students frequently ask us to list all required hardware upfront so they can order in a single shipment and avoid separate delivery and customs fees. Here is the complete list. <strong>Purchase your hardware before the first lab session</strong> (Lab Day 1 · Apr 25).
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  name: 'Raspberry Pi 5',
                  note: 'Required · 4GB or 8GB RAM',
                  desc: 'Used in Lab Day 2 for ARM inference and quantization experiments. The 4GB model is sufficient.',
                  link: 'https://www.raspberrypi.com/products/raspberry-pi-4-model-b/',
                  linkLabel: 'Official store',
                  altLink: 'https://robu.in',
                  altLabel: 'Buy on Robu.in (India)',
                  color: '#22C55E',
                  required: true,
                },
                {
                  name: 'Jetson Orin Nano',
                  note: 'Required · 8GB recommended',
                  desc: 'Used in Lab Day 4 for CUDA inference and TensorRT-LLM. The 8GB Developer Kit is the cheapest model that can comfortably run LLM projects.',
                  link: 'https://www.nvidia.com/en-in/autonomous-machines/embedded-computing/jetson-orin/',
                  linkLabel: 'NVIDIA store',
                  altLink: 'https://robu.in',
                  altLabel: 'Buy on Robu.in (India)',
                  color: '#76B900',
                  required: true,
                },
                {
                  name: 'Mac Mini (M4)',
                  note: 'Optional — can use your own PC',
                  desc: 'Lab Day 1 is designed for Mac Mini (Apple Silicon). If you don\'t have one, you can run the same llama.cpp and benchmarking exercises on your own laptop or PC.',
                  link: 'https://www.apple.com/shop/buy-mac/mac-mini',
                  linkLabel: 'Apple Store',
                  altLink: null,
                  altLabel: null,
                  color: '#6B7280',
                  required: false,
                },
                {
                  name: 'Android Phone',
                  note: 'Required · Any Android 10+',
                  desc: 'Lab Day 3 with Shubham Panchal. Any Android 10+ phone with at least 6GB RAM works. You almost certainly already own one.',
                  link: null,
                  linkLabel: null,
                  altLink: null,
                  altLabel: null,
                  color: '#3B82F6',
                  required: true,
                },
              ].map(h => (
                <div key={h.name} className="p-4 rounded-xl border border-[#e8e8ed] bg-[#f9f9f9]">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-bold text-sm text-[#1d1d1f]">{h.name}</p>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${h.required ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                      {h.required ? 'Required' : 'Optional'}
                    </span>
                  </div>
                  <p className="text-[11px] font-medium mb-2" style={{ color: h.color }}>{h.note}</p>
                  <p className="text-xs text-[#6e6e73] leading-relaxed mb-3">{h.desc}</p>
                  <div className="flex flex-col gap-1.5">
                    {h.link && (
                      <a href={h.link} target="_blank" rel="noopener noreferrer"
                        className="text-xs font-semibold px-3 py-1.5 rounded-lg text-center transition-colors"
                        style={{ background: 'var(--ai-gradient-diag)', color: '#fff' }}>
                        {h.linkLabel} →
                      </a>
                    )}
                    {h.altLink && (
                      <a href={h.altLink} target="_blank" rel="noopener noreferrer"
                        className="text-xs font-semibold px-3 py-1.5 rounded-lg text-center border border-[#d2d2d7] text-[#1d1d1f] hover:border-[#9565FF] transition-colors">
                        {h.altLabel} →
                      </a>
                    )}
                    {!h.link && <p className="text-xs text-[#86868b] italic">You likely already own this</p>}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#86868b] mt-6 text-center">
              Hardware is not included in the workshop fee. The Hardware Lab Sessions add-on covers instruction and lab access only. Prices and availability vary by region.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
