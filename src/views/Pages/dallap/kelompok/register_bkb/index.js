import React, { Component } from 'react';
import { Card, CardBody, Col, Label, Row, Button } from 'reactstrap';

import Select from 'react-select';
import Swal from 'sweetalert2';
import BlockUi from 'react-block-ui';
import registration from '../../../../../assets/img/keluarga1.PNG';
import cashier from '../../../../../assets/img/keluarga2.PNG';

class RegisterBkb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            blocking: false,
            status: 'Closed',
            fadeIn: true,
            timeout: 300,
            selectedOptionFaskes: [],
            noreg: '-',
            bulan: '-',
            jmlPelayan: '-'
        };
    }

    onChangeFaskes = (selectedOptions) => {
        this.setState({ 
            selectedOptionFaskes: selectedOptions, 
            noreg: selectedOptions ? selectedOptions.value : '-',
            bulan: selectedOptions ? selectedOptions.bulan : '-',
            jmlPelayan: selectedOptions ? selectedOptions.jmlPelayan : '-'
        });
    }

    handleClickOpen = () => {
        this.setState({ open: true });
        sessionStorage.setItem('nama_faskes', 'BPM Yanti Am.Keb');
        sessionStorage.setItem('kd_prov', '11');
        sessionStorage.setItem('kd_kab', '06');
        sessionStorage.setItem('no_faskes', '011');
        sessionStorage.setItem('no_jaringan', '88');
        sessionStorage.setItem('lembar', '1');
        sessionStorage.setItem('menyetujui_tempat', 'Aceh Besar');
        sessionStorage.setItem('menyetujui_nama', 'Dra.Mariana Affan, MM');
        sessionStorage.setItem('menyetujui_nip', '196306121990032002');
        this.props.history.push('/kegiatan/register_bkb/create');
    }

    handleSeacrh = () => {
        this.props.history.push('/registrasi/daftar');
    }

    render() {
        const opt_faskes = [
            {value: '510207101', label: 'BKB Jepun', bulan: 'Februari 2020', jmlPelayan: '25 Februari 2020'},
            {value: '510207102', label: 'BKB Melati', bulan: 'Juni 2020', jmlPelayan: '08 Juni 2020'},
            {value: '510207103', label: 'BKB Anggrek', bulan: 'Juli 2020', jmlPelayan: '16 Juli 2020'},
            {value: '510207104', label: 'BKB Jempiring', bulan: 'September 2020', jmlPelayan: '28 September 2020'},
            {value: '510207105', label: 'BKB Mekar Sari', bulan: 'Oktober 2020', jmlPelayan: '15 Oktober 2020'},
            {value: '510207106', label: 'BKB Sandat', bulan: 'Oktober 2020', jmlPelayan: '10 Oktober 2020'},
            {value: '510207107', label: 'BKB Melati', bulan: 'Juli 2020', jmlPelayan: '13 Juli 2020'},
            {value: '510207108', label: 'BKB Mitir', bulan: 'Agustus 2020', jmlPelayan: '07 Agustus 2020'},
            {value: '510207109', label: 'BKB Tunas Mekar', bulan: 'September 2020', jmlPelayan: '15 September 2020'},
            {value: '510207110', label: 'BKB BR Bayan', bulan: 'Oktober 2020', jmlPelayan: '12 Oktober 2020'}
        ]

        return (
            <div className="animated fadeIn">
                <BlockUi tag="div" blocking={this.state.blocking}>
                    <Row>
                        <Col xs="12" md="7">
                            <Card>
                                <CardBody>
                                    <div className="divTitle">
                                        <span className="spanTitle">&#8226; Register Kegiatan</span>
                                    </div>
                                    <Row>
                                        <Col md="12">
                                            <Row>
                                                <Col xs="5" md="4 mb-2" style={{paddingRight:'0'}}>
                                                    <img src={registration} alt=""  style={{width: '100%', height: '175px'}}/>
                                                </Col>
                                                <Col xs="7" md="8 mb-2" style={{paddingLeft:'20px'}}>
                                                    <Row>
                                                        <Col xs="4" md="3">
                                                            <Label className="labelForm28" htmlFor="provinsi"><b>Provinsi</b></Label>
                                                        </Col>
                                                        <Col xs="8" md="9">
                                                            <Label className="labelForm28" htmlFor="provinsi">Aceh</Label>
                                                        </Col>
                                                        <Col xs="4" md="3">
                                                            <Label className="labelForm28" htmlFor="kabupaten"><b>Kab/Kota</b></Label>
                                                        </Col>
                                                        <Col xs="8" md="9">
                                                            <Label className="labelForm28" htmlFor="provinsi">Aceh Besar</Label>
                                                        </Col>
                                                        <Col xs="4" md="3">
                                                            <Label className="labelForm28" htmlFor="kabupaten"><b>Kode</b></Label>
                                                        </Col>
                                                        <Col xs="8" md="9">
                                                            <Label className="labelForm28" htmlFor="provinsi">11.06</Label>
                                                        </Col>
                                                        {/* <Col xs="4" md="3">
                                                            <Label className="labelForm28" htmlFor="kabupaten"><b>J.Faskes</b></Label>
                                                        </Col> */}
                                                        {/* <Col xs="8" md="9">
                                                            <Label className="labelForm28" htmlFor="provinsi">28</Label>
                                                        </Col> */}
                                                        <Col xs="4" md="3">
                                                            <Label className="labelForm28" htmlFor="kabupaten"><b>J.BKB</b></Label>
                                                        </Col>
                                                        <Col xs="8" md="9">
                                                            <Label className="labelForm28" htmlFor="provinsi">75</Label>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col xs="5" md="4">
                                            <Label className="labelForm28" htmlFor="kabupaten"><b>BKB</b></Label>
                                        </Col>
                                        <Col xs="7" md="8">
                                            <Select options={opt_faskes} value={this.state.selectedOptionFaskes} onChange={this.onChangeFaskes} placeholder="Cari" isClearable maxMenuHeight={140} />
                                        </Col>
                                        <Col xs="5" md="4">
                                            <Label className="labelForm28" htmlFor="kabupaten"><b>No. Kelompok BKB</b></Label>
                                        </Col>
                                        <Col xs="7" md="8">
                                            <Label className="labelForm28" htmlFor="provinsi"><i>{this.state.noreg}</i></Label>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col xs="6" md="6">
                                            <Card className="mb10px">
                                                <CardBody style={{backgroundColor: '#ff6961', color: 'white', borderRadius: '4px'}} className="card-body-nopad">
                                                    <div style={{width: '100%', textAlign: 'center'}}>
                                                        <div style={{fontSize:'14px', lineHeight:'33px', fontWeight: 'bold'}}>{this.state.bulan}</div>
                                                        <div style={{fontSize: '12px', color: '#333', backgroundColor: 'aliceblue'}}>Bulan Lapor Terakhir</div>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col xs="6" md="6">
                                            <Card className="mb10px">
                                                <CardBody style={{backgroundColor: '#ff6961', color: 'white', borderRadius: '4px'}} className="card-body-nopad">
                                                    <div style={{width: '100%', textAlign: 'center'}}>
                                                        <div style={{fontSize:'14px', lineHeight:'33px',fontWeight: 'bold'}}>{this.state.jmlPelayan}</div>
                                                        <div style={{fontSize: '12px', color: '#333', backgroundColor: 'aliceblue'}}>Tanggal Kegiatan</div>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row className="mt-3">
                                        <Col md="12">
                                            <Row>
                                                <Col xs="6" md="6">
                                                    <Button style={{width:'100%'}} className="btn btn-facebook btnFilter btn42" onClick={this.handleClickOpen}><i className="icon-file-plus"></i> Tambah Data Kelompok</Button>
                                                </Col>
                                                <Col xs="6" md="6">
                                                    <Button style={{width:'100%'}} className="btn btn-facebook btnFilter btn42" onClick={this.handleSeacrh}><i className="icon-search4"></i> Lihat Data Kelompok</Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="5" className="d-none d-sm-block" style={{borderLeft:"1px dashed #C8E2FF", height: "calc(100vh - 120px)", backgroundImage: `url(${cashier})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom center', backgroundSize: 'contain'}}></Col>
                    </Row>
                </BlockUi>
            </div >
        );
    }
}

export default RegisterBkb;
