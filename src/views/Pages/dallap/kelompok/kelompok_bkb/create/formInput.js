import React, { Component } from 'react';
import { Row, Col, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import Select from 'react-select';
import API014 from '../../../../../services/API014';
import API015 from '../../../../../services/API015';

// import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
// import parseDate from 'date-fns/parse';

export class FormInput extends Component {

    constructor(props) {
        super(props)
        const nilaiJk = (this.props.rowEditClick[2] === "1") ? { 'value': "1", 'label': "Laki-laki" } : { 'value': "2", 'label': "Perempuan" }
        this.state = {
            // Wilayah
            opt_prov: [], id_provinsi: this.props.rowEditClick[4], provinsi: null,
            opt_kab: [], id_kabupaten: this.props.rowEditClick[5], kabupaten: null, dis_kab: true,
            opt_kec: [], id_kecamatan: this.props.rowEditClick[6], kecamatan: null, dis_kec: true,
            opt_des: [], id_des: this.props.rowEditClick[7], desa: null, dis_des: true,
            opt_rw: [], id_rw: this.props.rowEditClick[8], rw: null, dis_rw: true,
            opt_rt: [], id_rt: this.props.rowEditClick[9], rt: null, dis_rt: true,

            //Input BDKI
            bdkiNama: this.props.rowEditClick[0],
            // bdkiTgl: this.props.rowEditClick[1].getFullYear()+'-' + (this.props.rowEditClick[1].getMonth()+1) + '-'+this.props.rowEditClick[1].getDate(),
            bdkiTgl: this.props.rowEditClick[1],
            bdkiJk: nilaiJk,
            kd_bdkiJk: this.props.rowEditClick[2],
            bdkiNIK: this.props.rowEditClick[3],
            bdkiJp: '',
            bdkiWil_rumah: this.props.rowEditClick[10],
            bdkiPus: this.props.rowEditClick[11],

            editState: this.props.editState
        }
    }

    componentDidMount() {
        this.setProv();
    }

    // git@dev2.quadras.co.id:BKKBN/Siga/Frontend/react-siga-bkkbn.git


    //API 015 (Wilayah)
    setProv() {
        this.setState({ blocking: true });
        this.setState({ opt_prov: [] });
        var newData = [];
        API015.get('siga/location/getListProvinsi')
            .then(res => {
                //   if(res.status === 200){ 
                // console.log(res);

                res.data.map(function (data, idx) {
                    const obj = { 'value': data.id_provinsi, 'label': data.nama };
                    return newData.push(obj);
                });

                // const nama = res.data.map(res => res.nama_kabupaten)
                this.setState({ opt_prov: newData });
                //   }
                // console.log("nama" + nama);
                // console.log("opt_prov" + this.state.opt_prov);
                this.setState({ blocking: false });
            }).catch((error) => {

            });
    }

    setKab(id) {
        this.setState({ blocking: true });
        this.setState({ opt_kab: [] });
        var newData = [];
        API015.get('siga/location/getListKabupatenByIdProvinsi?id_provinsi=' + id)
            .then(res => {
                res.data.map(function (data, idx) {
                    const obj = { 'value': data.id_kabupaten, 'label': data.nama_kabupaten };
                    return newData.push(obj);
                });
                this.setState({ opt_kab: newData });
                // console.log("opt_kab" + this.state.opt_kab);
                this.setState({ blocking: false });
            }).catch((error) => {

            });
    }

    setKec(id) {
        this.setState({ blocking: true });
        this.setState({ opt_kec: [] });
        var newData = [];
        API015.get('siga/location/getListKecamatanByIdKabupaten?id_kabupaten=' + id)
            .then(res => {
                res.data.map(function (data, idx) {
                    const obj = { 'value': data.id_kecamatan, 'label': data.nama_kecamatan };
                    return newData.push(obj);
                });
                this.setState({ opt_kec: newData });
                // console.log("opt_kec" + this.state.opt_kec);
                this.setState({ blocking: false });
            }).catch((error) => {

            });
    }

    setDes(id) {
        this.setState({ blocking: true });
        this.setState({ opt_des: [] });
        var newData = [];
        API015.get('siga/location/getListKelurahanByIdKecamatan?id_kecamatan=' + id)
            .then(res => {
                res.data.map(function (data, idx) {
                    const obj = { 'value': data.id_kelurahan, 'label': data.nama_kelurahan };
                    return newData.push(obj);
                });
                this.setState({ opt_des: newData });
                // console.log("opt_des" + this.state.opt_des);
                this.setState({ blocking: false });
            }).catch((error) => {

            });
    }

    setRW(id) {
        this.setState({ blocking: true });
        this.setState({ opt_rw: [] });
        var newData = [];
        API015.get('siga/location/getListRwByIdKelurahan?id_kelurahan=' + id)
            .then(res => {
                res.data.map(function (data, idx) {
                    const obj = { 'value': data.id_rw, 'label': data.nama_rw };
                    return newData.push(obj);
                });
                this.setState({ opt_rw: newData });
                // console.log("opt_rw" + this.state.opt_rw);
                this.setState({ blocking: false });
            }).catch((error) => {

            });
    }

    setRT(id) {
        this.setState({ blocking: true });
        this.setState({ opt_rt: [] });
        var newData = [];
        API015.get('/siga/location/getListRtByIdRw?id_rw=' + id)
            .then(res => {
                res.data.map(function (data, idx) {
                    const obj = { 'value': data.id_rt, 'label': data.nama_rt };
                    return newData.push(obj);
                });
                this.setState({ opt_rt: newData });
                // console.log("opt_rt" + this.state.opt_rt);
                this.setState({ blocking: false });
            }).catch((error) => {

            });
    }

    handleProv = (e) => {
        if (e) {
            this.setState({
                provinsi: e, id_provinsi: e.value,
                kabupaten: null, kecamatan: null, desa: null, rw: null, rt: null,
                dis_kab: false, dis_kec: true, dis_des: true, dis_rw: true, dis_rt: true,
            },
                () => {
                    if (this.state.id_provinsi) {
                        this.setKab(this.state.id_provinsi);
                    }
                })
        }
        else {
            this.setState({
                provinsi: null, kabupaten: null, kecamatan: null, desa: null, rw: null, rt: null,
                dis_kab: true, dis_kec: true, dis_des: true, dis_rw: true, dis_rt: true,
            })
        }
    }

    handleKab = (e) => {
        if (e) {
            this.setState({
                kabupaten: e, id_kabupaten: e.value,
                kecamatan: null, desa: null, rw: null, rt: null,
                dis_kec: false, dis_des: true, dis_rw: true, dis_rt: true,
            },
                () => {
                    if (this.state.id_kabupaten) {
                        this.setKec(this.state.id_kabupaten);
                    }
                })
        }
        else {
            this.setState({
                kabupaten: null, kecamatan: null, desa: null, rw: null, rt: null,
                dis_kec: true, dis_des: true, dis_rw: true, dis_rt: true,
            })
        }
    }

    handleKec = (e) => {
        if (e) {
            this.setState({
                kecamatan: e, id_kecamatan: e.value,
                desa: null, rw: null, rt: null,
                dis_des: false, dis_rw: true, dis_rt: true,
            },
                () => {
                    if (this.state.id_kecamatan) {
                        this.setDes(this.state.id_kecamatan);
                    }
                })
        }
        else {
            this.setState({
                kecamatan: null, desa: null, rw: null, rt: null,
                dis_des: true, dis_rw: true, dis_rt: true,
            })
        }
    }

    handleDes = (e) => {
        if (e) {
            this.setState({
                desa: e, id_des: e.value,
                rw: null, rt: null,
                dis_rw: false, dis_rt: true,
            },
                () => {
                    if (this.state.id_des) {
                        this.setRW(this.state.id_des);
                    }
                })
        }
        else {
            this.setState({
                desa: null, rw: null, rt: null,
                dis_rw: true, dis_rt: true,
            })
        }
    }

    handleRW = (e) => {
        if (e) {
            this.setState({
                rw: e, id_rw: e.value,
                rt: null, dis_rt: false,
            },
                () => {
                    if (this.state.id_rw) {
                        this.setRT(this.state.id_rw);
                    }
                })
        }
        else {
            this.setState({
                rw: null, rt: null, dis_rt: true,
            })
        }
    }

    handleRT = (e) => {
        if (e) {
            this.setState({ rt: e, id_rt: e.value })
        }
        else {
            this.setState({ rt: null })
        }
    }

    createBdki() {
        this.setState({ blocking: true });
        API014.post('/siga/reg-yan-kb/addDataPesertaNonBdki', {
            "nama_lengkap": this.state.bdkiNama,
            "tgl_lahir": this.state.bdkiTgl,
            "jenis_kelamin": this.state.kd_bdkiJk,
            "nik": this.state.bdkiNIK,
            "jenis_peserta": "1",
            "id_provinsi": this.state.id_provinsi,
            "id_kabupaten": this.state.id_kabupaten,
            "id_kecamatan": this.state.id_kecamatan,
            "id_desa": this.state.id_desa,
            "id_rw": this.state.id_rw,
            "id_rt": this.state.id_rt,
            "no_urutrmh": this.state.bdkiWil_rumah,
            "no_kki": "",
            "pus": this.state.bdkiPus,
            "kesertaan_asuransi": "-",
            "kesertaan_berkb": "-"
        })
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    }

    updateBdki() {
        this.setState({ blocking: true });
        API014.put('/siga/reg-yan-kb/updateDatPesertaNonBdki', {
            "nama_lengkap": this.state.bdkiNama,
            "tgl_lahir": this.state.bdkiTgl,
            "jenis_kelamin": this.state.kd_bdkiJk,
            "nik": this.state.bdkiNIK,
            "jenis_peserta": "1",
            "id_provinsi": this.state.id_provinsi,
            "id_kabupaten": this.state.id_kabupaten,
            "id_kecamatan": this.state.id_kecamatan,
            "id_desa": this.state.id_desa,
            "id_rw": this.state.id_rw,
            "id_rt": this.state.id_rt,
            "no_urutrmh": this.state.bdkiWil_rumah,
            "no_kki": "",
            "pus": this.state.bdkiPus,
            "kesertaan_asuransi": "-",
            "kesertaan_berkb": "-"
        })
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    }

    bdkiChange = (e) => {
        function calculate_age(dob) {
            var diff_ms = Date.now() - dob.getTime();
            var age_dt = new Date(diff_ms);

            return Math.abs(age_dt.getUTCFullYear() - 1970);
        }

        const usia = calculate_age(new Date(this.state.bdkiTgl))
        this.setState({
            [e.target.name]: e.target.value,
            bdkiPus: (usia >= 10 && usia <= 49) ? "Ya" : "Tidak"
        })
    }

    bdkiChangeJk = (e) => {
        this.setState({
            kd_bdkiJk: e.value,
            bdkiJk: e
        })
    }

    saveBdki = e => {
        this.props.saveBdki && this.props.saveBdki(e);
        if (!this.state.editState) {
            this.createBdki();
        } else if (this.state.editState) {
            this.updateBdki();
        }
    }

    resetButton = () => {
        this.setState({
            bdkiNama: '',
            bdkiTgl: new Date(),
            kd_bdkiJk: null, bdkiJk: null,
            bdkiNIK: 'null',
            jenis_peserta: '',

            //Wilayah
            provinsi: null, kabupaten: null, kecamatan: null, desa: null, rw: null, rt: null,
            id_provinsi: 0, id_kabupaten: 0, id_kecamatan: 0, id_desa: 0, id_rw: 0, id_rt: 0,
            dis_kab: true, dis_kec: true, dis_des: true, dis_rw: true, dis_rt: true,
            bdkiWil_rumah: [],
        })
    }

    toggle = (e) => {
        this.props.toggle && this.props.toggle(e)
    }

    render() {

        const jenis_kelamin = [
            { value: '1', label: 'Laki-laki' },
            { value: '2', label: 'Perempuan' },
        ]

        if (!this.props.bdkiModal) {
            return null;
        }

        return (
            <div>
                <Row>
                    <Modal isOpen={this.props.bdkiModal} size="lg" style={{ padding: '10px', width: '100%' }} >
                        <ModalHeader toggle={(e) => this.toggle(e)}>Entri Non BDKI</ModalHeader>
                        <ModalBody>
                            <Col md="12">
                                <FormGroup>
                                    <Row>
                                        <Col md="12">
                                            <Label>Identitas</Label>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="3" xs="12">
                                            <Label>1. Nama Lengkap : </Label>
                                        </Col>
                                        <Col md="4" xs="12">
                                            <Input type="text" id="text-input" name="bdkiNama" onChange={this.bdkiChange} value={this.state.bdkiNama} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>2. Tanggal Lahir : </Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Input type="date" id="text-input" name="bdkiTgl" onChange={this.bdkiChange} value={this.state.bdkiTgl} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>3. Jenis Kelamin :</Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Select options={jenis_kelamin} name="bdkiJk" onChange={this.bdkiChangeJk} value={this.state.bdkiJk} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>4. NIK :</Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Input type="number" id="text-input" name="bdkiNIK" onChange={this.bdkiChange} value={this.state.bdkiNIK} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>5. Jenis Peserta :</Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Input type="read-only" id="text-input" name="bdkiJp" onChange={this.bdkiChange} value={this.state.bdkiJp} placeholder="Peserta Baru" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12" style={{ marginTop: '10px' }}>
                                            <Label>Wilayah Alamat</Label>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>Provinsi : </Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Select options={this.state.opt_prov} onChange={this.handleProv} value={this.state.opt_prov.filter(x => x.value === this.state.id_provinsi)} isClearable />
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>Kabupaten/Kota : </Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Select options={this.state.opt_kab} onChange={this.handleKab} value={this.state.opt_kab.filter(x => x.value === this.state.id_kabupaten)} isDisabled={this.state.dis_kab} isClearable />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>Kecamatan : </Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Select options={this.state.opt_kec} onChange={this.handleKec} value={this.state.kecamatan} isDisabled={this.state.dis_kec} isClearable />
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>Desa/Kelurahan : </Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Select options={this.state.opt_des} onChange={this.handleDes} value={this.state.desa} isDisabled={this.state.dis_des} isClearable />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>Dusun/RW : </Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Select options={this.state.opt_rw} onChange={this.handleRW} value={this.state.rw} isDisabled={this.state.dis_rw} isClearable />
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>RT : </Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Select options={this.state.opt_rt} onChange={this.handleRT} value={this.state.rt} isDisabled={this.state.dis_rt} isClearable />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Label>Nomor Rumah</Label>
                                        </Col>
                                        <Col md="3" xs="12" style={{ marginTop: '10px' }}>
                                            <Input type="number" id="text-input" name="bdkiWil_rumah" onChange={this.bdkiChange} value={this.state.bdkiWil_rumah} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="4"></Col>
                                        {
                                            !this.state.editState ?
                                                <Col xs="6" md="2" lg="2" className="my-2" style={{ marginTop: '10px' }}>
                                                    <Button className="btn btn-info btnFilter" onClick={e => { this.saveBdki(e) }}> Simpan</Button>
                                                </Col> :
                                                <Col xs="6" md="2" lg="2" className="my-2" style={{ marginTop: '10px' }}>
                                                    <Button className="btn btn-success btnFilter" onClick={e => { this.saveBdki(e) }}> Ubah</Button>
                                                </Col>
                                        }
                                        <Col xs="6" md="2" lg="2" className="my-2" style={{ marginTop: '10px' }}>
                                            <Button className="btn btn-danger btnFilter" onClick={this.resetButton}> Reset</Button>
                                        </Col>
                                        <Col md="4"></Col>
                                    </Row>
                                </FormGroup>
                            </Col>
                        </ModalBody>
                    </Modal>
                </Row>
            </div>
        )
    }
}

export default FormInput
