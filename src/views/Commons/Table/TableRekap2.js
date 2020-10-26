import React from 'react';
//------react-bootstrap-table---------------
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { tableEditOptions } from './TableEditOptions';

// function checkBoxFormat (cell,row)
// {
//    return (
//        <div>
//            <input type="checkbox" ref="criticalData" checked={cell} />
//        </div>
//    );
// }
  
const TableRekap2 = (props) => {

    const cellEditProp = {
        mode: 'click',
        blurToSave:    true,
        nonEditableRows: function() {
            return props.datas.filter(p => p.dt1.length === 0).map(p => p.id);
        }
    };
    
    const handleEdit = (key) => {
        let type = {};
        switch (key) {
            case 'none':
                type = false
                break;
            case 'ck':
                type = {type: 'checkbox', options: { values: 'V:-' }}
                break;
            default:
                type = true
                break;
        }
        return type
    }

    return(
        <div>
            <BootstrapTable data={ props.datas } striped hover version='4' 
                width='1260px'
                cellEdit={ cellEditProp }
                search={ false }
                options={ tableEditOptions }
                keyField='id'
                wrapperClass='class-responsive'
                footerData={ props.footerData }
                footer
                >
                    {
                        props.tableHead.map((column, index) => {
                            return <TableHeaderColumn 
                                        row={ column.row }
                                        rowSpan={ column.rowSpan }
                                        colSpan={ column.colSpan }
                                        width={ column.width }
                                        key={ column.dataField } 
                                        dataField={ column.dataField } 
                                        headerAlign={ column.headerAlign } 
                                        dataAlign={ column.dataAlign }
                                        dataSort={ column.dataSort }
                                        tdStyle={ column.tdStyle }
                                        dataFormat={ column.dataFormat } 
                                        editable={ column.customEdit === 'none' ? false : () => handleEdit(column.customEdit) }
                                        thStyle={{ whiteSpace: 'normal' }}
                                    >
                                            { column.title }
                                    </TableHeaderColumn>
                        })
                    }
            </BootstrapTable>
        </div>
    )
}

export default TableRekap2