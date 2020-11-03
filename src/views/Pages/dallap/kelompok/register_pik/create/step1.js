import React, { Component } from 'react';
import { CardBody, Col, Row, FormGroup, Label, Input } from 'reactstrap';
import Swal from 'sweetalert2';
import btnBack from '../../../../../../assets/img/btnBack.png';
import Select from 'react-select';



class Step1 extends Component {
    constructor(props) {
        super(props);

        const tahun = new Date().getFullYear()
        this.state = {
            bulan: new Date().getMonth(),
            tahun: tahun,
            lembar: 1,

            bulan : [
                { "value": "1", "label": "Januari" },
                { "value": "2", "label": "Februari" },
                { "value": "3", "label": "Maret" },
                { "value": "4", "label": "April" },
                { "value": "5", "label": "Mei" },
                { "value": "6", "label": "Juni" },
                { "value": "7", "label": "Juli" },
                { "value": "8", "label": "Agustus" },
                { "value": "9", "label": "September" },
                { "value": "10", "label": "Oktober" },
                { "value": "11", "label": "November" },
                { "value": "12", "label": "Desember" }
            ],

            tahun : [
                { "value": "2019", "label": "2019" },
                { "value": "2020", "label": "2020" }
            ],

            value_bulan:null,
            value_tahun:null,
        }
    }

    componentDidMount = () => {
        let monthNumber = (new Date().getMonth()+1);
        let monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
        let monthName = monthNames[monthNumber - 1];
        let tahun = (new Date().getFullYear())
        console.log(monthNumber,'bulan')    
        this.setState({
            value_bulan: [{'value':monthNumber, 'label':monthName}],
            value_tahun: [{'value':tahun, 'label':tahun}]
        })
    }

    handleNext = (event) => {
        //validasi
        event.preventDefault();
        const step1 = {
            "namaTempatPelayananKB": sessionStorage.getItem('nama_faskes'),
            "nomorJaringanJejaringFaskesKB": sessionStorage.getItem('no_jaringan'),
            "nomorRegisterFaskesKB": sessionStorage.getItem('no_faskes'),
            "tempatPelayananKBID": sessionStorage.getItem('nama_faskes'),
            "tahun": this.state.tahun,
            "bulan": this.state.bulan + 1,
            "lembar": this.state.lembar,
        };
        console.log(step1, 'tes')
        this.props.handleValueStep('step1', step1)
        this.props.nextStep();
    }

    handleBack = () => {
        Swal.fire({
            title: 'Peringatan',
            text: "Kembali ke halaman Pendaftaran?",
            icon: 'warning',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya!',
            confirmButtonColor: '#3085d6',
            showCancelButton: true,
        }).then((result) => {
            if (result.value) {       
                this.props.clickBack();
            }
        });
    }

    handleChange = (e) => {
        this.setState({
            value_bulan: e,   
        })
    }

    changeTahun = (e) => {
        this.setState({
            value_tahun: e,   
        })
    }

    render() {

        const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
            "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ];

        const bulan = monthNames[this.state.bulan]

        return (
            <>
                <container-fluid>
                    <Row>
                        <Col sm="12">
                            <Row>
                                <div className="divImg"><img src={btnBack} onClick={this.handleBack} alt=""  style={{width: '28px', height: '28px', marginLeft:'15px'}}/></div>
                                <Col md="2"></Col>
                                
                                <div style={{position:'absolute', right: '20px', marginTop:'0px', fontSize:'12px'}}>{this.props.currentStep}/{this.props.totalSteps}</div>
                            </Row>
                            {/* <h6>&nbsp; </h6> */}
                            <CardBody className="card-body-nopad mt-3">
                                <FormGroup>
                                    <Row>
                                        <Col lg="4">
                                            <Input type="text" className="text-center" value={sessionStorage.getItem('nama_faskes')} disabled />
                                            <Label className="labelHeader">Nama Faskes KB/Jaringan/Jejaring</Label>
                                        </Col>
                                        <Col lg="4">
                                            <Input style={{ marginRight: '5px', textAlign: 'center' }} type="read-only" value={sessionStorage.getItem('kd_prov')} disabled />
                                            <Label className="labelHeader">Kode Provinsi</Label>
                                        </Col>
                                        <Col lg="4">
                                            <Input style={{ marginRight: '5px', textAlign: 'center' }} type="read-only" value={sessionStorage.getItem('kd_kab')} disabled />
                                            <Label className="labelHeader">Kode Kabupaten/Kota</Label>
                                        </Col>
                                        <Col lg="4">
                                            <Input type="number" className="text-center" value={sessionStorage.getItem('no_faskes')} disabled />
                                            <Label className="labelHeader">No. Register Faskes KB</Label>
                                        </Col>
                                        <Col lg="4">
                                            <Input type="text" className="text-center" value={sessionStorage.getItem('no_jaringan')} disabled />
                                            <Label className="labelHeader">No. Jaringan/Jejaring Faskes KB</Label>
                                        </Col>
                                        <Col lg="4">
                                            <div style={{ float: 'left', width: '48%', marginRight: '4%' }}>
                                                <Select options={this.state.bulan} onChange={this.handleChange} value={this.state.value_bulan} isClearable maxMenuHeight={140}/>
                                                {/* <Input type="text" id="bulan" name="bulan" className="text-center" value={bulan} disabled /> */}
                                            </div>
                                            <div style={{ float: 'left', width: '48%' }}>
                                                <Select options={this.state.tahun} onChange={this.changeTahun} value={this.state.value_tahun} isClearable maxMenuHeight={140}/>
                                                {/* <Input type="text" id="tahun" name="tahun" className="text-center" value={this.state.tahun} disabled /> */}
                                            </div>
                                            <Label className="labelHeader">Bulan Lapor</Label>
                                        </Col>
                                        <Col xs="6" lg="8">
                                            &nbsp;
                                    </Col>
                                        <Col xs="3" lg="2">
                                            <Label className="labelHeaderRight mt-3">Lembar Ke</Label>
                                        </Col>
                                        <Col xs="3" lg="2">
                                            <Input className="mt-3 text-center" type="text" value={this.state.lembar} disabled />
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </CardBody>
                        </Col>
                    </Row>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {/* <button className="btn btn-warning" onClick={this.props.clickBack}>Sebelumnya</button> */}
                        <button className="btn btn-info" onClick={this.handleNext}>Selanjutnya</button>
                    </div>
                </container-fluid>
            </>
        )
    }
}

export default Step1;