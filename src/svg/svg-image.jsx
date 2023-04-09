import React from 'react';
import * as Styled from './svg-style';

const SvgImage = ({ href, ariaLabel }) => {
    return (
        <Styled.SVGImg aria-label={ariaLabel}>
            <use xlinkHref={href}></use>
            {/* <image href={href} /> */}
        </Styled.SVGImg>
    );
};

export default SvgImage;