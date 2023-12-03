import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faO } from "@fortawesome/free-solid-svg-icons";
export default function SelectSide() {
	return (
		<div id="selectSide" className="show">
			<h3>select your side</h3>
			<div className="btn-group">
				<button data-side="x">
					<span className="fa-x">
						<FontAwesomeIcon icon={faX} />
					</span>
				</button>
				<button data-side="o">
					<span className="fa-o">
						<FontAwesomeIcon icon={faO} />
					</span>
				</button>
			</div>
		</div>
	);
}
