import { Link } from "react-router";

export default function PasswordGeneratorPage() {
    return (
        <div className="app-page">
            <h1 className="app-title">Secure Password Generator</h1>
            <p className="app-description">Generate a safe password with a specified length.</p>
            <Link className="app-back-link" to='/'>Home</Link>
        </div>
    )
}
