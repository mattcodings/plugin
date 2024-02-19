/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {RichText, useBlockProps} from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({attributes}) {
	const randomNumber = String(Math.random());
	const answerArray = [attributes.answerone, attributes.answertwo, attributes.answerthree, attributes.correctanswer];
	const shuffledArray = answerArray.sort(()=>Math.random() - 0.5)
	return (
		<p { ...useBlockProps.save() }>
			<div className="module-container">
			<h2><RichText.Content className="module-title" tagName="div" value={attributes.title}/></h2>
			<RichText.Content className="subject-info" tagName="div" value={attributes.info}/>
			<img className="module-image" src={attributes.imgUrl} alt="Photo"/>
			<h4 className="module-length">Estimated Module Completion Time: {attributes.length}</h4>
			<h4 className="module-question">{attributes.question}</h4>
			{shuffledArray.map(answer=>{
				return <div className="answers"><input type="radio" className="possible-answer" name={randomNumber} id={answer}/><label className={answer === attributes.correctanswer ? "correct-answer":"incorrect-answer"} htmlFor={answer}>{answer}</label></div>
			})}
			</div>
		</p>
	);
}
