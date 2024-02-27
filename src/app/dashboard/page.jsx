// ./src/app/dashboard/page.jsx
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import { getDb } from "../../lib/db";
import { ObjectId } from "mongodb";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/api/auth/login");
  }

  //const auth0UserId = session.user.identities[0].user_id;
  const userID = ObjectId.createFromHexString(session.user.sub.substring(6));

  // Connect to MongoDB
  const db = await getDb();

  // Search for a user with current session user's ID
  const user = await db.collection('users').findOne(userID);


  return (
    <div>
      {!!session?.user && (
        <div>
          <a href="/api/auth/logout">LOGOUT</a>
        </div>
      )}

      {/* Display user information */}
      {user && (
        <div>
          <p>{user.user_metadata.given_name} {user.user_metadata.family_name}</p>
          <p> {user.email}</p>
          <p> {user.user_metadata.birthdate}</p>
          <p> User ID: {user._id.toString()}</p>
          {/* Add other user details as needed */}
        </div>
      )}
    </div>
  );
}