import styled, { css } from 'styled-components';

import Media from './shared/Media';
import Currency from './shared/Currency';
import { typography, colors } from './util/theme';

const Container = styled.article(
  ({ dark }) => css`
    background-color: ${dark ? colors.fg : colors.bg};
    color: ${dark ? colors.bg : colors.fg};
  `
);

const Title = styled.h1`
  ${typography.heading}
`;
const Body = styled.div`
  white-space: pre-wrap;
`;
export default function DestinationTeaser(props) {
  return (
    <Container dark={props.dark || false}>
      <Media {...props.media[props.small ? 'small' : 'large']} />
      <Title>{props.title}</Title>
      <Currency {...props.price} />
      <Body>{props.body}</Body>
    </Container>
  );
}
