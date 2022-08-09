import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Intro } from './features/Intro';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="*" element={'404 :('} />
      </Routes>
    </BrowserRouter>
  );
}
