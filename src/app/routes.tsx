import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { TestInterface } from './pages/TestInterface';
import Unavailable from './pages/Unavailable';

export const router = createBrowserRouter([
  // Root should serve the main Home page
  {
    path: '/',
    Component: Unavailable,
  },
  // keep an explicit /home route for legacy links
  {
    path: '/home',
    Component: Home,
  },
  // Test interface
  {
    path: '/test',
    Component: TestInterface,
  },
  // Unavailable page (explicit route)
  {
    path: '/unavailable',
    Component: Unavailable,
  },
  {
    path: '*',
    Component: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <a href="/" className="text-blue-600 hover:underline">
            Return to Home
          </a>
        </div>
      </div>
    ),
  },
]);
