import React from 'react';
import PropTypes from 'react-proptypes';
import { Marker, InfoWindow } from 'react-google-maps';

class MarkerWithInfoWindow extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.onToggleOpen = this.onToggleOpen.bind(this);
  }

  static propTypes = { content: PropTypes.string, position: PropTypes.shape() };

  onToggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Marker
        draggable
        editable
        position={this.props.position}
        onClick={this.onToggleOpen}
      >
        {this.state.isOpen && (
          <InfoWindow onCloseClick={this.onToggleOpen}>
            <h3>{this.props.content}</h3>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

export default MarkerWithInfoWindow;
