import React, { Component } from 'react';
// import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
// import { tableOptions } from '../../../Commons/Table/TableOptions';
import { Link } from 'react-router-dom';
import TableEditCell from '../../Commons/Table/TableRekap2';
import { POSITION } from '../../Constants/Position';
import { Card, CardBody, Col, Form, Row, Collapse} from 'reactstrap';
import 'jspdf-autotable';
import Table2Edit from '../../Commons/Table/TableRekap';


class RekapitulasiDataKeluarga extends Component {	
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleFade = this.toggleFade.bind(this);
        this.CellFormatter = this.CellFormatter.bind(this);

        this.state = {
            collapse: true,
            fadeIn: true,
            timeout: 300,
            tableHead: [],
            datas: [
                { id: 1, dt1: '1', dt2: 'AMAR', dt3: 'KK', dt4: '01/01/1985', dt5: '35', dt6: '2',dt7: 'V',dt8: 'V',dt9:'V', dt10:'Y',dt11:'-',dt12:'-', dt13:'-', dt14:'-', dt15:'-', dt16:'-', dt17:'-', dt18:'-', dt19:'-', dt20:'-' },

                { id: 2, dt1: '', dt2: 'YULI', dt3: 'ISTRI', dt4: '01/01/1985', dt5: '33', dt6: '', dt7: '',dt8: '',dt9:'', dt10:'',dt11:'',dt12:'', dt13:'', dt14:'', dt15:'', dt16:'', dt17:'', dt18:'', dt19:'', dt20:'' },

                { id: 3, dt1: '', dt2: 'ZHAFRAN', dt3: 'ANAK', dt4: '01/01/1985', dt5: '12', dt6: '', dt7: '',dt8: '',dt9:'', dt10:'',dt11:'',dt12:'', dt13:'', dt14:'', dt15:'', dt16:'', dt17:'', dt18:'', dt19:'', dt20:'' },

                { id: 4, dt1: '', dt2: 'DAFFA', dt3: 'ANAK', dt4: '01/01/1985', dt5: '2', dt6: '', dt7: '',dt8: '',dt9:'', dt10:'',dt11:'',dt12:'', dt13:'', dt14:'', dt15:'', dt16:'', dt17:'', dt18:'', dt19:'', dt20:'' },

                { id: 5, dt1: '2', dt2: 'ZULKIPLI', dt3: 'KK', dt4: '01/01/1985', dt5: '33', dt6: '0',dt7: '',dt8: 'V',dt9:'V', dt10:'Y',dt11:'-',dt12:'-', dt13:'-', dt14:'-', dt15:'-', dt16:'-', dt17:'-', dt18:'-', dt19:'-', dt20:'-' },

                { id: 6, dt1: '', dt2: 'YULI', dt3: 'ISTRI', dt4: '01/01/1985', dt5: '33', dt6: '', dt7: '',dt8: '',dt9:'', dt10:'',dt11:'',dt12:'', dt13:'', dt14:'', dt15:'', dt16:'', dt17:'', dt18:'', dt19:'', dt20:'' },

                { id: 7, dt1: '3', dt2: 'ARDI', dt3: 'KK', dt4: '01/01/1985', dt5: '33', dt6: '0',dt7: 'V',dt8: 'V',dt9:'V', dt10:'KOMDOM',dt11:'S',dt12:'-', dt13:'-', dt14:'-', dt15:'-', dt16:'-', dt17:'-', dt18:'-', dt19:'-', dt20:'-' },

                { id: 8, dt1: '', dt2: 'IRA', dt3: 'ISTRI', dt4: '01/01/1985', dt5: '33', dt6: '', dt7: '',dt8: '',dt9:'', dt10:'',dt11:'',dt12:'', dt13:'', dt14:'', dt15:'', dt16:'', dt17:'', dt18:'', dt19:'', dt20:'' },

            ],
            datas2: [
                { id: 1, dt1: 'IUD', dt2: '0', dt3: '0', dt4: '0' },
                { id: 1, dt1: 'MOW', dt2: '0', dt3: '0', dt4: '0' },
                { id: 1, dt1: 'MOP', dt2: '0', dt3: '0', dt4: '0' },
                { id: 1, dt1: 'KONDOM', dt2: '0', dt3: '1', dt4: '1' },
                { id: 1, dt1: 'IMPLAN', dt2: '0', dt3: '0', dt4: '0' },
                { id: 1, dt1: 'SUNTIKAN', dt2: '0', dt3: '0', dt4: '0' },
                { id: 1, dt1: 'PIL', dt2: '0', dt3: '0', dt4: '0' },
                { id: 1, dt1: 'JUMLAH', dt2: '0', dt3: '1', dt4: '1' },
            ],
            datas3: [
                { id: 1, dt1: '1', dt2: '1', dt3: '1',no:'7',deskripsi:'Keluarga Menjadi Sasaran Kelompok Kegiatan :'},
                { id: 2, dt1: '1', dt2: '0', dt3: '1',no:'8',deskripsi:'Keluarga Menjadi Anggota Kelompok Kegiatan :'},

            ],
        };
        this.handleSelect = this.handleSelect.bind(this);

    }

    CellFormatter(cell, row) {
    return (<div><Link to={`/lap/DetailDallap/table1/provinsi?provinsi=${row.provinsi}`}>{row.provinsi}</Link></div>);
    }

    handleSelect(key) {
        console.log('selected' + key);
        this.setState({ key: key });
    }
    
    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState } });
    }

    componentDidMount() {
        this.setHead();
        this.setBody();
    }

    handleTambah = () => {
        console.log('tambah');
        const arr = [
            { id: 1, dt1: '4', dt2: '', dt3: 'KK', dt4: '', dt5: '', dt6: '',dt7: '-',dt8: '-',dt9:'-', dt10:'-',dt11:'-',dt12:'-', dt13:'-', dt14:'-', dt15:'-', dt16:'-', dt17:'-', dt18:'-', dt19:'-', dt20:'-' },
            // { id: 4, dt1: '4', dt2: '', dt3: 'KK', dt4: '', dt5: '', dt6: '',dt7: '',dt8: '',dt9:'', dt10:'',dt11:'-',dt12:'-', dt13:'-', dt14:'-', dt15:'-', dt16:'-', dt17:'-', dt18:'-', dt19:'-', dt20:'-' },
        ]
        this.setState({datas: this.state.datas.concat(arr)});
    }
    
    setHead() {
        var headerColumns = [
        { width:"80",dataField:'dt1', title: "No. Keluarga", row: '0', rowSpan: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, customEdit: 'input' },
        { width:"100",dataField:'dt2', title: "Nama", row: '0', rowSpan: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, customEdit: 'input' },
        { width:"100",dataField:'dt3', title: "Hubungan Dengan KK", row: '0', rowSpan: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, customEdit: 'input' },
        { width:"125",dataField:'dt4',title:"Tanggal Lahir", row: '0', rowSpan: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, customEdit: 'input' },
        { width:"50",dataField:'dt5', title: "Usia", row: '0', rowSpan: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, customEdit: 'input' },
        { width:"100",dataField:'dt6', title: "Jumlah Anak", row: '0', rowSpan: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, customEdit: 'input' },
        { width:"100",dataField:'dt7', title: "Kesertaan JKN", row: '0', rowSpan: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, customEdit: 'ck' },
        { width:"100",dataField:'dt8', title: "Status PUS", row: '0', rowSpan: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, customEdit: 'ck' },
        { width:"100",dataField:'dt9', title: "Status Hamil", row: '0', rowSpan: '3', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, customEdit: 'ck' },

        { title: "KESERTAAN BER-KB PUS", row: '0', colSpan: '5', dataField: '#', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, customEdit: 'none' },

        { width:"60",dataField:'dt12', title: "PESERTA KB", row: '1',colSpan:'2', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, customEdit: 'ck' },
        { width:"60",dataField:'dt11', title: "BUKAN PESERTA KB", row: '1',colSpan:'3', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, customEdit: 'input' },

        { width:"90",dataField:'dt10',title: "Metode Kontrasepsi", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, customEdit: 'input' },
        { width:"70",dataField:'dt13' ,title: "Jalur Pembayaran", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, customEdit: 'input' },

        { width:"60",dataField:'dt14' ,title: "Ingin Anak Segera (IAS)", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, customEdit: 'ck' },

        { width:"60",dataField:'dt15' ,title: "Ingin Anak Kemudian (IAK)", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, customEdit: 'ck' },
        { width:"60",dataField:'dt16' ,title: "Tidak Ingin Anak Lagi (TIAI)", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, customEdit: 'ck' },

        { title: "SASARAN DAN KESERTAAN DALAM POKTAN", row: '0', colSpan: '6', dataField: '#', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, customEdit: 'none' },

        { width:"60",dataField:'dt17',title: "BKB", row: '1',colSpan:'2', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, customEdit: 'none'},
        { width:"80",dataField:'dt18',title: "Keluarga Sasaran", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, customEdit: 'ck' },
        { width:"80",dataField:'dt19' ,title: "Kesertaan", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, customEdit: 'ck' },
        { width:"60",dataField:'dt20',title: "BKB", row: '1',colSpan:'2', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, customEdit: 'none' },
        { width:"80",dataField:'dt21',title: "Keluarga Sasaran", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, customEdit: 'ck' },
        { width:"80",dataField:'dt22' ,title: "Kesertaan", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, customEdit: 'ck' },
        { width:"60",dataField:'dt23',title: "BKL", row: '1',colSpan:'2', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, customEdit: 'none' },
        { width:"80",dataField:'dt24',title: "Keluarga Sasaran", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, customEdit: 'ck' },
        { width:"80",dataField:'dt25' ,title: "Kesertaan", row: '2',colSpan:'1', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER, customEdit: 'ck' },
        


        ];
        this.setState({ tableHead: this.state.tableHead.concat(headerColumns) });
    }

    setBody() {
        this.setState({blocking: true});
        // this.setState({ datas: [] });
    }

    render() {
        const columns3 = [
            {
                dataField: 'no',
                text: 'No',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: "50" };
                },
            },
            {
                dataField: 'deskripsi',
                text: 'Deskripsi',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: "200" };
                },
            },
            {
                dataField: 'dt1',
                text: 'BKB',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: "50"};
                },
            },
            {
                dataField: 'dt2',
                text: 'BKR',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: "50" };
                },
            },
            {
                dataField: 'dt3',
                text: 'BKL',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: "50" };
                },
            },
        ]

        const columns2 = [
            {
                dataField: 'dt1',
                text: 'Metode',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '50px' };
                },
            },
            {
                dataField: 'dt2',
                text: 'Pemerintah',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '50px' };
                },
            },
            {
                dataField: 'dt3',
                text: 'swasta',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '50px' };
                },
            },
            {
                dataField: 'dt4',
                text: 'Jumlah',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '50px' };
                },
            }
        ]

        const footerData = [];

        function refreshPage(){ 
            window.location.reload(); 
        }

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12">
                        <Card>
                            <CardBody> 
                                <Row>
                                    <Col md="12">
                                        <div className="titleFilter" style={{display:'table', marginLeft:'auto',marginRight:'auto'}}><strong>REKAPITULASI DATA KELUARGA</strong></div>
                                    </Col>
                                    <Col md="12">
                                        <div className="titleFilter" style={{display:'table', marginLeft:'auto',marginRight:'auto'}}><strong>BULAN ......  TAHUN ......</strong></div>
                                    </Col>
                                </Row>  
                                <Row>
                                    <Col md="12">
                                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom:'-20px' }}>
                                        {/* <div className="titleFilter">Wilayah : </div> */}
                                        <button className="btn btn-facebook"  onClick={this.handleTambah}><i className="icon-file-plus"></i>Tambah</button>
                                    </div>
                                        <div className="titleFilter">Wilayah : </div>
                                    </Col>
                                </Row>  
                                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                                    <Row> 
                                        <Col md="12">
                                            <Collapse isOpen={!this.state.open}>
                                                <TableEditCell 
                                                    tableHead={ this.state.tableHead }
                                                    datas={ this.state.datas }
                                                    footerData={footerData}
                                                />
                                            </Collapse>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <CardBody style={{marginTop:'-40px'}}>
                <Row class ="6">
                    <Col md="6" xs="12">
                        <div>
                            <strong> Ringkasan : </strong>
                        </div>
                        <div style={{marginTop:'7px'}}>
                            <strong> 1. Jumlah Keluarga : 3 </strong>
                        </div>
                        <div style={{marginTop:'7px'}}>
                            <strong> 2. Jumlah PUS : 2 </strong>
                        </div>
                        <div style={{marginTop:'7px'}}>
                            <strong> 3. Jumlah Peserta KB Aktif : </strong>
                        </div>
                        <Row xs="12" class ="mb-3" style={{width: '100%', marginTop:'7px'}}>
                            <Table2Edit
                                caption=''
                                tableHead={columns2}
                                datas={this.state.datas2}
                            />
                        </Row>
                        <br></br>
                    </Col>
                    <Col md="6" xs="12">
                        <div>
                            <strong> 4. Jumlah PUS bukan peserta KB : 1 </strong>
                        </div>
                        <div style={{marginLeft:'25px'}}> 1) Ingin Anak Segera     : 0 </div>
                        <div style={{marginLeft:'25px'}}> 2) Ingin Anak ditunda    : 0 </div>
                        <div style={{marginLeft:'25px'}}> 3) Tidak Ingin Anak Lagi : 0 </div>
                        <div style={{marginTop:'7px'}}>
                            <strong> 5. Jumlah Wanita Hamil : 1 </strong>
                        </div>
                        <div style={{marginTop:'7px'}}>
                            <strong> 6. Jumlah Unmet Need : 1 </strong>
                        </div>
                        {/* <div style={{marginTop:'7px'}}>
                            <strong> 7. Keluarga Menjadi Sasaran Kelompok Kegiatan :  </strong>
                        </div>
                        <div style={{marginTop:'7px'}}> 
                            <strong> 8. Keluarga Menjadi Anggota Kelompok Kegiatan : </strong>
                        </div> */}
                        <div>
                            <Row class ="mb-3"  style={{marginTop:'7px'}}>
                                <Table2Edit
                                    caption=''
                                    tableHead={columns3}
                                    datas={this.state.datas3}
                                />
                            </Row>
                        </div>
                        <br></br>
                    </Col>
                </Row>
                </CardBody>
            </div >
        );
        
        return (
            
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12">
                        <Card>
                            <CardBody>
                                    <div md="7" xs="12">&nbsp;</div>
                                    <Row>
                                        <Col md="7" xs="12">
                                        <TableEditCell 
                                            tableHead={ this.state.tableHead }
                                            datas={ this.state.datas }
                                            footerData={footerData}
                                        />
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <Col xs="4">
                                        <Link to={`/lap/dallap`} className="btn btn-primary">Kembali</Link>
                                    </Col>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div >
        );
	}
}

export default RekapitulasiDataKeluarga;