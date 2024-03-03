import React from 'react';
import { useUser } from '@clerk/clerk-react';

export default function RoleRestriction() {
  const { isSignedIn, user, isLoaded } = useUser();
  const { role } = user?.publicMetadata ?? { role: 'guest' };

  if (!isSignedIn) {
    return <p>Please sign in to view this content.</p>;
  }

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {role === 'admin' ? (
        <div>
          <h1>Welcome, Admin!</h1>
          {/* Admin-specific content */}
        </div>
      ) : role === 'student' ? (
        <div>
          <h1>Welcome, Student!</h1>
          {/* Student-specific content */}
        </div>
      ) : (
        <p>You don't have permission to view this content.</p>
      )}
    </div>
  );
}
