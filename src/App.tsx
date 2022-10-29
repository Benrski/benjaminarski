import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Splash } from './features/Splash';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="*" element={'404 :('} />
      </Routes>
    </BrowserRouter>
  );
}
