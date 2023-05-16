import { PropsWithChildren } from "react"




interface Props extends PropsWithChildren {
    type?: 'submit' | 'button';
    className?: string;
    onClick?: () => void;
}

const Button = ({ type = 'submit', children, className, onClick }: Props) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-5 py-2 rounded-lg bg-secondary-light text-primary transition-all relative hover:translate-y-1 hover:shadow-sm hover:text-secondary-light hover:bg-primary ${className}`}
        >
            {children}
        </button>
    )
}

export default Button