import { useState } from "react"
import Header from "../../components/Header"
import data from "../../quizData.json"

const Quiz = () => {

    let [ currentQuestion, setCurrentQuestion ] = useState(0)
    let [ selectedAnswer, setSelectedAnswer ] = useState("")
    let [ selectedAnswerIndex, setSelectedAnswerIndex ] = useState(null)
    let [ score, setScore ] = useState(0)
    let [ totalAnswer, setTotalAnswer ] = useState(0)
    let [ result, setResult ] = useState(false)

    let question = data.quiz[currentQuestion].question

    let options = data.quiz[currentQuestion].options

    let correctAnswer = data.quiz[currentQuestion].answer

    console.log(question, options, correctAnswer)

    const handleNext = () => {
        setSelectedAnswerIndex(null)
        if (selectedAnswer) {
            setScore((prev) => prev + 5)
            setTotalAnswer(prev => prev + 1)
        } else {
            setScore(prev => prev - 1)
        }

        if (currentQuestion !== data.quiz.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setCurrentQuestion(0)
            setResult(true)
        }
    }

    function handleSelectedAnswer(answer, index) {
        setSelectedAnswerIndex(index)
        if (answer == correctAnswer) {
            setSelectedAnswer(true)
        } else {
            setSelectedAnswer(false)
        }
    }

    let optionClass = "list-group-item"

    let activeOptionClass = "list-group-item active"


    return (

        <>
            <Header />
            {
                (!result) ? (
                    <section
                    style={{
                        maxWidth: "60%",
                        margin: "80px auto"
                    }}
                    >
                        <h3>Current Score {score}</h3>
                        <h2 style={{
                            height: "80px"
                        }}>{question}</h2>
                        <h3>Question {currentQuestion + 1} of {data.quiz.length}</h3>
                        <br></br>
                        <ul class="list-group">
                        {
                            options.map((option, index) => {
                                return (
                                    <li
                                    style={{ cursor: "pointer" }}
                                    onClick={() => handleSelectedAnswer(option, index)}
                                    class={selectedAnswerIndex === index ? activeOptionClass : optionClass}
                                    aria-current="true">
                                    {index + 1 + "."}  {option}
                                    </li>
                                )
                            })
                        }
                        </ul>
                        <br></br>
                        <button onClick={handleNext} type="button" class="btn btn-primary">{currentQuestion === data.quiz.length - 1 ? 'Finish' : 'Next'}</button>
                    </section>
                ) : (
                    <div>
                        <h1>Total score { score }</h1>
                        <h1>Total answers { totalAnswer }</h1>
                    </div>
                )
            }
        </>
    )
}

export default Quiz