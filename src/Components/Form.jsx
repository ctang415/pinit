import Button from "./Button"
import Input from "./Input"
import {dummyAccounts} from "../dummydata"
import { useState } from "react"

const Form = () => {
    let path = window.location.pathname;
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");

    function handleAccountChange(e) {
        setAccount(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function submitLogin (e, account, password) {
        e.preventDefault();
        let findAccount = dummyAccounts.find(x => x.email == account);
        if (account == findAccount.email && password == findAccount.password) {
            alert("login success");
        } else {
            alert("login failed");
        }
    }

    if (path == "/login") {
        return (
            <div className="flex justify-center">
                <form onSubmit={(e) => submitLogin(e, account, password)} className="flex flex-col gap-2 bg-zinc-800 rounded-3xl py-10 px-6">
                    <h1 className="text-3xl text-center ">Login</h1>
                    <label>Email</label>
                    <Input handleChange={handleAccountChange} type={"email"}/>
                    <label>Password</label>
                    <Input handleChange={handlePasswordChange} type={"password"}/>
                    <div className="flex justify-between">
                        <Button text={"Cancel"} func={""}/>
                        <Button type={true} text={"Login"}/>
                    </div>
                </form>
            </div>
        )
    } else {
        return (
            <div className="flex justify-center">
                <form className="flex flex-col gap-2 bg-zinc-800 rounded-3xl py-10 px-6">
                    <h1 className="text-3xl text-center ">Create a PinIt Account</h1>
                    <label>Email</label>
                    <Input type={"email"}/>
                    <label>Password</label>
                    <Input type={"password"}/>
                    <label>Confirm Password</label>
                    <Input type={"password"}/>
                    <div className="flex justify-between">
                        <Button text={"Cancel"} func={""}/>
                        <Button type={true} text={"Sign up"}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form