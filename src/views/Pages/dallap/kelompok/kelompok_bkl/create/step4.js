import React, { Component } from 'react';
import { CardBody, Col, Row, FormGroup, Label, Input, Collapse, Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import Select from 'react-select';
import DaftarAnggota from './daftarTenaga';




class Step4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jmlhPengurus: 0,
            anggotaModal: false,
            jumlahLansiaMandiri: 0,
            jumlahLansiaButuhPendamping: 0
        }
    }

    handleNext = () => {
        this.props.nextStep();
    }

    getNIK = () => {
        this.setState({
            nama: 'Mawar Melati',
            kki: '12356-678',
        })
    }

    simpan = () => {
        this.setState({
            jmlhPengurus: this.state.jmlhPengurus + 1
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleJumlahAnggota = () => {
        this.setState({
            anggotaModal: !this.state.anggotaModal
        })
    }

    toggleAdd = () => {
        this.setState({ anggotaModal: !this.state.anggotaModal })
    };


    render() {
        return (
            <div>
                <h6>Informasi Anggota Kelompok </h6>
                <div style={{ position: 'absolute', right: '0', marginTop: '-25px', marginBottom: '15px', fontSize: '12px' }}>{this.props.currentStep}/{this.props.totalSteps}</div>

                <CardBody style={{ padding: '10px 0' }}>
                    <Row>
                        <Col xs="12" md="3" >
                            <Label htmlFor="text-input">Nomor Induk Kependudukan</Label>
                        </Col>

                        <Col xs="10" md="7">
                            <Input type="number" id="input-nik" onInput={this.onInputNik} value={this.state.nikPeserta} onKeyDown={this.callData} name="text-input" />
                        </Col>
                        <Col xs="2" md="2">
                            <Button className="btn btn-facebook btnFilter" onClick={this.getNIK}>
                                <i className="icon-search4"></i></Button>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col xs="12" md="3">
                            <Label htmlFor="text-input">Kode Keluarga Indonesia (KKI)</Label>
                        </Col>
                        <Col xs="12" md="9">
                            <Input type="text" value={this.state.kki} disabled />
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col xs="12" md="3">
                            <Label htmlFor="text-input">Nama</Label>
                        </Col>
                        <Col xs="12" md="9">
                            <Input type="text" value={this.state.nama} disabled />
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col xs="12" md="3">
                            <Label htmlFor="text-input">Tingkat Kemandirian Lansia</Label>
                        </Col>
                        <Col xs="6" md="2">
                            <Label htmlFor="text-input">Jumlah Lansia Mandiri</Label>
                        </Col>
                        <Col xs="6" md="2">
                            <Input type="number" value={this.state.jumlahLansiaMandiri} name="jumlahLansiaMandiri" onChange={this.handleChange} />
                        </Col>
                        <Col md="1" xs="12"></Col>
                        <Col xs="6" md="2">
                            <Label htmlFor="text-input">Jumlah Lansia Butuh Pendamping</Label>
                        </Col>
                        <Col xs="6" md="2">
                            <Input type="number" value={this.state.jumlahLansiaButuhPendamping} name="jumlahLansiaButuhPendamping" onChange={this.handleChange} />
                        </Col>
                    </Row>
                    <FormGroup className="mt-3">
                        <Row>
                            <Col xs="6" md="6" className="my-2" align="right">
                                <Button className="btn btn-facebook btnFilter" onClick={this.simpan}><i className="icon-folder-plus"></i> Tambah Anggota</Button>
                            </Col>
                            <Col xs="6" md="6" className="my-2">
                                <Button className="btn btn-facebook btnFilter" onClick={this.handleJumlahAnggota}><i className="icon-users2"></i> Jumlah Anggota: <b>{this.state.jmlhPengurus}</b></Button>
                            </Col>
                        </Row>
                    </FormGroup>

                    <Row>
                        <DaftarAnggota anggotaModal={this.state.anggotaModal} toggleAdd={this.toggleAdd} />
                    </Row>
                </CardBody>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button className="btn btn-warning" onClick={this.props.previousStep}>Sebelumnya</button>
                    <button className="btn btn-info" onClick={this.handleNext}>Selanjutnya</button>
                </div>
            </div>
        )
    }
}

export default Step4;