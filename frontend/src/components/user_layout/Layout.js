import React from 'react';

const layout = ( props ) => (
    <div>
        <div className="banner">
        </div>
        <main className="Content">
            {props.children}
        </main>
    </div>
);

export default layout;