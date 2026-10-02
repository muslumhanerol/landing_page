import { FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa'

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
        <main className="space-y-24">
            <section data-reveal className='reveal-up grid gap-12 lg:grid-cols-2 lg:items-center'>
                <div>
                    <p className="mb-4 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1 text-sm text-blue-300 animate-pulse">
                        Modern AI Infrastructure for Growth Teams</p>
                    <h1 className="mb-6 bg-linear-to-r from-white to-blue-200 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl">
                        Build smarter products with AI that ships value from day one.
                    </h1>
                    <p className="mb-8 max-w-xl text-lg text-zinc-300">
                        We help startups and enterprises launch reliable AI products with speed, security, and measurable business impact.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-400">
                            Start Free Trial
                        </button>
                        <button className="rounded-lg border border-zinc-600 px-6 py-3 font-semibold transition hover:border-blue-400 hover:text-blue-300">
                            View Platform
                        </button>
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {stats.map((item) => (
                            <div key={item.label} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40">
                                <p className="text-xl font-bold text-blue-300">{item.value}</p>
                                <p className="text-xl text-zinc-400">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-2xl shadow-blue-500/10">
                    <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-linear-to-r from-blue-500/15 to-white/10 blur-md" />
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Live AI Operations</h2>
                        <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-300">+127% Productivity</span>
                    </div>

                    <div className="space-y-4">
                        {['Customer Support', 'Sales Enablement', 'Data Processing'].map((item) => (
                            <div key={item} className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 py-3 transition-all duration-300 hover:border-blue-400/40 hover:bg-zinc-900">
                                <span className="text-zinc-200">{item}</span>
                                <span className="text-sm text-blue-300">AI Active</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section data-reveal className="reveal-up">
                <div className="mb-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-zinc-400">
                    <span>Trusted by</span>
                    {['Orbitly', 'CloudPeak', 'PulseOps', 'QuantaFin', 'BrightLoop'].map((brand) => (
                        <span key={brand} className="rounded-full border border-zinc-700 px-3 py-1">{brand}</span>
                    ))}
                </div>
            </section>

            <section data-reveal className="reveal-up rounded-2xl border border-zinc-800 bg-zinc-900/35 p-8">
                <h2 className="mb-8 text-2xl font-semibold md:text-3xl">How We Launch AI That Wins</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {workflowSteps.map((item) => (
                        <article key={item.step} className="rounded-xl borrder border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40">
                            <p className="mb-3 text-sm font-semibold tracking-widest text-blue-300">{item.step}</p>
                            <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                            <p className="text-zinc-300">{item.detail}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section id="features" data-reveal className="reveal-up">
                <h2 className="mb-8 text-2xl font-semibold md:text-3xl">Products & Services</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {services.map((service) => (
                        <article key={service.name} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10">
                            <service.icon className="mb-3 text-xl text-blue-300" />
                            <h3 className="mb-3 text-xl font-semibold">{service.name}</h3>
                            <p className="text-zinc-300">{service.summary}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section data-reveal className="reveal-up rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
                <div className="mb-6 flex items-center justify-between gap-3">
                    <h2 className="text-2xl font-semibold md:text-3xl">Platform Preview Slider</h2>
                    <div className="flex gap-2">
                        <button onClick={() => setActiveShowcase((prev) => (prev - 1 + showcases.length) % showcases.length)} className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-700 text-sm transition hover:border-blue-400" aria-label="Previous slide">
                            <FaArrowLeft />
                        </button>
                        <button onClick={() => setActiveShowcase((prev) => (prev + 1) % showcases.length)} className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-700 text-sm transition hover:border-blue-400" aria-label="Next slide">
                            <FaArrowRight />
                        </button>
                    </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-zinc-800">
                    <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${activeShowcase * 100}%)` }}>
                        {showcases.map((item) => (
                            <article key={item.title} className="min-w-full bg-linear-to-br from-zinc-900 to-zinc-950 p-8">
                                <p className="mb-3 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs text-blue-300">{item.metric}</p>
                                <item.icon className="mb-4 text-2xl text-blue-300" />
                                <h3 className="mb-3 text-2xl font-semibold text-blue-200">{item.title}</h3>
                                <p className="max-w-2xl text-zinc-300">{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="mt-4 flex justify-center gap-2">
                    {showcases.map((item, index) => (
                        <button key={item.title} onClick={() => setActiveShowcase(index)} className={`h-2.5 rounded-full transition-all ${activeShowcase === index ? 'w-8 bg-blue-300' : 'w-2.5 bg-zinc-600'}`} />
                    ))}
                </div>
            </section>

            <section data-reveal className="reveal-up">
                <h2 className="mb-8 text-2xl font-semibold md:text-3xl">Why Teams Choose Us</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {features.map((feature) => (
                        <article key={feature.title} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10">
                            <feature.icon className="mb-3 text-xl text-blue-300" />
                            <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                            <p className="text-zinc-300">{feature.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section data-reveal className="reveal-up rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
                <div className="mb-6 flex items-center justify-between gap-3">
                    <h2 className="text-2xl font-semibold md:text-3xl">What Customers Say</h2>
                    <div className="flex gap-2">
                        <button onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)} className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-700 text-sm transition hover:border-blue-400" aria-label="Previous testimonial">
                            <FaArrowLeft />
                        </button>
                        <button onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)} className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-700 text-sm transition hover:border-blue-400" aria-label="Next testimonial">
                            <FaArrowRight />
                        </button>
                    </div>
                </div>

                <div className="overflow-hidden">
                    <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
                        {testimonials.map((item) => (
                            <article key={item.author} className="min-w-full rounded-xl border border-zinc-800 bg-zinc-950/50 p-8">
                                <p className="mb-6 text-xl leading-relaxed text-zinc-200">{item.quote}</p>
                                <p className="font-medium text-blue-300">{item.author}</p>
                                <p className="text-sm text-zinc-400">{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="mt-4 flex justify-center gap-2">
                    {testimonials.map((item, index) => (
                        <button key={item.author} onClick={() => setActiveTestimonial(index)} className={`h-2.5 rounded-full transition-all ${activeTestimonial === index ? 'w-8 bg-blue-300' : 'w-2.5 bg-zinc-600'}`} />
                    ))}
                </div>
            </section>

            <section data-reveal className="reveal-up rounded-2xl border border-zinc-800 bg-zinc-900/35 p-8">
                <h2 className="mb-8 text-2xl font-semibold md:text-3xl">Built to Integrate with Your Stack</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                    {integrations.map((item) => (
                        <div key={item.name} className="rounded-lg border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-center text-sm font-medium text-zinc-200 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/40">
                            <item.icon className="mx-auto mb-2 text-base text-blue-300" />
                            {item.name}
                        </div>
                    ))}
                </div>
            </section>

            <section id="pricing" data-reveal className="reveal-up rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">
                <div className="mb-8 flex flex-wrap items-center justify-center gap-4 md:justify-between">
                    <h2 className="w-full text-center text-2xl font-semibold md:w-auto md:text-left md:text-3xl">
                        Simple Pricing For Every Stage
                    </h2>
                    <div className="mx-auto rounded-lg border border-zinc-700 p-1 text-sm md:mx-0">
                        <button onClick={() => setAnnualBilling(false)} className={`rounded-md px-4 py-2 transition-all duration-300 ${annualBilling ? 'text-zinc-400' : 'bg-zinc-100 text-zinc-900'}`}>
                            Monthly
                        </button>
                        <button onClick={() => setAnnualBilling(true)} className={`rounded-md px-4 py-2 transition-all duration-300 ${annualBilling ? 'bg-zinc-400 text-white' : 'text-zinc-400'}`}>
                            Annual
                        </button>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {pricing.map((plan) => (
                        <article key={plan.tier} className={`rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${plan.popular ? 'border-blue-400 bg-blue-400/10 shadow-lg shadow-blue-500/20' : 'border-zinc-800 bg-zinc-950/50 hover:border-blue-400/40 hover:shadow-blue-500/10'}`}>
                            <p className="mb-2 text-sm text-zinc-400">{plan.tier}</p>
                            <p className="mb-3 text-3xl font-bold transition-all duration-300">
                                {annualBilling ? plan.annual : plan.monthly}
                                {plan.monthly !== 'Custom' && <span className="text-sm text-zinc-400">/mo</span>}
                            </p>
                            <p className="mb-4 text-zinc-300">{plan.description}</p>
                            <ul className="mb-6 space-y-2 text-sm text-zinc-300">
                                {plan.features.map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <FaCheckCircle className="mt-0.5 text-blue-300" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full rounded-lg border border-zinc-600 px-4 py-2 font-medium transition hover:border-blue-400 hover:text-blue-300">Get Started</button>
                        </article>
                    ))}
                </div>
            </section>

            <section id="about" data-reveal className="reveal-up grid gap-8 rounded-2xl border border-zinc-800 bg-linear-to-r from-zinc-900 to-zinc-900/40 p-8 md:grid-cols-2">
                <div>
                    <h2 className="mb-4 text-2xl font-semibold md:text-3xl">Built by AI Experts, For Product Teams</h2>
                    <p className="text-zinc-300">
                        We re a cross-functional team of AI researchers, engineers, and product leaders focused on delivering practical intelligence at startup speed
                    </p>
                </div>

                <div className="space-y-4">
                    {team.map((member) => (
                        <div key={member.name} className="rounded-lg border border-zinc-700 bg-zinc-950/50 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/40">
                            <p className="font-medium">{member.name}</p>
                            <p className="text-sm text-zinc-400">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="faq" data-reveal className="reveal-up rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">
                <h2 className="mb-6 text-2xl font-semibold md:text-3xl">Frequently Asked Questions</h2>
                <div className="space-y-3">
                    {faqs.map((item, index) => {
                        const isOpen = openFaq === index
                        return (
                            <div key={item.q} className="rounded-lg border border-zinc-700 bg-zinc-950/40 transition-colors duration-300 hover:border-blue-400/40">
                                <button onClick={() => setOpenFaq(isOpen ? -1 : index)} className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors duration-300 hover:text-blue-200">
                                    <span className="font-medium">{item.q}</span>
                                    <span className={`text-blue-300 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>+</span>
                                </button>
                                <div className={`faq-content px-4 text-zinc-300 ${isOpen ? 'faq-open pb-4' : ''}`}>
                                    <p>{item.a}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            <section data-reveal className="reveal-up rounded-2xl border border-blue-400/30 bg-blue-500/10 p-8 text-center">
                <h2 className="mb-4 text-2xl font-semibold md:text-3xl">Ready to Scale with AI?</h2>
                <p className="mx-auto mb-6 max-w-2xl text-zinc-200">
                    Launch your first AI workflow in days, not months. Join teams using AsmrProg to automate, predict, and grow faster.
                </p>
                <button className="rounded-lg bg-blue-500 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-500/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-400">
                    Schedule Your Strategy Call</button>
            </section>
        </main>
    )
}
// import {FaArrowLeft, FaArrowRight, FaCheckCircle} from 'react-icons/fa'

// export default function LandingSections({
//     stats,
//     workflowSteps,
//     services,
//     showcases,
//     activeShowcase,
//     setActiveShowcase,
//     features,
//     testimonials,
//     activeTestimonial,
//     setActiveTestimonial,
//     integrations,
//     pricing,
//     annualBilling,
//     setAnnualBilling,
//     team,
//     faqs,
//     openFaq,
//     setOpenFaq
// }) {
//     return (
//         <main className='space-y-24'>
//             <section data-reveal className='reveal-up grid gap-12 lg:grid-cols-2 lg:items-center'>
//                 <div>
//                     <p className='mb-4 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1 text-sm text-blue-300 animate-pulse'>Modern Landing Market Place Team</p>
//                     <h1 className='mb-6 bg-linear-to-r from-white to-blue-200 bg-clip-text-text-4xl font-bold leading-light text-transparent sm:text-5xl'>
//                         Build your brand with US.
//                     </h1>
//                     <p className='mb-8 max-w-xl text-lg text-zinc-300'>
//                         We help you and enterprises launch reliable AI products with speed, security and measutable business impact.
//                     </p>
//                     <div className='flex flex-wrap gap-4 justify-center'>
//                         <button className='rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-400'>
//                         Start Free Trial                        
//                         </button>
//                         <button className='rounded-lg border border-zinc-600 px-6 py-3 font-semibold transition hover:border-blue-400 hover:text-blue-300'>
//                             View Platform
//                         </button>
//                     </div>
                    
//                     <div className='mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4'>
//                         {stats.map((item) =>(
//                             <div key={item.label} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40">
//                                 <p className="text-xl font-bold text-blue-300">{item.value}</p>
//                                 <p className="text-xl text-zinc-400">{item.label}</p>
//                             </div>
//                         ))}
//                     </div>                
//                 </div>

//                 <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-2xl shadow-blue-500/10">
//                     <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-linear-to-r from-blue-500/15 to-white/10 blur-md"/>
//                         <div className="mb-6 flex items-center justify-between">
//                             <h2 className="text-lg font-semibold">Make corps Operations</h2>
//                             <span className='rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-300'>+%130 Productivity</span>
//                         </div>

//                         <div className='space-y-4'>
//                             {['Customer Support', 'Sales Enablement', 'Data Processing'].map((item) => (
//                                 <div key={item} className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 py-3 transition-all duration-300 hover:border-blue-400/40 hover:bg-zinc-900">
//                                     <span className='text-zinc-200'>{item}</span>
//                                     <span className='text-sm text-blue-300'>AI Active</span>
//                                 </div>
//                             ))}
//                         </div>                    
//                 </div>
//             </section>

//             <section data-reveal className="reveal-up">
//                 <div className="mb-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-zinc-400">
//                     <span>Trusted by</span>
//                     {['Orbitly', 'CloudPeak', 'PulseOps', 'QantaFin', 'BrightLoop'].map((brand)=> (
//                         <span key={brand} className="rounded-full border border-zinc-700 px-3 py-1">{brand}</span>
//                     ))}
//                 </div>
//             </section>

//             <section data-reveal className="reveral-up rounded-2xl border border-zinc-800 bg-zinc-900/35 p-8">
//                     <h2 className="mb-8 text-2xl font-semibold md:text-3xl">How Our AI Company LAUNCH</h2>
//                     <div className="grid gap-6 md:grid-cols-3 ">
//                         {workflowSteps.map((item) => (
//                             <article key={item.step} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40">
//                                 <p className="mb-3 text-sm font-semibold tracking-widest text-blue-300">{item.step}</p>
//                                 <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
//                                 <p className="text-zinc-300">{item.detail}</p>
//                             </article>
//                         ))}
//                     </div>            
//             </section>

//             <section data-reveal className="reveal-up">
//                 <h2 className="mb-8 text-2xl font-semibold md:text-3xl">Why Teams Choose Us</h2>
//                 <div className="grid gap-6 md:grid-cols-3">
//                     {features.map((features) => (
//                         <article key={features.title} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10">
//                             <features.icon className="mb-3 text-xl text-blue-300" />
//                             <h3 className="mb-3 text-xl font-semibold">{features.title}</h3>
//                             <p className="text-zinc-300">{features.description}</p>
//                         </article>
//                     ))}
//                 </div>
//             </section>

//             <section data-reveal className="reveal-up rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">

//                     <div className="mb-6 flex items-center justify-between gap-3">
//                         <h2 className="text-2xl font-semibold md:text-3xl">What Customers Say</h2>
//                         <div className="flex gap-2">
//                             <button onClick={() =>setActiveTestimonial((prev) => (prev - 1 + testimonials.lenght) % testimonials.lenght)} className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-700 text-sm transition hover:border-blue-400" aria-label="Previous testimonials">
//                                 <FaArrowLeft />
//                             </button>
//                             <button onClick={() =>setActiveTestimonial((prev) => (prev + 1 ) % testimonials.lenght)} className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-700 text-sm transition hover:border-blue-400" aria-label="Next testimonial">
//                                 <FaArrowRight />
//                             </button>
//                         </div>
//                     </div>

//                     <div className="overflow-hidden">
//                         <div className="flex transition-transform duration-700 ease-out" style={{transform: `translateX (-${activeTestimonial * 100}%)` }}>
//                             {testimonials.map((item) => (
//                                 <article key={item.author} className="min-w-full rounded-xl border border-zinc-800 bg-zinc-950/50 p-8">
//                                     <p className="mb-6 text-xl leading-relaxed text-zinc-200">{item.quote}</p>
//                                     <p className="font-medium text-blue-300">{item.author}</p>
//                                     <p className="text-sm text-zinc-400">{item.description}</p>
//                                 </article>
//                             ))}
//                         </div>
//                     </div>

//                     <div className="mt-4 flex justify-center gap-2">
//                         {testimonials.map((item, index) =>(
//                             <button key={item.author} onClick={() => setActiveTestimonial(index)} className={`h-2.5 rounded-full transition-all ${activeTestimonial === index ? 'w-8 bg-blue-300' : 'w-2.5 bg-zinc-600'}`} />
//                         ))}
//                     </div>
//             </section>

//             <section data-reveal className="reveal-up rounded-2xl border border-zinc-800 bg-zinc-900/35 p-8">
//                 <h2 className="mb-8 text-2xl font-semibold md:text-3xl">Built to Integrate with Your Stack</h2>
//                 <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 ">
//                     {integrations.map((item) => (
//                         <div key={item.name} className="rounded-lg border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-center text-sm font-medium text-zinc-200 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/40">
//                             <item.icon className="mx-auto mb-2 text-base text-blue-300" />
//                            {item.name} 

                            
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             <section id="pricing" data-reveal className="reveal-up rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">
//                     <div className="mb-8 flex flex-wrap item-center justify-center gap-4 md:justify-between">
//                         <h2 className="w-full text-center text-2xl font-semibold md:w-auto md:text md:text-3xl">
//                             Simple Pricing For Every Stage
//                         </h2>
//                         <div className="mx-auto rounded-lg border border-zinc-700 p-1 text-sm md:mx-0">
//                             <button onClick={() => setAnnualBilling(false)} className={`rounded-md px-4 py-2 transition-all duration-300 ${annualBilling ? 'text-zinc-400' : 'bg-zinc-100 text-zinc-900'}`}>
//                                 Monthly
//                             </button>
//                             <button onClick={() => setAnnualBilling(true)} className={`rounded-md px-4 py-2 transition-all duration-300 ${annualBilling ? 'bg-zinc-400 text-white' : 'text-zinc-400'}`}>
//                                 Annual
//                             </button>
//                         </div>
//                     </div>

//                     <div className="grid gap-6 md:grid-cols-3">
//                         {pricing.map((plan) => (
//                             <article key={plan.tier} className={`rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${plan.popular ? 'border-blue-400 bg-blue-400/10 shadow-lg shadow-blue-500/20' : 'border-zinc-800 bg-zinc-900/50 hover:border-blue-400/40 hover:shadow-blue-500/10'}`}>
//                                 <p className="mb-2 text-sm text-zinc-400">{plan.tier}</p>
//                                 <p className="mb-3 text-3xl font-bold transition-all duration-300">
//                                     {annualBilling ? plan.annual : plan.monthly}
//                                     {plan.monthly !== 'Custom' && <span className="text-sm text-zinc-400">/mo</span>}
//                                 </p>
//                                 <p className="mb-4 text-zinc-300">{plan.description}</p>
//                                 <ul className="mb-6 space-y-2 text-sm text-zinc-300">
//                                     {plan.features.map((item) => (
//                                         <li key={item} className="flex items-center gap-2">
//                                             <FaCheckCircle className="mt-0.5 text-blue-300"/>
//                                             <span>{item}</span>
//                                         </li>
//                                     ))}
//                                 </ul>
//                                 <button className="w-full rounded-lg border border-zinc-600 px-4 py-2 font-medium transition hover:border-blue-400 hover:text-blue-300">Get Started</button>
//                             </article>
//                         ))}
//                     </div>
            
//             </section>


//             <section id="about" data-reveal className="reveal-up gap-8 rounded-2xl border border-zinc-800 bg-linear-to-r from-zinc-900 to-zinc-900/40 p-8 md:grid-cols-2">
//             <div>
//                 <h2 className="mb-4 text-2xl font-semibold md:text-3xl">Built by AI Experts, For Product Teams</h2>
//                 <p className="text-zinc-300">
//                     We are a cross-functional team of AI researchers, engineers ....
//                 </p>
//             </div>

//             <div className="space-y-4">
//                 {team.map((member) =>(
//                     <div key={member.name} className="rounded-lg border border-zinc-700 bg-zinc-950/50 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/40">
//                         <p className="font-medium">{member.name}</p>
//                         <p className="text-sm text-zinc-400">{member.role}</p>
//                     </div>
//                 ))}
//             </div>
            
//             </section>

//             <section id="faq" data-reveal className="reveal-up rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8">

//                 <h2 className="mb-6 text-2xl font-semibold md:text-3xl">Frequently Asked Questions</h2>
//                 <div className="space-y-3">
//                     {faqs.map((item, index) => {
//                         const isOpen = openFaq ===index
//                         return (
//                             <div key={item.q} className="rounded.lg border border-zinc-700 bg-zinc-950/40 transition-colors duration-300 hover:border-blue-400/40">
//                                 <button onClick={() => setOpenFaq(isOpen ? -1 : index)} className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors duration-300 hover:text-blue-200">
//                                     <span className="font-medium">{item.q}</span>
//                                     <span className={`text-blue-300 transition-transform duration-300 ${isOpen ? 'rotate-100' : ''}`}>+</span>
//                                 </button>
//                                 <div className={`faq-content px-4 text-zinc-300 ${isOpen ? 'faq-open pb-4' : ''}`}>
//                                     <a>{item.a}</a>
//                                 </div>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </section>

//             <section data-reveal className="reveal-up rounded-2xl border border-blue-400/30 bg-blus-500/10 p-8 text-center">
//                     <h2 className="mb-4 text-2xl font-semibold md:text-3xl">Ready to Scale with AI?</h2>
//                     <p className="mx-auto mb-6 max-w-2xl text-zinc-200">
//                         Launch your first AI workflow in days, not months. Join teams using AI to automate, predict and grow faster.
//                     </p>
//                     <button className="rounded-lg bg-blue-500 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-500/15 transition-all duration-300 hover:-translate-0.5 hover:bg-blue-400">
//                     Schedule Your Strategy Call
                    
//                     </button>
//             </section>
//         </main>
//     )
// }