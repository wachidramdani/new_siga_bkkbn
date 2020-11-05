import React, { Component } from 'react';
import { Col, Row, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Card, CardBody, Badge} from 'reactstrap';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from 'react-select';
import Swal from 'sweetalert2';
import btnBack from '../../../../../../assets/img/btnBack.png';
import ReactPaginate from 'react-paginate';

class ListBdki extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            perPage: 6,
            currentPage: 0,
            data: [
                {"id":1, "issue":"Bambang Pamungkas","desc":"12-02-1993", "date":"2020-07-14", "status": "New", "priority": "Troubleshooting", "facility":"Block A", "valtype":"Increase Production", "attapp":"Known", "atttm":"3175092502941002"},
                {"id":2, "issue":"Susi Susanti","desc":"12-02-1993", "date":"2020-07-13", "status": "New", "priority": "Fit For Purpose", "facility":"South Sokang", "valtype":"Reduce Cost", "attapp":"Known", "atttm":"3175092502941003"},
                {"id":3, "issue":"Cris John","desc":"02-02-1993t", "date":"2020-07-14", "status": "New", "priority": "Troubleshooting", "facility":"Block A", "valtype":"Increase Production", "attapp":"Known", "atttm":"3175092502941002"},
                {"id":4, "issue":"Topik Hidayat","desc":"22-02-1993", "date":"2020-07-13", "status": "New", "priority": "Fit For Purpose", "facility":"South Sokang", "valtype":"Reduce Cost", "attapp":"Known", "atttm":"3175092502941003"},
            ]
        }
    }

    componentDidMount() {
        this.receivedData()
    }

    receivedData= () => {
        const slice = this.state.data.slice(this.state.offset, this.state.offset + this.state.perPage)
        const postData = slice.map(row => 
            <React.Fragment key={row.id}>
                <Col xs="6" lg="3">
                    {/* <div onClick={() => {this.props.history.push({
                            pathname: '/evaluation/action',
                            id: row.id,
                            })}} > */}
                    <div>
                        <Card>
                            <CardBody className="customBox">
                                <div className="cbnumber">
                                    {row.id}
                                    <Badge style={{backgroundColor: 'white'}}>{row.atttm}</Badge>
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
                                    {/* <span className="cbdate">{row.date}</span> */}
                                </div>
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

    handleClick = () => {
        this.props.toggleBdki();
    }


    render() {
        return (
            <Modal style={{height:'100vh'}}isOpen={this.props.listBdkiModal} toggle={this.handleClick}>
                <ModalHeader toggle={this.handleClick}>Daftar Tenaga KB Non BDKI</ModalHeader>
                <ModalBody style={{height:'calc(100vh - 59px)'}}>
                    <div style={{marginTop:'20px'}} className="filterSearchPag">
                        <Input type="text" placeholder="Pencarian"
                            style={{ width:'140px', height: '29px', float: 'left', fontSize: '12px'}} />
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
                </ModalBody>
            </Modal>
        );
    }
}

export default ListBdki;
