import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut 
} from 'firebase/auth';

// Configuração do Firebase (substitua com suas credenciais)
const firebaseConfig = {
    apiKey: "AIzaSyCfh7hUfM4eSpCmXxEWK_TtdbnuY-liIzQ",
    authDomain: "costs-85eed.firebaseapp.com",
    projectId: "costs-85eed",
    storageBucket: "costs-85eed.firebasestorage.app",
    messagingSenderId: "734803973061",
    appId: "1:734803973061:web:292ec5cafd993c7ec931ac",
    measurementId: "G-7H178CC3WB"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const FirebaseLoginSystem = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);

  const handleAuthentication = async (e) => {
    e.preventDefault();
    setError('');

    try {
      let userCredential;
      if (isNewUser) {
        // Criar novo usuário
        userCredential = await createUserWithEmailAndPassword(
          auth, 
          email, 
          password
        );
      } else {
        // Login de usuário existente
        userCredential = await signInWithEmailAndPassword(
          auth, 
          email, 
          password
        );
      }
      
      setUser(userCredential.user);
    } catch (error) {
      setError(error.message);
      console.error('Erro de autenticação:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Erro no logout:', error);
    }
  };

  if (user) {
    return (
      <div style={{
        maxWidth: '400px',
        margin: '2rem auto',
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '8px'
      }}>
        <h2>Usuário Logado</h2>
        <p>Email: {user.email}</p>
        <button 
          onClick={handleLogout}
          style={{
            width: '100%',
            padding: '0.5rem',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: '400px',
      margin: '2rem auto',
      padding: '1rem',
      border: '1px solid #ccc',
      borderRadius: '8px'
    }}>
      <h2>{isNewUser ? 'Criar Conta' : 'Login'}</h2>
      <form onSubmit={handleAuthentication}>
        <div style={{ marginBottom: '1rem' }}>
          <label 
            htmlFor="email"
            style={{ display: 'block', marginBottom: '0.5rem' }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
            required
            style={{
              width: '100%',
              padding: '0.5rem',
              marginBottom: '1rem',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label 
            htmlFor="password"
            style={{ display: 'block', marginBottom: '0.5rem' }}
          >
            Senha
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            required
            style={{
              width: '100%',
              padding: '0.5rem',
              marginBottom: '1rem',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          />
        </div>
        {error && (
          <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>
        )}
        <button 
          type="submit"
          style={{
            width: '100%',
            padding: '0.5rem',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            marginBottom: '1rem',
            cursor: 'pointer'
          }}
        >
          {isNewUser ? 'Criar Conta' : 'Login'}
        </button>
        <button 
          type="button"
          onClick={() => setIsNewUser(!isNewUser)}
          style={{
            width: '100%',
            padding: '0.5rem',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {isNewUser 
            ? 'Já tem conta? Faça login' 
            : 'Criar nova conta'}
        </button>
      </form>
    </div>
  );
};

export default FirebaseLoginSystem;