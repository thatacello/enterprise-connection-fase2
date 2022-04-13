import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NormalizeStyles } from './shared/NormalizeStyles';
export function App() {
  return (
    <>
      <NormalizeStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/detalhes/:id" exact element={''} />
          <Route path="/home" exact element={''} />
          <Route path="*">Página não encontrada</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
