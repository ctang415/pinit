import Button from "./Button"
import Input from "./Input"
import {dummyAccounts} from "../dummydata"
import { useState } from "react"

const Form = () => {
    let path = window.location.pathname;
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [confirm, setConfirm] = useState("");

    function handleAccountChange(e) {
        setAccount(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handlePasswordConfirm(e) {
        setConfirm(e.target.value);
    }

    function submitLogin (e, account, password) {
        setError("");
        e.preventDefault();
        let findAccount = dummyAccounts.find(x => x.email == account);
        if (!findAccount) {
            setError("Login failed.");
        } else {
            if (account == findAccount.email && password == findAccount.password) {
                alert("login success");
            } else {       
                setError("Login failed.");
            }
        }
    }

    function createAccount(e, account, password, confirm) {
        setError("");
        e.preventDefault();
        let findAccount = dummyAccounts.find(x => x.email == account);
        if (findAccount) {
            setError("Account already exists.");
        } else {
            if (password !== confirm) {
                setError("Passwords do not match.");
            } else {
                dummyAccounts.push({"email": account, "password": password});
            }
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
                    <p className="text-red-600 font-bold">{error}</p>
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
                <form onSubmit={(e) => createAccount(e, account, password, confirm)} className="flex flex-col gap-2 bg-zinc-800 rounded-3xl py-10 px-6">
                    <h1 className="text-3xl text-center ">Create a PinIt Account</h1>
                    <label>Email</label>
                    <Input handleChange={handleAccountChange} type={"email"}/>
                    <label>Password</label>
                    <Input handleChange={handlePasswordChange} type={"password"}/>
                    <label>Confirm Password</label>
                    <Input handleChange={handlePasswordConfirm} type={"password"}/>
                    <p className="text-red-600 font-bold">{error}</p>
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