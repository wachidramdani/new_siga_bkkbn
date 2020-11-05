import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import StepWizard from 'react-step-wizard';
import Swal from 'sweetalert2';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';

import API014 from '../../../../../../services/API014';

class CreateRegistrasi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueStep1 : [],
            valueStep2 : [],
            valueStep3 : []
        }
    }

    clickBack = () => {
        this.props.history.push('/kegiatan/register_bkR');
    }

    handleValueStep = (step, value) => {
        switch (step) {
            case 'step1':
                this.setState({valueStep1: value})
                break;
            case 'step2':
                this.setState({valueStep2: value})
                break;
            default:
                break;
        }
    }

    handleSaveStep = (valueStep3) => {
        const vl1 = this.state.valueStep1;
        const vl2 = {"datPelayananKbDetils": this.state.valueStep2};

        const dataValue = { ...valueStep3, ...vl1, ...vl2 };
        console.log(dataValue, 'tes datavalue');

        API014.post('/siga/pelayanankb/addDataPelayananKb', JSON.stringify(dataValue)).then(response => {
			if(response.status === 200) {
				Swal.fire({
                    title: 'Sukses!',
                    icon: 'success',
                    text: 'Data Berhasil di Simpan.',
                    showConfirmButton: false,
                    timer: 1500
                })
			}
        })
        this.props.history.push('/kegiatan/register_bkb');
    }

    handleClickBatal = () => {
        this.props.history.push('/kegiatan/register_bkb');
        console.log('Batal');
    }

    render() {

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12">
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col md="12">
                                        <div className="titleFilter"><i className="icon-clipboard3"></i> Kegiatan Pertemuan Penyuluhan</div>
                                    </Col>
                                    <Col xs="12" md="12"><hr style={{ borderBottom: '1px solid orange', marginTop: '5px' }} /></Col>
                                    <Col md="12">
                                        <StepWizard>
                                            <Step1
                                                clickBack={this.clickBack}
                                                handleValueStep={this.handleValueStep}
                                            />
                                            <Step2
                                                handleValueStep={this.handleValueStep}
                                            />
                                            <Step3
                                                handleSaveStep={this.handleSaveStep}
                                            />
                                            <Step4
                                                buttonBatal={this.handleClickBatal}
                                                handleSaveStep={this.handleSaveStep}
                                            />
                                        </StepWizard>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CreateRegistrasi;