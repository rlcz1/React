import './App.css';
import useToggle from './hooks/useToggle';
import Checkbox from './components/Checkbox';
import Box from './components/Box';
import useHover from './hooks/useHover';

// 사용자 정의 훅
// 기존 훅 조합해서 사용
// 자주 사용하는 로직을 재사용 가능

function App() {
const [on, toggle] = useToggle();
	const [ref, isHover] = useHover();

	return (<div>
		<Checkbox checked={on} onChange={toggle} />
		{isHover ? "hover" : "mouseout"}
		<Box ref={ref} />

	</div>);

  // const [on, toggle] = useToggle();
  // const [ref, isHover] = useHover();

  // console.log(on); //체크박스가 바뀔 때 마다 on이 바뀜

  // return (
  //   <div className="App">
  //     <Checkbox checked={on} onChange={toggle} />

  //     {isHover ? 'hover' : "mouseout"}
  //     <Box ref={ref} />
  //     {/* <button onClick={toggle}>{on ? "True" : "false"}</button> */}
  //   </div>
  // );
}

export default App;
