import React, { Component } from 'react';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
// import { Link } from 'react-router-dom';
import { POSITION } from '../../../../Constants/Position';
import 'jspdf-autotable';
// import queryString from 'query-string';
import CommonReport from '../CommonReport';

class DetailKabupaten extends Component {	
    
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this); // i think you are missing this
    }
    CellFormatter(cell, row) {
        return (<div>{row.provinsi}</div>);
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
                    { id: 1, kode: 11,nama: 'Dewi Yulisna,amd.Keb',alamat: 'Jln.Padang Beurahan',kelurahan: 'Ladang Thua',dt1:1,dt2:'',dt3:'',dt4:'',dt5:1,dt6:1,dt7:'',dt8:'',dt9:'',dt10:'',dt11:'',dt12:1,dt13:'',dt14:'',dt15:1,dt16:'',dt17:'',dt18:'',dt19:'',dt20:''},
                    { id: 2, kode: 12,nama: 'Ermawati',alamat: 'Jln.Kaye Ujen',kelurahan: 'Kerude Bakongan',dt1:1,dt2:'',dt3:'',dt4:'',dt5:1,dt6:1,dt7:'',dt8:'',dt9:'',dt10:'',dt11:'',dt12:1,dt13:'',dt14:'',dt15:1,dt16:'',dt17:'',dt18:'',dt19:'',dt20:''}
                ]
            }
            excelData = {
                elt => [elt.kode, elt.nama,elt.alamat,elt.kelurahan,elt.dt1,elt.dt2,elt.dt3,elt.dt4,elt.dt5,elt.dt6,elt.dt7,elt.dt8,elt.dt9,elt.dt10,elt.dt11,elt.dt12,elt.dt13,elt.dt14,elt.dt15,elt.dt16,elt.dt17,elt.dt18,elt.dt19,elt.dt20]
            }
            title = {"SUB Pembantu Pembina Keluarga Berencana Desa (SUB Ppkbd)"}
            namaLaporan = {`SUB Pembantu Pembina Keluarga Berencana Desa (SUB Ppkbd)`}
            marginLeft = {300}
            fontSize = {8}
            header = {
                [
                    [
                        { content: 'NO PPKBD',rowSpan:2, styles: { halign: 'center' } },
                        { content: 'Nama PPKBD',rowSpan:2, styles: { halign: 'center' } },
                        { content: 'Alamat Jalan',rowSpan:2, styles: { halign: 'center' } },
                        { content: 'Kelurahan',rowSpan:2, styles: { halign: 'center' } },
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
                    { width:"80",dataField:'kode', title: "NO PPKBD", row: '0', rowSpan: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"150", dataField:'nama',title: "Nama PPKBD", row: '0', rowSpan: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.LEFT },
                    { width:"150", dataField:'alamat',title: "Alamat Jalan", row: '0', rowSpan: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.LEFT },
                    { width:"150", dataField:'kelurahan',title: "Kelurahan", row: '0', rowSpan: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.LEFT },
                    { width:"100", title: "PPKBD Berdasarkan Klasifikasi", row: '0', colSpan: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", title: "PPKBD Berdasarkan Kepemilikan SK Pengukuhan", row: '0', colSpan: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", title: "PPKBD Berdasarkan Sumber Dana Kegiatan Operasional", row: '0', colSpan: '5', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", title: "Jumlah Media Pendukung Yang Dimiliki PPKBD", row: '0', colSpan: '4', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", dataField:'dt1',title: "Dasar", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", dataField:'dt2',title: "Berkembang", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"110", dataField:'dt3',title: "Mandiri", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", dataField:'dt4',title: "Ada", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", dataField:'dt5',title: "Tidak", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", dataField:'dt6',title: "APBN", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", dataField:'dt7',title: "APBD", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", dataField:'dt8',title: "ADD", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", dataField:'dt9',title: "Swadaya", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", dataField:'dt10',title: "Mitra", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", dataField:'dt11',title: "Materi KIE", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", dataField:'dt12',title: "Buku Saku Motor", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", dataField:'dt13',title: "Alat Peraga", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100", dataField:'dt14',title: "Lainnya", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                ]
            }
            footerData = {
                [
                    {
                        columnIndex: 3,
                        align: 'right',
                            formatter: (tableData) => {
                                // let label = 0;
                                for (let i = 0, tableDataLen = tableData.length; i < tableDataLen; i++) {
                                // label += tableData[i].dt2;
                                }
                                return (
                                    <strong> Jumlah : </strong> 
                                );
                            }
                    },{
                        columnIndex: 4,
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
                        columnIndex: 5,
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
                        columnIndex: 6,
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
                        columnIndex: 7,
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
                    }
                    ,{
                        columnIndex: 8,
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
                        columnIndex: 9,
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
                        columnIndex: 10,
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
                    },
                    {
                        columnIndex: 11,
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
                    },
                    {
                        columnIndex: 12,
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
                    },{
                        columnIndex: 13,
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
                    },{
                        columnIndex: 14,
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
                        columnIndex: 15,
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
                        columnIndex: 16,
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
                        columnIndex: 17,
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
                        columnIndex: 18,
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
                        columnIndex: 19,
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
                        columnIndex: 20,
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
                        columnIndex: 21,
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
                        columnIndex: 22,
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

export default DetailKabupaten;