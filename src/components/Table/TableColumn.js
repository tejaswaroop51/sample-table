import React from 'react';

const TableColumn= (props) => {
    const { label } = props;
    return(
        <React.Fragment>
            <div className="col">{label}</div>
        </React.Fragment>

    )
};

export default TableColumn;