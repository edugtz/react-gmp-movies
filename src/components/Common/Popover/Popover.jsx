import React from 'react';
import PropTypes from "prop-types"

import './Popover.scss';

const Popover = props => {
    return (
        <>
            {props.isPopoverOpen &&
                <div className="popover-container">
                    <div className="popover-content">
                        <div className="close-icon-wrapper">
                            <span onClick={props.toggleOpenMovieOptions} className="close-popover">
                                <i className="fa fa-times"></i>
                            </span>
                        </div>
                        <div onClick={props.onEditMovie} className="popover-action-wrapper">
                            <p>Edit</p>
                        </div>
                        <div onClick={props.onDeleteMovie} className="popover-action-wrapper">
                            <p>Delete</p>
                        </div>
                    </div>
                </div>
            }

        </>
    );
}

Popover.propTypes = {
    onEditMovie: PropTypes.func.isRequired,
    onDeleteMovie: PropTypes.func.isRequired,
    toggleOpenMovieOptions: PropTypes.func.isRequired,
    isPopoverOpen: PropTypes.bool.isRequired
}

export default Popover;