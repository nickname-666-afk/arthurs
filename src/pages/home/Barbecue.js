import React from "react";
import Buttons from "../../elem/button/Buttons";
import barbecue from "../../assets/images/barbecue/first.jpg";

const Barbecue = () => {
	return (
		<div className="Barbecue box">
			<div className="content">
				<div className="flex">
					<img src={barbecue} alt="Изображение" />
				</div>
				<div className="flex">
					<div className="title">Кафе-шашлычная</div>
					<div className="title_p">
						<div className="p">
							Барная карта ресторана представлена хорошим выбором алкоголя (коньяк, виски, ром,
							водка, текила, шампанское), есть отдельная винная карта. В Баре по фирменным рецептам
							готовят лимонады и морсы. В карте бара также имеется большой выбор кофе и чая.В баре
							заведения могут приготовить как напитки, которые известны на весь мир
						</div>
					</div>
					<Buttons />
				</div>
			</div>
		</div>
	);
};
export default Barbecue;
