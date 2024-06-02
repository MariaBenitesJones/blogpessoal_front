import './App.css';

import Navbar from './assets/components/navbar/NavBar';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastro from './assets/pages/cadastro/Cadastro';
import Home from './assets/pages/home/Home';
import Footer from './assets/components/footer/footer';
import Login from './assets/pages/login/login';
import ListaTemas from './assets/components/temas/listatemas/ListaTemas';
import DeletarTema from './assets/components/temas/deletartema/DeletarTema';
import FormTema from './assets/components/temas/formulariotema/FormTema';
import ListaPostagens from './assets/components/postagens/listapostagens/ListaPostagens';
import FormPostagem from './assets/components/postagens/formpostagem/FormPostagem';
import DeletarPostagem from './assets/components/postagens/deletarpostagem/DeletarPostagem';
import Perfil from './assets/pages/perfil/Perfil';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
    <AuthProvider>
      <ToastContainer />
        <BrowserRouter>
          <Navbar />
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
