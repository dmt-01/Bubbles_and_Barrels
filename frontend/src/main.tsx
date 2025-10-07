import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={"bite"} />
      <Route path="/categories" element={"bite"} />
      <Route path="/products" element={"bite"} />
      <Route path="/products/:id" element={"bite"} />
      <Route path="/login" element={"bite"} />
      <Route path="/register" element={"bite"} />
      <Route path="/cart" element={"bite"} />
      <Route path="/payment" element={"bite"} />
      <Route path="/history" element={"bite"} />
    </Routes>
    
    </BrowserRouter>
  </StrictMode>,
)
