import React, { Component } from 'react';
import { CardBody, Col, Row, FormGroup, Label, Input, Collapse, Button } from 'reactstrap';
import Select from 'react-select';



class Step3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
           jmlhPengurus: 0
        }
    }

    handleNext = () => {
        this.props.nextStep();
    }

    getNIK = () => {
        this.setState({
            nama: 'Mawar Melati',
            kki:'12356-678',
        })
    }

    simpan = () => {
        this.setState({
            jmlhPengurus: this.state.jmlhPengurus + 1
        })
    }


    render() {  
        return (
            <div>
                <h6>Keluarga Anggota Kelompok Yang Hadir Dalam Pertemuan </h6>
                <div style={{ position: 'absolute', right: '0', marginTop: '-25px', marginBottom: '15px', fontSize: '12px' }}>{this.props.currentStep}/{this.props.totalSteps}</div>

                <CardBody style={{ padding: '10px 0' }}>
                    <Row>
                        <Col xs="12" md="3" >
                            <Label htmlFor="text-input">Nomor Induk Kependudukan</Label>
                        </Col>
                        
                        <Col xs="10" md="3">
                            <Input type="number" id="input-nik" onInput={this.onInputNik} value={this.state.nikPeserta} onKeyDown={this.callData} name="text-input" />
                        </Col>
                        <Col xs="2" md="1">
                            <Button className="btn btn-facebook btnFilter" onClick={this.getNIK}>
                            <i className="icon-search4"></i></Button>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col xs="12" md="3">
                            <Label htmlFor="text-input">Kode Keluarga Indonesia (KKI)</Label>
                        </Col>
                        <Col xs="12" md="3">
                            <Input type="text" value={this.state.kki} disabled/>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col xs="12" md="3">
                            <Label htmlFor="text-input">Nama</Label>
                        </Col>
                        <Col xs="12" md="3">
                            <Input type="text" value={this.state.nama} disabled/>
                        </Col>
                    </Row>
                    <FormGroup className="mt-3">
                        <Row>
                            <Col xs="6" md="3"className="my-2" align="right">
                                <Button className="btn btn-facebook btnFilter" onClick={this.simpan}><i className="icon-folder-plus"></i> Tambah Anggota</Button>
                            </Col>
                            <Col xs="6" md="3"className="my-2">
                                <Button className="btn btn-facebook btnFilter" onClick={this.handleJumlahTenaga}><i className="icon-users2"></i> Jumlah Anggota: <b>{this.state.jmlhPengurus}</b></Button>
                            </Col>
                        </Row>
                    </FormGroup>
                </CardBody>
                
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button className="btn btn-warning" onClick={this.props.previousStep}>Sebelumnya</button>
                    <button className="btn btn-info"  onClick={this.handleNext}>Selanjutnya</button>
                </div>
            </div>
        )
    }
}

export default Step3;