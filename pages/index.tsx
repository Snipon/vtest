import Head from 'next/head';
import styled from 'styled-components';
import SiteHeader from './components/SiteHeader';
import Featured from './components/Featured';
import Carousel from './components/Carousel';
import { typography, colors } from './components/util/theme';

const Container = styled.div`
  ${typography.base};
  color: ${colors.fg};
  max-width: 1000px;
  margin: auto;
`;

export async function getStaticProps(context) {
  const res = await fetch(
    'https://webdev-exercise.netlify.app/data/products.json'
  );
  const data = await res.json();

  if (!data) {
    return { notFound: true };
  }

  return { props: { ...data } };
}

export default function Home(props) {
  const { featured, carousel } = props;
  return (
    <Container>
      <SiteHeader title="Scandinavian adventures" />
      <Head>
        <title>Volvo code test travel app.</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fahkwang:wght@600&family=Mulish:ital,wght@0,700;0,900;1,400&display=swap"
          rel="stylesheet"
        />
        <style>body: background-color: ${colors.base};</style>
      </Head>
      <Featured data={featured} />
      <Carousel data={carousel} />
    </Container>
  );
}
