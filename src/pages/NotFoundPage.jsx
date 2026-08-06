import { Link } from "react-router";

export default function NotFoundPage() {
    return (
        <div className="app-page">
            <h1 className="app-title">404 Not Found</h1>
            <Link className="app-back-link" to='/'>Home</Link>
        </div>
    );
}
