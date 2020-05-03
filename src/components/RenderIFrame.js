import React from "react";

export default class RenderIFrame extends React.Component {
	render() {
		return (
			<iframe className="cartoFrame" id="cartoFrame" width="100%" height="800" frameborder="0" src="https://kct34.carto.com/builder/df5d9a4d-bea2-450f-b7fc-5692d4d86e86/embed" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
		);
	}
}