import React, { Component } from 'react';
import { Card, CardBody, Col, Button, Row, Badge,Label,FormGroup, Form, Input, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';

import Swal from 'sweetalert2';
import BlockUi from 'react-block-ui';
import btnBack from '../../../../../assets/img/btnBack.png';
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
                {"id":1, "issue":"BKL Jepun","desc":"BR. Batannyuh Kaja", "date":"2020-07-14", "status": "New", "priority": "Troubleshooting", "facility":"Block A", "valtype":"Increase Production", "attapp":"Known", "atttm":"2"},
                {"id":2, "issue":"BKL Melati","desc":"BR. Batanyuh Kelod", "date":"2020-07-13", "status": "New", "priority": "Fit For Purpose", "facility":"South Sokang", "valtype":"Reduce Cost", "attapp":"Known", "atttm":"5"},
                {"id":3, "issue":"BKL Anggrek","desc":"BR Umadiwang Kangin", "date":"2020-07-12", "status": "New", "priority": "Value Creation", "facility":"Block A", "valtype":"Reduce Cost", "attapp":"Limited", "atttm":"3"},
                {"id":4, "issue":"BKL Jempiring","desc":"BR Umadiwang Kawan", "date":"2020-07-11", "status": "New", "priority": "Troubleshooting", "facility":"Block A", "valtype":"Increase Production", "attapp":"Limited", "atttm":"7"},
                {"id":5, "issue":"BKL Mekar Sari","desc":"BR. Baru", "date":"2020-07-10", "status": "New", "priority": "Fit For Purpose", "facility":"South Natuna Sea Block B", "valtype":"Increase Production", "attapp":"Known", "atttm":"5"},
                {"id":6, "issue":"BKL Sandat","desc":"BR. Raden", "date":"2020-07-09", "status": "New", "priority": "Fit For Purpose", "facility":"South Natuna Sea Block B", "valtype":"Reduce Cost", "attapp":"New", "atttm":"4"},
                {"id":7, "issue":"BKL Tunas Mekar","desc":"BR. Cau", "date":"2020-07-08", "status": "New", "priority": "Troubleshooting", "facility":"Lematang", "valtype":"Increased Efficency", "attapp":"Known", "atttm":"6"},
                {"id":8, "issue":"BKL BR Bayan","desc":"BR. Bayan", "date":"2020-07-08", "status": "New", "priority": "Troubleshooting", "facility":"Lematang", "valtype":"Increased Efficency", "attapp":"Known", "atttm":"5"},
                {"id":9, "issue":"BKL Giri Kumara","desc":"Petiga Semingan", "date":"2020-07-06", "status": "New", "priority": "Troubleshooting", "facility":"Lematang", "valtype":"Increased Efficency", "attapp":"Known", "atttm":"5"},
                {"id":10, "issue":"BKL Kumara Santi","desc":"Petiga Kangin", "date":"2020-07-06", "status": "New", "priority": "Troubleshooting", "facility":"Lematang", "valtype":"Increased Efficency", "attapp":"Known", "atttm":"5"},
                {"id":11, "issue":"BKL Kumara Kanti","desc":"Petiga Belamban", "date":"2020-07-02", "status": "New", "priority": "Troubleshooting", "facility":"Lematang", "valtype":"Increased Efficency", "attapp":"Known", "atttm":"5"},
                {"id":12, "issue":"BKL Cempaka","desc":"BR. Kalibalang", "date":"2020-07-02", "status": "New", "priority": "Troubleshooting", "facility":"Lematang", "valtype":"Increased Efficency", "attapp":"Known", "atttm":"5"},
                {"id":13, "issue":"BKL Cempaka II","desc":"BR. Payangan Tengah", "date":"2020-06-28", "status": "New", "priority": "Troubleshooting", "facility":"Lematang", "valtype":"Increased Efficency", "attapp":"Known", "atttm":"5"},
                {"id":14, "issue":"BKL Teratai II","desc":"BR Geluntung Kaja", "date":"2020-06-22", "status": "New", "priority": "Troubleshooting", "facility":"Lematang", "valtype":"Increased Efficency", "attapp":"Known", "atttm":"5"},
                {"id":15, "issue":"BKL Teratai III","desc":"BR. Geluntung Kelod", "date":"2020-06-18", "status": "New", "priority": "Troubleshooting", "facility":"Lematang", "valtype":"Increased Efficency", "attapp":"Known", "atttm":"5"}
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
                                    <Badge style={{backgroundColor: 'white'}}>kd: 510207101</Badge>
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
                                    })()}></Badge>
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
            text: "Kembali ke halaman Kegiatan BKL?",
            icon: 'warning',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya!',
            confirmButtonColor: '#3085d6',
            showCancelButton: true,
        }).then((result) => {
            if (result.value) {       
                this.props.history.push('/kegiatan/kelompok_bkl');
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
                                        <div><span className="spanTitle">&#8226; Daftar Kelompok Kegiatan BKL</span></div>
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
                                            <ModalHeader toggle={ this.toggle }><i className="icon-clipboard6"></i> Detail POKTAN BKL</ModalHeader>
                                            <ModalBody>
                                            <Form>
                                                {/* <FormGroup>
                                                <Label >Kode</Label><br></br>
                                                <Label style={{padding: '15px', marginTop:'-25px'}}><b><i>117301506</i></b></Label>
                                                </FormGroup> */}
                                                <FormGroup >
                                                <Label>Nama Tempat KB</Label>
                                                <Col sm={8}>
                                                    <Label sm={12}><b>BKL Jepun</b><b><i> (510207101)</i></b></Label>
                                                </Col>
                                                </FormGroup>
                                                <FormGroup style={{marginTop: '-20px'}} row>
                                                <Label for="job_bpp" sm={4}>Lokasi</Label>
                                                <Col sm={8}>
                                                    <Label sm={12}><b>BR. Batannyuh Kaja, Marga, Tabanan, Bali</b></Label>
                                                </Col>
                                                </FormGroup>
                                                <FormGroup style={{marginTop: '-20px'}} row>
                                                <Label for="job_bpp" sm={4}>Pembina </Label>
                                                <Col sm={8}>
                                                    <Label sm={12}><b>I Nyoman Suwirya 510207B07 PKB/PLKB</b></Label>
                                                </Col>
                                                </FormGroup>

                                                <FormGroup style={{marginTop: '-20px'}} row>
                                                <Label for="size" sm={4}>SK Pengukuhan</Label>
                                                <Col sm={8}>
                                                    <Label sm={12}><b>Kepala Desa, 29-02-2016 No. 07 TAHUN 2016 </b></Label>
                                                </Col>
                                                </FormGroup>

                                                <FormGroup style={{marginTop: '-20px'}} row>
                                                <Label for="size" sm={4}>Sumber Dana Kegiatan Kelompok</Label>
                                                <Col sm={8}>
                                                    <Label sm={12}><b>Swadaya </b></Label>
                                                </Col>
                                                </FormGroup>

                                                <FormGroup style={{marginTop: '-20px'}} row>
                                                <Label for="size" sm={4}>Keterpadua Kelompok</Label>
                                                <Col sm={8}>
                                                    <Label sm={12}><b>Posyandu, PAUD </b></Label>
                                                </Col>
                                                </FormGroup>
                                                
                                                <FormGroup style={{marginTop: '-20px'}} row>
                                                <Label for="cust" sm={5}>Pengurus Kelomok</Label>
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
                                                                <Label className="labelForm">Jabatan</Label>
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
                                                                <Label className="labelForm"><b>Fulan 1</b></Label>
                                                            </Col>
                                                            <Col md="2" xs="3">
                                                                <Label className="labelForm"><b>Ketua</b></Label>
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
                                                                <Label className="labelForm"><b>Fulan 2</b></Label>
                                                            </Col>
                                                            <Col md="2" xs="3">
                                                                <Label className="labelForm"><b>Sekertaris</b></Label>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </FormGroup>

                                                <FormGroup style={{marginTop: '-20px'}} row>
                                                <Label for="size" sm={4}>Persetujuan</Label>
                                                <Col sm={8}>
                                                    <Label sm={12}><b>Marga, 01 Oktober 2018 </b></Label>
                                                </Col>
                                                </FormGroup>

                                                <FormGroup style={{marginTop: '-20px', marginLeft:'1px'}} row>
                                                    <Col sm={12}>
                                                        <Row>
                                                            <Col md="5" xs="6">
                                                                <Label className="labelForm">Pembina Kelompok</Label>
                                                            </Col>
                                                            <Col md="5" xs="6">
                                                                <Label className="labelForm">Ketua Kelompok</Label>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </FormGroup>

                                                <FormGroup style={{marginTop: '-20px', marginLeft:'1px'}} row>
                                                    <Col sm={12}>
                                                        <Row>
                                                            <Col md="5" xs="6">
                                                                <Label className="labelForm"><b>I Nyoman Suwirya</b></Label>
                                                            </Col>
                                                            <Col md="5" xs="6">
                                                                <Label className="labelForm"><b>Dewa Ayu Dwi Ariani</b></Label>
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
