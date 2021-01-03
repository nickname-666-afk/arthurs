import React from "react";
import Button from "../../elem/button/Buttons";
import barbecue from "../../assets/images/barbecue/second.jpg";

const Canteen = () => {
	return (
		<div className="Canteen box">
			<div className="content">
				<div className="flex">
					<div className="title">Столовая</div>
					<div className="title_p">
						<div className="p">
							В нашей гостинице работает ресторан, в котором вы сможете вкусно поесть и хорошо
							провести время! <br />
							Здесь какой-то текст о том, как все вкусно и классно. <br />
							Какие свежие продукты, какие рецепты, какой повар - все супер. Завтраки, ужины и все
							такое
						</div>
					</div>
					<Button />
				</div>
				<div className="flex">
					<img src={barbecue} alt="Изображение" />
				</div>
			</div>
		</div>
	);
};
export default Canteen;
