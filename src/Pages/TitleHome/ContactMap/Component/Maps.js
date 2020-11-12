import React from "react";

export default class Maps extends React.Component {
	render() {
		return (
			<div className="left">
				<div className="maps" style={{position: "relative", overflow: "hidden"}}>
					<a
						href="https://yandex.com/maps?utm_medium=mapframe&utm_source=maps"
						style={{color: "#eee", fontSize: "12px", position: "absolute", top: "0px"}}>
						Yandex.Maps
					</a>
					<a
						href="https://yandex.com/maps/?ll=35.440923%2C45.101212&mode=whatshere&sctx=ZAAAAAgCEAAaKAoSCR3J5T%2BkQkFAETt%2B%2B3yMfEZAEhIJj3kVAIDn%2Fz8RbO79iMWx7j8oCkCdkAdIAVXNzMw%2BWABqAnJ1cACdAc3MTD2gAQCoAQC9Abya%2Bm3CAQb2mef23wU%3D&sll=35.440923%2C45.101212&sspn=0.095106%2C0.045654&text=arthurs%20%20%D0%BA%D1%80%D1%8B%D0%BC&utm_medium=mapframe&utm_source=maps&whatshere%5Bpoint%5D=35.440449%2C45.100977&whatshere%5Bzoom%5D=12.67&z=14.39"
						style={{color: "#eee", fontSize: "12px", position: "absolute", top: "14px"}}>
						Beregovoe Village — Yandex.Maps
					</a>
					<iframe
						title="Arthurs - Beregovoe Village"
						className="yandex-maps"
						src="https://yandex.com/map-widget/v1/-/CCUAu0HjCD"
					/>
				</div>
			</div>
		);
	}
}
