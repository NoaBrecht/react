import { QuizQuestion } from "../types"

interface TrueOrFalseQuestionProps {
    question: QuizQuestion
    setUserAnswer: (answer: string) => void
}


const TrueOrFalseQuestion = ({ question, setUserAnswer }: TrueOrFalseQuestionProps) => {
    return (
        <div>
            <input type="radio" name={question.question} onChange={(event) => setUserAnswer("True")} /> True
            <input type="radio" name={question.question} onChange={(event) => setUserAnswer("False")} /> False
        </div>
    )

}
export default TrueOrFalseQuestion