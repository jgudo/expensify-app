import React from 'react';
import {connect} from 'react-redux';
import { startLogout} from '../actions/auth';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';

export class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false
        };
    }

    openModal = () => {
        this.setState( () => ({
            modalIsOpen: true
        }));
    };
    

    closeModal = () => {
        this.setState( () => ({
            modalIsOpen: false
        }));
    };

    render() {
        return (
            <header className="header">
                <div className="content-container">
                    <div className="header__content">
                        <Link to="/dashboard" className="header__title">
                            <h1>Expensify</h1>
                        </Link>
                        <button 
                            onClick={this.openModal} 
                            className="button button--transparent-l">
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    closeTimeoutMS={200}
                    className="modal"
                    contentLabel="Logout modal"
                >
                    <div>
                        <h2 className="modal__title">Sure to logout?</h2>
                        <button onClick={this.props.startLogout} className="modal__button">Yes</button>
                        <button onClick={this.closeModal} className="modal__button">No</button>
                    </div>
                    
                </Modal>
            </header>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);