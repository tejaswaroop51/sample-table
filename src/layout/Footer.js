import React from 'react';

const Footer = () => {
    return(
        <div>
            <h2>Requirements</h2>
            <ul>
                <li>
                    Only those that have a status of "available" are currently able to be downloaded. Your implementation should manage this.
                </li>
                <li>
                    The select-all checkbox should be in an unselected state if no items are selected.
                </li>
                <li>
                    The select-all checkbox should be in a selected state if all items are selected.
                </li>
                <li>
                    The select-all checkbox should be in an indeterminate state if some but not all items are selected.
                </li>
                <li>
                    The "Selected 2" text should reflect the count of selected items and display "None Selected" when there are none selected.
                </li>
                <li>
                    Clicking the select-all checkbox should select all items if none or some are selected.
                </li>
                <li>
                    Clicking the select-all checkbox should de-select all items if all are currently selected.
                </li>
                <li>
                    Status should be correctly formatted
                </li>
                <li>
                    Clicking "Download Selected" when some or all items are displayed should generate an alert box with the path and device of all selected files.
                </li>
                <li>
                    Precise/exact HTML formatting/styling to match the mockup is not required however rows should change colour when selected and on hover.
                </li>
            </ul>
        </div>
    )
};

export default Footer;