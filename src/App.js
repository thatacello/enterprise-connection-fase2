import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NormalizeStyles } from './shared/NormalizeStyles';
import { SobreVoce } from './screens/SobreVoce';
import { Formacao } from './screens/Formacao';
import { Experiencia } from './screens/Experiencia';
import { Hobbies } from './screens/Hobbies';

export function App() {
  return (
    <>
      <NormalizeStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/sobre-voce" exact element={<SobreVoce />} />
          <Route path="/formacao" exact element={<Formacao />} />
          <Route path="/experiencia" exact element={<Experiencia />} />
          <Route path="/hobbies" exact element={<Hobbies />} />
          <Route path="*">Página não encontrada</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
