import styled from 'styled-components';


const maintheme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#E1E1E1',
    offwhite: '#EDEDED',
    maxwidth: '1000px',
    bs: '0 12px 24px 0 rba(0, 0, 0, 0.09)',
    background_hex: '#FF0000',
    text_hex: '#EDEDED',
    accent1_hex: '#66FFCC',
    accent2_hex: '#66FFCC',
    accent3_hex: '#66FFCC',
};

export const StylePage = styled.div`
    background: ${maintheme.offwhite};
    color: ${maintheme.black};
`;

export const Inner = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
`;

export default maintheme;