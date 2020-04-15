import React, { Component } from 'react'
import Home from './Home';
import axios from 'axios'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, Container
} from 'reactstrap';
export default class Signin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // Users: []
        };
    }
    // https://api.github.com/users
    getUsersData() {
        axios
            .get(`https://api.github.com/users`, {})
            .then(res => {
                const data = res.data
                console.log(data)
                const users = data.map((u, index) =>
                    // <div>
                    // <p>Login:{u.login}</p>
                    // <img src={u.avatar_url}></img>
                    // </div>

                    <div >


                        <Container>
                            <Row>
                                <Col xs="3"></Col>
                                <Col xs="auto" md="6">
                                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', }}>
                                        <CardImg top className="rounded-circle" style={{ height: "50%", width: "50%" }} src={u.avatar_url} alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle>Name: {u.login}</CardTitle>
                                            <CardSubtitle>Type{u.type}</CardSubtitle>
                                            <CardText>repos Url: {u.repos_url}</CardText>
                                            {/* <Button></Button> */}
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col xs="3"></Col>
                            </Row>
                            <br />
                        </Container>


                    </div>
                )

                this.setState({
                    users
                })

            })
            .catch((error) => {
                console.log(error)
            })

    }
    componentDidMount() {
        this.getUsersData()
    }
    render() {

        return (
            <div>
                <Home />
                {this.state.users}
            </div>
        )
    }
}
