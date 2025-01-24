import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function generateMetadata() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return {
        title: user?.given_name || "User",
    };
}

const ProfilePage = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return (
        <div className="text-center p-4 bg-gray-100 rounded-lg shadow-md">
            {user !== null ? (
                <>
                    <h1 className="text-2xl font-bold mb-2">
                        Welcome, {user?.given_name || "User"}!
                    </h1>
                    <p className="text-lg">Email: {user?.email}</p>
                </>
            ) : (
                <>
                    <p className="text-lg">
                        Please sign in to view your profile.
                    </p>
                </>
            )}
        </div>
    );
};

export default ProfilePage;
