import React, { Component } from 'react';
import { Card, CardBody, Col, Button, Row, Badge,Label,FormGroup, Form, Input, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';

import Swal from 'sweetalert2';
import BlockUi from 'react-block-ui';
import btnBack from '../../../../assets/img/btnBack.png';
import ReactPaginate from 'react-paginate';

class Daftar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            modal: false,
            blocking: false,
            status: 'Closed',
            fadeIn: true,
            timeout: 300,
            offset: 0,
            perPage: 6,
            currentPage: 0,
            data: [
                {"id":1, "issue":"BPM Yanti Am.Keb","desc":"01010101001", "date":"2020-07-14", "status": "New", "priority": "Troubleshooting", "facility":"Block A", "valtype":"Increase Production", "attapp":"Known", "atttm":"2"},
                {"id":2, "issue":"Pustu Cot Keueung","desc":"1010101010", "date":"2020-07-13", "status": "New", "priority": "Fit For Purpose", "facility":"South Sokang", "valtype":"Reduce Cost", "attapp":"Known", "atttm":"5"},
                {"id":3, "issue":"Puskesmas Lhoong","desc":"020202020202", "date":"2020-07-12", "status": "New", "priority": "Value Creation", "facility":"Block A", "valtype":"Reduce Cost", "attapp":"Limited", "atttm":"3"},
                {"id":4, "issue":"Puskesmas Lhoknga","desc":"1121121121222", "date":"2020-07-11", "status": "New", "priority": "Troubleshooting", "facility":"Block A", "valtype":"Increase Production", "attapp":"Limited", "atttm":"7"},
                {"id":5, "issue":"Puskesmas Blang Bintang","desc":"03030030303", "date":"2020-07-10", "status": "New", "priority": "Fit For Purpose", "facility":"South Natuna Sea Block B", "valtype":"Increase Production", "attapp":"Known", "atttm":"5"},
                {"id":6, "issue":"Puskesmas Lampisang","desc":"04040404040404", "date":"2020-07-09", "status": "New", "priority": "Fit For Purpose", "facility":"South Natuna Sea Block B", "valtype":"Reduce Cost", "attapp":"New", "atttm":"4"},
                {"id":7, "issue":"RSUD Aceh Besar","desc":"05050505055", "date":"2020-07-08", "status": "New", "priority": "Troubleshooting", "facility":"Lematang", "valtype":"Increased Efficency", "attapp":"Known", "atttm":"6"},
                {"id":8, "issue":"KKB Indrapuri","desc":"Jalan Lawu, Blang Bintang", "date":"2020-07-08", "status": "New", "priority": "Troubleshooting", "facility":"Lematang", "valtype":"Increased Efficency", "attapp":"Known", "atttm":"5"},
                {"id":9, "issue":"Puskesmas Lampupok","desc":"0606060606", "date":"2020-07-06", "status": "New", "priority": "Troubleshooting", "facility":"Lematang", "valtype":"Increased Efficency", "attapp":"Known", "atttm":"5"},
                {"id":10, "issue":"Puskesmas Mesjid Raya","desc":"Jalan Siang, Suka Makmur", "date":"2020-07-06", "status": "New", "priority": "Troubleshooting", "facility":"Lematang", "valtype":"Increased Efficency", "attapp":"Known", "atttm":"5"},
                {"id":11, "issue":"Puskesmas Leupung","desc":"070707070707", "date":"2020-07-02", "status": "New", "priority": "Troubleshooting", "facility":"Lematang", "valtype":"Increased Efficency", "attapp":"Known", "atttm":"5"},
                {"id":12, "issue":"Pustu Jeumpet","desc":"Jalan Anggrek, Darul Imarah", "date":"2020-07-02", "status": "New", "priority": "Troubleshooting", "facility":"Lematang", "valtype":"Increased Efficency", "attapp":"Known", "atttm":"5"},
                {"id":13, "issue":"Puskesmas Ie Alang","desc":"0808080808080", "date":"2020-06-28", "status": "New", "priority": "Troubleshooting", "facility":"Lematang", "valtype":"Increased Efficency", "attapp":"Known", "atttm":"5"},
                {"id":14, "issue":"Puskesmas Kuta Cot Glie","desc":"Jalan Pagi, Kuta Cot Glie", "date":"2020-06-22", "status": "New", "priority": "Troubleshooting", "facility":"Lematang", "valtype":"Increased Efficency", "attapp":"Known", "atttm":"5"},
                {"id":15, "issue":"Pustu Punie","desc":"090909090909", "date":"2020-06-18", "status": "New", "priority": "Troubleshooting", "facility":"Lematang", "valtype":"Increased Efficency", "attapp":"Known", "atttm":"5"}
            ]
        };
    }

    detailTempatPelayananKB = () => {
        this.setState({modal: !this.state.modal})
    }

    toggle = () => {
        this.setState({modal: !this.state.modal});
    }

    componentDidMount() {
        this.receivedData()
    }

    receivedData= () => {
        const slice = this.state.data.slice(this.state.offset, this.state.offset + this.state.perPage)
        const postData = slice.map(row => 
            <React.Fragment>
                <Col xs="6" lg="3">
                    <div onClick={this.detailTempatPelayananKB} >
                    <div></div>
                    {/* <div onClick={() => {this.props.history.push({
                            pathname: '/evaluation/action',
                            id: row.id,
                            })}} >
                    <div> */}
                        <Card>
                            <CardBody className="customBox">
                                <div className="cbnumber">
                                    {row.id}
                                    <Badge style={{backgroundColor: 'white'}}>KD Prov: 11, KD Kab: 06</Badge>
                                    {/* <Badge color={(() => {
                                        switch (row.status) {
                                            case "New":   return "success";
                                            case "Pending": return "danger";
                                            default:      return "primary";
                                        }
                                    })()}>{row.status}</Badge> */}
                                </div>
                                <div className="cbissue">
                                    {row.issue}<br/>
                                    <span className="cbdesc">{row.desc}</span><br/>
                                </div>
                                <div>
                                    <Badge color={(() => {
                                        switch (row.status) {
                                            case "New":   return "success";
                                            case "Pending": return "danger";
                                            default:      return "primary";
                                        }
                                    })()}>{row.atttm}</Badge>
                                </div>
                                <div className="cbdate">{row.date}</div>
                            </CardBody>
                        </Card>
                    </div>
                </Col>
            </React.Fragment>
        )

        this.setState({
            pageCount: Math.ceil(this.state.data.length / this.state.perPage),
            postData
        })
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

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
                this.props.history.push('/pendaftaran');
            }
        });
    }

    render() {
        return (
            <div className="animated fadeIn">
                <BlockUi tag="div" blocking={this.state.blocking}>
                    <Row>
                        <Col xs="12" md="12">
                            <Card>
                                <CardBody>
                                    <div className="divTitleRight">
                                        <div className="divImg"><img src={btnBack} onClick={this.handleBack} alt=""  style={{width: '28px', height: '28px'}}/></div>
                                        <div><span className="spanTitle">&#8226; Daftar Pelayanan KB</span></div>
                                    </div>
                                    <div className="filterSearchPag">
                                        <Input type="text" placeholder="Pencarian"
                                            style={{ width:'140px', height: '29px', float: 'left', fontSize: '12px' }} />
                                        <Button className="btn-vine btn-brand btn-sm" onClick={this.toggleFilter} style={{marginLeft:'-26px'}}><i className="icon-filter4"> </i></Button>
                                    </div>
                                    <ReactPaginate
                                            previousLabel={"<"}
                                            nextLabel={">"}
                                            breakLabel={"..."}
                                            breakClassName={"break-me"}
                                            pageCount={this.state.pageCount}
                                            marginPagesDisplayed={0}
                                            pageRangeDisplayed={3}
                                            onPageChange={this.handlePageClick}
                                            containerClassName={"pagination paginationx"}
                                            subContainerClassName={"pages paginationx"}
                                            activeClassName={"active"}/>
                                    <Row>
                                        {this.state.postData}
                                    </Row>

                                    <Row>
                                    <Modal isOpen={ this.state.modal } toggle={ this.toggle } className='modal-md modal-dialog modal-primary' backdrop="static">
                                            <ModalHeader toggle={ this.toggle }><i className="icon-clipboard6"></i> Detail Faskes KB</ModalHeader>
                                            <ModalBody>
                                            <Form>
                                                {/* <FormGroup>
                                                <Label >Kode</Label><br></br>
                                                <Label style={{padding: '15px', marginTop:'-25px'}}><b><i>117301506</i></b></Label>
                                                </FormGroup> */}
                                                <FormGroup >
                                                <Label>Nama Tempat KB</Label>
                                                <Col sm={8}>
                                                    <Label sm={12}><b>BPM Yanti Am.Keb</b><b><i> (117301506)</i></b></Label>
                                                </Col>
                                                </FormGroup>
                                                <FormGroup style={{marginTop: '-20px'}} row>
                                                <Label for="job_bpp" sm={4}>Lokasi</Label>
                                                <Col sm={8}>
                                                    <Label sm={12}><b>JL Kenari Lk2, Banda Masem, Banda Sakti, Kota Lhoksumawe, Aceh</b></Label>
                                                </Col>
                                                </FormGroup>
                                                <FormGroup style={{marginTop: '-20px'}} row>
                                                <Label for="job_bpp" sm={4}>Jenis Faskes KB </Label>
                                                <Col sm={8}>
                                                    <Label sm={12}><b>Faskes, Klinik Pratama</b></Label>
                                                </Col>
                                                </FormGroup>

                                                <FormGroup style={{marginTop: '-20px'}} row>
                                                <Label for="size" sm={4}>Kepemilikan</Label>
                                                <Col sm={8}>
                                                    <Label sm={12}><b>Swasta, Bekerja Sama Dengan BPJS Kesehatan </b></Label>
                                                </Col>
                                                </FormGroup>
                                                
                                                <FormGroup style={{marginTop: '-20px'}} row>
                                                <Label for="cust" sm={5}>Sarana Dan Perlengkapan</Label>
                                                </FormGroup>
                                                <FormGroup style={{marginTop: '-20px', marginLeft:'1px'}} row>
                                                    <Col sm={12}>
                                                        <Row>
                                                            <Col md="5" xs="6">
                                                                <Label className="labelForm"><b>Tensimeter & Steroskop</b></Label>
                                                            </Col>
                                                            <Col md="2" xs="3">
                                                                <Label className="labelForm"><b>3</b></Label>
                                                            </Col>
                                                            <Col md="2" xs="3">
                                                                <Label className="labelForm"><b>SET</b></Label>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup style={{marginTop: '-20px', marginLeft:'1px'}} row>
                                                    <Col sm={12}>
                                                        <Row>
                                                            <Col md="5" xs="6">
                                                                <Label className="labelForm"><b>Strelisator</b></Label>
                                                            </Col>
                                                            <Col md="2" xs="3">
                                                                <Label className="labelForm"><b>2</b></Label>
                                                            </Col>
                                                            <Col md="2" xs="3">
                                                                <Label className="labelForm"><b>Unit</b></Label>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup style={{marginTop: '-20px', marginLeft:'1px'}} row>
                                                    <Col sm={12}>
                                                        <Row>
                                                            <Col md="5" xs="6">
                                                                <Label className="labelForm"><b>Timbangan Berat Badan</b></Label>
                                                            </Col>
                                                            <Col md="2" xs="3">
                                                                <Label className="labelForm"><b>1</b></Label>
                                                            </Col>
                                                            <Col md="2" xs="3">
                                                                <Label className="labelForm"><b>Unit</b></Label>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </FormGroup>
                                                
                                                <FormGroup style={{marginTop: '-20px'}} row>
                                                <Label for="cust" sm={5}>Tenaga</Label>
                                                </FormGroup>
                                                <FormGroup style={{marginTop: '-20px', marginLeft:'1px'}} row>
                                                    <Col sm={12}>
                                                        <Row>
                                                            <Col md="5" xs="6">
                                                                <Label className="labelForm">NIK</Label>
                                                            </Col>
                                                            <Col md="2" xs="3">
                                                                <Label className="labelForm">Nama</Label>
                                                            </Col>
                                                            <Col md="2" xs="3">
                                                                <Label className="labelForm">Profesi</Label>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup style={{marginTop: '-20px', marginLeft:'1px'}} row>
                                                    <Col sm={12}>
                                                        <Row>
                                                            <Col md="5" xs="6">
                                                                <Label className="labelForm"><b>3175092502941001</b></Label>
                                                            </Col>
                                                            <Col md="2" xs="3">
                                                                <Label className="labelForm"><b>Tenaga 1</b></Label>
                                                            </Col>
                                                            <Col md="2" xs="3">
                                                                <Label className="labelForm"><b>Dokter</b></Label>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup style={{marginTop: '-20px', marginLeft:'1px'}} row>
                                                    <Col sm={12}>
                                                        <Row>
                                                            <Col md="5" xs="6">
                                                                <Label className="labelForm"><b>3175092502941002</b></Label>
                                                            </Col>
                                                            <Col md="2" xs="3">
                                                                <Label className="labelForm"><b>Tenaga 2</b></Label>
                                                            </Col>
                                                            <Col md="2" xs="3">
                                                                <Label className="labelForm"><b>Admin</b></Label>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </FormGroup>

                                                <FormGroup style={{marginTop: '-20px'}} row>
                                                <Label for="size" sm={4}>Persetujuan</Label>
                                                <Col sm={8}>
                                                    <Label sm={12}><b>Kota Lhoksumawe, 31 May 2018 </b></Label>
                                                </Col>
                                                </FormGroup>

                                                <FormGroup style={{marginTop: '-20px', marginLeft:'1px'}} row>
                                                    <Col sm={12}>
                                                        <Row>
                                                            <Col md="5" xs="6">
                                                                <Label className="labelForm">Kepala OPD Kab/Kota/Pimpinan Faskes</Label>
                                                            </Col>
                                                            <Col md="5" xs="6">
                                                                <Label className="labelForm">Pimpinan Faskes/Jaringan/Jejaring</Label>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </FormGroup>

                                                <FormGroup style={{marginTop: '-20px', marginLeft:'1px'}} row>
                                                    <Col sm={12}>
                                                        <Row>
                                                            <Col md="5" xs="6">
                                                                <Label className="labelForm"><b>Dra.Mariana Affan, MM</b></Label>
                                                            </Col>
                                                            <Col md="5" xs="6">
                                                                <Label className="labelForm"><b>Yanti, Am.Keb</b></Label>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </FormGroup>

                                                <FormGroup style={{marginTop: '-20px', marginLeft:'1px'}} row>
                                                    <Col sm={12}>
                                                        <Row>
                                                            <Col md="5" xs="6">
                                                                <Label className="labelForm"><b>196306121990032002</b></Label>
                                                            </Col>
                                                            <Col md="5" xs="6">
                                                                <Label className="labelForm"><b>000000000000000000</b></Label>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </FormGroup>
                                                   
                                                </Form>
                                            </ModalBody>
                                        </Modal>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </BlockUi>
            </div >
        );
    }
}

export default Daftar;
