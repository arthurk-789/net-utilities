import { Link } from "react-router";

export default function HomePage() {
    return (
        <div>
            <h1 className='text-4xl font-bold'>Net Utilities</h1>
            <p>Internet and networking utilities in one place.</p>

            <Link to='/iplookup'>IP Lookup</Link>
            <Link to='/dnslookup'>DNS Lookup</Link>
            <Link to='/urllookup'>URL Lookup</Link>
            <Link to='/domainavailability'>Domain Availability</Link>
            <Link to='/passwordgenerator'>Password Generator</Link>
        </div>
    )
}