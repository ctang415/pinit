
const Input = ({type, handleChange}) => {
    return (
        <input onChange={handleChange} type={type} className="rounded-lg p-2 bg-zinc-900 min-w-sm focus:outline-none"></input>
    )
}

export default Input