import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export const Dashboard = () => {
    const initial = localStorage.getItem("initial")
    const firstName = localStorage.getItem("firstName")
    return <div>
        <Appbar initial={initial} username={firstName} />
        <div className="m-8">
            <Balance value={"10,000"} />
            <Users />
        </div>
    </div>
}