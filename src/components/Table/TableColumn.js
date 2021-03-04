import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'
const TableColumn= (props) => {
    let { label } = props;
    label = `${label.charAt(0).toUpperCase()}${label.slice(1)}`;
    return(
        <React.Fragment>
            <div className="col">
                {
                    label === 'Available' &&
                    <FontAwesomeIcon icon={faCircle} color={'green'} />

                }
                &nbsp;
                {label}
            </div>
        </React.Fragment>

    )
};

export default TableColumn;