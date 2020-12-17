import styled from 'styled-components';

const Container = styled.figure`
  width: 100%;
  margin: 0;
`;

const Image = styled.img`
  display: inline-block;
  max-width: 100%;
`;

export default function Media({ url }) {
  return (
    <Container>
      <Image src={url} />
    </Container>
  );
}
