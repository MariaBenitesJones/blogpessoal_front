import { Link } from "react-router-dom";
import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem";

function Home() {
    return (
        <>
            <div className="bg-indigo-900 w-screen flex justify-center">
                <div className="container grid grid-cols-2 text-white">
                    <div className=" flex flex-col items-center gap-4 justify-center py-4">
                        <h2 className="text-5xl font-bold">Seja bem vindo</h2>
                        <p className="text-xl">Expresse aqui seus pensamentos e opniões</p>
                        <div className="flex justify-around gap-4">
                            <ModalPostagem />
                            <Link to={'/postagens'}><button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button></Link>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img src="https://imgur.com/VpwApCU.png"
                            alt="Imagem da Pagina Home"
                            className="w-2/3" />
                    </div>
                </div>
            </div>
            <ListaPostagens />
        </>
    )
}
export default Home;