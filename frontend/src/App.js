<import React, { useEffect, useState } from 'react';
 import { useAuth0 } from '@auth0/auth0-react';
 import './App.css';

 function App() {
   const {
     loginWithRedirect,
     logout,
     isAuthenticated,
     user,
     getAccessTokenSilently,
     isLoading,
   } = useAuth0();

   const [apiMessage, setApiMessage] = useState('');

   useEffect(() => {
     const fetchProtected = async () => {
       try {
         const token = await getAccessTokenSilently();
         const res = await fetch(`${process.env.REACT_APP_API_URL}/api/protected`, {
           headers: {
             Authorization: `Bearer ${token}`,
           },
         });
         const data = await res.json();
         setApiMessage(data.message);
       } catch (err) {
         setApiMessage('Unable to access protected route');
         console.error(err);
       }
     };

     if (isAuthenticated) {
       fetchProtected();
     }
   }, [isAuthenticated, getAccessTokenSilently]);

   if (isLoading) return <div>Loading...</div>;

   return (
     <div className="App" style={{ padding: '2rem' }}>
       {!isAuthenticated ? (
         <>
           <h1>Welcome to DadsLocker 👋</h1>
           <button onClick={() => loginWithRedirect()}>Log In / Sign Up</button>
         </>
       ) : (
         <>
           <h1>Hello, {user.name}!</h1>
           <button
             onClick={() =>
               logout({ logoutParams: { returnTo: window.location.origin } })
             }
           >
             Log Out
           </button>
           <p style={{ marginTop: '2rem' }}>🔐 API says: {apiMessage}</p>
         </>
       )}
     </div>
   );
 }

 export default App;
