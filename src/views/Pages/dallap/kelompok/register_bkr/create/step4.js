import React, { Component } from 'react';
import { Col, Row, Label, Input, CardBody, Button } from 'reactstrap';

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
        var curr = new Date();
        curr.setDate(curr.getDate());
        var today = curr.toISOString().substr(0,10);
        return (
            <div>
                <h6>&nbsp; </h6>
                <div style={{ position: 'absolute', right: '0', marginTop: '-30px', fontSize: '12px' }}>{this.props.currentStep}/{this.props.totalSteps}</div>
                <CardBody className="card-body-nopad mt-3">
                    <Row>
                        <Col xs="4" md="2">
                            <Label className="labelForm" htmlFor="text-input">Tempat</Label>
                        </Col>
                        <Col xs="8" md="2">
                            <Input type="read-only" id="tempat" name="tempat" value={sessionStorage.getItem("kabupaten")} disabled/>
                        </Col>
                        <Col xs="4" md="1">
                            <Label className="labelForm" htmlFor="text-input">Tanggal</Label>
                        </Col>
                        <Col xs="8" md="2">
                        <Input style={{ marginRight: '5px' }} type="date" name="date" id="exampleDate" onChange={this.handleChange} defaultValue={today}></Input>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col xs="12" md="12">
                            <Label>Pembina Kelompok,</Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4" md="2">
                            <Label className="labelForm" htmlFor="text-input">Nama</Label>
                        </Col>
                        <Col xs="8" md="5">
                            <Input type="text" id="namaKepala" name="namaKepala" value={this.state.namaKepala} onChange={this.handleChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="12">
                            <Label className="labelForm" htmlFor="text-input">Ketua Kelompok,</Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4" md="2">
                            <Label className="labelForm" htmlFor="text-input">Nama</Label>
                        </Col>
                        <Col xs="8" md="5">
                            <Input type="text" id="namaPimpinan" name="namaPimpinan" value={this.state.namaPimpinan} onChange={this.handleChange} />
                        </Col>
                    </Row>
                </CardBody>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    <Button className="btn btn-warning" onClick={this.props.previousStep}>Sebelumnya</Button>
                    <div>
                        <Button className="btn btn-danger" onClick={this.props.buttonBatal} style={{ marginRight: '10px' }}><i className="icon-x"></i> Batal</Button>
                        <Button className="btn btn-facebook" onClick={this.handleSave}><i className="icon-floppy-disk"></i> Simpan</Button>
                    </div>
                </div>
            </div>

           
        )
    }
}

export default Step4;