import React from 'react';
import styled from 'styled-components';

const Coord = props => <div className={props.className} >lat:{props.lat} long:{props.long}</div>;


const CoordStyled = styled(Coord)`
    z-index: 20;
    bottom: 10px;
    position: absolute;
    left: 10px;
    font-size: 20px;
    background: white;
    padding: 4px 8px;
`;
export default CoordStyled;
