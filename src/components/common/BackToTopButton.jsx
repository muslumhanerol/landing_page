import { FaArrowRight } from "react-icons/fa";
export default function BackToTopButton({show}){
    return (
        <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}></button>
    )
}