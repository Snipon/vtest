import { css } from 'styled-components';

export const colors = {
  fg: 'black',
  bg: 'white',
  base: '#fefefe',
};

export const spacing = {
  sm: '0.5rem',
  md: '1rem',
  lg: '5rem',
};

enum FontFamilies {
  base = '"Mulish", sans-serif',
  heading = '"Fahkwang". sans-serif',
}

const typoBase = {
  fontFamily: FontFamilies.base,
  fontWeight: 400,
  fontSize: '1rem',
  lineHeight: 1.2,
};

export const typeSets = {
  base: { ...typoBase },
  heading: {
    fontFamily: FontFamilies.heading,
    lineHeight: 1,
    fontSize: '1.6rem',
  },
};

function buildType(type) {
  return css`
    font-family: ${typeSets[type].fontFamily};
    font-size: ${typeSets[type].fontSize};
    line-height: ${typeSets[type].lineHeight};
  `;
}

export const typography = {
  base: buildType('base'),
  heading: buildType('heading'),
};
