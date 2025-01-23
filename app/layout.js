import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {/* NavBar */}
                <header>
                    <nav className="bg-gray-800 text-white p-4 text-center">
                        <ul className="container justify-center mx-auto flex space-x-4">
                            <li>
                                <Link href="/" className="hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li>|</li>
                            <li>
                                <Link
                                    href="/profile"
                                    className="hover:underline"
                                >
                                    profile
                                </Link>
                            </li>
                            <li>|</li>
                            <li>
                                <Link href="/login" className="hover:underline">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                {children}

                {/* Footer */}
                <footer className="bg-gray-800 text-white p-4 text-center">
                    <p>&copy; 2025 Ajmain Fayek</p>
                </footer>
            </body>
        </html>
    );
}
