import React, { Component } from 'react';
import { Col, Row, Label, Input } from 'reactstrap';

class Step4 extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: [],
            Tanggal: '',
            namaKepala: '',
            nipKepala: '',
            namaPimpinan: '',
            nipPimpinan: ''
        }
    }

    componentDidMount(){
        this.getData();
    }

    getData = () =>{
        var data = JSON.parse(this.props.lihat)
        if (data) {
            var date = new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "long",
                day: "2-digit"
              }).format(Date.parse(data.menyetujuiTanggal))
    
            this.setState({
                data: data,
                Tanggal: date
            })
        }
        else {
            this.props.buttonBack();
        }
    }

    handleChange = (event) => {
        const state = this.state
        state[event.target.name] = event.target.value
        this.setState(state);
    }

    render() {
    
        return (
            <div style={{ position: 'relative' }}>
                <h6>IV. PERSETUJUAN </h6>
                <div style={{position:'absolute', right: '0', marginTop:'-30px', fontSize:'12px'}}>{this.props.currentStep}/{this.props.totalSteps}</div>
                <Row>
                    <Col md="1">
                        <Label>Tempat : </Label>
                    </Col>
                    <Col md="2">
                        <Input style={{ textAlign: 'center' }} type="text" id="text-input" name="text-input" value={this.state.data.menyetujuiTempat}  />
                    </Col>
                    <Col md="1">
                        <Label>Tanggal</Label>
                    </Col>
                    <Col md="2">
                        <Input style={{ textAlign: 'center' }} type="text" id="text-input" name="text-input" value={this.state.Tanggal}  />
                    </Col>
                </Row>
                <Row>
                    <Col md="6" style={{ marginTop: '20px' }}>
                        <Row>
                            <Col md="12">
                                <Label>Kepala SKPD KB Kabupaten/Kota/Pimpinan Faskes KB Induk,</Label>
                            </Col>
                        </Row>
                        <Row md="6" style={{ marginTop: '15px' }}>
                            <Col md="2">
                                <Label>Nama : </Label>
                            </Col>
                            <Col md="3">
                                <Input type="text" id="namaKepala" name="namaKepala"  value={this.state.data.menyetujuiKepalaSKPDKBNama} onChange={this.handleChange} />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '15px' }}>
                            <Col md="2">
                                <Label>NIP : </Label>
                            </Col>
                            <Col md="3">
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
                            <Col md="3">
                                <Input type="text" id="namaPimpinan" name="namaPimpinan" value={this.state.namaPimpinan} onChange={this.handleChange} />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '15px' }}>
                            <Col md="2">
                                <Label>NIP : </Label>
                            </Col>
                            <Col md="3">
                                <Input type="number" id="nipPimpinan" name="nipPimpinan" value={this.state.nipPimpinan} onChange={this.handleChange} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
                <div style={{display:'flex', justifyContent:'space-between', marginTop: '20px'}}>
                    <button className="btn btn-warning" onClick={this.props.previousStep}>Sebelumnya</button>
                </div>
            </div>
        )
    }
}

export default Step4;