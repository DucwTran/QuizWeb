import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTopic } from "../../services/topicService";
import { getListQuestion } from "../../services/questionService";
import { getCookie } from "../../Helpers/cookie";
import { createAnswer } from "../../services/quizService";
function Quiz() {
  const params = useParams();
  const [dataTopic, setDataTopic] = useState(null);
  const [dataQuestion, setDataQuestion] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await getTopic(params.id);
      setDataTopic(response);
    };
    fetchAPI();
  }, [params.id]);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await getListQuestion(params.id);
      setDataQuestion(response);
    };
    fetchAPI();
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let selectedAnswers = [];
    for (let i = 0; i < e.target.length; i++) {
      if (e.target.elements[i].checked) {
        const name = e.target.elements[i].name;
        const value = e.target.elements[i].value;
        selectedAnswers.push({
          questionId: name,
          answer: parseInt(value),
        });
      }
    }
    let options = {
      userId: getCookie("id"),
      topicId: params.id,
      answers: selectedAnswers,
    };
    const response = await createAnswer(options);
    if (response) {
      console.log(response)
      navigate(`/result/${response.id}`);
    }
  };
  return (
    <>
      <h2 className="text-[30px]">Bài quiz chủ đề: {dataTopic && <>{dataTopic.name}</>}</h2>
      <div className="form-quiz">
        <form onSubmit={handleSubmit}>
          {dataQuestion.map((item, index) => (
            <div className="form-quiz__item" key={item.id}>
              <p>
                Câu {index + 1}: {item.question}
              </p>
              {item.answers.map((itemAns, indexAns) => (
                <div className="form-quiz__answer" key={indexAns}>
                  <input
                    type="radio"
                    name={item.id}
                    value={indexAns + 1}
                    id={`quiz-${item.id}-${indexAns}`}
                  ></input>
                  <label htmlFor={`quiz-${item.id}-${indexAns}`}>
                    {itemAns}
                  </label>
                </div>
              ))}
            </div>
          ))}
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="mb-5 border-[1px] border-[black] p-2 rounded-md "
            >
              Nộp bài
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Quiz;
