import { Routes, Route } from 'react-router-dom'
import Main from './pages/main/main'
import NotFound from './pages/not-found/not-found'
import PersonalPlaylist from './pages/personal-playlist/personal-playlist';
import RegistrationPage from './pages/registration/reg';
import LoginPage from './pages/login/login';
import CustomPlaylist from './pages/custom-playlist/custom-playlist';

import ProtectedRoute from './components/protected-route/protected-route'


export const AppRoutes = ({ isLogin }) => {
  const homepage = isLogin ? <Main /> : <LoginPage />

  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={isLogin} />}>
        <Route path="/personal" element={<PersonalPlaylist />} />
        <Route path="/main" element={<Main />} />
        <Route path="/playlist/:id" element={<CustomPlaylist />} />
      </Route>
      <Route path="/" element={homepage} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )

  // return (
  //   <Routes>
  //     <Route path="/" element={<Main />} />
  //     <Route path="/playlist" element={<PlayList/>} />
  //     <Route path="/*" element={<NotFound/>} />
  //   </Routes>
  // )
}

export default AppRoutes
