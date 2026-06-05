import { FaEnvelope, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";

export default function SiteFooter() {
    return (
        <footer className="mt-20 border-t border-zinc-800 py-8 text-sm text-zinc-400">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                <div className="flex flex-col items-center gap-3 sm:items-start">
                    <div className="flex items-center justify-center gap-5 ">
                        <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 hover:text-blue-300"></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}