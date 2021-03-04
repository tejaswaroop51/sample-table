import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faDownload } from '@fortawesome/free-solid-svg-icons'
import TableRow from "./TableRow";
import TableColumn from './TableColumn';
import './index.css';

const Table = (props) => {
    const { loading, data } = props;
    const [selectedInfo, setSelectedInfo] = useState({});
    if (loading) {
        return (
            <div className="table-information">
                <div className="loader">
                    <FontAwesomeIcon icon={faSpinner} />
                </div>
            </div>
        )
    }
    const selectInfo = (e, info) => {
        const keys = Object.keys(info);
        const selectedInformation = { ...selectedInfo };
        if (e.target.checked) {
            selectedInformation[info[keys[0]]] = info;
        } else {
            delete selectedInformation[info[keys[0]]];
        }
        if (data.length !== Object.keys(selectedInformation).length) {
            document.getElementById('selectAll').indeterminate = true;
            document.getElementById('selectAll').checked = false;
        } else {
            document.getElementById('selectAll').checked = true;
            document.getElementById('selectAll').indeterminate = false;
        }
        setSelectedInfo(selectedInformation);

    }
    const selectAll = (e) => {
        const selectedInformation = {};
        if (e.target.checked) {
            data.forEach((info, i) => {
                const keys = Object.keys(info);
                selectedInformation[info[keys[0]]] = info;
            })
            setSelectedInfo(selectedInformation);
        } else {
            setSelectedInfo(selectedInformation);
        }
    }
    const information = [];
    data.forEach((info, i) => {
        const keys = Object.keys(info);
        information.push(
            <TableRow
                columns={info}
                selectInfo={selectInfo}
                selectedInfo={selectedInfo[info[keys[0]]]}
                key={i}
            />
        )
    })
    const keys = Object.keys(data[0]);
    const tableHeaders = [
        <TableColumn
            label={''}
            key={-1}
        />
    ];
    keys.forEach((key, i) => {
        tableHeaders.push(
            <TableColumn
                label={key}
                key={i}
            />
        );
    })
    let selectedInformation = 'None Selected';
    if (Object.keys(selectedInfo).length) {
        selectedInformation = `${Object.keys(selectedInfo).length} Selected`;
    }
    return(
        <div className="table-information" key={-1}>
            <div className="row">
                <div className="col">
                    <input
                        type="checkbox"
                        name="selectAll"
                        id="selectAll"
                        onClick={(e) =>  selectAll(e)}
                    />
                </div>
                <div className="col">{selectedInformation}</div>
                <div className="col">
                    <FontAwesomeIcon icon={faDownload} />
                    &nbsp;
                    <span>Download Selected</span>

                </div>
                <div className="col">&nbsp;</div>
                <div className="col">&nbsp;</div>
            </div>
            <div className="row-heading" key={'header'}>
                {tableHeaders}
            </div>
            {information}
        </div>
    )
};

export default Table;