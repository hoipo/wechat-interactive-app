import React, { 
    Component,
    PropTypes,
} from 'react';
import Container from './Container';

export default class Index extends Component {
    render() {
        return (
            <Container background="">
                <h1 style={{color:"red"}}>Hello~!</h1>
            </Container>
        );
    }
}

