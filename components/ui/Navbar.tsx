import { Spacer, Text } from '@nextui-org/react'
import Link from 'next/link'
import Image from 'next/image';
import { Heart2 } from 'react-iconly';

export const Navbar = () => {

    const origin = (typeof window === 'undefined') ? '' : window.location.origin;

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0 20px',
        }}>

            <Link style={{
                display: 'flex',
            }}
                href='/'>
                <Image
                    style={{ marginLeft: 10 }}
                    src={`/img/pokebola.png`}
                    alt='Lista de Pókemons'
                    width={40}
                    height={40}
                />
                <Text color='white' h1 css={{ pl: 10 }}>P</Text>
                <Text color='white' h2>ókemon!</Text>
            </Link>

            <Spacer css={{ flex: 1 }} />

            <Link style={{
                display: 'flex',
            }}
                href='/favorites'>
                <Text h3 css={{ marginRight: 10 }} color='white'>Favoritos</Text>
                <Heart2 set="light" primaryColor='yellow' secondaryColor='white' stroke='regular' size='large' />
            </Link>


        </div>
    )
}