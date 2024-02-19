import React, {useState} from "react"
import "./QuizQuestion.scss";


export default function QuizQuestion({question, options, answer}){
	const [selection, setSelection] = useState('a');
	return (
		<div>
		<p className="question">{question}</p>

		</div>
	)
}
