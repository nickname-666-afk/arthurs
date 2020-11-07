import React from "react";

import $ from "jquery";

$(document).ready(function () {
	$(".trigger").on("click", function (event) {
		event.preventDefault();
		$(".modal-wrapper").toggleClass("open");
	});
});
export default class Button extends React.Component {
	render() {
		return (
			<div className="button_block">
				<button className="button trigger">Показать меню</button>
				<div className="modal-wrapper">
					<div className="modal">
						<div className="head">
							<p className="title">Меню</p>
							<div className="btn-close trigger">
								<div className="line--left" aria-hidden="true" />
								<div className="line--right" aria-hidden="true" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
