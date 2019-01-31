import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import AbstractModal from 'terra-abstract-modal/lib/AbstractModal';
import styles from './ExampleAbstractSize.module.scss';

class AbstractModalEscapeDeactivates extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ isOpen: true });
  }

  handleCloseModal() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div>
        <AbstractModal
          ariaLabel="Modal Esc Key Focus Escape Disabled"
          isOpen={this.state.isOpen}
          closeOnEsc={false}
          onRequestClose={this.handleCloseModal}
          classNameModal={styles['fixed-size']}
        >
          <div style={{
            height: '100%',
            width: '100%',
            overflow: 'hidden',
            backgroundColor: '#90EE90',
            paddingLeft: '2em',
          }}
          >
            <h1>Modal Esc Key Focus Escape Disabled</h1>
            <br />
            <p>You can close the modal by:</p>
            <ul>
              <li>- Clicking outside the modal</li>
              <li>- Clicking on the close button</li>
            </ul>
            <br />
            <button type="button" onClick={this.handleCloseModal}>Close Modal</button>
          </div>
        </AbstractModal>
        <button type="button" onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    );
  }
}

export default AbstractModalEscapeDeactivates;
