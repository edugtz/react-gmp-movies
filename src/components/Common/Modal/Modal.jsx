import React from 'react';
import PropTypes from "prop-types"

import "./Modal.scss"

class Modal extends React.Component {
    componentDidMount() {
        if (this.props.isModalOpen) {
            document.body.style.overflow = 'hidden'
        }
    }

    componentWillUnmount() {
        document.body.style.overflow = 'unset';
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isModalOpen !== this.props.isModalOpen && this.props.isModalOpen) {
            document.body.style.overflow = 'hidden'
        } else document.body.style.overflow = 'unset'
    }

    render() {
        return (
            <>
                {this.props.isModalOpen &&
                    <div className="overlay">
                        <div className="modal-content">
                            <div className="close-icon-wrapper">
                                <span onClick={this.props.toggleModalOpen} className="close-modal">
                                    <i className="fa fa-times"></i>
                                </span>
                            </div>
                            {this.props.children}
                        </div>
                    </div>
                }
            </>

        )
    }
}

Modal.propTypes = {
    toggleModalOpen: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool.isRequired
}

export default Modal;