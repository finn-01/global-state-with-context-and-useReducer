import { useReducer } from "react"; //Khi state o pham vi toan cuc thi co nhieu state, co cau truc phuc tap hon
import Context from "./Context";
import reducer, { initState } from "./reducer";
import logger from "./logger";

//func chua children
function Provider({ children }) {
  const [state, dispatch] = useReducer(logger(reducer), initState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export default Provider;
