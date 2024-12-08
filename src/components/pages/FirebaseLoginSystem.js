import React, { useState } from 'react';
import styles from './FirebaseLoginSystem.module.css'
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut 
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCfh7hUfM4eSpCmXxEWK_TtdbnuY-liIzQ",
    authDomain: "costs-85eed.firebaseapp.com",
    projectId: "costs-85eed",
    storageBucket: "costs-85eed.firebasestorage.app",
    messagingSenderId: "734803973061",
    appId: "1:734803973061:web:292ec5cafd993c7ec931ac",
    measurementId: "G-7H178CC3WB"
};

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
        
        userCredential = await createUserWithEmailAndPassword(
          auth, 
          email, 
          password
        );
      } else {
        
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
      <div>
        <h2>Usuário Logado</h2>
        <p>Email: {user.email}</p>
        <button>Logout</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>
          {isNewUser ? 'Criar Conta' : 'Login'}
        </h2>
        <form onSubmit={handleAuthentication} className={styles.form}>
          <div className={styles.inputGroup}>
            <label 
              htmlFor="email" 
              className={styles.label}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label 
              htmlFor="password" 
              className={styles.label}
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              required
            />
          </div>
          {error && (
            <p className={styles.errorMessage}>{error}</p>
          )}
          <div className={styles.buttonGroup}>
            <button 
              type="submit" 
              className={styles.primaryButton}
            >
              {isNewUser ? 'Criar Conta' : 'Login'}
            </button>
            <button 
              type="button"
              className={styles.secondaryButton}
              onClick={() => setIsNewUser(!isNewUser)}
            >
              {isNewUser 
                ? 'Já tem conta? Faça login' 
                : 'Criar nova conta'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default FirebaseLoginSystem;