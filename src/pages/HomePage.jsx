import { Link } from "react-router";

export default function HomePage() {
    return (
        <div className="app-page">
            <h1 className="app-title">Net Utilities</h1>
            <p className="app-description">Internet and networking utilities in one place.</p>

            <Link className="app-utility-link" to='/iplookup'>IP Lookup</Link>
            <Link className="app-utility-link" to='/dnslookup'>DNS Lookup</Link>
            <Link className="app-utility-link" to='/urllookup'>URL Lookup</Link>
            <Link className="app-utility-link" to='/domainavailability'>Domain Availability</Link>
            <Link className="app-utility-link" to='/passwordgenerator'>Password Generator</Link>
        </div>
    )
}
