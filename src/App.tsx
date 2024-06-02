import './App.css';

import NavBar from './components/navbar/NavBar';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastro from './pages/cadastro/Cadastro';
import Home from './pages/home/Home';
import Footer from './components/footer/footer';
import Login from './pages/login/login';
import ListaTemas from './components/temas/listatemas/ListaTemas';
import DeletarTema from './components/temas/deletartema/DeletarTema';
import FormTema from './components/temas/formulariotema/FormTema';
import ListaPostagens from './components/postagens/listapostagens/ListaPostagens';
import FormPostagem from './components/postagens/formpostagem/FormPostagem';
import DeletarPostagem from './components/postagens/deletarpostagem/DeletarPostagem';
import Perfil from './pages/perfil/Perfil';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'



function App() {
  return (
    <>
    <AuthProvider>
      <ToastContainer />
        <BrowserRouter>
          <NavBar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastrartema" element={<FormTema />} />
              <Route path="/editarTema/:id" element={<FormTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastroPostagem" element={<FormPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}
export default App;
