import { Spacer, Text, useTheme } from '@nextui-org/react'
import Link from 'next/link'
import Image from 'next/image';
import { Heart2 } from 'react-iconly';

export const Navbar = () => {
    const { theme } = useTheme();

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0 20px',
        }}>

            <Image
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
                alt='pokemon'
                width={70}
                height={70}
            />
           

            <Text color='white' h2>P</Text>
            <Link href='/'>
                <Text color='white' h3>ókemon!</Text>
            </Link>

            <Spacer css={{ flex: 1 }} />

            <Link href='/favorites'>
                <Text h3 color='white'>Favoritos</Text>
            </Link>
            <Heart2 set="light" primaryColor='yellow' secondaryColor='white' stroke='regular' size='large'/>
            
        </div>
    )
}