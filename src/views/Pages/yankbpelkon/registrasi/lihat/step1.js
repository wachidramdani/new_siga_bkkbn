import React, { Component } from 'react';
import { CardBody, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import Table2EditNoSearch from '../../../../Commons/Table/Table2EditNoSearch';
import API014 from '../../../../../services/API014';

class Step1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataPeserta: [],
            currentPage: 1,
            sizePerPage: 5,
        }
    }

    componentDidMount() {
        this.setPesertaKB(this.props.id, this.props.bulan);
    }

    handlePageChange = (page, sizePerPage) => {
        this.setState({ currentPage: page, sizePerPage: sizePerPage })
    }

    setPesertaKB(idTempat, idBulan) {
        this.setState({ blocking: true });
        this.setState({ dataKeluarga: [] });
        // API014.get('siga/reg-yan-kb/getListById/' + id)
        API014.get('siga/reg-yan-kb/getPelayananDetailByTempatIdDanBulan?tempatPelayananKBID=' + idTempat + '&bulan=' + idBulan)
            .then(res => {
                //   if(res.status === 200){ 
                // console.log(res);
                this.setState({ dataPeserta: this.state.dataPeserta.concat(res.data) });
                //   }
                this.setState({ blocking: false });
            }).catch((error) => {
                this.setState({ blocking: false });

            });
    }

    maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
    }

    formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    render() {

        const bulan = [" ", "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"][this.props.bulan]

        const ndate = this.props.menyetujui_tanggal;
        var tanggal = this.formatDate(ndate);

        function tglFormat(cell) {
            const today = new Date(cell)
            var dd = today.getDate();

            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }

            if (mm < 10) {
                mm = '0' + mm;
            }
            return mm + ' - ' + dd + ' - ' + yyyy;
        }

        const columnPeserta = [
            {
                dataField: '#',
                formatter: (cell, row, rowIndex) => {
                    let rowNumber = (this.state.currentPage - 1) * this.state.sizePerPage + (rowIndex + 1);
                    return <span>{rowNumber}</span>;
                },
                text: 'No',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '50px' };
                },
            },
            {
                dataField: 'tanggal',
                formatter: tglFormat,
                text: 'Tanggal',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'nik',
                text: 'NIK',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '130px' };
                },
            },
            {
                dataField: 'kki',
                text: 'KKI',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '150px' };
                },
            },
            {
                dataField: 'namaPesertaKB',
                text: 'Nama',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '180px' };
                },
            },
            {
                dataField: 'jenisKunjungan',
                text: 'Jenis Kunjungan',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '120px' };
                },
            },
            {
                dataField: 'keluhan',
                text: 'Keluhan',
                headerAlign: 'center',
                align: 'left',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '70px' };
                },
            },
            {
                dataField: 'jenisTindakan',
                text: 'Jenis Tindakan',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'penggunaanAsuransi',
                text: 'Penggunaan Asuransi',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '100px' };
                },
            },
            {
                dataField: 'sumberAlokon',
                text: 'Sumber Alokon',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '120px' };
                },
            },
        ];


        return (
            <>
                <container-fluid>
                    <Row>
                        <Col sm="12">
                            <h6>&nbsp; </h6>
                            {/* <div style={{ position: 'absolute', right: '15px', marginTop: '-25px', fontSize: '12px' }}>{this.props.currentStep}/{this.props.totalSteps}</div> */}
                            <CardBody className="card-body-nopad mt-3">
                                <FormGroup>
                                    <Row>
                                        <Col lg="4">
                                            <Input type="text" id="text-input" name="text-input" className="text-center" value={this.props.nama_faskes} disabled />
                                            <Label className="labelHeader">Nama Faskes KB/Jaringan/Jejaring</Label>
                                        </Col>
                                        <Col lg="4">
                                            <Input style={{ marginRight: '5px', textAlign: 'center' }} type="read-only" id="text-input" name="text-input" value={this.props.kd_prov} disabled />
                                            <Label className="labelHeader">Kode Provinsi</Label>
                                        </Col>
                                        <Col lg="4">
                                            <Input style={{ marginRight: '5px', textAlign: 'center' }} type="read-only" id="text-input" name="text-input" value={this.props.kd_kab} disabled />
                                            <Label className="labelHeader">Kode Kabupaten/Kota</Label>
                                        </Col>
                                        <Col lg="4">
                                            <Input type="number" id="text-input" name="text-input" className="text-center" value={this.props.no_faskes} disabled />
                                            <Label className="labelHeader">No. Register Faskes KB</Label>
                                        </Col>
                                        <Col lg="4">
                                            <Input type="number" id="text-input" name="text-input" className="text-center" value={this.props.no_jaringan} disabled
                                                onInput={(e) => {
                                                    e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 3)
                                                }} />
                                            <Label className="labelHeader">No. Jaringan/Jejaring Faskes KB</Label>
                                        </Col>
                                        <Col lg="4">
                                            <div style={{ float: 'left', width: '48%', marginRight: '4%' }}>
                                                <Input type="text" id="bulan" name="bulan" className="text-center" value={bulan} disabled />
                                                {/* <Select options={bulan}
                                                    defaultValue={{ label: "Juli", value: 7 }}
                                                /> */}
                                            </div>
                                            <div style={{ float: 'left', width: '48%' }}>
                                                <Input type="text" id="tahun" name="tahun" className="text-center" value={this.props.tahun} disabled />
                                                {/* <Select options={tahun}
                                                    defaultValue={{ label: "2020", value: 2020 }}
                                                /> */}
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
                                            <Input className="mt-3 text-center" type="text" id="text-input" name="text-input" value={this.props.lembar} disabled />
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </CardBody>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table2EditNoSearch
                                caption=''
                                keyF="nik"
                                tableHead={columnPeserta}
                                datas={this.state.dataPeserta}
                                handlePageChange={this.handlePageChange}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4" md="2">
                            <Label className="labelForm" htmlFor="text-input">Tempat</Label>
                        </Col>
                        <Col xs="8" md="4">
                            <Input type="text" id="text-input" name="text-input" className="text-center" value={this.props.menyetujui_tempat} disabled />
                        </Col>
                        <Col xs="4" md="2">
                            <Label className="labelForm" htmlFor="text-input">Tanggal</Label>
                        </Col>
                        <Col xs="8" md="4">
                            <Input type="text" id="text-input" name="text-input" className="text-center" value={tanggal} disabled />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="12">
                            <Label className="labelForm" htmlFor="text-input">Pimpinan Faskes KB/Jaringan/Jejaring,</Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4" md="2">
                            <Label className="labelForm" htmlFor="text-input">Nama</Label>
                        </Col>
                        <Col xs="8" md="4">
                            <Input type="text" id="text-input" name="text-input" className="text-center" value={this.props.menyetujui_nama} disabled />
                        </Col>
                        <Col xs="4" md="2">
                            <Label className="labelForm" htmlFor="text-input">NIP</Label>
                        </Col>
                        <Col xs="8" md="4">
                            <Input type="number" id="text-input" name="text-input" maxLength="18" onInput={this.maxLengthCheck} className="text-center" value={this.props.menyetujui_nip} disabled />
                        </Col>
                    </Row>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button className="btn btn-warning" onClick={this.props.finishButton}>Sebelumnya</button>
                    </div>
                </container-fluid>
            </>
        )
    }
}

export default Step1;