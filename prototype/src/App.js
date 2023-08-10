import './App.css';
import styled from '@emotion/styled';
import Progress from './components/Progress';

const Box = styled.div`
  width: 330px;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 10px 0;
  margin-bottom: 20px;
`;
const Capacity = styled.p`
  font-size: 17px;
  margin: 5px;
`;

const dummyData = [
  {
      "name": "식당1",
      "capacity": 500,
      "connected": 130,
  },
  {
      "name": "식당2",
      "capacity": 300,
      "connected": 270,
  },
  {
      "name": "식당3",
      "capacity": 400,
      "connected": 220,
  }
];

function App() {
  return (
    <div className="App">
      {dummyData.map((data) => {
        let a = <Box>
          <h2 style={{margin: 5}}>{data.name}</h2>
          <Progress value={(data.connected/data.capacity)*100}/>
          <Capacity>{data.connected}명/{data.capacity}명</Capacity>
        </Box>
        return a;
      })}
    </div>
  );
}

export default App;
