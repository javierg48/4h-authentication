// ./src/app/api/auth/[auth]/.route.js
import { handleAuth } from '@auth0/nextjs-auth0';
import { connectToDatabase } from '../../../../utils/mongodb.js';


console.log("in route.js")

export const GET = handleAuth(async (req, res) => {
  const { db } = await connectToDatabase();

  // You can now use 'db' to interact with your MongoDB
  // Example: Insert a user document
  await db.collection('users').insertOne({
    firstName: 'Javier',
    lastName: 'Garcia2',
    email: 'garcjavi@oregonstate.edu',
    authId: 'dfnsdfnjdasnf',
    password: 'Password12#'
  });

  res.status(200).json({ message: 'User created successfully' });
});
