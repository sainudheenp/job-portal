

// middleware/authenticate.js
import { useRouter } from 'next/router';

const authenticate = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    // Check if the user is authenticated (you can use cookies, JWT, etc.)
    const isAuthenticated = true; // For demonstration, consider implementing proper authentication
    
    if (!isAuthenticated) {
      // Redirect to login page if not authenticated
      router.push('/auth/adminLogin');
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default authenticate;



