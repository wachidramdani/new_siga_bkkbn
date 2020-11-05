import React, { Component } from 'react';
import { Card, CardBody, Row, Col, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, Collapse } from 'reactstrap';
import Select from 'react-select';


class Step2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optPenyaji: [
                { value: 'PPLKB', label: 'PPLKB' },
                { value: 'PKB', label: 'PLKB' },
                { value: 'PPKDB', label: 'PPKDB' },
                { value: 'Sub PPKDB', label: 'Sub PPKDB' },
                { value: 'Lainnya', label: 'Lainnya' },
            ],
            setPenyaji: [],
            lainnya: '',
            hiddenPenyajiLainnya: true,

            optMateriPenyuluhan: [
                { value: '1', label: '1. Kebijakan Pembangunan Keluarga' },
                { value: '2', label: '2. Konsep Dasar Lansia Tangguh' },
                { value: '3', label: '3. Pembangunan Lansia Tangguh Dimensi Spiritual' },
                { value: '4', label: '4. Pembangunan Lansia Tangguh Dimensi Intelektual' },
                { value: '5', label: '5. Pembangunan Lansia Tangguh Dimensi Fisik' },
                { value: '6', label: '6. Pembangunan Lansia Tangguh Dimensi Emosional' },
                { value: '7', label: '7. Pembangunan Lansia Tangguh Dimensi Sosial Kemasyarakatan' },
                { value: '8', label: '8. Pembangunan Lansia Tangguh Dimensi Profesional Vokasional' },
                { value: '9', label: '9. Pembangunan Lansia Tangguh Dimensi Lingkungan' },
                { value: '10', label: '10. Kesehatan Reproduksi' },
                { value: '11', label: '11. Pedoman Perawatan Jangka Panjang (PJP) bagi Lansia Berbasis Keluarga' },
                { value: '12', label: '12. Menyiapkan Pra Lansia Menjadi Lansia Tangguh' },
                { value: '13', label: '13. Lainnya' },
            ],
            setMateriPenyuluhan: [],
            hiddenMateriLainnya: true,

            optKelompokUmur: [
                { value: '1', label: '1. 0-<1 Thn' },
                { value: '2', label: '2. 1-<2 Thn' },
                { value: '3', label: '3. 2-<3 Thn' },
                { value: '4', label: '4. 3-<4 Thn' },
                { value: '5', label: '5. 4-<5 Thn' },
                { value: '6', label: '6. 5-<6 Thn' },
            ],
            setKelompokUmur: [],

            optDiskusi: [
                { value: '1', label: 'Ada' },
                { value: '2', label: 'Tidak Ada/Tanya Jawab' },
            ],
            setDiskusi: [],


        }
    }

    handlePenyaji = (e) => {
        if (e) {
            this.setState({
                setPenyaji: e,
                hiddenPenyajiLainnya: (e.filter(function (x) { return x.value == "Lainnya" })).length == 0 ? true : false
            })
        } else {
            this.setState({
                hiddenPenyajiLainnya: true,
                setPenyaji: e
            })
        }
    }
    handleMateriPenyuluhan = (e) => {
        if (e) {
            this.setState({
                setMateriPenyuluhan: e,
                hiddenMateriLainnya: (e.filter(function (x) { return x.value == "13" })).length == 0 ? true : false
            })
        } else {
            this.setState({
                hiddenMateriLainnya: true,
                setMateriPenyuluhan: e
            })
        }
    }

    handleDiskusi = (e) => {
        this.setState({ setDiskusi: e })
    }

    handleKelompokUmur = (e) => {
        this.setState({ setKelompokUmur: e })
    }


    handleChange = (e, tab) => {
        this.setState({
            activeTab: tab,
            [e.target.name]: e.target.value
        });
    }

    handleNext = () => {
        this.props.handleValueStep()
        this.props.nextStep();
    }

    getNIK = () => {
        this.setState({
            namaPeserta: 'Mawar Melati',
            alamat: 'Jalan Merdeka No. 81',
            noHp: '081982902500'
        })
    }

    onInputNik = (e) => {
        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 16)

    }

    render() {

        var curr = new Date();
        curr.setDate(curr.getDate());
        var today = curr.toISOString().substr(0, 10);

        return (
            <>
                <container-fluid>
                    <Row>
                        <Col sm="12">
                            <h6>&nbsp; </h6>
                            <div style={{ position: 'absolute', right: '15px', marginTop: '-25px', fontSize: '12px' }}>{this.props.currentStep}/{this.props.totalSteps}</div>
                            <CardBody className="card-body-nopad mt-3">
                                <FormGroup>
                                    <Row style={{ marginTop: '15px' }}>
                                        <Col xs="12" md="3">
                                            <Label htmlFor="text-input">Tanggal Kegiatan</Label>
                                        </Col>
                                        <Col xs="12" md="2">
                                            <Input type="date" name="date" id="exampleDate" onChange={this.handleChange} defaultValue={today}></Input>
                                        </Col>
                                    </Row>
                                    <Row style={{ marginTop: '15px' }}>
                                        <Col xs="12" md="3">
                                            <Label htmlFor="text-input">Penyaji/Narasumber</Label>
                                        </Col>
                                        <Col xs="7" md="5">
                                            <Select options={this.state.optPenyaji} onChange={this.handlePenyaji} value={this.state.setPenyaji} isClearable placeholder="Penyaji/Narasumber :" maxMenuHeight={140} isMulti />
                                        </Col>
                                        <Col xs="5" md="4">
                                            <Input type="text" id="penyajiLainnya" value={this.state.penyajiLainnya} onChange={this.handleChange} name="penyajiLainnya" disabled={this.state.hiddenPenyajiLainnya} />
                                        </Col>
                                    </Row>
                                    <Row style={{ marginTop: '15px' }}>
                                        <Col xs="12" md="3">
                                            <Label htmlFor="text-input">Materi Penyuluhan</Label>
                                        </Col>
                                        <Col xs="8" md="6">
                                            <Select options={this.state.optMateriPenyuluhan} onChange={this.handleMateriPenyuluhan} value={this.state.setMateriPenyuluhan} isClearable placeholder="Materi Penyuluhan :" maxMenuHeight={140} isMulti />
                                        </Col>
                                        <Col xs="4" md="3">
                                            <Input type="text" id="materiLainnya" value={this.state.materiLainnya} onChange={this.handleChange} name="materiLainnya" disabled={this.state.hiddenMateriLainnya} />
                                        </Col>
                                    </Row>

                                    <Row style={{ marginTop: '15px' }}>
                                        <Col xs="12" md="3">
                                            <Label htmlFor="text-input">Diskusi</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Select options={this.state.optDiskusi} onChange={this.handleDiskusi} value={this.state.setDiskusi} isClearable placeholder="Diskusi :" maxMenuHeight={140} />
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