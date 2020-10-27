import React, { Component } from 'react';
import { CardBody, Row, Col, Button, FormGroup, Label, Input } from 'reactstrap';
import Select from 'react-select';
import TableEditCell from '../../../../Commons/Table/TableFooter';
import { POSITION } from '../../../../Constants/Position';
import API012 from '../../../../../services/API012';
import Swal from 'sweetalert2';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

class Step2 extends Component {
    constructor(props) {
        super(props);

        var today = new Date(),
            date = ("0" + today.getDate()).slice(-2) + '-' + ("0" + (today.getMonth() + 1)).slice(-2) + '-' + today.getFullYear();

        this.state = {
            blocking: false,
            collapse: true,
            fadeIn: true,
            timeout: 300,
            sumberAlokon: '',
            jenisAlokon: null,
            jumlah: 0,
            tableHead: [],
            date: date,
            datas: [{
                nomor: 1,
                id: '0',
                tanggal: date,
                kodemutasi: '',
                keterangan: 'SALDO AWAL',
                pil: 0,
                suntikan1: 0,
                suntikan3: 0,
                kondom: 0,
                iudcut: 0,
                iudlain: 0,
                implan1: 0,
                implan2: 0,
            }],

            showMutasiAlokon: [],
            disableMutasiAlokon: true,
            kodeMutasiAlokon: [
                { value: '0', label: 'Saldo Awal', sumberAlokon: 'apbn' },

                { value: '1', label: 'Penerimaan', sumberAlokon: 'apbd' },
                { value: '2', label: 'Pengeluaran Untuk Pelayanan KB', sumberAlokon: 'apbd' },
                { value: '3', label: 'Pengeluaran Faskes KB Untuk Distribusi Alokon Ke Jaringan/Jejaring', sumberAlokon: 'apbd' },
                { value: '4', label: 'Rusak', sumberAlokon: 'apbd' },
                { value: '5', label: 'Kadaluarsa', sumberAlokon: 'apbd' },


                { value: '1', label: 'Penerimaan', sumberAlokon: 'mandiri' },
                { value: '2', label: 'Pengeluaran Untuk Pelayanan KB', sumberAlokon: 'mandiri' },
                { value: '3', label: 'Pengeluaran Faskes KB Untuk Distribusi Alokon Ke Jaringan/Jejaring', sumberAlokon: 'mandiri' },
                { value: '4', label: 'Rusak', sumberAlokon: 'mandiri' },
                { value: '5', label: 'Kadaluarsa', sumberAlokon: 'mandiri' },
            ],
            valueMutasi: [],

            disableJenisAlokon: true,
            disableJumlah: true,
            disableButtonTambah: true,
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        this.setHead();
        // this.setBody();
        // this.setDetail(this.props.id, this.props.bulan, this.props.sumber_alokon);
    }

    // API 012
    setBody = (id) => {
        this.setState({ blocking: true });
        this.setState({ datas: [] });
        API012.get('siga/reg-mut-alo/getMutasialokonDetilByTempatId/' + id)
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

    // API 012
    // setDetail(idTempat, idBulan, sumberAlokon) {
    //     this.setState({ blocking: true });
    //     this.setState({ datas2: [] });
    //     API012.get('siga/reg-mut-alo/getMutasialokonDetilBy?tempatPelayananKBID=' + idTempat + '&bulan=' + idBulan + '&sumberAlokon=' + sumberAlokon)
    //         .then(res => {
    //             //   if(res.status === 200){ 
    //             // console.log(res, 'res');
    //             this.setState({ datas: this.state.datas.concat(res.data) });
    //             //   }
    //             this.setState({ blocking: false });
    //         }).catch((error) => {
    //             this.setState({ blocking: false });
    //             Swal.fire({
    //                 title: 'Error',
    //                 icon: 'error',
    //                 text: 'Please Check Your Network Connection.',
    //             });
    //         });
    // }

    handleChange = (e) => {
        this.setState({
            keterangan: e
        })
    }

    handleSelect(key) {
        // console.log('selected' + key);
        this.setState({ key: key });
    }

    handleSumber = (e) => {
        this.setState({
            sumberAlokon: e.target.value,
            disableMutasiAlokon: false,
            showMutasiAlokon: this.state.kodeMutasiAlokon.filter(item => item.sumberAlokon === e.target.value),
        });
    }

    handleMutasi = (e) => {
        if (e) {
            this.setState({
                keterangan: e,
                disableJenisAlokon: false,
                jenisAlokon: null,
                disableJumlah: true,
                jumlah: 0,
                disableButtonTambah: true,
                valueMutasi: e,
            });
            if (this.state.sumberAlokon === 'apbn') {
                this.setState({
                    showMutasiAlokon: this.state.kodeMutasiAlokon.filter(item => item.sumberAlokon === 'apbn'),
                })
            }
        }
        else {
            this.setState({
                keterangan: e,
                disableJenisAlokon: true,
                jenisAlokon: null,
                disableJumlah: true,
                jumlah: 0,
                disableButtonTambah: true,
                valueMutasi: [],
            })
        }
    }

    handleJenisAlokon = (e) => {
        if (e) {
            this.setState({
                jenisAlokon: e,
                disableJumlah: false,
                disableButtonTambah: true,
            })
        }
        else {
            this.setState({
                disableJumlah: true,
                jumlah: 0,
                disableButtonTambah: true,
            })
        }
    }

    handleJumlah = (e) => {
        if (e) {
            this.setState({

                jumlah: e.target.value,
                disableButtonTambah: false,
            })
        }
        else {
            this.setState({
                disableButtonTambah: true,
            })
        }
    }

    generateNumber = () => {
        var newDatas = this.state.datas;
        newDatas.forEach((item, index) => {
            item['nomor'] = index + 1;
        });
        // newDatas.map((item, index) => {
        //     item['nomor'] = index + 1;
        // });
        this.setState({ datas: newDatas });
    }

    handleTambah = () => {
        console.log(this.state.mutasiAlokon, 'tes');
        var newDatas = [
            {
                tanggal: this.state.date,
                kodemutasi: this.state.keterangan.value,
                keterangan: this.state.keterangan.label,
                pil: this.state.jenisAlokon.value === '2' ? this.state.jumlah : 0,
                suntikan1: this.state.jenisAlokon.value === '0' ? this.state.jumlah : 0,
                suntikan3: this.state.jenisAlokon.value === '1' ? this.state.jumlah : 0,
                kondom: this.state.jenisAlokon.value === '3' ? this.state.jumlah : 0,
                iudcut: this.state.jenisAlokon.value === '6' ? this.state.jumlah : 0,
                iudlain: this.state.jenisAlokon.value === '7' ? this.state.jumlah : 0,
                implan1: this.state.jenisAlokon.value === '4' ? this.state.jumlah : 0,
                implan2: this.state.jenisAlokon.value === '5' ? this.state.jumlah : 0,
            }
        ];
        this.setState({
            datas: this.state.datas.concat(newDatas),
            date: this.state.date, kode: '', keterangan: '', pil: '',
            suntikan1: '', suntikan3: '', kondom: '', iudcut: '',
            iudlain: '', implan1: '', implan2: '',
            sumberAlokon: '',
            jenisAlokon: '',
            jumlah: 0,
            disableMutasiAlokon: true,
            disableJenisAlokon: true,
            disableJumlah: true,
        },
            () => { this.generateNumber(); }
        )
    }

    handleActionTable = (e, row) => {
        e.preventDefault();
        this.setState({ blocking: true });
        Swal.fire({
            title: 'Delete Data',
            text: "Are you sure to delete this data?",
            icon: 'warning',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!',
            confirmButtonColor: '#3085d6',
            showCancelButton: true,
        }).then((result) => {
            if (result.value) {
                this.setState(prevState => ({
                    datas: prevState.datas.filter(data => data.nomor !== row.nomor)
                }),
                    () => {
                        Swal.fire({
                            title: 'Success!',
                            icon: 'success',
                            text: 'Delete Success.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                            .then(this.generateNumber)
                        this.setState({ blocking: false });
                    }
                );
            } else {
                this.setState({ blocking: false });
            }
        });
    }

    setHead() {
        var headerColumns = [
            { width: "60", row: '0', rowSpan: '3', title: "NO.", dataField: "nomor", headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },
            { width: "100", row: '0', rowSpan: '3', title: "TANGGAL", dataFormat: "date", dataField: "tanggal", headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },
            { width: "60", row: '0', rowSpan: '3', title: "KODE", dataField: "kodemutasi", headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },
            { width: "380", row: '0', rowSpan: '3', title: "MUTASI ALOKON", dataField: "keterangan", headerAlign: POSITION.CENTER, dataAlign: POSITION.LEFT },

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

            { width: "80", row: '1', rowSpan: '2', title: "AKSI", dataFormat: 'action', dataField: "aksi", headerAlign: POSITION.CENTER, dataAlign: POSITION.CENTER },
        ];
        this.setState({ tableHead: this.state.tableHead.concat(headerColumns) });
    }

    render() {
        console.log(this.state.disableJumlah)
        console.log(this.state.disableButtonTambah)

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
                        if (this.state.keterangan === 1) {
                            for (let i = 0, tableDataTotal = tableData.length; i < tableDataTotal; i++) {
                                label += parseInt(tableData[i].pil);
                            }
                        } else {
                            for (let i = 0, tableDataTotal = tableData.length; i < tableDataTotal; i++) {
                                label -= parseInt(tableData[i].pil);
                            }
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

        var curr = new Date();
        curr.setDate(curr.getDate());
        var dateNow = curr.toISOString().substr(0, 10);

        return (
            <>
                <BlockUi tag="div" blocking={this.state.blocking}>
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
                                                        <Input type="radio" name="radio1" value="apbn" checked={this.state.sumberAlokon === 'apbn'} onChange={this.handleSumber} />{' '} 1. APBN
                                                </Col>
                                                    <Col sm="2">
                                                        <Input type="radio" name="radio1" value="apbd" checked={this.state.sumberAlokon === 'apbd'} onChange={this.handleSumber} />{' '} 2. APBD
                                                </Col>
                                                    <Col sm="3">
                                                        <Input type="radio" name="radio1" value="mandiri" checked={this.state.sumberAlokon === 'mandiri'} onChange={this.handleSumber} />{' '} 3. Mandiri
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
                                                    defaultValue={dateNow}
                                                />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup>
                                        <Row>
                                            <Col xs="4" lg="2">
                                                <Label className="labelForm">Mutasi Alokon</Label>
                                            </Col>
                                            <Col xs="8" lg="2">
                                                <Select options={this.state.showMutasiAlokon} onChange={this.handleMutasi} value={this.state.keterangan} isDisabled={this.state.disableMutasiAlokon} isClearable />
                                            </Col>
                                            <Col xs="4" lg="2">
                                                <Label className="labelForm">Jenis Alokon</Label>
                                            </Col>
                                            <Col xs="8" lg="2">
                                                <Select options={ja} onChange={this.handleJenisAlokon} value={this.state.jenisAlokon} isClearable={ja} isDisabled={this.state.disableJenisAlokon} isClearable />
                                            </Col>
                                            <Col xs="4" lg="2">
                                                <Label className="labelForm">Jumlah</Label>
                                            </Col>
                                            <Col xs="8" lg="2">
                                                <Input type="number" id="text-input" name="text-input" onChange={this.handleJumlah} value={this.state.jumlah} disabled={this.state.disableJumlah} />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup>
                                        <Row>
                                            <Col xs="12" md="12" align="right">
                                                <Button variant="contained" color="primary" onClick={this.handleTambah} disabled={this.state.disableButtonTambah} isClearable> <i className="icon-plus3 d-inline mr-1"></i> Tambah </Button>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup>
                                        <Row>
                                            <Col xs="12" md="12">
                                                <TableEditCell
                                                    tableHead={this.state.tableHead}
                                                    datas={this.state.datas}
                                                    handleActionTable={this.handleActionTable}
                                                    footerData={footerData}
                                                />
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </CardBody>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <div>
                                    <strong> KETERANGAN KODE : </strong>
                                </div>
                                <div>
                                    <strong> (1) Penerimaan </strong>
                                </div>
                                <div>
                                    <strong> (2) Pengeluaran untuk Pelayanan KB </strong>
                                </div>
                                <div>
                                    <strong> (3) Pengeluaran FKTP untuk distribusi alokon ke jaringan atau jejaring </strong>
                                </div>
                                <div>
                                    <strong> (4) Rusak </strong>
                                </div>
                                <div>
                                    <strong> (5) Kadaluarsa </strong>
                                </div>
                            </Col>
                        </Row>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button className="btn btn-warning" onClick={this.props.previousStep}>Sebelumnya</Button>
                            <Button className="btn btn-info" onClick={this.props.nextStep}>Selanjutnya</Button>
                        </div>
                    </container-fluid>
                </BlockUi>
            </>
        )
    }
}

export default Step2;