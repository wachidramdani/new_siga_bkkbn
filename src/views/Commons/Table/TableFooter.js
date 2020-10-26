import React from 'react';
//------react-bootstrap-table---------------
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Button } from 'reactstrap';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { tableEditOptions } from './TableEditOptions';
// import { number } from 'prop-types';

const TableFooter = (props) => {

    const cellEditProp = {
        mode: 'click'
    };

    // function customNumber(cell, row, param) {
    //     switch (param) {
    //         case 'action':
    //             return <div>
    //                 <Button className="btn-stack-overflow btn-brand btn-sm icon" onClick={() => this.handleClickAction(row, 'lihat')}>
    //                     <i className="icon-search4"> </i>
    //                 </Button>
    //             </div>
    //             break;
    //         case 'nomor':
    //             const rowNumber = new Number(cell);
    //             var rowIndex = rowNumber + 1;

    //             if (rowIndex < 0) {
    //                 rowIndex = 1 + rowIndex; 
    //             }
    //             return rowIndex;
    //             break;
    //         default:
    //             return cell;
    //             break;
    //     }
    // }

    function customFormatter(cell, row, param) {
        switch (param) {
            case 'action':
                return <div>
                    <Button className="btn-google-plus btn-brand icon btn-sm" onClick={(e) => props.handleActionTable(e, row)}>
                        <i className="icon-cancel-circle2"></i>
                    </Button>
                </div>
                // break;
            case 'date':
                const today = new Date(cell)
                var dd = today.getDate();

                var mm = today.getMonth() + 1;
                var yyyy = today.getFullYear();
                if (dd < 10) {
                    dd = '0' + dd;
                }

                if (mm < 10) {
                    mm = '0' + mm;
                }
                return dd + ' - ' + mm + ' - ' + yyyy;
                // break;
            default:
                return cell;
                // break;
        }

    }

    // function gantiApbn(cell, param) {
    //     if (param === 'apbn') {

    //     }
    // }

    return (
        <div>
            <BootstrapTable data={props.datas} striped hover version='4'
                width='1260px'
                cellEdit={cellEditProp}
                search={false}
                options={tableEditOptions}
                keyField='id'
                wrapperClass='class-responsive'
                footerData={props.footerData}
                footer
            >
                {
                    props.tableHead.map((column, index) => {
                        return <TableHeaderColumn
                            row={column.row}
                            rowSpan={column.rowSpan}
                            colSpan={column.colSpan}
                            width={column.width}
                            key={column.dataField}
                            dataField={column.dataField}
                            headerAlign={column.headerAlign}
                            dataAlign={column.dataAlign}
                            dataSort={column.dataSort}
                            tdStyle={column.tdStyle}
                            dataFormat={(cell, row) => customFormatter(cell, row, column.dataFormat)}
                            // dataNumber={(cell, row) => customNumber(cell, row, column.dataNumber)}
                            editable={false}
                            thStyle={{ whiteSpace: 'normal' }}
                        >
                            {column.title}
                        </TableHeaderColumn>
                    })
                }
            </BootstrapTable>
        </div>
    )
}

export default TableFooter