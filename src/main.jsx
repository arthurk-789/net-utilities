import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router';
import './styles/index.css';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import IPLookupPage from './pages/IPLookupPage';
import DNSLookupPage from './pages/DNSLookupPage';
import DomainAvailabilityPage from './pages/DomainAvailabilityPage';
import PasswordGeneratorPage from './pages/PasswordGeneratorPage';
import URLLookupPage from './pages/URLLookupPage';

const router = createBrowserRouter([{
  path: '/',
  element: <HomePage />,
  errorElement: <NotFoundPage />
},
{
  path: '/iplookup',
  element: <IPLookupPage />
},
{
  path: '/dnslookup',
  element: <DNSLookupPage />
},
{
  path: '/domainavailability',
  element: <DomainAvailabilityPage />
},
{
  path: '/passwordgenerator',
  element: <PasswordGeneratorPage />
},
{
  path: '/urllookup',
  element: <URLLookupPage />
},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
