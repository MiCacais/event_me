import React from 'react';

const input = (props) => {
    let element = null;

    switch (props.type) {
        case ('input'):
            element = <input className="form-control" {...props}/>;
            break;
        case ('textarea'):
            element = <textarea className="form-control" {...props}/>
            break;
        default:
            element = <input className="form-control" {...props}/>;
    }

    return (
        <div className="form-group">
            <div className="form-label-group">
                <label>{props.label}</label>
                { element }
            </div>
        </div>
    );
}

export default input;