import React, { Component } from 'react';
import { Card, CardBody, Col, Label, Row, Button } from 'reactstrap';

import Swal from 'sweetalert2';
import BlockUi from 'react-block-ui';
import location from '../../../../assets/img/location.png';

class Pendaftaran extends Component {
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
        sessionStorage.setItem('kd_prov', 1);
        sessionStorage.setItem('depdagriProv', '11');
        sessionStorage.setItem('kd_kab', 1);
        sessionStorage.setItem('depdagriKab', '06');
        sessionStorage.setItem('kd_kec', 4234);
        sessionStorage.setItem('kd_des', 44045);
        sessionStorage.setItem('kd_rw', 301830);
        sessionStorage.setItem('kd_rt', 1097672);
        sessionStorage.setItem('rt', '001');
        sessionStorage.setItem('rw', '004');
        sessionStorage.setItem('desa', 'MEUNASAH KRUENG KALA');
        sessionStorage.setItem('kecamatan', 'LHOONG');
        sessionStorage.setItem('kabupaten', 'Aceh Besar');
        sessionStorage.setItem('provinsi', 'ACEH');
        this.props.history.push('/pendaftaran/create');
    }

    handleSeacrh = () => {
        this.props.history.push('/pendaftaran/daftar');
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
                                        <span className="spanTitle">&#8226; Pendaftaran Tempat Pelayanan KB</span>
                                    </div>
                                    <Row>
                                        <Col md="12">
                                            <Row>
                                                <Col xs="5" md="4 mb-2" style={{paddingRight:'0'}}>
                                                    <img src={location} alt=""  style={{width: '100%', height: '120px'}}/>
                                                </Col>
                                                <Col xs="7" md="8 mb-2" style={{paddingLeft:'0'}}>
                                                    <Row>
                                                        <Col xs="3" md="2">
                                                            <Label className="labelForm28" htmlFor="provinsi"><b>Provinsi</b></Label>
                                                        </Col>
                                                        <Col xs="9" md="10">
                                                            <Label className="labelForm28" htmlFor="provinsi">Aceh</Label>
                                                        </Col>
                                                        <Col xs="3" md="2">
                                                            <Label className="labelForm28" htmlFor="kabupaten"><b>Kab/Kota</b></Label>
                                                        </Col>
                                                        <Col xs="9" md="10">
                                                            <Label className="labelForm28" htmlFor="provinsi">Aceh Besar</Label>
                                                        </Col>
                                                        <Col xs="3" md="2">
                                                            <Label className="labelForm28" htmlFor="kabupaten"><b>Kode</b></Label>
                                                        </Col>
                                                        <Col xs="9" md="10">
                                                            <Label className="labelForm28" htmlFor="provinsi">11.06</Label>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col xs="6">
                                            {/* <Label className="labelForm" htmlFor="provinsi"><b>Jumlah Faskes</b> 15</Label> */}
                                            <Card className="mb10px">
                                                <CardBody style={{backgroundColor: '#ff6961', color: 'white', borderRadius: '4px'}} className="card-body-nopad">
                                                    <div style={{width: '100%', textAlign: 'center'}}>
                                                        <div style={{fontSize:'22px', fontWeight: 'bold'}}>15</div>
                                                        <div style={{fontSize: '12px', color: '#333', backgroundColor: 'aliceblue'}}>Jumlah Faskes</div>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col xs="6">
                                            <Card className="mb10px">
                                                <CardBody style={{backgroundColor: '#ff6961', color: 'white', borderRadius: '4px'}} className="card-body-nopad">
                                                    <div style={{width: '100%', textAlign: 'center'}}>
                                                        <div style={{fontSize:'22px', fontWeight: 'bold'}}>75</div>
                                                        <div style={{fontSize: '12px', color: '#333', backgroundColor: 'aliceblue'}}>Jumlah Tenaga</div>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row className="mt-3">
                                        <Col md="12">
                                            <Row>
                                                <Col xs="6" md="6">
                                                    <Button style={{width:'100%'}} className="btn btn-facebook btnFilter btn48" onClick={this.handleClickOpen}><i className="icon-file-plus"></i> Tambah Data Faskes</Button>
                                                </Col>
                                                <Col xs="6" md="6">
                                                    <Button style={{width:'100%'}} className="btn btn-facebook btnFilter btn48" onClick={this.handleSeacrh}><i className="icon-search4"></i> Lihat Data Faskes</Button>
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

export default Pendaftaran;
