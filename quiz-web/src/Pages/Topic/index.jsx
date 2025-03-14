import { useEffect, useState } from "react";
import "./topic.css";
import { Link } from "react-router-dom";
import { getListTopic } from "../../services/topicService";
function Topic() {
  const [topic, setTopic] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await getListTopic();
      setTopic(response);
      console.log(response);
    };
    fetchAPI();
  }, []);
  return (
    <>
      <h2> Danh sách chủ đề</h2>
      {topic.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên chủ đề</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {topic.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <Link to={"/quiz/" + item.id}>Làm bài</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
export default Topic;
