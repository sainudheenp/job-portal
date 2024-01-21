// pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    // Predefined credentials for demonstration purposes
    const predefinedUsername = 'admin';
    const predefinedPassword = 'password';

    // Check if entered credentials match predefined values
    if (username === predefinedUsername && password === predefinedPassword) {
      // Redirect to the admin page on successful login
      router.push('/frontend/admin');
    } else {
      // Display an error message on failed login
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
