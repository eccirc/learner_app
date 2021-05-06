
import './App.css';

import { storeDB } from './firebaseConfig'

function App() {

  const ref = storeDB.collection('learners').doc('Learner One')
  const learner = 'Person!'
  
  const first = ref.get().then((doc) => {
    if(doc.exists){
      return doc.data().Email
    }
    else return 'no such doc!'
  })

  const email = first.toString()

  console.log(email)

  return (
    <div className="App">
      <div className="content">
        <h1>HELLOOO</h1>
        <p>Hello to you, { learner }</p>
      </div>
    </div>
  );
}

export default App;
