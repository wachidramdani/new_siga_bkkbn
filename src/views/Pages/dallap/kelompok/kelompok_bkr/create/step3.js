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
                <h6>KETERSEDIAAN SARANA BKR </h6>
                <div style={{ position: 'absolute', right: '0', marginTop: '-25px', marginBottom: '15px', fontSize: '12px' }}>{this.props.currentStep}/{this.props.totalSteps}</div>
                <Row >
                    <CardBody >
                        <FormGroup>
                            <Row>
                                <Col xs="12" md="12">
                                    <Label>1. Buku Materi Perencanaan Keluarga</Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="7" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">a. Pendewasaan Usia Perkawinan</Label>
                                </Col>
                                <Col md="3" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleBersiapMenjadiOrangTua} value={this.state.setBersiapMenjadiOrangTua} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="7" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">b. Penanaman Nilai-Nilai Moral Melalui 8 Fungsi Keluarga</Label>
                                </Col>
                                <Col md="3" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleMemahamiPeran} value={this.state.setMemahamiPeran} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>
                             <Row>
                                <Col md="7" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">c. NKKBRS</Label>
                                </Col>
                                <Col md="3" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleMemahamiPeran} value={this.state.setMemahamiPeran} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="7" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">d. Nilai Gender dalam Keluarga</Label>
                                </Col>
                                <Col md="3" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleMemahamiPeran} value={this.state.setMemahamiPeran} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="12" md="12" style={{ paddingTop: '15px' }}>
                                    <Label>2. TRIAD KRR</Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="7" xs="7" style={{ paddingTop: '5px' }}>
                                    <Label className="labelForm">a. Seksualitas</Label>
                                </Col>
                                <Col md="3" xs="5" style={{ paddingTop: '10px' }}>
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleBersiapMenjadiOrangTua} value={this.state.setBersiapMenjadiOrangTua} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="7" xs="7">
                                    <Label className="labelForm">b. Napza</Label>
                                </Col>
                                <Col md="3" xs="5" >
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleMemahamiPeran} value={this.state.setMemahamiPeran} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>
                             <Row>
                                <Col md="7" xs="7" >
                                    <Label className="labelForm">c. HIV/AIDS</Label>
                                </Col>
                                <Col md="3" xs="5" >
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleMemahamiPeran} value={this.state.setMemahamiPeran} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="12" md="12" style={{ paddingTop: '5px' }}>
                                    <Label>3. Komunikasi Efektif Orang Tua</Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="7" xs="7" >
                                    <Label className="labelForm">a. Terhadap Remaja</Label>
                                </Col>
                                <Col md="3" xs="5" >
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleBersiapMenjadiOrangTua} value={this.state.setBersiapMenjadiOrangTua} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col xs="12" md="12" style={{ paddingTop: '5px' }}>
                                    <Label>4. Peran Orang Tua dalam Pembinaan</Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="7" xs="7" >
                                    <Label className="labelForm">a. Tumbuh Kemban Remaja</Label>
                                </Col>
                                <Col md="3" xs="5" >
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleBersiapMenjadiOrangTua} value={this.state.setBersiapMenjadiOrangTua} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="12" md="12" style={{ paddingTop: '5px' }}>
                                    <Label>5. Kebersihan dan Kesehatan Diri </Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="7" xs="7" >
                                    <Label className="labelForm">a. Remaja</Label>
                                </Col>
                                <Col md="3" xs="5" >
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleBersiapMenjadiOrangTua} value={this.state.setBersiapMenjadiOrangTua} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>
                            <Row style={{ paddingTop: '5px' }}>
                                <Col md="7" xs="7" >
                                    <Label className="labelForm">6. Pemenuhan Gizi Remaja</Label>
                                </Col>
                                <Col md="3" xs="5" >
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleBersiapMenjadiOrangTua} value={this.state.setBersiapMenjadiOrangTua} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs="12" md="12" style={{ paddingTop: '10px' }}>
                                    <Label>1. Pedoman Promosi Konseling Kesehatan</Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="7" xs="7">
                                    <Label className="labelForm">a. Reproduksi di POKTAN</Label>
                                </Col>
                                <Col md="3" xs="5" >
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleBersiapMenjadiOrangTua} value={this.state.setBersiapMenjadiOrangTua} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>
                            <Row style={{ paddingTop: '5px' }}>
                                <Col md="7" xs="7" >
                                    <Label className="labelForm">2. Buku Materi Kesehatan Reproduksi</Label>
                                </Col>
                                <Col md="3" xs="5" >
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleBersiapMenjadiOrangTua} value={this.state.setBersiapMenjadiOrangTua} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>
                            <Row style={{ paddingTop: '5px' }}>
                                <Col md="7" xs="7" >
                                    <Label className="labelForm">3. Lembar Balik Kesehatan Reproduksi Untuk BKR</Label>
                                </Col>
                                <Col md="3" xs="5" >
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleBersiapMenjadiOrangTua} value={this.state.setBersiapMenjadiOrangTua} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>
                            <Row style={{ paddingTop: '5px' }}>
                                <Col md="7" xs="7" >
                                    <Label className="labelForm">4. Poster dan Leaflet Kesehatan Reproduksi</Label>
                                </Col>
                                <Col md="3" xs="5" >
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleBersiapMenjadiOrangTua} value={this.state.setBersiapMenjadiOrangTua} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>

                            <Row style={{ paddingTop: '5px' }}>
                                <Col md="7" xs="7" >
                                    <Label className="labelForm">1. GenRe KIT</Label>
                                </Col>
                                <Col md="3" xs="5" >
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleBersiapMenjadiOrangTua} value={this.state.setBersiapMenjadiOrangTua} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>
                            
                            <Row style={{ paddingTop: '5px' }}>
                                <Col md="7" xs="7" >
                                    <Label className="labelForm">2. Alat Permainan Edukasi GenRe</Label>
                                </Col>
                                <Col md="3" xs="5" >
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleBersiapMenjadiOrangTua} value={this.state.setBersiapMenjadiOrangTua} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>
                            <Row style={{ paddingTop: '5px' }}>
                                <Col md="7" xs="7" >
                                    <Label className="labelForm">3. Lembar Balik GenRe</Label>
                                </Col>
                                <Col md="3" xs="5" >
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleBersiapMenjadiOrangTua} value={this.state.setBersiapMenjadiOrangTua} isClearable maxMenuHeight={140}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12" md="12" style={{ paddingTop: '10px' }}>
                                    <Label>4. Sarana Penyuluhan Lainnya</Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="7" xs="7">
                                    <Input type="text" id="saranaPenyuluhan" name="saranaPenyuluhan" value={this.state.saranaPenyuluhan} onChange={this.handleChange} />
                                </Col>
                                <Col md="3" xs="5" >
                                    <Select options={this.state.optBersiapMenjadiOrangTua} onChange={this.handleBersiapMenjadiOrangTua} value={this.state.setBersiapMenjadiOrangTua} isClearable maxMenuHeight={140}/>
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