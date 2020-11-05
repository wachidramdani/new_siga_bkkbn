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
            setPenyaji:[],
            lainnya:'',
            hidden_lainnya: true,

            optPerencanaanKeluarga: [
                { value: '1', label: '1. Pendewasaan Usia Perkawinan' },
                { value: '2', label: '2. 8 Fungsi Keluarga' },
                { value: '3', label: '3. NKKBRS' },
                { value: '4', label: '4. Nilai Gender dalam Keluarga' },
            ],
            setPerencanaanKeluarga:[],

            optTriadKKR: [
                { value: '5', label: '5. Seksualitas' },
                { value: '6', label: '6. NAPZA' },
                { value: '7', label: '7. HIV dan AIDS' },
                { value: '8', label: '8. Komunikasi Efektif Orangtua Terhadap Remaja' },
                { value: '9', label: '9. Peran Orangtua Dalam Pembinaan Tumbuh Kembang Remaja' },
                { value: '10', label: '10. Kebersihan dan Kesehatan Diri Remaja ' },
                { value: '11', label: '11. Pemenuhan Gizi Remaja' },
                { value: '12', label: '12. Kesehatan Reproduksi' },
                { value: '13', label: '13. Lainnya' },
            ],
            setTriadKKR:[],

            optKesehatanRemaja: [
                { value: '14', label: '14. Pubertas' },
                { value: '15', label: '15. Seksualitas' },
                { value: '16', label: '16. Reproduksi' },
                { value: '17', label: '17. Kesehatan (Termasuk Gizi' },
                { value: '18', label: '18. Perilaku Beresiko' },
                { value: '19', label: '19. Tindakan Berbahaya' },
            ],
            setKesehatanRemaja:[],

            optPerencanaanBerkeluarga: [
                { value: '20', label: '20. Tugas Perkembangan dan Fungsi Keluarga' },
                { value: '21', label: '21. Kesiapan Berkeluarga' },
                { value: '22', label: '22. Pengasuhan Keluarga Sehat' },
            ],
            setPerencanaanBerkeluarga:[],

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
        console.log(e,'cek')
        if(e){
            if(e.value === "Lainnya"){
                console.log('lainnya')
                this.setState({hidden_lainnya: false, setPenyaji: e})
            }else {
                this.setState({hidden_lainnya: true, setPenyaji: e})
            }
        }   
    }

    handlePerencanaanKeluarga = (e) => {
        this.setState({setPerencanaanKeluarga: e})
    }

    handleTriadKKR = (e) => {
        this.setState({setTriadKKR: e})
    }

    handleKesehatanRemaja = (e) => {
        this.setState({setKesehatanRemaja: e})
    }

    handlePerencanaanBerkeluarga = (e) => {
        this.setState({setPerencanaanBerkeluarga: e})
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
                                        <Col xs="12" md="12">
                                            <Label htmlFor="text-input">Penyaji/Narasumber</Label>
                                        </Col>
                                        <Col xs="8" md="8">
                                            <Select options={this.state.optPenyaji} onChange={this.handlePenyaji} value={this.state.setPenyaji} isClearable placeholder="Penyaji/Narasumber :" maxMenuHeight={140} isMulti/>
                                        </Col>
                                        <Col xs="4" md="4">
                                            <Input type="text" id="lainnya" value={this.state.lainnya} onChange={this.handleChange} name="lainnya" placeholder="Lainnya .." />
                                        </Col>
                                    </Row>
                                    <Row style={{ marginTop: '15px' }}>
                                        <Col xs="12" md="12">
                                            <Label htmlFor="text-input">Materi Penyuluhan</Label>
                                        </Col>
                                        <Col xs="12" md="12">
                                            <Select options={this.state.optPerencanaanKeluarga} onChange={this.handlePerencanaanKeluarga} value={this.state.setPerencanaanKeluarga} isClearable placeholder="Perencanaan Keluarga" maxMenuHeight={140} isMulti/>
                                        </Col>
                                        <Col xs="12" md="12" style={{ marginTop: '5px' }}>
                                            <Select options={this.state.optTriadKKR} onChange={this.handleTriadKKR} value={this.state.setTriadKKR} isClearable placeholder="TRIAD KKR" maxMenuHeight={140} isMulti/>
                                        </Col>
                                        <Col xs="12" md="12" style={{ marginTop: '5px' }}>
                                            <Select options={this.state.optKesehatanRemaja} onChange={this.handleKesehatanRemaja} value={this.state.setKesehatanRemaja} isClearable placeholder="Kesehatan Remaja" maxMenuHeight={140} isMulti/>
                                        </Col>
                                        <Col xs="12" md="12" style={{ marginTop: '5px' }}>
                                            <Select options={this.state.optPerencanaanBerkeluarga} onChange={this.handlePerencanaanBerkeluarga} value={this.state.setPerencanaanBerkeluarga} isClearable placeholder="Perencanaan Berkeluarga" maxMenuHeight={140} isMulti/>
                                        </Col>
                                    </Row>
                                    <Row style={{ marginTop: '15px' }}>
                                        <Col xs="12" md="12">
                                            <Label htmlFor="text-input">Kelompok Umur</Label>
                                        </Col>
                                        <Col xs="12" md="12">
                                            <Select options={this.state.optKelompokUmur} onChange={this.handleKelompokUmur} value={this.state.setKelompokUmur} isClearable placeholder="Kelompok Umur :" maxMenuHeight={140} isMulti/>
                                        </Col>
                                    </Row>
                                    <Row style={{ marginTop: '15px' }}>
                                        <Col xs="12" md="12">
                                            <Label htmlFor="text-input">Diskusi</Label>
                                        </Col>
                                        <Col xs="12" md="12">
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