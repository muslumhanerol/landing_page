import { useState } from 'react'
import BackToTopButton from './components/common/BackToTopButton'
import SiteFooter from './components/layout/SiteFooter'
import SiteHeader from './components/layout/SiteHeader'
import LandingSections from './components/sections/LandingSections'
import {
  faqs,
  features,
  integrations,
  pricing,
  services,
  showcases,
  stats,
  team,
  testimonials,
  workflowSteps,
} from './data/landingData'
import {useAutoRotate} from './hooks/useAutoRotate'
import {useRevealOnScroll} from './hooks/useRevealOnScroll'
import {useScrollState} from './hooks/useScrollState'

function App() {
  const [annualBilling, setAnnualBilling] = useState(true)
  const [openFaq, setOpenFaq] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTestimonial, setactiveTestimonial] = useState(0)
  const [activeShowcase, setactiveShowcase] = useState(0)

  useRevealOnScroll()
  const { isScrolled, showTopButton } = useScrollState()
  useAutoRotate(setactiveTestimonial, )
}

export default App
