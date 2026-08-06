import { Link } from "react-router";

export default function IPLookupPage() {
    return (
        <div className="app-page">
            <h1 className="app-title">IP Lookup Tool</h1>
            <p className="app-description">Enter an IP Address to retrieve information about it.</p>
            <Link className="app-back-link" to='/'>Home</Link>
        </div>
    )
}
