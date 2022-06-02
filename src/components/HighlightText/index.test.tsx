import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';

import HighlightText from '.';

const SAMPLE_TITLE = 'Tis is my HighlightText';

describe('HighlightText', () => {
  it('Renders as expected', () => {
    const tree = renderer
      .create(<HighlightText color="red">{SAMPLE_TITLE}</HighlightText>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('Renders as expect', () => {
    const { getByText } = render(
      <HighlightText color="red">{SAMPLE_TITLE}</HighlightText>,
    );
    expect(getByText(SAMPLE_TITLE)).toBeInTheDocument();
  });
});
