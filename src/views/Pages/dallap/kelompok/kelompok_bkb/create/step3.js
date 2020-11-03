import React, { Component } from 'react';
import { CardBody, Col, Row, FormGroup, Label, Input, Collapse, Button } from 'reactstrap';
import Select from 'react-select';



class Step3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optBersiapMenjadiOrangTua: [
                { value: '1', label: 'Ya' },
                { value: '2', label: 'Tidak' },
            ],
            setBersiapMenjadiOrangTua: [],
            setMemahamiPeran:[]
        }
    }

    handleBersiapMenjadiOrangTua = (e) => {
        this.setState({setBersiapMenjadiOrangTua: e})
    }

    handleMemahamiPeran = (e) => {
        this.setState({setMemahamiPeran: e})
    }

    handleNext = () => {
        this.props.nextStep();
    }


    render() {  
        return (
            <div>
                <h6>KETERSEDIAAN SARANA BKB </h6>
                <div style={{ position: 'absolute', right: '0', marginTop: '-25px', marginBottom: '15px', fontSize: '12px' }}>{this.props.currentStep}/{this.props.totalSteps}</div>
                <Row >
                    <CardBody >
                        <FormGroup>
                            <Row>
                                <Col md="9" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Bersiap-siap Menjadi Orang Tua</Label>
                                </Col>
                                <Col md="4" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleBersiapMenjadiOrangTua} value={this.state.setBersiapMenjadiOrangTua} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="9" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Memahani Peran Orang Tua</Label>
                                </Col>
                                <Col md="4" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleMemahamiPeran} value={this.state.setMemahamiPeran} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>
                             <Row>
                                <Col md="9" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Memahani Konsep Dini Orang Tua</Label>
                                </Col>
                                <Col md="4" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleMemahamiPeran} value={this.state.setMemahamiPeran} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="9" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Melibatkan Peran Ayah</Label>
                                </Col>
                                <Col md="4" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleMemahamiPeran} value={this.state.setMemahamiPeran} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="9" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Mendorong Tumbuh Kembang Anak</Label>
                                </Col>
                                <Col md="4" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleMemahamiPeran} value={this.state.setMemahamiPeran} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="9" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Membantu Tumbuh Kembang Balita</Label>
                                </Col>
                                <Col md="4" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleMemahamiPeran} value={this.state.setMemahamiPeran} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="9" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Menjaga Anak Dari Pengaruh Media</Label>
                                </Col>
                                <Col md="4" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleMemahamiPeran} value={this.state.setMemahamiPeran} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="9" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Menjaga Kes. Reproduksi Balita</Label>
                                </Col>
                                <Col md="4" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleMemahamiPeran} value={this.state.setMemahamiPeran} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="9" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Membuat Karakter Anak Sejak Dini</Label>
                                </Col>
                                <Col md="4" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleMemahamiPeran} value={this.state.setMemahamiPeran} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md="9" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Pedoman Promosi di POKTAN</Label>
                                </Col>
                                <Col md="4" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleMemahamiPeran} value={this.state.setMemahamiPeran} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="9" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Buku Materi Kesehatan Reproduksi</Label>
                                </Col>
                                <Col md="4" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleMemahamiPeran} value={this.state.setMemahamiPeran} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="9" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Lembar Balik Kesehatan Reproduksi</Label>
                                </Col>
                                <Col md="4" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleMemahamiPeran} value={this.state.setMemahamiPeran} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="9" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Poster & Leaflet Kes. Reproduksi</Label>
                                </Col>
                                <Col md="4" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleMemahamiPeran} value={this.state.setMemahamiPeran} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md="9" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">BKB Kit</Label>
                                </Col>
                                <Col md="4" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleMemahamiPeran} value={this.state.setMemahamiPeran} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="9" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Kartu Kuning Anak</Label>
                                </Col>
                                <Col md="4" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleMemahamiPeran} value={this.state.setMemahamiPeran} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>
                        </FormGroup>
                    </CardBody>
                </Row>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button className="btn btn-warning" onClick={this.props.previousStep}>Sebelumnya</button>
                    <button className="btn btn-info"  onClick={this.handleNext}>Selanjutnya</button>
                </div>
            </div>
        )
    }
}

export default Step3;