import React from "react";
import {InspectorControls} from "@wordpress/block-editor";
import {ColorPicker, PanelBody, PanelRow, SelectControl} from "@wordpress/components";


export class BlockSettings extends React.Component {
	render(){
		const {attributes, setAttributes} = this.props;
		return (
			<InspectorControls>
				<PanelBody title="Basic" initialOpen={true}>
<PanelRow>Set Padding for each section</PanelRow>
					<PanelRow><SelectControl
						label="Padding for each section"
						value={attributes.sectionMargin}
						onChange={sectionMargin => setAttributes({sectionMargin})}
						options={[
							{value: '', label: 'Default'},
							{value: '10px', label: '10px'},
							{value: '50px', label: '50px'},
						]}
					/></PanelRow>
					<PanelRow>Hide the Content if you want users to take the quiz question from memory</PanelRow>
					<PanelRow><SelectControl
						label="Hide Content"
						value={attributes.hideContent}
						onChange={hideContent => setAttributes({hideContent})}
						options={[
							{value: 'block', label: 'visible'},
							{value: 'none', label: 'hide'},

						]}
					/></PanelRow>
					<PanelRow>
						Set Header Gradient First Color
					</PanelRow>
					<PanelRow>
						<ColorPicker
							color={attributes.headerBackgroundColor}
							onChange={headerBackgroundColor => setAttributes({headerBackgroundColor})}
						/>
					</PanelRow>
					<PanelRow>
						Set Header Gradient Second Color
					</PanelRow>
					<PanelRow>
						<ColorPicker
							color={attributes.secondHeaderBackgroundColor}
							onChange={secondHeaderBackgroundColor => setAttributes({secondHeaderBackgroundColor})}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		)
	}
}
