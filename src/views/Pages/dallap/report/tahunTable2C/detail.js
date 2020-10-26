import React, { Component } from 'react';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { Link } from 'react-router-dom';
import { POSITION } from '../../../../Constants/Position';
import 'jspdf-autotable';
// import queryString from 'query-string';
import CommonReport from '../CommonReport';

class Detail extends Component {

    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this); // i think you are missing this
    }
    CellFormatter(cell, row) {
        return (<div><Link to={`/table2CDallap/provinsi?provinsi=${row.provinsi}`}>{row.provinsi}</Link></div>);
    }

    goBack(){
        this.props.history.goBack();
    }

    render() {
        // let url = this.props.location.search;
        // let params = queryString.parse(url);

        return (

            <CommonReport
            datas =  {
                [
                    { id: 1, kode: 11,provinsi: 'ACEH',dt1:23,dt2:58,dt3:49,dt4:32,dt5:98,dt6:12,dt7:39,dt8:88,dt9:37,dt10:29,dt11:44,dt12:213,dt13:40,dt14:20,dt15:39,dt16:16,dt17:95,dt18:344,dt19:49,dt20:77},
                    { id: 2, kode: 12,provinsi: 'SUMATERA UTARA',dt1:23,dt2:58,dt3:49,dt4:32,dt5:98,dt6:12,dt7:39,dt8:88,dt9:37,dt10:29,dt11:44,dt12:213,dt13:40,dt14:20,dt15:39,dt16:16,dt17:95,dt18:344,dt19:49,dt20:77}
                ]
            }
            excelData = {
                elt => [elt.kode, elt.provinsi,elt.dt1,elt.dt2,elt.dt3,elt.dt4,elt.dt5,elt.dt6,elt.dt7,elt.dt8,elt.dt9,elt.dt10,elt.dt11,elt.dt12,elt.dt13,elt.dt14,elt.dt15,elt.dt16,elt.dt17,elt.dt18,elt.dt19,elt.dt20]
            }
            title = {"Petugas Lapangan KKBPK (PLKB)"}
            namaLaporan = {`Petugas Lapangan KKBPK (PLKB)`}
            marginLeft = {400}
            fontSize = {8}
            header = {
                [
                    [
                        { content: 'Kode',rowSpan:2, styles: { halign: 'center' } },
                        { content: 'Provinsi',rowSpan:2, styles: { halign: 'center' } },
                        { content: 'Jumlah PKB',rowSpan:2, styles: { halign: 'center' } },
                        { content: 'PKB Berdasarkan Jenis Kelamin',colSpan:2, styles: { halign: 'center' } },
                        { content: 'PKB Berdasarkan Kelompok Umur',colSpan:4, styles: { halign: 'center' } },
                        { content: 'PKB Berdasarkan Jabatan',colSpan:7, styles: { halign: 'center' } },
                        { content: 'PKB Berdasarkan Pendidikan Terakhir',colSpan:6, styles: { halign: 'center' } },
                    ],[
                        { content: 'Laki-Laki', styles: { halign: 'center' } },
                        { content: 'Perempuan', styles: { halign: 'center' } },
                        { content: '<25-35', styles: { halign: 'center' } },
                        { content: '36-45', styles: { halign: 'center' } },
                        { content: '46-55', styles: { halign: 'center' } },
                        { content: '56-60', styles: { halign: 'center' } },
                        { content: 'Pelaksana Pemuda', styles: { halign: 'center' } },
                        { content: 'Pelaksana', styles: { halign: 'center' } },
                        { content: 'Pelaksana Lanjutan', styles: { halign: 'center' } },
                        { content: 'Penyella', styles: { halign: 'center' } },
                        { content: 'Peratama', styles: { halign: 'center' } },
                        { content: 'Muda', styles: { halign: 'center' } },
                        { content: 'Madya', styles: { halign: 'center' } },
                        { content: 'SMA', styles: { halign: 'center' } },
                        { content: 'D1', styles: { halign: 'center' } },
                        { content: 'D2', styles: { halign: 'center' } },
                        { content: 'D3', styles: { halign: 'center' } },
                        { content: 'S1', styles: { halign: 'center' } },
                        { content: 'S2', styles: { halign: 'center' } },
                    ]
                ]
            }
            column = {
                [
                    { width:"50",dataField:'kode', title: "Kode", row: '0', rowSpan: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"150",dataFormat: this.CellFormatter,dataField:'provinsi',title: "Provinsi", row: '0', rowSpan: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.LEFT },
                    { width:"100",dataField: "dt1", title: "Jumlah PKB", row: '0', rowSpan: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", title: "PKB Berdasarkan Jenis Kelamin", row: '0',colSpan:2, headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", title: "PKB Berdasarkan Kelompok Umur", row: '0',colSpan:4, headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", title: "PKB Berdasarkan Jabatan", row: '0',colSpan:7, headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", title: "PKB Berdasarkan Pendidikan Terakhir", row: '0',colSpan:6, headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt2", title: "Laki-Laki", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt3", title: "Perempuan", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt4", title: "<25-35", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt5", title: "36-45", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt6", title: "46-55", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt7", title: "56-60", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt8", title: "Pelaksana Pemuda", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt9", title: "Pelaksana", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt10", title: "Pelaksana Lanjutan", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt11", title: "Penyela", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt12", title: "Pertama", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt13", title: "Muda", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt14", title: "Madya", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt15", title: "SMA", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt16", title: "D1", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt17", title: "D2", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt18", title: "D3", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt19", title: "S1", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt20", title: "S2", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                ]
            }
            footerData = {
                [
                    {
                    columnIndex: 1,
                    align: 'right',
                        formatter: (tableData) => {
                            return (
                                <strong>Jumlah : </strong> 
                            );
                        }
                    },
                    {
                        columnIndex: 2,
                        align: 'right',
                            formatter: (tableData) => {
                                let label = 0;
                                for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                                label += tableData[i].dt1;
                                }
                                return (
                                    <strong> {label} </strong> 
                                );
                            }
                    },{
                        columnIndex: 3,
                        align: 'right',
                            formatter: (tableData) => {
                                let label = 0;
                                for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                                label += tableData[i].dt2;
                                }
                                return (
                                    <strong> {label} </strong> 
                                );
                            }
                    },{
                        columnIndex: 4,
                        align: 'right',
                            formatter: (tableData) => {
                                let label = 0;
                                for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                                label += tableData[i].dt3;
                                }
                                return (
                                    <strong> {label} </strong> 
                                );
                            }
                    },{
                        columnIndex: 5,
                        align: 'right',
                            formatter: (tableData) => {
                                let label = 0;
                                for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                                label += tableData[i].dt4;
                                }
                                return (
                                    <strong> {label} </strong> 
                                );
                            }
                    },{
                        columnIndex: 6,
                        align: 'right',
                            formatter: (tableData) => {
                                let label = 0;
                                for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                                label += tableData[i].dt5;
                                }
                                return (
                                    <strong> {label} </strong> 
                                );
                            }
                    },{
                        columnIndex: 7,
                        align: 'right',
                            formatter: (tableData) => {
                                let label = 0;
                                for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                                label += tableData[i].dt6;
                                }
                                return (
                                    <strong> {label} </strong> 
                                );
                            }
                    }
                    ,{
                        columnIndex: 8,
                        align: 'right',
                            formatter: (tableData) => {
                                let label = 0;
                                for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                                label += tableData[i].dt7;
                                }
                                return (
                                    <strong> {label} </strong> 
                                );
                            }
                    },{
                        columnIndex: 9,
                        align: 'right',
                            formatter: (tableData) => {
                                let label = 0;
                                for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                                label += tableData[i].dt8;
                                }
                                return (
                                    <strong> {label} </strong> 
                                );
                            }
                    }
                    ,{
                        columnIndex: 10,
                        align: 'right',
                            formatter: (tableData) => {
                                let label = 0;
                                for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                                label += tableData[i].dt9;
                                }
                                return (
                                    <strong> {label} </strong> 
                                );
                            }
                    },
                    {
                        columnIndex: 11,
                        align: 'right',
                            formatter: (tableData) => {
                                let label = 0;
                                for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                                label += tableData[i].dt10;
                                }
                                return (
                                    <strong> {label} </strong> 
                                );
                            }
                    },
                    {
                        columnIndex: 12,
                        align: 'right',
                            formatter: (tableData) => {
                                let label = 0;
                                for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                                label += tableData[i].dt11;
                                }
                                return (
                                    <strong> {label} </strong> 
                                );
                            }
                    },{
                        columnIndex: 13,
                        align: 'right',
                            formatter: (tableData) => {
                                let label = 0;
                                for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                                label += tableData[i].dt12;
                                }
                                return (
                                    <strong> {label} </strong> 
                                );
                            }
                    },{
                        columnIndex: 14,
                        align: 'right',
                            formatter: (tableData) => {
                                let label = 0;
                                for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                                label += tableData[i].dt13;
                                }
                                return (
                                    <strong> {label} </strong> 
                                );
                            }
                    },{
                        columnIndex: 15,
                        align: 'right',
                            formatter: (tableData) => {
                                let label = 0;
                                for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                                label += tableData[i].dt14;
                                }
                                return (
                                    <strong> {label} </strong> 
                                );
                            }
                    },{
                        columnIndex: 16,
                        align: 'right',
                            formatter: (tableData) => {
                                let label = 0;
                                for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                                label += tableData[i].dt15;
                                }
                                return (
                                    <strong> {label} </strong> 
                                );
                            }
                    },{
                        columnIndex: 17,
                        align: 'right',
                            formatter: (tableData) => {
                                let label = 0;
                                for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                                label += tableData[i].dt16;
                                }
                                return (
                                    <strong> {label} </strong> 
                                );
                            }
                    },{
                        columnIndex: 18,
                        align: 'right',
                            formatter: (tableData) => {
                                let label = 0;
                                for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                                label += tableData[i].dt17;
                                }
                                return (
                                    <strong> {label} </strong> 
                                );
                            }
                    },{
                        columnIndex: 19,
                        align: 'right',
                            formatter: (tableData) => {
                                let label = 0;
                                for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                                label += tableData[i].dt18;
                                }
                                return (
                                    <strong> {label} </strong> 
                                );
                            }
                    },{
                        columnIndex: 20,
                        align: 'right',
                            formatter: (tableData) => {
                                let label = 0;
                                for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                                label += tableData[i].dt19;
                                }
                                return (
                                    <strong> {label} </strong> 
                                );
                            }
                    },{
                        columnIndex: 21,
                        align: 'right',
                            formatter: (tableData) => {
                                let label = 0;
                                for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                                label += tableData[i].dt20;
                                }
                                return (
                                    <strong> {label} </strong> 
                                );
                            }
                    }
                ]
            }
            back = {
                <button className="btn btn-primary" onClick={this.goBack}>Kembali</button>
            }
            />
        );
	}
}

export default Detail;
