import React, { Component } from 'react';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { Link } from 'react-router-dom';
import { POSITION } from '../../../../Constants/Position';
import 'jspdf-autotable';
import queryString from 'query-string';
import CommonReport from '../CommonReport';

class Provinsi extends Component {	
    
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this); // i think you are missing this
    }
    CellFormatter(cell, row) {
        return (<div><Link to={`/table9A/kabupaten?kabupaten=${row.provinsi}`}>{row.provinsi}</Link></div>);
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
                    { id: 1, kode: 11,provinsi: 'ACEH SELATAN',dt1:23,dt2:58,dt3:49,dt4:32,dt5:98,dt6:12,dt7:39,dt8:88,dt9:37,dt10:29,dt11:44,dt12:213,dt13:40,dt14:20,dt15:39,dt16:16},
                    { id: 2, kode: 12,provinsi: 'ACEH UTARA',dt1:23,dt2:58,dt3:49,dt4:32,dt5:98,dt6:12,dt7:39,dt8:88,dt9:37,dt10:29,dt11:44,dt12:213,dt13:40,dt14:20,dt15:39,dt16:16}
                ]
            }
            title = {"Sarana Perlengkapan Yang Bisa Dipakai Pada Tempat Pelayanan KB"}
            namaLaporan = {`Sarana Perlengkapan Yang Bisa Dipakai Pada Tempat Pelayanan KB di ${params.provinsi}`}
            marginLeft = {260}
            fontSize = {8}
            header = {
                [
                    [
                        { content: 'Kode',rowSpan:2, styles: { halign: 'center' } },
                        { content: 'Kabupaten',rowSpan:2, styles: { halign: 'center' } },
                        { content: 'Jumlah Sarana Dan Perlengkapan Yang Bisa Dipakai Pada Tempat Pelayanan KB',colSpan:14, styles: { halign: 'center' } },
                    ],[
                        { content: 'Alat Bantu  Pengambilan  Keputusan  (APBK)', styles: { halign: 'center' } },
                        { content: 'Buku  Panduan  Praktis  Pelayanan  Kontrasepsi  (BP3K)', styles: { halign: 'center' } },
                        { content: 'Tensimeter',styles: { halign: 'center' } },
                        { content: 'Meja Ginekologi', styles: { halign: 'center' } },
                        { content: 'IUD KIT', styles: { halign: 'center' } },
                        { content: 'Implant  Removal  Kit', styles: { halign: 'center' } },
                        { content: 'Vastekomi  Kit',styles: { halign: 'center' } },
                        { content: 'Laparoskopi', styles: { halign: 'center' } },
                        { content: 'Ruang  Operasi', styles: { halign: 'center' } },
                        { content: 'Sterilisator', styles: { halign: 'center' } },
                        { content: 'Lampu Periksa  (Eximination Link)', styles: { halign: 'center' } },
                        { content: 'Ruang  Konseling  KB Dan  Kesehatan Reproduksi', styles: { halign: 'center' } },
                        { content: 'Materi  Kesehatan  Reproduksi', styles: { halign: 'center' } },
                        { content: 'Sarana Komputer / Laptop', styles: { halign: 'center' } },
                    ]
                ]
            }
            column = {
                [
                    { width:"50",dataField:'kode', title: "Kode", row: '0', rowSpan: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"150",dataFormat: this.CellFormatter,dataField:'provinsi',title: "Kabupaten", row: '0', rowSpan: '2', headerAlign: POSITION.CENTER, dataAlign: POSITION.LEFT },
                    { width:"100",title: "Jumlah Sarana Dan Perlengkapan Yang Bisa Dipakai Pada Tempat Pelayanan KB", row: '0',colSpan:'14', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt1",title: "Alat Bantu  Pengambilan  Keputusan  (APBK)", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt2",title: "Buku  Panduan  Praktis  Pelayanan  Kontrasepsi  (BP3K)", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt3",title: "Tensimeter", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt4",title: "Meja Ginekologi", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt5",title: "IUD KIT", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt6",title: "Implant  Removal  Kit", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt7",title: "Vastekomi  Kit", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt8",title: "Minilaparotomi  Kit", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt9",title: "Laparoskopi", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt10",title: "Ruang  Operasi", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt11",title: "Lampu Periksa  (Eximination Link)", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt12",title: "Ruang  Konseling  KB Dan  Kesehatan Reproduksi", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt13",title: "Materi  Kesehatan  Reproduksi", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                    { width:"100",dataField: "dt3",title: "Sarana Komputer / Laptop", row: '1', headerAlign: POSITION.CENTER, dataAlign: POSITION.RIGHT },
                ]
            }
            back = {
                <button className="btn btn-primary" onClick={this.goBack}>Kembali</button>
            }
            />
        );
	}
}

export default Provinsi;