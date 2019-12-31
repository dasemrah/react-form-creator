import React from 'react';
import {Navbar} from "react-bootstrap";

class Footer extends React.Component{
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>
                        <img
                            alt=""
                            src="../../public/logo.jpg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        {'web form etiya ©  2019 '}
                    </Navbar.Brand>
                </Navbar>
            </>
        );
    }


}
export default Footer