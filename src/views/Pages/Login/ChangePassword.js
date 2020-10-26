import React, { Component } from 'react';
import { Row, Col,  Card, CardBody, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import BlockUi from 'react-block-ui';
import API011 from '../../../services/API011';


class changePass extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: localStorage.getItem("username"), 
			password:'', 
			newPassword:''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const state = this.state
		state[event.target.name] = event.target.value
		this.setState(state);
	}

	handleSubmit(event) {
		event.preventDefault();
		const form = {
			username: this.state.username,
			password: this.state.newPassword,
		}
		API011.post('/user/changepassword', form).then(response => {
			if(response.status === 200) {
				alert("berhasil disimpan");
			}
		})
	}

  render() {
    return (
		<div className="">
			<BlockUi tag="div">
				<Row>
					<Col xs="12" md="6">
						<Card>
							<CardBody>
								<Form onSubmit={this.handleSubmit}>
									<FormGroup>
										<Label for="exampleEmail">ID Pengguna</Label>
										<Input type="text" disabled={true} name="username" id="username" value={this.state.username} onChange={this.handleChange}/>
									</FormGroup>
									<FormGroup>
										<Label for="examplePassword">Kata Sandi Lama</Label>
										<Input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange}/>
									</FormGroup>
									<FormGroup>
										<Label for="examplePassword">Kata Sandi Baru</Label>
										<Input type="password" name="newPassword" id="newPassword" value={this.state.newPassword} onChange={this.handleChange}/>
									</FormGroup>
									<Row>
										<Col xs="6" md="4" lg="4" className="my-2" >
											<Button className="btn btn-facebook btnFilter">Simpan</Button>
										</Col>
										<Col xs="6" md="4" lg="4" className="my-2" >
											<Button className="btn btn-facebook btnFilter">Reset</Button>
										</Col>
									</Row>
								</Form>
								{/* <FormGroup>
								<Row>
									<Col md="3" xs="12" style={{ marginTop: '10px' }}>
										<Label>Username</Label>
									</Col>
									<Col md="3" xs="12" style={{ marginTop: '10px' }}>
										<Input type="text" id="text-input" name="email" value='' />
                                    </Col>
								</Row>
								</FormGroup> */}
							</CardBody>
						</Card>
					</Col>
				</Row>
			</BlockUi>
		</div>
    );
  }
}

export default changePass;