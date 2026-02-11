import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

// Simple router implementation without react-router-dom

interface RouterContextType {
  pathname: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType | null>(null);

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}

interface RouterProviderProps {
  children: ReactNode;
}

export function RouterProvider({ children }: RouterProviderProps) {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, '', to);
    setPathname(to);
    window.scrollTo(0, 0);
  };

  return (
    <RouterContext.Provider value={{ pathname, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

interface RouteProps {
  path: string;
  element: ReactNode;
}

export function Route({ path, element }: RouteProps) {
  const { pathname } = useRouter();
  
  // Simple path matching
  const match = matchPath(path, pathname);
  
  if (!match) return null;
  
  return <>{element}</>;
}

interface RoutesProps {
  children: ReactNode;
}

export function Routes({ children }: RoutesProps) {
  return <>{children}</>;
}

interface LinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Link({ to, children, className, onClick }: LinkProps) {
  const { navigate, pathname } = useRouter();
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
    onClick?.();
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

export function useLocation() {
  const { pathname } = useRouter();
  return { pathname };
}

export function useParams<T extends Record<string, string> = Record<string, string>>(): T {
  const { pathname } = useRouter();
  // Extract params from pathname - simplified version
  const segments = pathname.split('/').filter(Boolean);
  return {} as T;
}

export function Navigate({ to, replace }: { to: string; replace?: boolean }) {
  const { navigate } = useRouter();
  
  useEffect(() => {
    navigate(to);
  }, [navigate, to]);
  
  return null;
}

// Helper function to match paths
function matchPath(pattern: string, pathname: string): boolean {
  // Handle exact matches
  if (pattern === pathname) return true;
  
  // Handle dynamic segments (e.g., /blog/:slug)
  const patternParts = pattern.split('/').filter(Boolean);
  const pathParts = pathname.split('/').filter(Boolean);
  
  if (patternParts.length !== pathParts.length) return false;
  
  for (let i = 0; i < patternParts.length; i++) {
    const patternPart = patternParts[i];
    const pathPart = pathParts[i];
    
    // If pattern part starts with :, it's a parameter and matches anything
    if (patternPart.startsWith(':')) continue;
    
    if (patternPart !== pathPart) return false;
  }
  
  return true;
}

// Extract params from path
export function extractParams(pattern: string, pathname: string): Record<string, string> {
  const params: Record<string, string> = {};
  const patternParts = pattern.split('/').filter(Boolean);
  const pathParts = pathname.split('/').filter(Boolean);
  
  for (let i = 0; i < patternParts.length; i++) {
    const patternPart = patternParts[i];
    if (patternPart.startsWith(':')) {
      const paramName = patternPart.slice(1);
      params[paramName] = pathParts[i];
    }
  }
  
  return params;
}
