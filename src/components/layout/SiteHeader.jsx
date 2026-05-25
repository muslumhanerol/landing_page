import {FaBars, FaBrain, FaEnvelope} from "react-icons/fa"

export default function SiteHeader({isScrolled, mebuopen, onToggleMenu, onCloseMenu}) {
    return (
        <>
         <header className={`fixed left-1/2 top=0 z-50 mt-3 flex w-[min(95%, 72rem)] -translate-x-1/2 items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-xl transition-all duration-300 ${isScrolled ? 'border-blue-400/30 bg-black/85 shadow-xl shadow-blue-500/10' : 'border-zinc-800/80 bg-zinc-900/70 hover:border-zinc-700'}`}>

         <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-linear-to-br from-blue-500 to-blue-700 shadow-lg shadow-blue-500/20">
                <FaBrain className="text-white"/>            
            </div>
            <span className="text-lg font-semibold tracking-wide">Muslum Bilgi Teknologileri</span>
         </div>

         <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a href="#features" className="transition hover:text-blue-300">Features</a>
            <a href="#pricing" className="transition hover:text-blue-300">Pricing</a>
            <a href="#about" className="transition hover:text-blue-300">About</a>
            <a href="#faq" className="transition hover:text-blue-300">FAQ</a>
         </nav>


         </header>        
        </>
    )
}