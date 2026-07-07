import {FaArrowLeft, FaArrowRight, FaCheckCircle} from 'react-icons/fa'

export default function LandingSections({
    stats,
    workflowSteps,
    services,
    showcases,
    activeShowcase,
    setActiveShowcase,
    features,
    testimonials,
    activeTestimonial,
    setActiveTestimonial,
    integrations,
    pricing,
    annualBilling,
    setAnnualBilling,
    team,
    faqs,
    openFaq,
    setOpenFaq
}) {
    return (
        <main className='space-y-24'>
            <section data-reveal className='reveal-up grid gap-12 lg:grid-cols-2 lg:items-center'>
                <div>
                    <p className='mb-4 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1 text-sm text-blue-300 animate-pulse'>Modern Landing Market Place Team</p>
                    <h1 className='mb-6 bg-linear-to-r from-white to-blue-200 bg-clip-text-text-4xl font-bold leading-light text-transparent sm:text-5xl'>
                        Build your brand with US.
                    </h1>
                    <p className='mb-8 max-w-xl text-lg text-zinc-300'>
                        We help you and enterprises launch reliable AI products with speed, security and measutable business impact.
                    </p>
                    <div className='flex flex-wrap gap-4 justify-center'>
                        <button className='rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-400'>
                        Start Free Trial                        
                        </button>
                        <button className='rounded-lg border border-zinc-600 px-6 py-3 font-semibold transition hover:border-blue-400 hover:text-blue-300'>
                            View Platform
                        </button>
                    </div>
                    
                    <div className='mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4'>
                        {stats.map((item) =>(
                            <div key={item.label} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40">
                                <p className="text-xl font-bold text-blue-300">{item.value}</p>
                                <p className="text-xl text-zinc-400">{item.label}</p>
                            </div>
                        ))}
                    </div>                
                </div>

                <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-2xl shadow-blue-500/10">
                    <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-linear-to-r from-blue-500/15 to-white/10 blur-md">
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-lg font-semibold">Make corps Operations</h2>
                        </div>                    
                    </div>
                </div>
            </section>
        </main>
    )
}