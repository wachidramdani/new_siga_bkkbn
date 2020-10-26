import React, { Component } from 'react';
import { CardBody, Col, Row, FormGroup, Label, Input, Collapse, Button } from 'reactstrap';
import Select from 'react-select';
import Table2Edit from '../../../../Commons/Table/Table2Edit';
import Swal from 'sweetalert2';


class Step2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [
                { id: 1, dt1: 1, dt2: 'Tensimeter & Stetoskop', dt3: '0', dt4: 'SET' },
                { id: 2, dt1: 2, dt2: 'Timbangan Berat Badan', dt3: '0', dt4: 'Unit' },
                { id: 3, dt1: 3, dt2: 'Kursi Meja Ginekologi', dt3: '0', dt4: 'Unit' },
                { id: 4, dt1: 4, dt2: 'Sterilisator', dt3: '0', dt4: 'Unit' },
                { id: 5, dt1: 5, dt2: 'IUD Kit', dt3: '0', dt4: 'SET' },
                { id: 6, dt1: 6, dt2: 'Implant Removal Kit', dt3: '0', dt4: 'SET' },
                { id: 7, dt1: 7, dt2: 'Vasektomi Kit', dt3: '0', dt4: 'SET' },
                { id: 8, dt1: 8, dt2: 'Minilaparotomi Kit', dt3: '0', dt4: 'SET' },
                { id: 9, dt1:9, dt2: 'Laparoskopi', dt3: '0', dt4: 'SET' },
                { id: 10, dt1:10, dt2: 'Ruang Konseling KB dan Kesehatan Reproduksi', dt3: '0', dt4: 'Ruang' },
                { id: 11, dt1:11, dt2: 'Konseling Kit (ABPK)', dt3: '0', dt4: 'SET' },
                { id: 12, dt1:12, dt2: 'Materi Kesehatan Reproduksi', dt3: '0', dt4: 'Buah' },
                { id: 13, dt1:13, dt2: 'BP3K/Buku Standarisasi Pelayanan KB', dt3: '0', dt4: 'SET' },
                { id: 14, dt1:14, dt2: 'Sarana Komputer/Leptop', dt3: '0', dt4: 'Unit' },
            ],
            open: false,
            jenisCurrent: '',
            satuanCurrent: '',
            jumlahCurrent: '',
            satuanOpt: [
                { value: 'Set', label: 'Set' },
                { value: 'Unit', label: 'Unit' },
                { value: 'Ruang', label: 'Ruang' },
                { value: 'Buah', label: 'Buah' },
            ],
            jenisOpt: [
                { id: 1, value: 'Tensimeter & Stetoskop', label: 'Tensimeter & Stetoskop' },
                { id: 2, value: 'Timbangan Berat Badan', label: 'Timbangan Berat Badan'},
                { id: 3, value: 'Kursi Meja Ginekologi', label: 'Kursi Meja Ginekologi'},
                { id: 4, value: 'Sterilisator', label: 'Sterilisator'},
                { id: 5, value: 'IUD Kit', label: 'IUD Kit' },
                { id: 6, value: 'Implan Removal Kit', label: 'Implan Removal Kit' },
                { id: 7, value: 'Vasektomi Kit', label: 'Vasektomi Kit' },
                { id: 8, value: 'Minilaparotomi Kit', label: 'Minilaparotomi Kit' },
                { id: 9, value: 'Laparoskopi', label: 'Laparoskopi' },
                { id: 10, value: 'Ruang Konseling KB dan Kesehatan Reproduksi', label: 'Ruang Konseling KB dan Kesehatan Reproduksi' },
                { id: 11, value: 'Konseling Kit (ABPK)', label: 'Konseling Kit (ABPK)' },
                { id: 12, value: 'Materi Kesehatan Reproduksi', label: 'Materi Kesehatan Reproduksi' },
                { id: 13, value: 'BP3K/Buku Standarisasi Pelayanan KB', label: 'BP3K/Buku Standarisasi Pelayanan KB' },
                { id: 14, value: 'Sarana Komputer/Leptop', label: 'Sarana Komputer/Leptop' },
            ], 
            valOpt: [],
            tensimeter:0
        }
    }


    toggle = () => {
        this.setState({
            open: !this.state.open
        });
    }

    changeOption = (e) => {
        if(e){
            // console.log(e)
            this.setState({
                valOpt: e, 
            })
        }
        else {
            this.setState({
                valOpt: []
            })
        }
    }

    inputJumlah = (e) => {
        // console.log(e.target.value)
        if(e){
            this.setState({
                jumlahCurrent: e.target.value
            })
        }
        else {
            this.setState({
                jumlahCurrent: ''
            })
        }
    }

    handleSubmit = () => {
        const x = this.state.valOpt
        console.log(x, 'tes x')
        if(this.state.valOpt){
            var jmlh = document.getElementById('jumlah').value;
            console.log(jmlh,'tes jmlh');
            var jenis = this.state.valOpt.label;
            // console.log(jenis,'tes jenis');
            // console.log('tes', jmlh);
            var newArr = [...this.state.datas]
            console.log(newArr,'tes new arr');
            var index = newArr.findIndex(obj => obj.id === this.state.valOpt.id);
            newArr[index].dt3 = jmlh
            newArr[index].dt2 = jenis
            this.setState({
                newArr,
                valOpt: [],
                jumlahCurrent:''
            })
            document.getElementById('jumlah').value = '';
        }
    }

    handlePageChange = (page, sizePerPage) => {
        this.setState({currentPage: page, sizePerPage: sizePerPage})
    }

    deleteJumlah = (row) => {
        console.log('e', row);
        // const jumlahAlat = row
        // this.setState({
        //     blocking: false,
        //     datas: this.state.datas.filter(item => item !== jumlahAlat)
        // });
    }

    updateData = () => {
        
    }

    resetData = () => {
        document.getElementById('jumlah').value='';
        this.setState({
            valOpt: [], jumlahCurrent:''
        })
    }

    handleClickEdit = (row) => {
        console.log(row, 'tes row');
        this.setState({
            valOpt: row.dt2,
            jumlahCurrent: row.dt3
        })
    }

    handleNext = () => {
        const step2 = {
            // jumlahAlatBantuPengambilanKeputusan: parseInt(this.state.datas.filter(el => el.id === 1)[0].dt3),
            // jumlahBukuPanduanPraktisPelayananKontrasepsi: parseInt(this.state.datas.filter(el => el.id === 2)[0].dt3),
            // jumlahTensiMeter: parseInt(this.state.datas.filter(el => el.id === 1)[0].dt3),
            // jumlahMejaGinekologi: parseInt(this.state.datas.filter(el => el.id === 4)[0].dt3),
            // jumlahIUDKit: parseInt(this.state.datas.filter(el => el.id === 5)[0].dt3),
            // jumlahImplanRemovalKit: parseInt(this.state.datas.filter(el => el.id === 6)[0].dt3),
            // jumlahVasektomiKit: parseInt(this.state.datas.filter(el => el.id === 7)[0].dt3),
            // jumlahMinilaparotomiKit: parseInt(this.state.datas.filter(el => el.id === 8)[0].dt3),
            // jumlahLaparoskopi: parseInt(this.state.datas.filter(el => el.id === 9)[0].dt3),
            // jumlahRuangOperasi: parseInt(this.state.datas.filter(el => el.id === 10)[0].dt3),
            // jumlahSterillisator: parseInt(this.state.datas.filter(el => el.id === 11)[0].dt3),
            // jumlahLampuPeriksa: parseInt(this.state.datas.filter(el => el.id === 12)[0].dt3),
            // jumlahRuangKonselingKBdanKesehatanReproduksi: parseInt(this.state.datas.filter(el => el.id === 10)[0].dt3),
            // jumlahMateriKesehatanReporduksi: parseInt(this.state.datas.filter(el => el.id === 12)[0].dt3),
            // jumlahSaranaKomputerLaptop: parseInt(this.state.datas.filter(el => el.id === 14)[0].dt3),
        };

        this.props.handleValueStep('step2', step2)
        this.props.nextStep();
    }

    handleChange = (event) => {
        const state = this.state
        state[event.target.name] = event.target.value
        this.setState(state);
    }

    render() {
        // console.log(this.props)
        const columns = [
            {
                dataField: 'dt1',
                text: 'No.',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '50px' };
                },
            },
            {
                dataField: 'dt2',
                text: 'Jenis Perlengkapan',
                headerAlign: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '250px' };
                },
            },
            {
                dataField: 'dt3',
                text: 'Jumlah Yang Dipakai',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '150px' };
                },
            },
            {
                dataField: 'dt4',
                text: 'Satuan',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                headerStyle: (colum, colIndex) => {
                    return { width: '150px' };
                },
            },
            {
                dataField: 'dt5',
                text: 'Aksi',
                headerAlign: 'center',
                align: 'center',
                editable: false,
                isDummyField: true,
                headerStyle: (colum, colIndex) => {
                    return { width: '90px' };
                },
                formatter: (cellContent, row) => {
                    return (
                        <div>
                            <span className="btnInTable">
                                <Button color="link" className="btn-xing btn-brand btn-sm icon" onClick={() => this.handleClickEdit(row)}><i className="icon-pencil" style={{ fontSize: '12px' }}> </i></Button>
                            </span>
                            <span className="btnInTable">
                                <Button className="btn-youtube btn-brand btn-sm icon" onClick={() => this.deleteJumlah(row)}><i className="icon-trash"> </i></Button>
                            </span>
                            {/* <span style={{ background: 'paleturquoise', margin: '2px', padding: '2px 4px', borderRadius: '2px', cursor: 'pointer' }}>
                                <i className="icon-pencil" onClick={() => this.handleClickEdit(row)} style={{ fontSizonClick={this.deleteJumlah}e: '0.875rem' }}> </i>
                            </span>
                            <span style={{ background: 'paleturquoise', margin: '2px', padding: '2px 4px', borderRadius: '2px', cursor: 'pointer' }}>
                                <i className="icon-cross2" onClick={this.deleteJumlah} style={{ fontSize: '0.875rem' }}> </i>
                            </span> */}
                        </div>
                    );
                },
                events: {
                    onClick: (e, column, columnIndex, row, rowIndex) => {
              
                    },
                }
            },
        ];

        return (
            <div>
                <h6>II. SARANA DAN PERLENGKAPAN </h6>
                <div style={{ position: 'absolute', right: '0', marginTop: '-25px', marginBottom: '15px', fontSize: '12px' }}>{this.props.currentStep}/{this.props.totalSteps}</div>
                <Row >
                    <CardBody >
                        <FormGroup>
                            <Row>
                                <Col md="9" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Tensimeter & Steroskop</Label>
                                </Col>
                                <Col md="2" xs="3" style={{ paddingTop: '10px' }}>
                                    <Input  type="number"  id="jalan" name="tensimeter" style={{ textAlign: 'right' }} value={this.state.tensimeter} onChange={this.handleChange} />
                                </Col>
                                <Col md="1" xs="2" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">SET</Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="9" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Timbangan Berat Badan</Label>
                                </Col>
                                <Col md="2" xs="3" style={{ paddingTop: '10px' }}>
                                    <Input type="number"  id="jalan" name="timbangan" style={{ textAlign: 'right' }} value={this.state.timbangan || 0} onChange={this.handleChange} />
                                </Col>
                                <Col md="1" xs="2" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Unit</Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="9" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Kursi/Meja Ginekolog</Label>
                                </Col>
                                <Col md="2" xs="3" style={{ paddingTop: '10px' }}>
                                    <Input type="number"  id="jalan" name="kursi_meja" style={{ textAlign: 'right' }} value={this.state.kursi_meja || 0} onChange={this.handleChange} />
                                </Col>
                                <Col md="1" xs="2" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">UNIT</Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="9" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Sterilisator</Label>
                                </Col>
                                <Col md="2" xs="3" style={{ paddingTop: '10px' }}>
                                    <Input type="number"  id="jalan" name="sterilisator" style={{ textAlign: 'right' }} value={this.state.sterilisator || 0} onChange={this.handleChange} />
                                </Col>
                                <Col md="1" xs="2" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">UNIT</Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="9" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">IUD Kit</Label>
                                </Col>
                                <Col md="2" xs="3" style={{ paddingTop: '10px' }}>
                                    <Input type="number"  id="jalan" name="iud" style={{ textAlign: 'right' }} value={this.state.iud || 0} onChange={this.handleChange} />
                                </Col>
                                <Col md="1" xs="2" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">SET</Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="9" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Implant Removal Kit</Label>
                                </Col>
                                <Col md="2" xs="3" style={{ paddingTop: '10px' }}>
                                    <Input type="number"  id="jalan" name="implan" style={{ textAlign: 'right' }} value={this.state.implan || 0} onChange={this.handleChange} />
                                </Col>
                                <Col md="1" xs="2" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">SET</Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="9" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Vasektomi Kit</Label>
                                </Col>
                                <Col md="2" xs="3" style={{ paddingTop: '10px' }}>
                                    <Input type="number"  id="jalan" name="vasektomi" style={{ textAlign: 'right' }} value={this.state.vasektomi || 0} onChange={this.handleChange} />
                                </Col>
                                <Col md="1" xs="2" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">SET</Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="9" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Minilaparotomi Kit</Label>
                                </Col>
                                <Col md="2" xs="3" style={{ paddingTop: '10px' }}>
                                    <Input type="number"  id="jalan" name="minilaparotomi" style={{ textAlign: 'right' }} value={this.state.minilaparotomi || 0} onChange={this.handleChange} />
                                </Col>
                                <Col md="1" xs="2" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">SET</Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="9" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Laparoskopi</Label>
                                </Col>
                                <Col md="2" xs="3" style={{ paddingTop: '10px' }}>
                                    <Input type="number"  id="jalan" name="laparoski" style={{ textAlign: 'right' }} value={this.state.laparoski || 0} onChange={this.handleChange} />
                                </Col>
                                <Col md="1" xs="2" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">SET</Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="9" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">RK KB & Kesehatan Reproduksi</Label>
                                </Col>
                                <Col md="2" xs="3" style={{ paddingTop: '10px' }}>
                                    <Input type="number"  id="jalan" name="rk_kb" style={{ textAlign: 'right' }} value={this.state.rk_kb || 0} onChange={this.handleChange} />
                                </Col>
                                <Col md="1" xs="2" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Ruang</Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="9" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Konseling Kit (ABPK)</Label>
                                </Col>
                                <Col md="2" xs="3" style={{ paddingTop: '10px' }}>
                                    <Input type="number"  id="jalan" name="konseling" style={{ textAlign: 'right' }} value={this.state.konseling || 0} onChange={this.handleChange} />
                                </Col>
                                <Col md="1" xs="2" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">SET</Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="9" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Materi Kesehatan Reproduksi</Label>
                                </Col>
                                <Col md="2" xs="3" style={{ paddingTop: '10px' }}>
                                    <Input type="number"  id="jalan" name="materiKesehatan" style={{ textAlign: 'right' }} value={this.state.materiKesehatan || 0} onChange={this.handleChange} />
                                </Col>
                                <Col md="1" xs="2" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Buah</Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="9" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">BP3K/ Buku Standarisasi Yan KB</Label>
                                </Col>
                                <Col md="2" xs="3" style={{ paddingTop: '10px' }}>
                                    <Input type="number"  id="jalan" name="bp3k" style={{ textAlign: 'right' }} value={this.state.bp3k || 0} onChange={this.handleChange} />
                                </Col>
                                <Col md="1" xs="2" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">SET</Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="9" xs="7" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Sarana Komputer/Laptop</Label>
                                </Col>
                                <Col md="2" xs="3" style={{ paddingTop: '10px' }}>
                                    <Input type="number"  id="jalan" name="saranaKomputer" style={{ textAlign: 'right' }} value={this.state.saranaKomputer || 0} onChange={this.handleChange} />
                                </Col>
                                <Col md="1" xs="2" style={{ paddingTop: '10px' }}>
                                    <Label className="labelForm">Unit</Label>
                                </Col>
                            </Row>
                        </FormGroup>
                    </CardBody>
                </Row>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button className="btn btn-warning" onClick={this.props.previousStep}>Sebelumnya</button>
                    <button className="btn btn-info"  onClick={this.handleNext}>Selanjutnya</button>
                </div>
            </div>
        )
    }
}

export default Step2;