import { Link } from "react-router-dom"

export function BottomWarning({ label, buttonText, to }) {
  return <p className="text-gray-400 text-sm text-center ">
    {label}
    <Link className="text-blue-400 hover:text-blue-300 font-medium transition-colors m-2" to={to}>
      {buttonText}
    </Link>
  </p>
}

