import React, { Component } from 'react';
import { CardBody, Col, Row, FormGroup, Label, Input, Collapse, Button } from 'reactstrap';
import Select from 'react-select';


class Step2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optPelatihan: [
                { value: '1', label: 'Sudah' },
                { value: '2', label: 'Belum' },
            ],
            setPelatihan: [],
            setPelatihanSekertaris: [],
            setPelatihanBendahara: [],
            setKader1: [],
            setKader2: [],
            setKader3: [],
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

    getNIKsekertaris = () => {
        this.setState({
            namaSekertaris: 'John Cena',
            kkiSekertaris: '6789-1011'
        })
    }

    getNIKbendahara = () => {
        this.setState({
            namaBendahara: 'Anggrek Bulan',
            kkiBendahara: '12356-678910',
        })
    }

    getKader1 = () => {
        this.setState({
            namaKader1: 'Kader Pertama',
            kkiKader1: '12356-1111',
        })
    }

    getKader2 = () => {
        this.setState({
            namaKader2: 'Kader Kedua',
            kkiKader2: '12356-2222',
        })
    }

    getKader3 = () => {
        this.setState({
            namaKader3: 'Kader Ketiga',
            kkiKader3: '12356-333',
        })
    }

    handlePelatihan = (e) => {
        this.setState({ setPelatihan: e })
    }

    handlePelatihanSekertaris = (e) => {
        this.setState({ setPelatihanSekertaris: e })
    }

    handlePelatihanBendahara = (e) => {
        this.setState({ setPelatihanBendahara: e })
    }

    handleKader1 = (e) => {
        this.setState({ setKader1: e })
    }

    handleKader2 = (e) => {
        this.setState({ setKader2: e })
    }

    handleKader3 = (e) => {
        this.setState({ setKader3: e })
    }


    render() {
        return (
            <>
                <container-fluid>
                    <Row>
                        <Col sm="12">
                            <h6>&nbsp; </h6>
                            <div style={{ position: 'absolute', right: '15px', marginTop: '-25px', fontSize: '12px' }}>{this.props.currentStep}/{this.props.totalSteps}</div>
                            <CardBody className="card-body-nopad mt-3">

                                <FormGroup>
                                    <Row>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">NIK Ketua </Label>
                                        </Col>
                                        <Col xs="6" md="3">
                                            <Input type="number" id="input-nik" onInput={this.handleNikChange} value={this.state.nik} onKeyDown={this.callData} name="text-input" />
                                        </Col>
                                        <Col xs="2" md="1">
                                            <Button className="btn btn-facebook btnFilter" onClick={this.getNIK}>
                                                <i className="icon-search4"></i></Button>
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nomor KKI </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.kki} disabled />
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nama Ketua </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.nama} disabled />
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Pelatihan BKL </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Select options={this.state.optPelatihan} onChange={this.handlePelatihan} value={this.state.setPelatihan} isClearable placeholder="Pilih Pelatihan" maxMenuHeight={140} />
                                        </Col>
                                    </Row>
                                </FormGroup>

                                <FormGroup>
                                    <Row>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">NIK Sekretaris </Label>
                                        </Col>
                                        <Col xs="6" md="3">
                                            <Input type="number" id="input-nik" onInput={this.handleNikChange} value={this.state.nikSekertaris} onKeyDown={this.callData} name="text-input" />
                                        </Col>
                                        <Col xs="2" md="1">
                                            <Button className="btn btn-facebook btnFilter" onClick={this.getNIKsekertaris}>
                                                <i className="icon-search4"></i></Button>
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nomor KKI </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.kkiSekertaris} disabled />
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nama Sekretaris </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.namaSekertaris} disabled />
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Pelatihan BKL </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Select options={this.state.optPelatihan} onChange={this.handlePelatihanSekertaris} value={this.state.setPelatihanSekertaris} isClearable placeholder="Pilih Pelatihan" maxMenuHeight={140} />
                                        </Col>
                                    </Row>
                                </FormGroup>

                                <FormGroup>
                                    <Row>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">NIK Bendahara </Label>
                                        </Col>
                                        <Col xs="6" md="3">
                                            <Input type="number" id="input-nik" onInput={this.handleNikChange} value={this.state.nikBendahara} onKeyDown={this.callData} name="text-input" />
                                        </Col>
                                        <Col xs="2" md="1">
                                            <Button className="btn btn-facebook btnFilter" onClick={this.getNIKbendahara}>
                                                <i className="icon-search4"></i></Button>
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nomor KKI </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.kkiBendahara} disabled />
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nama Bendahara </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.namaBendahara} disabled />
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Pelatihan BKL </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Select options={this.state.optPelatihan} onChange={this.handlePelatihanBendahara} value={this.state.setPelatihanBendahara} isClearable placeholder="Pilih Pelatihan" maxMenuHeight={140} />
                                        </Col>
                                    </Row>
                                </FormGroup>

                                <Row>
                                    <div style={{ marginLeft: '15px' }}>
                                        <h6>Kader</h6>
                                    </div>
                                </Row>

                                <FormGroup>
                                    <Row>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">NIK Kader </Label>
                                        </Col>
                                        <Col xs="6" md="3">
                                            <Input type="number" id="input-nik" onInput={this.handleNikChange} value={this.state.nik} onKeyDown={this.callData} name="text-input" />
                                        </Col>
                                        <Col xs="2" md="1">
                                            <Button className="btn btn-facebook btnFilter" onClick={this.getKader1}>
                                                <i className="icon-search4"></i></Button>
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nomor KKI </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.kkiKader1} disabled />
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nama Kader </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.namaKader1} disabled />
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Pelatihan BKL </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Select options={this.state.optPelatihan} onChange={this.handleKader1} value={this.state.setKader1} isClearable placeholder="Pilih Pelatihan" maxMenuHeight={140} />
                                        </Col>
                                    </Row>
                                </FormGroup>

                                <FormGroup>
                                    <Row>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">NIK Kader </Label>
                                        </Col>
                                        <Col xs="6" md="3">
                                            <Input type="number" id="input-nik" onInput={this.handleNikChange} value={this.state.nikSekertaris} onKeyDown={this.callData} name="text-input" />
                                        </Col>
                                        <Col xs="2" md="1">
                                            <Button className="btn btn-facebook btnFilter" onClick={this.getKader2}>
                                                <i className="icon-search4"></i></Button>
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nomor KKI </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.kkiKader2} disabled />
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nama Kader </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.namaKader2} disabled />
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Pelatihan BKL </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Select options={this.state.optPelatihan} onChange={this.handleKader2} value={this.state.setKader2} isClearable placeholder="Pilih Pelatihan" maxMenuHeight={140} />
                                        </Col>
                                    </Row>
                                </FormGroup>

                                <FormGroup>
                                    <Row>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">NIK Kader </Label>
                                        </Col>
                                        <Col xs="6" md="3">
                                            <Input type="number" id="input-nik" onInput={this.handleNikChange} value={this.state.nikBendahara} onKeyDown={this.callData} name="text-input" />
                                        </Col>
                                        <Col xs="2" md="1">
                                            <Button className="btn btn-facebook btnFilter" onClick={this.getKader3}>
                                                <i className="icon-search4"></i></Button>
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nomor KKI </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.kkiKader3} disabled />
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Nama Kader </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Input type="text" value={this.state.namaKader3} disabled />
                                        </Col>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Pelatihan BKL </Label>
                                        </Col>
                                        <Col xs="8" md="4">
                                            <Select options={this.state.optPelatihan} onChange={this.handleKader3} value={this.state.setKader3} isClearable placeholder="Pilih Pelatihan" maxMenuHeight={140} />
                                        </Col>
                                    </Row>
                                </FormGroup>

                            </CardBody>
                        </Col>
                    </Row>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button className="btn btn-warning" onClick={this.props.previousStep}>Sebelumnya</button>
                        <button className="btn btn-info" onClick={this.handleNext}>Selanjutnya</button>
                    </div>
                </container-fluid>
            </>
        )
    }
}

export default Step2;