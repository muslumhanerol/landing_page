import { FaEnvelope, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";

export default function SiteFooter() {
    return (
        <footer className="mt-20 border-t border-zinc-800 py-8 text-sm text-zinc-400">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                <div className="flex flex-col items-center gap-3 sm:items-start">
                    <div className="flex items-center justify-center gap-5 ">
                        <a href="mailto:mslmhanerol@gmail.com" className="inline-flex items-center gap-2 hover:text-blue-300">
                            <FaEnvelope/>
                            mslmhanerol@gmail.com
                        </a>
                        <a href="tel:+5554443322" className="inline-flex items-center gap-2 hover:text-blue-300">
                            <FaPhone/>
                            +90 (555) 444-33-22
                        </a>
                    </div>

                    <div className="flex items-center justify-center gap-5">
                        <a href="#" className="inline-flex items-center gap-2 hover:text-blue-300">
                            <FaLinkedin/>
                            Linkedin
                        </a>
                         <a href="#" className="inline-flex items-center gap-2 hover:text-blue-300">
                            <FaTwitter/>
                            X / Twitter
                        </a>
                    </div>
                </div>
                <p className="text-cebter sm:text-right">2026 MHE ARR</p>
            </div>
        </footer>
    )
}