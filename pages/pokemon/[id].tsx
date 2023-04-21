import { Layout } from '../../components/layouts'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { pokeApi } from '@/api';
import { Pokemon } from '@/interfaces';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { localFavorites, getPokemonInfo } from '@/utils';
import { useState } from 'react';
import confetti from 'canvas-confetti';

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  const [isInFavorites, setIsInFavorites] = useState(localFavorites.existPokemonInFavorites(pokemon.id));

  const onToogleFavorite = () => {
    localFavorites.toogleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if (!isInFavorites) {
      confetti({
        zIndex: 999,
        particleCount: 150,
        spread: 100,
        origin: {
          y: 0.5,
          x: 1
        }
      });

    } else return;
  }

  return (
    <Layout title={`${pokemon.id}` + ` - ${pokemon.name}`}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={pokemon.name}
                width='100%'
                height={150}
              />
            </Card.Body>
            <Card.Footer css={{ justifyContent: 'space-around' }}>
              <Text h1 transform='capitalize'>{pokemon.name}</Text>
            </Card.Footer>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ justifyContent: 'space-between', p: '40px' }}>
              <Text size={30}>Splites:</Text>
              <Button
                color='gradient'
                ghost={!isInFavorites}
                onClick={onToogleFavorite}
              >
                {isInFavorites ? 'En Favoritos' : 'Guardar en favoritos'}
              </Button>
            </Card.Header>
            <Card.Body>
              <Container direction='row' display='flex' gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>

          </Card>
        </Grid>

      </Grid.Container>
    </Layout>
  )
};


export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemon151 = [...Array(151)].map((value, index) => `${index + 1}`);


  return {
    paths: pokemon151.map((id) => ({
      params: { id }
    })),
    fallback: "blocking", 
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string };

  const pokemon = await getPokemonInfo(id);

  if (pokemon === null) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      pokemon
    },
    revalidate: 86400, // 24 hours

  }
}

export default PokemonPage
