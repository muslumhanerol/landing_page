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
                    <p className='mb-4 inline-flex rounded-full'></p>
                </div>
            </section>
        </main>
    )
}