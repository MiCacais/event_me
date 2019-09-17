import React from 'react';
import Datepicker from '../../containers/datepicker/Datepicker';

const input = (props) => {
    let element = null;

    switch (props.type) {
        case ('input'):
            element = <input className="form-control" {...props}/>;
            break;
        case ('textarea'):
            element = <textarea className="form-control" {...props}/>
            break;
        case ('datepicker'):
            element = <Datepicker />
            break;
        default:
            element = <input className="form-control" {...props}/>;
    }

    return (
        <div className="form-group">
            <div className="form-label-group">
                <label className="mr-2">{props.label}</label>
                { element }
            </div>
        </div>
    );
}

export default input;