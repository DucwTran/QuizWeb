import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getAnswer } from "../../services/answerService"
import { getListQuestion } from "../../services/questionService"
import "./result.css"
function Result () {
    const params = useParams();
    const [dataResult, setDataResult] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const dataAnswer = await getAnswer(params.id);
            const dataQuestion = await getListQuestion(dataAnswer.topicId);

            let resultFinal = [];
            for (let i = 0; i < dataQuestion.length; i++){
                resultFinal.push({
                    ...dataQuestion[i],
                    ...dataAnswer.answers.find(item => item.questionId === dataQuestion[i].id)
                });
            }
            setDataResult(resultFinal);
        }
        fetchAPI();
    }, [params.id]);

    console.log(dataResult)
    return (
        <>
            <h1>Kết quả: </h1>
            <div className="result__list">
                { dataResult.map((item, index) => (
                    <div className="result__item" key={item.id}>
                        <p> 
                            Câu {index + 1}: {item.question}
                            {item.correctAnswer == item.answer ? (
                                <>
                                    <span className="result__tag result__tag--true">Đúng</span>
                                </>
                            ) : (
                                <>
                                    <span className="result__tag result__tag--false">Sai</span>
                                </>
                            )}
                        </p>
                        {item.answers.map((itemAns, indexAns) => {
                            let className = "";
                            let checked = false;

                            if(item.answer === indexAns) {
                                checked = true;
                                className = "result__item--selected"
                            }
                            if(item.correctAnswer === indexAns) {
                                className += " result__item--result"
                            }
                            return (
                                <div className="result__answer" key={indexAns}>
                                    <input type="radio" checked={checked} disabled />
                                    <label className={className}>{itemAns}</label>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </>
    );
}
export default Result;