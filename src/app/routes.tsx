import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { TestInterface } from './pages/TestInterface';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/test',
    Component: TestInterface,
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
