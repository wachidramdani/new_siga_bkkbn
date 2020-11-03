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
            ],
            setPenyaji:[],

            optMateriPenyuluhan: [
                { value: '1', label: '1. Bersiap Menjadi Orang Tua' },
                { value: '2', label: '2. Melibatkan Peran Ayah' },
                { value: '3', label: '3. Menjaga Anak Dari Pengaruh Media' },
                { value: '4', label: '4. Memahami Peran Orang Tua' },
                { value: '5', label: '5. Mendorong Tumbuh Kembang Anak' },
                { value: '6', label: '6. Menjaga Kesehatan Reproduksi Balita' },
                { value: '7', label: '7. Memahami Konsep Diri Orang Tua' },
                { value: '8', label: '8. Membantu Tumbuh Kembang Balita' },
                { value: '9', label: '9. Membentuk Karakter Anak Sejak Dini' },
                { value: '10', label: '10. Kesehatan Reproduksi' },
            ],
            setMateriPenyuluhan:[],

            optKelompokUmur: [
                { value: '1', label: '1. 0-<1 Thn' },
                { value: '2', label: '2. 1-<2 Thn' },
                { value: '3', label: '3. 2-<3 Thn' },
                { value: '4', label: '4. 3-<4 Thn' },
                { value: '5', label: '5. 4-<5 Thn' },
                { value: '6', label: '6. 5-<6 Thn' },
            ],
            setKelompokUmur:[],

            optDiskusi: [
                { value: '1', label: 'Ada' },
                { value: '2', label: 'Tidak Ada/Tanya Jawab' },
            ],
            setDiskusi:[],
            

        }
    }

    handlePenyaji = (e) => {
        this.setState({setPenyaji: e})
    }

    handleMateriPenyuluhan = (e) => {
        this.setState({setMateriPenyuluhan: e})
    }

    handleDiskusi = (e) => {
        this.setState({setDiskusi: e})
    }

    handleKelompokUmur = (e) => {
        this.setState({setKelompokUmur: e})
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

    onInputNik = (e) =>{
        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,16)
        
    }

    render() {

        var curr = new Date();
        curr.setDate(curr.getDate());
        var today = curr.toISOString().substr(0,10);

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
                                        <Col xs="12" md="9">
                                            <Select options={this.state.optPenyaji} onChange={this.handlePenyaji} value={this.state.setPenyaji} isClearable placeholder="Penyaji/Narasumber :" maxMenuHeight={140} isMulti/>
                                        </Col>
                                    </Row>
                                    <Row style={{ marginTop: '15px' }}>
                                        <Col xs="12" md="3">
                                            <Label htmlFor="text-input">Materi Penyuluhan</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Select options={this.state.optMateriPenyuluhan} onChange={this.handleMateriPenyuluhan} value={this.state.setMateriPenyuluhan} isClearable placeholder="Materi Penyuluhan :" maxMenuHeight={140} isMulti/>
                                        </Col>
                                    </Row>
                                    <Row style={{ marginTop: '15px' }}>
                                        <Col xs="12" md="3">
                                            <Label htmlFor="text-input">Kelompok Umur</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Select options={this.state.optKelompokUmur} onChange={this.handleKelompokUmur} value={this.state.setKelompokUmur} isClearable placeholder="Kelompok Umur :" maxMenuHeight={140} isMulti/>
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