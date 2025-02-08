import Button from "./Button"
import Input from "./Input"

const Form = () => {
    return (
        <div className="flex justify-center">
            <form className="flex flex-col gap-2 bg-zinc-950 py-10 px-6">
                <h1 className="text-3xl">Create a PinIt Account</h1>
                <label>Email</label>
                <Input/>
                <label>Password</label>
                <Input/>
                <label>Confirm Password</label>
                <Input/>
                <div className="flex justify-between">
                    <Button text={"Cancel"} func={""}/>
                    <Button text={"Sign up"}/>
                </div>
            </form>
        </div>
    )
}

export default Form