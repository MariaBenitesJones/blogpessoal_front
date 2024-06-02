import { EnvelopeSimple, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'

function Footer() {

    /**
     * Automatiza a exibição do ano no rodapé
     */
    let data = new Date().getFullYear()


    const { usuario } = useContext(AuthContext)


    let footerComponent

    if (usuario.token !== ""){
        footerComponent = (
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Blog Pessoal Maria Eduarda Benites Jones | Copyright: {data}
                    </p>
                    <p className='text-lg'>Entre em contato</p>
                    <div className='flex gap-2'>
                        <a href="https://github.com/MariaBenitesJones" target="_blank">
                            <GithubLogo size={48} weight='bold' />
                        </a>
                        <a href="mailto:maria.eduarda.benites.jones@gmail.com" target="_blank">
                            <EnvelopeSimple size={48}  weight='bold' />
                        </a>
                        <a href="https://www.linkedin.com/in/maria-eduarda-jones/" target="_blank">
                            <LinkedinLogo size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer