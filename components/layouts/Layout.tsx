import Head from 'next/head'
import { FC } from 'react'
import { Navbar } from '../ui'

interface Props {
    title?: string
    children?: React.ReactNode
}

export const Layout: FC<Props> = ({ children, title }) => {

    const origin = (typeof window === 'undefined') ? '' : window.location.origin;


    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Ismael Ferrer" />
                <meta name="descripcion" content="Info pokemon" />
                <meta name="keywords" content="Pokemon, pokedex" />

                <meta property="og:title" content={`Informacion sobre Pókemons`} />
                <meta property="og:description" content={`Página de ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            <Navbar />

            <main style={{
                padding: '0 20px'
            }}>
                {children}
            </main>

        </>
    )
}
