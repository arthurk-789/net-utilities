import { Link } from "react-router";

export default function DNSLookupPage() {
    return (
        <div className="app-page">
            <h1 className="app-title">DNS Lookup Tool</h1>
            <p className="app-description">Enter a domain to retrieve DNS records associated with it.</p>
            <Link className="app-back-link" to='/'>Home</Link>
        </div>
    )
}
