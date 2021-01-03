import React from "react";
import { Button, Modal } from "react-bootstrap";

export default class Buttons extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			hide: false,
		};
	}
	handleModal = () => {
		this.setState((prev) => ({ show: !prev.show }));
		this.setState((prev) => ({ hide: !prev.hide }));
	};
	render() {
		return (
			<div className="button_block">
				{this.state.show ? (
					<Modal
						show={this.state.show}
						onHide={this.handleModal}
						backdrop="static"
						keyboard={false}>
						<Modal.Header closeButton>
							<Modal.Title style={this.title}>Наше меню</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							Здесь скоро появится меню
							{/* <img src={menus} alt="Меню" /> */}
						</Modal.Body>
					</Modal>
				) : null}
				<Button className="button" variant="primary" onClick={this.handleModal}>
					Показать меню
				</Button>
			</div>
		);
	}
}
