import React, { Component } from 'react';
import { CardBody, Col, Button, Row, FormGroup, Label, Input } from 'reactstrap';
import { POSITION } from '../../../../Constants/Position';
import TableEditCell from '../../../../Commons/Table/TableFooter';
import API012 from '../../../../../services/API012';
// import Swal from 'sweetalert2';
// import Select from 'react-select';

class Step1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blocking: true,
            collapse: true,
            fadeIn: true,
            timeout: 300,
            sumberAlokon: this.props.sumber_alokon,
            tableHead: [],
            datas: [],
        }
    }

    componentDidMount() {
        this.setHead();
        this.setDetail(this.props.id, this.props.bulan, this.props.sumber_alokon);
        // console.log('id=' + this.props.id)
        // console.log('bulan=' + this.props.bulan)
        // console.log('sumber_alokon=' + this.props.sumber_alokon)
    }

    // API 012
    setDetail(idTempat, idBulan, sumberAlokon) {
        this.setState({ blocking: true });
        this.setState({ datas2: [] });
        API012.get('siga/reg-mut-alo/getMutasialokonDetilBy?tempatid=' + idTempat + '&bulan=' + idBulan + '&sumberalokon=' + sumberAlokon)
            .then(res => {
                //   if(res.status === 200){ 
                // console.log(res, 'res');
                this.setState({ datas: this.state.datas.concat(res.data) });
                //   }
                this.setState({ blocking: false });
            }).catch((error) => {
                this.setState({ blocking: false });
                // Swal.fire({
                //     title: 'Error',
                //     icon: 'error',
                //     text: 'Please Check Your Network Connection.',
                // });
            });
    }

    maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
    }

    formatDate = (date) => {
        var d = new Date(date),
            day = '' + d.getDate(),
            month = '' + (d.getMonth() + 1),
            year = d.getFullYear();

        if (day.length < 2)
            day = '0' + day;
            if (month.length < 2)
            month = '0' + month;

        return [day, month, year].join('-');
    }

    // generateNumber = () => {
    //     var newDatas = this.state.datas;
    //     newDatas.map((item, index) => {
    //         item['nomor'] = index + 1;
    //     });
    //     this.setState({ datas: newDatas });
    // }

    setHead() {
        var headerColumns = [
            { width: "60", row: '0', rowSpan: '3', title: "NO.", dataField: "nomor", headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },
            { width: "100", row: '0', rowSpan: '3', title: "TANGGAL", dataFormat: "date", dataField: "tanggal", headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },
            { width: "60", row: '0', rowSpan: '3', title: "KODE", dataField: "kodemutasi", headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },
            { width: "180", row: '0', rowSpan: '3', title: "MUTASI ALOKON", dataField: "keterangan", headerAlign: POSITION.CENTER, dataAlign: POSITION.LEFT },

            { title: "ALOKON", row: '0', colSpan: '8', dataField: '#', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },

            { width: "80", row: '1', rowSpan: '2', title: "PIL (cycle)", dataField: "pil", headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },

            { width: "80", title: "SUNTIKAN (vial)", row: '1', colSpan: '2', dataField: '#', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },
            { width: "80", row: '2', colSpan: '1', title: "1 Bulanan", dataField: "suntikan1", headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },
            { width: "80", row: '2', colSpan: '1', title: "3 Bulanan", dataField: "suntikan3", headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },

            { width: "80", row: '1', rowSpan: '2', title: "KONDOM (lusin)", dataField: "kondom", headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },

            { width: "80", title: "IUD (buah)", row: '1', colSpan: '2', dataField: '#', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },
            { width: "80", row: '2', colSpan: '1', title: "Cut 380A", dataField: "iudcut", headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },
            { width: "80", row: '2', colSpan: '1', title: "Lain-lain", dataField: "iudlain", headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },

            { width: "80", title: "IMPLAN (set)", row: '1', colSpan: '2', dataField: '#', headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },
            { width: "80", row: '2', colSpan: '1', title: "1 Batang", dataField: "implan1", headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },
            { width: "80", row: '2', colSpan: '1', title: "2 Batang", dataField: "implan2", headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },
        ];
        this.setState({ tableHead: this.state.tableHead.concat(headerColumns) });
    }

    render() {

        const bulan = [" ", "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"][this.props.bulan]
        const ndate = this.props.menyetujui_tanggal;
        var tanggal = this.formatDate(ndate);


        const footerData = [
            [
                {
                    backgroundColor: "blue",
                    columnIndex: 3,
                    align: 'center',
                    formatter: (tableData) => {
                        return (
                            <strong>Total Penerimaan : </strong>
                        );
                    }
                },
                {
                    columnIndex: 4,
                    align: 'center',
                    formatter: (tableData) => {
                        let label = 0;
                        for (let i = 10, tableDataTotal = tableData.length; i < tableDataTotal; i++) {
                            label += tableData[i].pil;
                        }
                        return (
                            <strong>{label}</strong>
                        );
                    }
                },
                {
                    columnIndex: 5,
                    align: 'center',
                    formatter: (tableData) => {
                        let label = 0;
                        for (let i = 10, tableDataTotal = tableData.length; i < tableDataTotal; i++) {
                            label += tableData[i].suntikan1;
                        }
                        return (
                            <strong>{label}</strong>
                        );
                    }
                },
                {
                    columnIndex: 6,
                    align: 'center',
                    formatter: (tableData) => {
                        let label = 0;
                        for (let i = 10, tableDataTotal = tableData.length; i < tableDataTotal; i++) {
                            label += tableData[i].suntikan3;
                        }
                        return (
                            <strong>{label}</strong>
                        );
                    }
                },
                {
                    columnIndex: 7,
                    align: 'center',
                    formatter: (tableData) => {
                        let label = 0;
                        for (let i = 10, tableDataTotal = tableData.length; i < tableDataTotal; i++) {
                            label += tableData[i].kondom;
                        }
                        return (
                            <strong>{label}</strong>
                        );
                    }
                },
                {
                    columnIndex: 8,
                    align: 'center',
                    formatter: (tableData) => {
                        let label = 0;
                        for (let i = 10, tableDataTotal = tableData.length; i < tableDataTotal; i++) {
                            label += tableData[i].iudcut;
                        }
                        return (
                            <strong>{label}</strong>
                        );
                    }
                },
                {
                    columnIndex: 9,
                    align: 'center',
                    formatter: (tableData) => {
                        let label = 0;
                        for (let i = 10, tableDataTotal = tableData.length; i < tableDataTotal; i++) {
                            label += tableData[i].iudlain;
                        }
                        return (
                            <strong>{label}</strong>
                        );
                    }
                },
                {
                    columnIndex: 10,
                    align: 'center',
                    formatter: (tableData) => {
                        let label = 0;
                        for (let i = 10, tableDataTotal = tableData.length; i < tableDataTotal; i++) {
                            label += tableData[i].implan1;
                        }
                        return (
                            <strong>{label}</strong>
                        );
                    }
                },
                {
                    columnIndex: 11,
                    align: 'center',
                    formatter: (tableData) => {
                        let label = 0;
                        for (let i = 10, tableDataTotal = tableData.length; i < tableDataTotal; i++) {
                            label += tableData[i].implan2;
                        }
                        return (
                            <strong>{label}</strong>
                        );
                    }
                },
            ],
            [
                {
                    backgroundColor: "blue",
                    columnIndex: 3,
                    align: 'center',
                    formatter: (tableData) => {
                        return (
                            <strong>Total Pengeluaran : </strong>
                        );
                    }
                },
                {
                    columnIndex: 4,
                    align: 'center',
                    formatter: (tableData) => {
                        let label = 0;
                        for (let i = 1, tableDataTotal = tableData.length; i < tableDataTotal; i++) {
                            label += tableData[i].pil;
                        }
                        return (
                            <strong>{label}</strong>
                        );
                    }
                },
                {
                    columnIndex: 5,
                    align: 'center',
                    formatter: (tableData) => {
                        let label = 0;
                        for (let i = 1, tableDataTotal = tableData.length; i < tableDataTotal; i++) {
                            label += tableData[i].suntikan1;
                        }
                        return (
                            <strong>{label}</strong>
                        );
                    }
                },
                {
                    columnIndex: 6,
                    align: 'center',
                    formatter: (tableData) => {
                        let label = 0;
                        for (let i = 1, tableDataTotal = tableData.length; i < tableDataTotal; i++) {
                            label += tableData[i].suntikan3;
                        }
                        return (
                            <strong>{label}</strong>
                        );
                    }
                },
                {
                    columnIndex: 7,
                    align: 'center',
                    formatter: (tableData) => {
                        let label = 0;
                        for (let i = 1, tableDataTotal = tableData.length; i < tableDataTotal; i++) {
                            label += tableData[i].kondom;
                        }
                        return (
                            <strong>{label}</strong>
                        );
                    }
                },
                {
                    columnIndex: 8,
                    align: 'center',
                    formatter: (tableData) => {
                        let label = 0;
                        for (let i = 1, tableDataTotal = tableData.length; i < tableDataTotal; i++) {
                            label += tableData[i].iudcut;
                        }
                        return (
                            <strong>{label}</strong>
                        );
                    }
                },
                {
                    columnIndex: 9,
                    align: 'center',
                    formatter: (tableData) => {
                        let label = 0;
                        for (let i = 1, tableDataTotal = tableData.length; i < tableDataTotal; i++) {
                            label += tableData[i].iudlain;
                        }
                        return (
                            <strong>{label}</strong>
                        );
                    }
                },
                {
                    columnIndex: 10,
                    align: 'center',
                    formatter: (tableData) => {
                        let label = 0;
                        for (let i = 1, tableDataTotal = tableData.length; i < tableDataTotal; i++) {
                            label += tableData[i].implan1;
                        }
                        return (
                            <strong>{label}</strong>
                        );
                    }
                },
                {
                    columnIndex: 11,
                    align: 'center',
                    formatter: (tableData) => {
                        let label = 0;
                        for (let i = 1, tableDataTotal = tableData.length; i < tableDataTotal; i++) {
                            label += tableData[i].implan2;
                        }
                        return (
                            <strong>{label}</strong>
                        );
                    }
                },
            ],
            [
                {
                    backgroundColor: "blue",
                    columnIndex: 3,
                    align: 'center',
                    formatter: (tableData) => {
                        return (
                            <strong>Saldo Akhir : </strong>
                        );
                    }
                },
                {
                    columnIndex: 4,
                    align: 'center',
                    formatter: (tableData) => {
                        let label = 0;
                        for (let i = 1, tableDataTotal = tableData.length; i < tableDataTotal; i++) {
                            label += tableData[i].pil;
                        }
                        return (
                            <strong>{label}</strong>
                        );
                    }
                },
                {
                    columnIndex: 5,
                    align: 'center',
                    formatter: (tableData) => {
                        let label = 0;
                        for (let i = 0, tableDataTotal = tableData.length; i < tableDataTotal; i++) {
                            label += tableData[i].suntikan1;
                        }
                        return (
                            <strong>{label}</strong>
                        );
                    }
                },
                {
                    columnIndex: 6,
                    align: 'center',
                    formatter: (tableData) => {
                        let label = 0;
                        for (let i = 0, tableDataTotal = tableData.length; i < tableDataTotal; i++) {
                            label += tableData[i].suntikan3;
                        }
                        return (
                            <strong>{label}</strong>
                        );
                    }
                },
                {
                    columnIndex: 7,
                    align: 'center',
                    formatter: (tableData) => {
                        let label = 0;
                        for (let i = 0, tableDataTotal = tableData.length; i < tableDataTotal; i++) {
                            label += tableData[i].kondom;
                        }
                        return (
                            <strong>{label}</strong>
                        );
                    }
                },
                {
                    columnIndex: 8,
                    align: 'center',
                    formatter: (tableData) => {
                        let label = 0;
                        for (let i = 0, tableDataTotal = tableData.length; i < tableDataTotal; i++) {
                            label += tableData[i].iudcut;
                        }
                        return (
                            <strong>{label}</strong>
                        );
                    }
                },
                {
                    columnIndex: 9,
                    align: 'center',
                    formatter: (tableData) => {
                        let label = 0;
                        for (let i = 0, tableDataTotal = tableData.length; i < tableDataTotal; i++) {
                            label += tableData[i].iudlain;
                        }
                        return (
                            <strong>{label}</strong>
                        );
                    }
                },
                {
                    columnIndex: 10,
                    align: 'center',
                    formatter: (tableData) => {
                        let label = 0;
                        for (let i = 0, tableDataTotal = tableData.length; i < tableDataTotal; i++) {
                            label += tableData[i].implan1;
                        }
                        return (
                            <strong>{label}</strong>
                        );
                    }
                },
                {
                    columnIndex: 11,
                    align: 'center',
                    formatter: (tableData) => {
                        let label = 0;
                        for (let i = 0, tableDataTotal = tableData.length; i < tableDataTotal; i++) {
                            label += tableData[i].implan2;
                        }
                        return (
                            <strong>{label}</strong>
                        );
                    }
                },
            ]
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
                                            <Input type="text" id="text-input" className="text-center" name="text-input" value={this.props.nama_faskes} disabled />
                                            <Label className="labelHeader">Nama Faskes KB/Jaringan/Jejaring</Label>
                                        </Col>
                                        <Col lg="4">
                                            <Input style={{ marginRight: '5px', textAlign: 'center' }} type="text" id="text-input" name="text-input" value={this.props.kd_prov} disabled />
                                            <Label className="labelHeader">Kode Provinsi</Label>
                                        </Col>
                                        <Col lg="4">
                                            <Input style={{ marginRight: '5px', textAlign: 'center' }} type="text" id="text-input" name="text-input" value={this.props.kd_kab} disabled />
                                            <Label className="labelHeader">Kode Kabupapten/Kota</Label>
                                        </Col>
                                        <Col lg="4">
                                            <Input type="number" id="text-input" className="text-center" name="text-input" value={this.props.no_faskes} disabled />
                                            <Label className="labelHeader">No. Register Faskes KB</Label>
                                        </Col>
                                        <Col lg="4">
                                            <Input type="text" id="text-input" className="text-center" name="text-input" value={this.props.no_jaringan} disabled onInput={(e) => {
                                                e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 3)
                                            }} />
                                            <Label className="labelHeader">No. Jaringan/Jejaring Faskes KB</Label>
                                        </Col>
                                        <Col lg="4">
                                            <div style={{ float: 'left', width: '48%', marginRight: '4%' }}>
                                                <Input type="text" id="bulan" name="bulan" value={bulan} className="text-center" disabled />
                                            </div>
                                            <div style={{ float: 'left', width: '48%' }}>
                                                <Input type="text" id="bulan" name="bulan" value={this.props.tahun} className="text-center" disabled />
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

                                <FormGroup>
                                    <Row>
                                        <Col xs="4" lg="2">
                                            <Label>Sumber Alokon : </Label>
                                        </Col>
                                        <Col xs="6" lg="8" style={{ marginLeft: '19px' }}>
                                            <Row>
                                                <Col sm="2">
                                                    <Input type="radio" name="radio1" value="sumberAlokon" checked={this.state.sumberAlokon === '1'} /> 1. APBN
                                                </Col>
                                                <Col sm="2">
                                                    <Input type="radio" name="radio1" value="sumberAlokon" checked={this.state.sumberAlokon === '2'} /> 2. APBD
                                                </Col>
                                                <Col sm="3">
                                                    <Input type="radio" name="radio1" value="sumberAlokon" checked={this.state.sumberAlokon === '3'} /> 3. Mandiri
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </FormGroup>

                            </CardBody>
                        </Col>
                    </Row>

                    <FormGroup>
                        <Row>
                            <Col xs="12" md="12">
                                <TableEditCell
                                    tableHead={this.state.tableHead}
                                    datas={this.state.datas}
                                    footerData={footerData}
                                />
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
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
                    </FormGroup>

                    {/* Keterangan Kode:<br/>
                (1) Penerimaan<br/>
                (2) Pengeluaran untuk Pelayanan KB<br/>
                (3) Pengeluaran FKTP untuk distribusi alokon ke jaringan atau jejaring<br/>
                (4) Rusak<br/>
                (5) Kadaluarsa */}
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button className="btn btn-warning" onClick={this.props.buttonBack}>Sebelumnya</Button>
                    </div>

                </container-fluid>
            </>
        )
    }
}

export default Step1;