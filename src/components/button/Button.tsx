import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react"




interface Props extends PropsWithChildren {
    type?: 'submit' | 'button';
    className?: string;
    onClick?: () => void;
    href?: string;
    disabled?: boolean;
}

const Button = ({ type = 'submit', children, className, onClick, href, disabled = false }: Props) => {

    if (href) {
        return (
            <a
                className={cn(`px-5 py-2 rounded-lg bg-white text-primary transition-all relative hover:translate-y-1 hover:shadow-sm hover:text-secondary-light hover:bg-primary ${className}`)}
                href={href}
            >
                {children}
            </a>
        )
    }
    return (
        <button
            aria-disabled={disabled}
            disabled={disabled}
            type={type}
            onClick={onClick}
            className={cn(`px-5 py-2 rounded-lg bg-white text-primary transition-all relative hover:translate-y-1 hover:shadow-sm hover:text-secondary-light hover:bg-primary ${className}`)}
        >
            {children}
        </button>
    )
}

export default Button