/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {useBlockProps, RichText, MediaUpload, PlainText, MediaUploadCheck} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import QuizQuestion from "../../components/QuizQuestion";
import QuizAnswers from "../../components/QuizAnswers"
import React from "react";
import {BlockSettings} from "../../../BlockSettings";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes, setAttributes}) {

	return (
		<div { ...useBlockProps() }>
			<BlockSettings attributes={attributes} setAttributes={setAttributes}/>
			<h4 style={{backgroundImage: `linear-gradient(${attributes.headerBackgroundColor}, ${attributes.secondHeaderBackgroundColor})`}} className="module-section-header">Add a Title Here</h4>

			<RichText
				style={{marginBottom: attributes.sectionMargin}}
				className="subject-title"
				tagName="div"
				placeholder="title for module"
				value={attributes.title}
				onChange={(title)=>setAttributes({title})}/>
			<h4 style={{marginBottom: attributes.sectionMargin, display: attributes.hideContent, backgroundImage: `linear-gradient(${attributes.headerBackgroundColor}, ${attributes.secondHeaderBackgroundColor})`}}
				className="module-section-header">Add Your Content Here</h4>
			<RichText
				style={{marginBottom: attributes.sectionMargin, display: attributes.hideContent}}
			className="info"
			tagName="div"
			placeholder="Information you want the user to read"
			value={attributes.info}
			onChange={(info)=>setAttributes({info})}/>

			<h4 style={{backgroundImage: `linear-gradient(${attributes.headerBackgroundColor}, ${attributes.secondHeaderBackgroundColor})`}} className="module-section-header">Place an Image for Users to Reference Here</h4>
			<div className="photo">
				<MediaUploadCheck>
					<MediaUpload
						style={{marginBottom: attributes.sectionMargin}}
						allowedTypes={['image']}
onSelect={file=>setAttributes({imgUrl: file.sizes.medium.url})}
						render={({open})=> <img src={attributes.imgUrl} alt="Upload a photo" onClick={open}/>}
					/>
				</MediaUploadCheck>

			</div>
			<h4 style={{backgroundImage: `linear-gradient(${attributes.headerBackgroundColor}, ${attributes.secondHeaderBackgroundColor})`}} className="module-section-header">Estimated Time to Complete Module</h4>
			<PlainText
				style={{marginBottom: attributes.sectionMargin}}
				className="length"
					   placeholder="1 Hour"
					   value={attributes.length}
					   onChange={length => setAttributes({length})}
			/>
			<h4 style={{backgroundImage: `linear-gradient(${attributes.headerBackgroundColor}, ${attributes.secondHeaderBackgroundColor})`}} className="module-section-header">Quiz Question for Users</h4>
			<QuizQuestion question={<RichText
				className="quiz-question"
				tagName="div"
				placeholder="Quiz Question for Users"
				value={attributes.question}
				onChange={(question)=>setAttributes({question})}/>}/>
			<h5 className="module-section-incorrect-answer">Incorrect Answer #1</h5>

			<RichText
				className="answerone"
				tagName="div"
				placeholder="Incorrect Answer #1"
				value={attributes.answerone}
				onChange={(answerone)=>setAttributes({answerone})}/>

			<h5 className="module-section-incorrect-answer">Incorrect Answer #2</h5>

			<RichText
			className="answertwo"
			tagName="div"
			placeholder="Incorrect Answer #2"
			value={attributes.answertwo}
			onChange={(answertwo)=>setAttributes({answertwo})}/>

			<h5 className="module-section-incorrect-answer">Incorrect Answer #3</h5>

			<RichText
			className="answerthree"
			tagName="div"
			placeholder="Incorrect Answer #3"
			value={attributes.answerthree}
			onChange={(answerthree)=>setAttributes({answerthree})}/>

			<h5 className="module-section-correct-answer">Correct Answer</h5>

			<RichText
			className="correctanswer"
			tagName="div"
			placeholder="Correct Answer"
			value={attributes.correctanswer}
			onChange={(correctanswer)=>setAttributes({correctanswer})}/>

			<QuizAnswers/>
		</div>
	);
}
