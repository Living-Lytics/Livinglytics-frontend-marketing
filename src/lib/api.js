const API_URL = import.meta.env.VITE_API_URL || 'https://api.livinglytics.com';
console.log('🔧 API_URL configured as:', API_URL);

/**
 * Login with email and password
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<{ok: boolean, message?: string}>}
 */
export async function login(email, password) {
  const url = `${API_URL}/v1/auth/login`;
  console.log('🔑 Attempting login to:', url);
  try {
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    });
    
    console.log('📥 Login response:', { 
      ok: r.ok, 
      status: r.status,
      headers: Object.fromEntries(r.headers.entries())
    });
    
    // Check for Set-Cookie header
    const setCookie = r.headers.get('set-cookie');
    if (setCookie) {
      console.log('🍪 Set-Cookie header received:', setCookie);
    } else {
      console.warn('❌ No Set-Cookie header in login response!');
    }
    
    // Check what cookies the browser has
    console.log('🍪 Current browser cookies:', document.cookie || '(no cookies)');
    
    const data = await r.json().catch(() => ({}));
    console.log('📦 Login data:', data);
    
    return {
      ok: r.ok,
      message: data.message || (r.ok ? 'Signed in successfully' : 'Login failed'),
    };
  } catch (err) {
    console.error('❌ Login error:', err);
    return {
      ok: false,
      message: 'Network error. Please try again.',
    };
  }
}

/**
 * Register a new account
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<{ok: boolean, message?: string}>}
 */
export async function register(email, password) {
  const url = `${API_URL}/v1/auth/register`;
  console.log('📝 Attempting registration to:', url);
  console.log('📝 Registration data:', { email, password: '***' });
  try {
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    });
    
    console.log('📥 Registration response:', { 
      ok: r.ok, 
      status: r.status,
      headers: Object.fromEntries(r.headers.entries())
    });
    
    const data = await r.json().catch(() => ({}));
    console.log('📦 Registration data:', data);
    
    if (!r.ok) {
      console.error('❌ Registration failed:', data);
    }
    
    return {
      ok: r.ok,
      message: data.message || (r.ok ? 'Account created successfully' : 'Registration failed'),
    };
  } catch (err) {
    console.error('❌ Registration error:', err);
    return {
      ok: false,
      message: 'Network error. Please try again.',
    };
  }
}

/**
 * Login with Google OAuth
 * Redirects to home page after successful authentication
 */
export function loginWithGoogle() {
  const authUrl = `${API_URL}/v1/auth/google/start?next=${encodeURIComponent(window.location.origin)}`;
  
  console.log('🚀 Starting Google OAuth flow:');
  console.log('  Next URL:', window.location.origin);
  console.log('  Auth endpoint:', authUrl);
  
  window.location.href = authUrl;
}

/**
 * Get the current authentication status for connected services
 * @returns {Promise<Object>} Object with authenticated, email, google, and instagram status
 */
export async function getAuthStatus() {
  const url = `${API_URL}/v1/auth/status`;
  try {
    const r = await fetch(url, { credentials: 'include' });
    if (!r.ok) return { authenticated: false };
    return await r.json().catch(() => ({ authenticated: false }));
  } catch {
    return { authenticated: false };
  }
}

