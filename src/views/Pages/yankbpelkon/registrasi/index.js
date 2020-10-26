import React, { Component } from 'react';
import { Card, CardBody, Col, Label, Row, Button } from 'reactstrap';

import Select from 'react-select';
import Swal from 'sweetalert2';
import BlockUi from 'react-block-ui';
import registration from '../../../../assets/img/registration.JPG';

class Registrasi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            blocking: false,
            status: 'Closed',
            fadeIn: true,
            timeout: 300,
        };
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
        this.props.history.push('/register/create');
    }

    handleSeacrh = () => {
        this.props.history.push('/register/daftar');
    }

    render() {
        return (
            <div className="animated fadeIn">
                <BlockUi tag="div" blocking={this.state.blocking}>
                    <Row>
                        <Col xs="12" md="7">
                            <Card>
                                <CardBody>
                                    <div className="divTitle">
                                        <span className="spanTitle">&#8226; Pendaftaran Pelayanan KB</span>
                                    </div>
                                    <Row>
                                        <Col md="12">
                                            <Row>
                                                <Col xs="5" md="4 mb-2" style={{paddingRight:'0'}}>
                                                    <img src={registration} alt=""  style={{width: '100%', height: '175px'}}/>
                                                </Col>
                                                <Col xs="7" md="8 mb-2" style={{paddingLeft:'0'}}>
                                                    <Row>
                                                        <Col xs="4" md="2">
                                                            <Label className="labelForm28" htmlFor="provinsi"><b>Provinsi</b></Label>
                                                        </Col>
                                                        <Col xs="8" md="10">
                                                            <Label className="labelForm28" htmlFor="provinsi">Aceh</Label>
                                                        </Col>
                                                        <Col xs="4" md="2">
                                                            <Label className="labelForm28" htmlFor="kabupaten"><b>Kab/Kota</b></Label>
                                                        </Col>
                                                        <Col xs="8" md="10">
                                                            <Label className="labelForm28" htmlFor="provinsi">Aceh Besar</Label>
                                                        </Col>
                                                        <Col xs="4" md="2">
                                                            <Label className="labelForm28" htmlFor="kabupaten"><b>Kode</b></Label>
                                                        </Col>
                                                        <Col xs="8" md="10">
                                                            <Label className="labelForm28" htmlFor="provinsi">11.06</Label>
                                                        </Col>
                                                        <Col xs="4" md="2">
                                                            <Label className="labelForm28" htmlFor="kabupaten"><b>Faskes</b></Label>
                                                        </Col>
                                                        <Col xs="8" md="10">
                                                            <Select options={this.state.opt_prov} value={this.state.provinsi} placeholder="Cari" isClearable />
                                                        </Col>
                                                        <Col xs="4" md="2">
                                                            <Label className="labelForm28" htmlFor="kabupaten"><b>No Reg</b></Label>
                                                        </Col>
                                                        <Col xs="8" md="10">
                                                            <Label className="labelForm28" htmlFor="provinsi">-</Label>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col xs="6" md="6">
                                            <Card className="mb10px">
                                                <CardBody style={{backgroundColor: '#ff6961', color: 'white', borderRadius: '4px'}} className="card-body-nopad">
                                                    <div style={{width: '100%', textAlign: 'center'}}>
                                                        <div style={{fontSize:'14px', lineHeight:'33px', fontWeight: 'bold'}}>Oktober 2020</div>
                                                        <div style={{fontSize: '12px', color: '#333', backgroundColor: 'aliceblue'}}>Bulan Lapor Terakhir</div>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col xs="6" md="6">
                                            <Card className="mb10px">
                                                <CardBody style={{backgroundColor: '#ff6961', color: 'white', borderRadius: '4px'}} className="card-body-nopad">
                                                    <div style={{width: '100%', textAlign: 'center'}}>
                                                        <div style={{fontSize:'14px', lineHeight:'33px',fontWeight: 'bold'}}>17</div>
                                                        <div style={{fontSize: '12px', color: '#333', backgroundColor: 'aliceblue'}}>Jumlah Pelayanan</div>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row className="mt-3">
                                        <Col md="12">
                                            <Row>
                                                <Col xs="6" md="6">
                                                    <Button style={{width:'100%'}} className="btn btn-facebook btnFilter btn48" onClick={this.handleClickOpen}><i className="icon-file-plus"></i> Tambah Data Pelayanan</Button>
                                                </Col>
                                                <Col xs="6" md="6">
                                                    <Button style={{width:'100%'}} className="btn btn-facebook btnFilter btn48" onClick={this.handleSeacrh}><i className="icon-search4"></i> Lihat Data Pelayanan</Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="5" className="d-none d-sm-block" style={{borderLeft:"1px solid #C8E2FF", height: "calc(100vh - 120px)"}}>
                            <Card >
                                <CardBody className="card-body-nopad">
                                    Right Side
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </BlockUi>
            </div >
        );
    }
}

export default Registrasi;
