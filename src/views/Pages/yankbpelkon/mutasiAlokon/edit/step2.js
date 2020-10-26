import React, { Component } from 'react';
import { CardBody, Row, Col, Button, FormGroup, Label, Input } from 'reactstrap';
import Select from 'react-select';
import TableEditCell from '../../../../Commons/Table/TableFooter';
import { POSITION } from '../../../../Constants/Position';
import API012 from '../../../../../services/API012';
import Swal from 'sweetalert2';

class Step2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blocking: true,
            collapse: true,
            fadeIn: true,
            timeout: 300,
            tableHead: [],
            date: new Date(),
            datas: [
                { id: 1, no: '1', tanggal: '', kode: '', mutasi_alokon: 'SALDO AWAL', pil: 0, satu_bul: 0, dua_bul: 0, kondom: 0, cut: 0, lain2: 0, satu_bat: 0, dua_bat: 0 },
                // { id: 2, no: '2', tanggal: '01/07/2020', kode: '54352', mutasi_alokon: 'Saldo Awal', pil: 15, satu_bul: 20, dua_bul: 43, kondom: 32, cut: 12, lain2: 87, satu_bat: 64, dua_bat: 76 },
                // { id: 3, no: '3', tanggal: '01/07/2020', kode: '23443', mutasi_alokon: 'Saldo Awal', pil: 24, satu_bul: 20, dua_bul: 43, kondom: 32, cut: 12, lain2: 87, satu_bat: 64, dua_bat: 76 },
                // { id: 4, no: '4', tanggal: '01/07/2020', kode: '13452', mutasi_alokon: 'Saldo Awal', pil: 44, satu_bul: 20, dua_bul: 43, kondom: 32, cut: 12, lain2: 87, satu_bat: 64, dua_bat: 76 },
                // { id: 5, no: '5', tanggal: '01/07/2020', kode: '66747', mutasi_alokon: 'Saldo Awal', pil: 33, satu_bul: 20, dua_bul: 43, kondom: 32, cut: 12, lain2: 87, satu_bat: 64, dua_bat: 76 },
            ],
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        this.setHead();
        this.setBody();
    }

    // API 012
    setBody() {
        this.setState({ blocking: true });
        this.setState({ datas: [] });
        API012.get('siga/reg-mut-alo/datRegisterAlokonDetil/')
            .then(res => {
                //   if(res.status === 200){ 
                // console.log(res);
                this.setState({ datas: this.state.datas.concat(res.data) });
                //   }
                this.setState({ blocking: false });
            }).catch((error) => {
                this.setState({ blocking: false });
                Swal.fire({
                    title: 'Error',
                    icon: 'error',
                    text: 'Please Check Your Network Connection.',
                });
            });
    }

    handleSelect(key) {
        console.log('selected' + key);
        this.setState({ key: key });
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleFade() {
        this.setState((prevState) => { return { fadeIn: !prevState } });
    }

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
        const ja = [
            { value: '0', label: 'Suntikan 1 Bulanan' },
            { value: '1', label: 'Suntikan 3 Bulanan' },
            { value: '2', label: 'PIL' },
            { value: '3', label: 'Kondom' },
            { value: '4', label: 'Implan 1 Batang' },
            { value: '5', label: 'Implan 2 Batang' },
            { value: '6', label: 'IUD Cut 380A' },
            { value: '7', label: 'IUD Lain-lain' }
        ]

        const kma = [
            { value: '0', label: '0. Saldo Awal' },
            { value: '1', label: '1. Penerimaan' },
            { value: '2', label: '2. Pengeluaran Untuk Pelayanan KB' },
            { value: '3', label: '3. Pengeluaran Faskes KB Untuk Distribusi Alokon Ke Jaringan/Jejaring' },
            { value: '4', label: '4. Rusak' },
            { value: '5', label: '5. Kadaluarsa' },
        ]

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
                        for (let i = 0, tableDataTotal = tableData.length; i < tableDataTotal; i++) {
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
                        for (let i = 0, tableDataTotal = tableData.length; i < tableDataTotal; i++) {
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
                        for (let i = 0, tableDataTotal = tableData.length; i < tableDataTotal; i++) {
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
                            <div style={{ position: 'absolute', right: '15px', marginTop: '-25px', fontSize: '12px' }}>{this.props.currentStep}/{this.props.totalSteps}</div>
                            <CardBody className="card-body-nopad mt-3">
                                <FormGroup>
                                    <Row>
                                        <Col xs="4" lg="2">
                                            <Label>Sumber Alokon : </Label>
                                        </Col>
                                        <Col xs="6" lg="8" style={{ marginLeft: '19px' }}>
                                            <Row>
                                                <Col sm="2">
                                                    <Input type="radio" name="radio1" />{' '} 1. APBN
                                            </Col>
                                                <Col sm="2">
                                                    <Input type="radio" name="radio1" />{' '} 2. APBD
                                            </Col>
                                                <Col sm="3">
                                                    <Input type="radio" name="radio1" />{' '} 3. Mandiri
                                            </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col xs="4" md="2">
                                            <Label className="labelForm" htmlFor="text-input">Tanggal</Label>
                                        </Col>
                                        <Col xs="8" md="2">
                                            <Input
                                                type="date"
                                                name="date"
                                                id="exampleDate"
                                                placeholder="date placeholder"
                                            />
                                        </Col>
                                        <Col xs="4" md="8">
                                            <Button className="btn btn-info btn-add" onClick={this.handleClickOpen}> <i className="icon-plus3 d-inline mr-1"></i> Tambah </Button>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col xs="4" lg="2">
                                            <Label className="labelForm">Mutasi Alokon</Label>
                                        </Col>
                                        <Col xs="8" lg="2">
                                            <Select options={kma} isClearable={kma} />
                                        </Col>
                                        <Col xs="4" lg="2">
                                            <Label className="labelForm">Jenis Alokon</Label>
                                        </Col>
                                        <Col xs="8" lg="2">
                                            <Select options={ja} isClearable={ja} />
                                        </Col>
                                        <Col xs="4" lg="2">
                                            <Label className="labelForm">Jumlah</Label>
                                        </Col>
                                        <Col xs="8" lg="2">
                                            <Input type="number" id="text-input" name="text-input" placeholder="Ketik disini..." />
                                        </Col>
                                    </Row>
                                </FormGroup>
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
                            </CardBody>
                        </Col>
                    </Row>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button className="btn btn-warning" onClick={this.props.previousStep}>Sebelumnya</Button>
                        <Button className="btn btn-info" onClick={this.props.nextStep}>Selanjutnya</Button>
                    </div>
                </container-fluid>
            </>
        )
    }
}

export default Step2;