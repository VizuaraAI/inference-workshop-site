'use client'

const frameworks = [
  {
    name: 'vLLM',
    color: '#6366F1',
    desc: 'High-throughput serving with PagedAttention, continuous batching & scheduler internals',
  },
  {
    name: 'SGLang',
    color: '#EC4899',
    desc: 'Fast inference with RadixAttention, structured generation & compiler-driven optimization',
  },
  {
    name: 'Ray Serve',
    color: '#FF6B35',
    desc: 'Distributed serving & batch processing at scale — covered by Suman Debnath (AnyScale)',
  },
  {
    name: 'Megatron-LM',
    color: '#76B900',
    desc: 'Large-scale model parallelism, distributed training & GRPO for online RL',
  },
  {
    name: 'FlashAttention',
    color: '#F59E0B',
    desc: 'IO-aware attention kernels — memory-efficient tiling & online softmax',
  },
  {
    name: 'TensorRT-LLM',
    color: '#76B900',
    desc: 'NVIDIA\'s optimized inference engine with INT4/INT8 quantization & kernel fusion',
  },
]

export default function FrameworksSection() {
  return (
    <section className="py-16 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10" data-reveal>
          <div className="label-pill">Frameworks</div>
          <h2 className="headline-lg mb-3">
            The tools that power<br/>
            <span className="text-gradient">production inference.</span>
          </h2>
          <p className="subhead max-w-lg mx-auto">
            You won&apos;t just learn theory — you&apos;ll build with the same frameworks used at Anthropic, NVIDIA, and Apple.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" data-reveal>
          {frameworks.map(f => (
            <div key={f.name} className="p-4 rounded-2xl bg-white border border-[#e8e8ed] hover:border-[#d1d1d6] transition-colors">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: f.color }} />
                <p className="font-bold text-sm text-[#1d1d1f]">{f.name}</p>
              </div>
              <p className="text-xs text-[#86868b] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
