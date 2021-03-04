import React from 'react';
import TableColumn from './TableColumn';
const TableRow = (props) => {
    const { columns, selectInfo, selectedInfo, tableIndex } = props;
    const keys = Object.keys(columns);
    let checked = false;
    if (selectedInfo && selectedInfo[keys[0]]) {
        checked = true;
    }
    const tableColumns = [];
    for(let key in columns) {
        if (key === 'name') {
            tableColumns.push(
                <div className="col" key={-1}>
                    <input
                        type="checkbox"
                        name={columns[key]}
                        id={columns[key]}
                        onClick={(e) => selectInfo(e, columns)}
                        onChange={(e) => selectInfo(e, columns)}
                        checked={checked}
                    />
                </div>
            );
        }
        tableColumns.push(
            <TableColumn
                label={columns[key]}
            />
        );
    }
    return(
        <React.Fragment>
            <div className="row" key={tableIndex} style={{backgroundColor: checked ? '#F0F0F0' : "" }}>
                {tableColumns}
            </div>
        </React.Fragment>

    )
};

export default TableRow;