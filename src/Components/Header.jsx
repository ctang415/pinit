import Button from "./Button"
import Input from "./Input"

const Header = () => {

    return (
        <div className="p-6 flex justify-between border-b-2 border-stone-800 items-center">
            <div className="mx-2">
                <a className="text-3xl">PinIt</a>
            </div>
            <div>
                <Input type={"text"}/>
            </div>
            <div className="mx-2 flex gap-4">
                <Button text={"Login"} func={"login"}/>
                <Button text={"Sign Up"} func={"signup"}/>
            </div>
        </div>
    )
}

export default Header