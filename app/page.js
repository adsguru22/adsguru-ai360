// pages/index.js
export default function LoginPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '400px',
        width: '100%'
      }}>
        <h1 style={{
          fontSize: '24px',
          marginBottom: '8px'
        }}>Welcome to AdsGuru AI360</h1>

        <p style={{
          color: '#666',
          fontSize: '14px',
          marginBottom: '20px'
        }}>Your AI powered marketing tool to automate and optimize digital marketing</p>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '20px'
        }}>
          <span>⚡</span>
          <span>📊</span>
          <span>💬</span>
          <span>📱</span>
          <span>🔔</span>
        </div>

        <div style={{textAlign: 'left'}}>
          <label style={{display: 'block', marginBottom: '5px'}}>Email Address</label>
          <input 
            type="email" 
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '8px',
              marginBottom: '15px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
          />

          <label style={{display: 'block', marginBottom: '5px'}}>Password</label>
          <input 
            type="password" 
            placeholder="Enter your password"
            style={{
              width: '100%',
              padding: '8px',
              marginBottom: '20px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box'
            }}
          />

          <button 
            type="submit"
            style={{
              width: '100%',
              padding: '8px',
              backgroundColor: '#1a73e8',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Login
          </button>
        </div>

        <p style={{
          marginTop: '15px',
          fontSize: '14px',
          color: '#666'
        }}>
          Don't have an account? <a href="/signup" style={{color: '#1a73e8', textDecoration: 'none'}}>Sign Up</a>
        </p>
      </div>
    </div>
  );
}