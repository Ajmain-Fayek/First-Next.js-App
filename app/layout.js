import Link from "next/link";
import "./globals.css";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function RootLayout({ children }) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
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

                            {user ? (
                                <>
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
                                        <LogoutLink>Logout</LogoutLink>
                                    </li>
                                </>
                            ) : (
                                <li>
                                    <LoginLink>Log In</LoginLink>
                                </li>
                            )}
                        </ul>
                    </nav>
                </header>
                <main className="main">{children}</main>

                {/* Footer */}
                <footer className="bg-gray-800 text-white p-4 text-center">
                    <p>&copy; 2025 Ajmain Fayek</p>
                </footer>
            </body>
        </html>
    );
}
