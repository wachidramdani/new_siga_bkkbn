import React, { Component } from 'react';
import { CardBody, Col, Row, FormGroup, Label, Input, Collapse, Button } from 'reactstrap';
import Select from 'react-select';



class Step3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optBinaKeluagaLansia: [
                { value: '1', label: 'Ya' },
                { value: '2', label: 'Tidak' },
            ],
            val1: [],
            val2: [],
            val3: [],
            val4: [],
            val5: [],
            val6: [],
            val7: [],
            val8: [],
            val9: [],
            val10: [],
            val11: [],
            val12: [],
            val13: [],
            val14: [],
            val15: [],
            val16: [],
            val17: [],
            val18: [],
        }
    }

    handleVal1 = (e) => {
        this.setState({ val1: e })
    }

    handleVal2= (e) => {
        this.setState({ val2: e })
    }

    handleVal3 = (e) => {
        this.setState({ val3: e })
    }

    handleNext = () => {
        this.props.nextStep();
    }


    render() {
        return (
            <div>
                <h6>KETERSEDIAAN SARANA BKL </h6>
                <div style={{ position: 'absolute', right: '0', marginTop: '-25px', marginBottom: '15px', fontSize: '12px' }}>{this.props.currentStep}/{this.props.totalSteps}</div>
                <Row >
                    <CardBody >
                        <FormGroup>
                            <Row>
                                <Col md="7" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Kebijakan Pembangunan Keluarga</Label>
                                </Col>
                                <Col md="3" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBinaKeluagaLansia} name="val1" onChange={this.handleVal1} value={this.state.val1} isClearable maxMenuHeight={140} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md="7" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Konsep Dasar Lansia Tangguh</Label>
                                </Col>
                                <Col md="3" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBinaKeluagaLansia} name="val2" onChange={this.handleVal2} value={this.state.val2} isClearable maxMenuHeight={140} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md="7" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Pembangunan Lansia Tangguh Dimensi Spriritual</Label>
                                </Col>
                                <Col md="3" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBinaKeluagaLansia} onChange={this.handleVal3} value={this.state.val3} isClearable maxMenuHeight={140} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md="7" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Pembangunan Lansia Tangguh Dimensi Intelektual</Label>
                                </Col>
                                <Col md="3" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBinaKeluagaLansia} onChange={this.handleVal3} value={this.state.val3} isClearable maxMenuHeight={140} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md="7" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Pembangunan Lansia Tangguh Dimensi Fisik</Label>
                                </Col>
                                <Col md="3" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBinaKeluagaLansia} onChange={this.handleVal3} value={this.state.val3} isClearable maxMenuHeight={140} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md="7" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Pembangunan Lansia Tangguh Dimensi Emosional</Label>
                                </Col>
                                <Col md="3" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBinaKeluagaLansia} onChange={this.handleVal3} value={this.state.val3} isClearable maxMenuHeight={140} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md="7" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Pembangunan Lansia Tangguh Dimensi Sosial Kemasyarakatan</Label>
                                </Col>
                                <Col md="3" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBinaKeluagaLansia} onChange={this.handleVal3} value={this.state.val3} isClearable maxMenuHeight={140} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md="7" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Pembangunan Lansia Tangguh Dimensi Profesional Vokasional</Label>
                                </Col>
                                <Col md="3" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBinaKeluagaLansia} onChange={this.handleVal3} value={this.state.val3} isClearable maxMenuHeight={140} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md="7" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Pembangunan Lansia Tangguh Dimensi Lingkungan</Label>
                                </Col>
                                <Col md="3" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBinaKeluagaLansia} onChange={this.handleVal3} value={this.state.val3} isClearable maxMenuHeight={140} />
                                </Col>
                            </Row>

                            <Row>
                                <Col md="7" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Pedoman Perawatan Jangka Panjang (PJP) bagi Lansia Berbasis Keluarga</Label>
                                </Col>
                                <Col md="3" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBinaKeluagaLansia} onChange={this.handleVal3} value={this.state.val3} isClearable maxMenuHeight={140} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md="7" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Menyiapkan Pra Lansia Menjadi Lansia Tangguh</Label>
                                </Col>
                                <Col md="3" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBinaKeluagaLansia} onChange={this.handleVal3} value={this.state.val3} isClearable maxMenuHeight={140} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md="7" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Pedoman Promosi Konseling Kesehatan Reproduksi di POKTAN</Label>
                                </Col>
                                <Col md="3" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBinaKeluagaLansia} onChange={this.handleVal3} value={this.state.val3} isClearable maxMenuHeight={140} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md="7" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Buku Materi Kesehatan Reproduksi</Label>
                                </Col>
                                <Col md="3" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBinaKeluagaLansia} onChange={this.handleVal3} value={this.state.val3} isClearable maxMenuHeight={140} />
                                </Col>
                            </Row>

                            <Row>
                                <Col md="7" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Lembar Balik Kesehatan Reproduksi Untuk BKL</Label>
                                </Col>
                                <Col md="3" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBinaKeluagaLansia} onChange={this.handleVal3} value={this.state.val3} isClearable maxMenuHeight={140} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md="7" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Poster dan Leaflet Kesehatan Reproduksi</Label>
                                </Col>
                                <Col md="3" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBinaKeluagaLansia} onChange={this.handleVal3} value={this.state.val3} isClearable maxMenuHeight={140} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md="7" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">BKL KIT</Label>
                                </Col>
                                <Col md="3" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBinaKeluagaLansia} onChange={this.handleVal3} value={this.state.val3} isClearable maxMenuHeight={140} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md="7" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Media Partisipatif</Label>
                                </Col>
                                <Col md="3" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBinaKeluagaLansia} onChange={this.handleVal3} value={this.state.val3} isClearable maxMenuHeight={140} />
                                </Col>
                            </Row>
                            <Row>
                                <Col md="7" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Media Promosi Lainnya (Banner, Poster, Leaflet, dll)</Label>
                                </Col>
                                <Col md="3" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBinaKeluagaLansia} onChange={this.handleVal3} value={this.state.val3} isClearable maxMenuHeight={140} />
                                </Col>
                            </Row>
                        </FormGroup>
                    </CardBody>
                </Row>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button className="btn btn-warning" onClick={this.props.previousStep}>Sebelumnya</button>
                    <button className="btn btn-info" onClick={this.handleNext}>Selanjutnya</button>
                </div>
            </div>
        )
    }
}

export default Step3;