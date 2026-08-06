import { Link } from "react-router";

export default function URLLookupPage() {
    return (
        <div className="app-page">
            <h1 className="app-title">URL Lookup Tool</h1>
            <p className="app-description">Enter a URL to retrieve details about it.</p>
            <Link className="app-back-link" to='/'>Home</Link>
        </div>
    )
}
