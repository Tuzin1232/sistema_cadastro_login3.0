import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar style={{ justifyContent: 'space-between' }} className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} style={{ color: 'white' }} to="/">Sistema de Cadastro</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow" style={{gap: '10px'}}>
                                <NavItem>
                                    <NavLink tag={Link} style={{ color: 'white', width: '4em' }} title="Home" className="btn btn-primary" to="/"><img src="https://img.icons8.com/ios-filled/24/ffffff/home.png" /></NavLink>
                                </NavItem>
                                <br />
                                <NavItem>
                                    <NavLink tag={Link} style={{ color: 'white', width: '4em' }} title="Editar Conta" className="btn btn-warning" to="/conta"><img src="https://img.icons8.com/ios-filled/24/ffffff/guest-male--v1.png" /></NavLink>
                                </NavItem>
                                <br />
                                <NavItem>
                                    <NavLink tag={Link} style={{ color: 'white', width: '4em' }} title="Cadastro de Clientes" className="btn btn-dark" to="/cadastroCliente"><img src="https://img.icons8.com/ios-filled/24/ffffff/add-list.png" /></NavLink>
                                </NavItem>
                                <br />
                                <NavItem>
                                    <NavLink tag={Link} style={{ color: 'white', width: '4em' }} title="Sair" className="btn btn-danger" to="/login"><img src="https://img.icons8.com/ios-filled/24/ffffff/exit.png" /></NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
