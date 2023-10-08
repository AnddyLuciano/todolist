import { RecoilRoot, atom } from 'recoil';
import './App.css';
import { Todo } from './container/Todo';

function App() {
  return (
    <RecoilRoot>
      <Todo/>
    </RecoilRoot>
  );
}
export const listState = atom({key:"listState",default:[]})
export default App;
