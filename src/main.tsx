import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Admin from './admin/Admin.tsx';
import './index.css'

const mockProducts = [
  {
    id: "1",
    productName: "Tmp product",
    description: "Product description",
    price: 99.99,
  }
]

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Admin data={mockProducts} />
  </StrictMode>,
)
