import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export const Dashboard = () => {
    const initial = localStorage.getItem("initial")
    return <div>
        <Appbar initial={initial} />
        <div className="m-8">
            <Balance value={"10,000"} />
            <Users />
        </div>
    </div>
}