import React, { Component } from 'react';
import { Col, Row, Label, Input } from 'reactstrap';

class Step4 extends Component {

    constructor(props) {
        super(props);

        var today = new Date(),
            date = ("0" + today.getDate()).slice(-2) + '-' + ("0" + (today.getMonth() + 1)).slice(-2) + '-' + today.getFullYear();

        this.state = {
            date: date,
            tempat: '',
            namaKepala: '',
            nipKepala: '',
            namaPimpinan: '',
            nipPimpinan: ''
        }
    }

    handleChange = (event) => {
        const state = this.state
        state[event.target.name] = event.target.value
        this.setState(state);
    }

    handleSave = () => {
        var today = new Date().toISOString()
        const step4 = {
            menyetujuiTempat: sessionStorage.getItem('kabupaten'),
            menyetujuiTanggal: today,
            menyetujuiKepalaSKPDKBNama: this.state.namaKepala,
            menyetujuiKepalaSKPDKBNIP: this.state.nipKepala,
            menyetujuiPimpinanNama: this.state.namaPimpinan,
            menyetujuiPimpinanNIP: this.state.nipPimpinan,
            created: "2020-10-07T03:50:44.482Z",
            createdBy: "admin",
            lastModified: "2020-10-07T03:50:44.482Z",
            lastModifiedBy: "admin",
        };
        // this.props.handleValueStep('step4', step4)
        this.props.handleSaveStep(step4); 
    }

    render() {
        return (
            <div style={{ position: 'relative' }}>
                {/* <h6>IV. PERSETUJUAN </h6> */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0px', marginBottom: '15px', fontSize: '12px' }}>{this.props.currentStep}/{this.props.totalSteps}</div>
                <Row>
                    <Col md="1">
                        <Label style={{ marginTop: '6px' }}>Tempat : </Label>
                    </Col>
                    <Col md="2">
                        <Input type="read-only" id="tempat" name="tempat" value={sessionStorage.getItem("kabupaten")} />
                    </Col>
                    <Col md="1">
                        <Label style={{ marginTop: '6px' }}>Tanggal : </Label>
                    </Col>
                    <Col md="2">
                        <Input type="read-only" id="tanggal" name="tanggal" value={this.state.date} onChange={this.handleChange} />
                        {/* <Input type="date" id="text-input" name="text-input" /> */}
                    </Col>
                </Row>
                <Row>
                    <Col md="6" style={{ marginTop: '20px' }}>
                        <Row>
                            <Col md="12">
                                <Label>Kepala OPD KB Kabupaten/Kota/Pimpinan Faskes KB Induk,</Label>
                            </Col>
                        </Row>
                        <Row md="6" style={{ marginTop: '15px' }}>
                            <Col md="2">
                                <Label>Nama : </Label>
                            </Col>
                            <Col md="6">
                                <Input type="text" id="namaKepala" name="namaKepala" value={this.state.namaKepala} onChange={this.handleChange} />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '10px' }}>
                            <Col md="2">
                                <Label>NIP : </Label>
                            </Col>
                            <Col md="6">
                                <Input type="number" id="nipKepala" name="nipKepala" value={this.state.nipKepala} onChange={this.handleChange} />
                            </Col>
                        </Row>
                    </Col>
                    <Col md="6" style={{ marginTop: '20px' }}>
                        <Row>
                            <Col md="12">
                                <Label>Pimpinan Faskes KB/Jaringan/Jejaring,</Label>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '15px' }}>
                            <Col md="2">
                                <Label>Nama : </Label>
                            </Col>
                            <Col md="6">
                                <Input type="text" id="namaPimpinan" name="namaPimpinan" value={this.state.namaPimpinan} onChange={this.handleChange} />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '10px' }}>
                            <Col md="2">
                                <Label>NIP : </Label>
                            </Col>
                            <Col md="6">
                                <Input type="number" id="nipPimpinan" name="nipPimpinan" value={this.state.nipPimpinan} onChange={this.handleChange} />
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    <button className="btn btn-warning" onClick={this.props.previousStep}>Sebelumnya</button>
                    <button className="btn btn-facebook" onClick={this.handleSave}>Simpan</button>
                </div>
            </div>
        )
    }
}

export default Step4;