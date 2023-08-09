import { useCallback, useState } from "react";
import Tips from "./components/Tips";

function App() {

  const [text, setText] = useState<string>('ROLE is better')


  const changeText = useCallback(() => {
    setText('ZEK is important!!')
  }, [])
  return (
    <div>
      <h1 onClick={changeText}>Hello World</h1>
      <Tips text={text} />
    </div>
  );
}

export default App;
