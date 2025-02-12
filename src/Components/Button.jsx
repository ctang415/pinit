import { Link } from "react-router-dom"

const Button = ({text, func, type}) => {
    if (type) {
        return (
            <button type="submit"
            className="py-2 px-4 rounded-3xl bg-white text-black hover:cursor-pointer hover:bg-zinc-400">
                {text}
            </button>
        )
    } else {
        return (
            <Link to={`/${func}`}>
                <button
                className="py-2 px-4 rounded-3xl bg-white text-black hover:cursor-pointer hover:bg-zinc-400">
                    {text}
                </button>
            </Link>
        )
    }
}

export default Button