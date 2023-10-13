import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/history'
import { DefaultLayout } from './layouts/defaultlayout'
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/History" element={<History />} />
      </Route>
    </Routes>
  )
}
