import React, { 
    Component,
    PropTypes,
} from 'react';
import '../style/Container.less';

export default class Container extends Component {
    render() {
        return (
            <div style={{backgroundImage:`url(${this.props.background})`}} className="container">
                {this.props.children}
            </div>
        );
    }
}

Container.propTypes = {
  background: PropTypes.string.isRequired
};

