import React, { Component } from 'react';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { Link } from 'react-router-dom';
import { POSITION } from '../../../../Constants/Position';
import 'jspdf-autotable';
// import queryString from 'query-string';
import CommonReport from '../CommonReport';

class Kabupaten extends Component {	
    
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this); // i think you are missing this
    }
    CellFormatter(cell, row) {
        return (<div><Link to={`/table3Dallap/detailKabupaten?kabupaten=${row.provinsi}`}>{row.provinsi}</Link></div>);
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
                    { id: 1, kode: 11,provinsi: 'BAKONGAN',dt1:23,dt2:58,dt3:49,dt4:32,dt5:98,dt6:12,dt7:39,dt8:88,dt9:37,dt10:29,dt11:44,dt12:213,dt13:40,dt14:20,dt15:39,dt16:16,dt17:95,dt18:344,dt19:49,dt20:77},
                    { id: 2, kode: 12,provinsi: 'KLUET UTARA',dt1:23,dt2:58,dt3:49,dt4:32,dt5:98,dt6:12,dt7:39,dt8:88,dt9:37,dt10:29,dt11:44,dt12:213,dt13:40,dt14:20,dt15:39,dt16:16,dt17:95,dt18:344,dt19:49,dt20:77}
                ]
            }
            excelData = {
                elt => [elt.kode, elt.provinsi,elt.dt1,elt.dt2,elt.dt3,elt.dt4,elt.dt5,elt.dt6,elt.dt7,elt.dt8,elt.dt9,elt.dt10,elt.dt11,elt.dt12,elt.dt13,elt.dt14,elt.dt15,elt.dt16,elt.dt17,elt.dt18,elt.dt19,elt.dt20]
            }
            title = {"Pembantu Pembina Keluarga Berencana Desa (Ppkbd)"}
            namaLaporan = {`Pembantu Pembina Keluarga Berencana Desa (Ppkbd)`}
            marginLeft = {300}
            header = {
                [
                    [
                        { content: 'Kode',rowSpan:2, styles: { halign: 'center' } },
                        { content: 'Kecamatan',rowSpan:2, styles: { halign: 'center' } },
                        { content: 'Jumlah PPKBD',colSpan:3, styles: { halign: 'center' } },
                        { content: 'PPKBD Berdasarkan Kepemilikan SK Pengukuhan',colSpan:2, styles: { halign: 'center' } },
                        { content: 'PPKBD Berdasarkan Sumber Dana Kegiatan Operasional',colSpan:5, styles: { halign: 'center' } },
                        { content: 'Jumlah Media Pendukung Yang Dimiliki PPKBD',colSpan:4, styles: { halign: 'center' } },
                    ],[
                        { content: 'Dasar', styles: { halign: 'center' } },
                        { content: 'Berkembang', styles: { halign: 'center' } },
                        { content: 'Mandiri', styles: { halign: 'center' } },
                        { content: 'Ada', styles: { halign: 'center' } },
                        { content: 'Tidak', styles: { halign: 'center' } },
                        { content: 'APBN', styles: { halign: 'center' } },
                        { content: 'APBD', styles: { halign: 'center' } },
                        { content: 'ADD', styles: { halign: 'center' } },
                        { content: 'Swadaya', styles: { halign: 'center' } },
                        { content: 'Mitra', styles: { halign: 'center' } },
                        { content: 'Materi KIE', styles: { halign: 'center' } },
                        { content: 'Buku Saku', styles: { halign: 'center' } },
                        { content: 'Alata Peraga', styles: { halign: 'center' } },
                        { content: 'Lainnya', styles: { halign: 'center' } },
                    ]
                ]
            }
            column = {
                [
                    { width:"50",dataField:'kode', title: "Kode", row: '0', rowSpan: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"150",dataFormat: this.CellFormatter,dataField:'provinsi',title: "Kecamatan", row: '0', rowSpan: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.LEFT },
                    { width:"100", dataField:'dt1',title: "Jumlah PPKBD", row: '0', rowSpan: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", title: "PPKBD Berdasarkan Klasifikasi", row: '0', colSpan: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", title: "PPKBD Berdasarkan Kepemilikan SK Pengukuhan", row: '0', colSpan: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", title: "PPKBD Berdasarkan Sumber Dana Kegiatan Operasional", row: '0', colSpan: '5', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", title: "Jumlah Media Pendukung Yang Dimiliki PPKBD", row: '0', colSpan: '4', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", dataField:'dt2',title: "Dasar", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", dataField:'dt3',title: "Berkembang", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"110", dataField:'dt4',title: "Mandiri", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", dataField:'dt5',title: "Ada", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", dataField:'dt6',title: "Tidak", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", dataField:'dt7',title: "APBN", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", dataField:'dt8',title: "APBD", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", dataField:'dt9',title: "ADD", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", dataField:'dt10',title: "Swadaya", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", dataField:'dt11',title: "Mitra", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", dataField:'dt12',title: "Materi KIE", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", dataField:'dt13',title: "Buku Saku Motor", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", dataField:'dt14',title: "Alat Peraga", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", dataField:'dt15',title: "Lainnya", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
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

export default Kabupaten;