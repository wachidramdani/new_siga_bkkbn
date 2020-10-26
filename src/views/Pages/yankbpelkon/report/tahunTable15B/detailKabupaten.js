import React, { Component } from 'react';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
// import { Link } from 'react-router-dom';
import { POSITION } from '../../../../Constants/Position';
import 'jspdf-autotable';
import queryString from 'query-string';
import CommonReport from '../CommonReportCustomFooter15A';

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
        let url = this.props.location.search;
        let params = queryString.parse(url);
        
        return (
            
            <CommonReport 
            datas =  {
                [
                    { id: 1, kode: 11,nama:"Poskendes",alamat:"Jalan TR.Angkasah",kelurahan:"Bakongan",provinsi: 'Bakongan',dt1:23,dt2:58,dt3:49,dt4:32,dt5:98,dt6:12,dt7:39,dt8:88,dt9:37,dt10:29,dt11:44,dt12:213,dt13:40,dt14:20,dt15:39,dt16:16},
                    { id: 2, kode: 12,nama:"Pusekesmas Bakongan",alamat:"-",kelurahan:"Ujung Padang",provinsi: 'Kluet Utara',dt1:23,dt2:58,dt3:49,dt4:32,dt5:98,dt6:12,dt7:39,dt8:88,dt9:37,dt10:29,dt11:44,dt12:213,dt13:40,dt14:20,dt15:39,dt16:16}
                ]
            }
            title = {"Tempat Pelayanan KB Berdasarkan Jenis Di Wilayah Daerah Terpencil, Perbatasan, Dan Kepulauan"}
            namaLaporan = {`Tempat Pelayanan KB Berdasarkan Jenis Di Wilayah Daerah Terpencil, Perbatasan, Dan Kepulauan di ${params.kabupaten}`}
            marginLeft = {200}
            fontSize = {7}
            header = {
                [
                    [
                        { content: 'Kode',rowSpan:2, styles: { halign: 'center' } },
                        { content: 'Nama',rowSpan:2, styles: { halign: 'center' } },
                        { content: 'Alamat',rowSpan:2, styles: { halign: 'center' } },
                        { content: 'Kelurahan',rowSpan:2, styles: { halign: 'center' } },
                        { content: 'FKRTL Berdasarkan Jenis',colSpan:4, styles: { halign: 'center' } },
                        { content: 'FKTP Berdasrakan Jenis',colSpan:5, styles: { halign: 'center' } },
                        { content: 'Jaringan Berdasarkan Jenis',colSpan:4, styles: { halign: 'center' } },
                        { content: 'Jaringan',styles: { halign: 'center' } },
                    ],[
                        { content: 'Jumlah FKRTL',styles: { halign: 'center' } },
                        { content: 'Klink Utama',styles: { halign: 'center' } },
                        { content: 'RS Umum',styles: { halign: 'center' } },
                        { content: 'Rs Khusus',styles: { halign: 'center' } },
                        { content: 'Jumlah FKTP',styles: { halign: 'center' } },
                        { content: 'Puskesmas',styles: { halign: 'center' } },
                        { content: 'Praktek Dokter',styles: { halign: 'center' } },
                        { content: 'Klinik Pratama',styles: { halign: 'center' } },
                        { content: 'Rs Tipe D Pratama',styles: { halign: 'center' } },
                        { content: 'Jumlah Jaringan',styles: { halign: 'center' } },
                        { content: 'Pustu',styles: { halign: 'center' } },
                        { content: 'Pusling',styles: { halign: 'center' } },
                        { content: 'Poskendes / Polindes',styles: { halign: 'center' } },
                        { content: 'Praktik Bidan',styles: { halign: 'center' } },
                    ]
                ]
            }
            column = {
                [
                    { width:"50",dataField:'kode', title: "Kode", row: '0', rowSpan: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.LEFT },
                    { width:"150",dataField:'nama', title: "Nama", row: '0', rowSpan: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.LEFT },
                    { width:"150",dataField:'alamat', title: "Alamat", row: '0', rowSpan: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.LEFT },
                    { width:"100",dataField:'kelurahan', title: "Kelurahan", row: '0', rowSpan: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.LEFT },
                    { width:"100",title: "FKRTL Berdasarkan Jenis", row: '0', colSpan: '4', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt1", title: "Jumlah FKRTL", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt2", title: "Klinik Utama", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt3", title: "RS Umum", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt4", title: "RS Khusus", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",title: "FKRTP Berdasarkan Jenis", row: 0, colSpan: '5', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt5", title: "Jumlah FKTP", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt6", title: "Puskesmas", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt7", title: "Praktek Dokter", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt8", title: "Klinik Pratama", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt9", title: "RS Tipe D PRatama", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",title: "Jaringan Berdasarkan Jenis", row: 0, colSpan: '4', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt10", title: "Jumlah Jaringan", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt11", title: "Pustu", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt12", title: "Pusling", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt13", title: "Poskendes / Polindes", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",title: "Jejaring", row: 0, headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt14",title: "Praktik Bidan", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
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