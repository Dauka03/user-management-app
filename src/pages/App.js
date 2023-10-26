import Layout from "../components/layout";
import MainBody from "../components/mainbody";
import "../style/mainbody.css";
import DataLoader from "../utils/DataLoader";
function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#C4C4C4",
      }}
    >
      <div class={"layout"}>
        <Layout></Layout>
      </div>
      <div
        class={"App"}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <MainBody></MainBody>
      </div>
      <DataLoader></DataLoader>
    </div>
  );
}

export default App;
