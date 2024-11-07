import { QuizQuestion } from "../types"
import MultipleChoiceQuestion from "./MultipleChoiceQuestion"
import TrueOrFalseQuestion from "./TrueOrFalseQuestion"

interface QuestionProps {
    question: QuizQuestion
    setUserAnswer: (answer: string) => void
}
const Question = ({ question, setUserAnswer }: QuestionProps) => {
    let color = "white";

    if (question.user_answer != undefined) {
        if (question.user_answer == question.correct_answer) {
            color = "lightgreen";
        } else {
            color = "red"
        }
    }
    return (
        <div style={{ backgroundColor: color }}>
            <div>{question.question}</div>

            {question.user_answer === undefined && <div>
                {question.type === "boolean" && <TrueOrFalseQuestion question={question} setUserAnswer={setUserAnswer} />}
                {question.type === "multiple" && <MultipleChoiceQuestion question={question} setUserAnswer={setUserAnswer} />}
            </div>}
            {question.user_answer && (
                <div>
                    {(question.user_answer === question.correct_answer) && <p>You answered correctly!</p>}
                    {(question.user_answer != question.correct_answer) && <p>You answered {question.user_answer} and the correct answer was {question.correct_answer}</p>}
                </div>
            )}
        </div>
    )
}
export default Question