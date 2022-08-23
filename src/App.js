import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, dataSelector } from "./slices/dataSlice";

function App() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(dataSelector);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const renderData = () => {
    if (loading) {
      return <p>Loading data.....</p>;
    }

    if (!data) {
      return <p>no data</p>;
    }

    return (
      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>Id</th>
            <th>Confirmed cases</th>
            <th>Cases on admission</th>
            <th>discharged</th>
            <th>death</th>
          </tr>
        </thead>
        <tbody>
          {data.states.map((text) => (
            <tr key={text._id}>
              <td>{text.state}</td>
              <td>{text._id}</td>
              <td>{text.confirmedCases}</td>
              <td>{text.casesOnAdmission}</td>
              <td>{text.discharged}</td>
              <td>{text.death}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return <div>{renderData()}</div>;
}

export default App;
