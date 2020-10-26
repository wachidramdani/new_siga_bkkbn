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
                        <Col xs="12" md="12">
                            <Card>
                                <CardBody>
                                    {/* <Form action="" method="post" encType="multipart/form-data" className="form-horizontal"> */}
                                        <div className="divTitle">
                                            <span className="spanTitle">&#8226; Pendaftaran Tempat Pelayanan KB</span>
                                        </div>
                                        <Row>
                                            <Col md="12">
                                                <Row>
                                                    <Col xs="4" md="2 mb-2">
                                                        <img src={location} alt=""  style={{width: '100%', height: '80px'}}/>
                                                    </Col>
                                                    <Col xs="8" md="4 mb-2">
                                                        <Row>
                                                            <Col xs="3">
                                                                <Label className="labelForm" htmlFor="provinsi"><b>Provinsi</b></Label>
                                                            </Col>
                                                            <Col xs="9">
                                                                <Label className="labelForm" htmlFor="provinsi">Aceh</Label>
                                                            </Col>
                                                            <Col xs="3">
                                                                <Label className="labelForm" htmlFor="kabupaten"><b>Kab/Kota</b></Label>
                                                            </Col>
                                                            <Col xs="9">
                                                                <Label className="labelForm" htmlFor="provinsi">Aceh Besar</Label>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="4">
                                                <Label className="labelForm" htmlFor="provinsi"><b>Jumlah Faskes</b> 15</Label>
                                            </Col>
                                            <Col xs="4">
                                                <Label className="labelForm" htmlFor="provinsi"><b>Jumlah Tenaga</b> 75</Label>
                                            </Col>
                                            <Col xs="4">
                                                <Label className="labelForm" htmlFor="provinsi"><b>Update</b> 22/10/20</Label>
                                            </Col>
                                        </Row>
                                        <Row className="mt-3">
                                            <Col md="12">
                                                <Row>
                                                    <Col xs="6" md="4">
                                                        <Button style={{width:'100%'}} className="btn btn-facebook btnFilter" onClick={this.handleClickOpen}><i className="icon-file-plus"></i> Tambah</Button>
                                                    </Col>
                                                    <Col xs="6" md="4">
                                                        <Button style={{width:'100%'}} className="btn btn-facebook btnFilter" onClick={this.handleSeacrh}><i className="icon-search4"></i> Lihat Data</Button>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    {/* </Form> */}
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
