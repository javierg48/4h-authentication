// ./src/app/dashboard/page.jsx
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import { getDb } from "../../lib/db";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/api/auth/login");
  }

  // Connect to MongoDB
  const db = await getDb();

  // Search for a user with firstName 'Javier'
  const user = await db.collection('users').findOne({ firstName: 'Javier' });

  console.log("Connected to MongoDB!", user);

  return (
    <div>
      {!!session?.user && (
        <div>
          {session.user.email} - <a href="/api/auth/logout">LOGOUT</a>
        </div>
      )}
      <p>Connected to MongoDB!</p>

      {/* Display user information */}
      {user && (
        <div>
          <p>User found:</p>
          <p>First Name: {user.firstName}</p>
          {/* Add other user details as needed */}
        </div>
      )}

      Page should only be seen when logged in
    </div>
  );
}