import React from 'react'
import './App.css'
import Pages from "@/pages/index.jsx"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/state/theme'
import { AuthProvider, useAuth } from '@/state/auth'
import { fetchAuthStatus } from '@/lib/auth'

function AuthBootstrap({ children }) {
  const { setStatus, setReady } = useAuth();
  React.useEffect(() => {
    (async () => {
      const s = await fetchAuthStatus();
      setStatus(s);
      setReady(true);
    })();
  }, [setStatus, setReady]);
  return <>{children}</>;
}


function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AuthBootstrap>
          <Pages />
          <Toaster />
        </AuthBootstrap>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App 