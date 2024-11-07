import { useState } from "react";
import { QuizQuestion } from "../types"

interface MultipleChoiceQuestionProps {
    question: QuizQuestion
    setUserAnswer: (answer: string) => void
}

const sortAnswers = (correctAnswer:string, wrongAnswers:string[])=>{
    let allAnwsers = [correctAnswer, ...wrongAnswers];
    allAnwsers.sort((a, b) => Math.random() - 0.5);
    return allAnwsers
}

const MultipleChoiceQuestion = ({ question, setUserAnswer }: MultipleChoiceQuestionProps) => {

    const[allAnwsers, setAllAnswers] = useState(sortAnswers(question.correct_answer, question.incorrect_answers))

    return (
        <div>
            <select onChange={(event) => setUserAnswer(event.target.value)}>
                <option value="">Select an anwser</option>
                {allAnwsers.map((answer, index) => {
                    return <option key={index} value={answer}>{answer}</option>
                })}
            </select>
        </div>
    )
}
export default MultipleChoiceQuestion