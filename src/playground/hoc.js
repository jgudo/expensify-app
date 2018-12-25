import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const requireAuth = (WrappedComponent) => {
    return (props) => (
        <div>
           {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>You are not authorized to view this page</p>}
        </div>
    );
};

const AuthInfo = requireAuth(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="Holy shit"/>, document.getElementById('app'));