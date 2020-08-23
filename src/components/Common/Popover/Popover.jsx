import React from 'react';

import './Popover.scss';

class Popover extends React.Component {
    render() {
        return (
            <>
                {this.props.isPopoverOpen &&
                    <div className="popover-container">
                        <div className="popover-content">
                            <div className="close-icon-wrapper">
                                <span onClick={this.props.toggleOpenMovieOptions} className="close-popover">
                                    <i className="fa fa-times"></i>
                                </span>
                            </div>
                            <div onClick={this.props.onEditMovie} className="popover-action-wrapper">
                                <p>Edit</p>
                            </div>
                            <div onClick={this.props.onDeleteMovie} className="popover-action-wrapper">
                                <p>Delete</p>
                            </div>
                        </div>
                    </div>
                }

            </>
        )
    }
}

export default Popover;