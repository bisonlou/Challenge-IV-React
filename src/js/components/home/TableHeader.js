import React from 'react'
import '../../../css/style.css';

const TableHeader = (props) => {
    return (
        <label className={props.class}>
            {props.title}
            <button type="submit" className="button-add" onClick={props.onClick}></button>
        </label>

    );
}

export default TableHeader;

