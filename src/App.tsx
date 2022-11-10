import Router from "./Router";
import GlobalStyle from "./styles/GlobalStyle";
import { store } from "./redux/store";
import { Provider } from "react";

function App() {
  return (
    <>
      {/* <Provider store={store}> */}
      <GlobalStyle />
      <Router />
      {/* </Provider> */}
    </>
  );
}

export default App;
