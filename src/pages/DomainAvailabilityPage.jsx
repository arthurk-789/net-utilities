import { Link } from "react-router";

export default function DomainAvailabilityPage() {
    return (
        <div className="app-page">
            <h1 className="app-title">Domain Availability Check</h1>
            <p className="app-description">Enter a domain to see its availability status and details.</p>
            <Link className="app-back-link" to='/'>Home</Link>
        </div>
    )
}
