import SearchBar from "./SearchBar"

const Header = () => {

    return (
        <div className="p-6 flex justify-between border-b-2 border-stone-800 items-center">
            <div className="mx-8">PinIt</div>
            <div>
                <SearchBar/>
            </div>
            <div className="mx-8">LOGIN SETTINGS</div>
        </div>
    )
}

export default Header