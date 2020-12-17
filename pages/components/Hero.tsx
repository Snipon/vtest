import styled, { css } from 'styled-components';
import Media from './shared/Media';
import Currency from './shared/Currency';
import { IDestination } from '../typings';
import { typography, colors } from './util/theme';

const Container = styled.article`
  position: relative;
`;

const Content = styled.div`
  color: ${colors.bg};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5rem;
`;
const Title = styled.h1`
  ${typography.heading}
  margin: 0;
`;

export default function Hero(props: IDestination) {
  return (
    <Container
      width={props.media.large.width}
      height={props.media.large.height}
    >
      <Media {...props.media.large} />
      <Content>
        <Title>{props.title}</Title>
        <Currency {...props.price} />
      </Content>
    </Container>
  );
}
