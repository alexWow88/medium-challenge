import "./App.scss";
import Article from "./assets/components/Article/Article";

function App() {
  return (
    <div className="left-section">
      <Article articleTitle="Article Title" articleSummary="Article alfjlkjgljljdls dsagsdg  sdg sd gs gs dg as" authorArticle="Sam Changadang" dateReadTime="Sep 1 - 2 min" className="main-article" articleImage=" https://www.placecage.com/200/300" />
      <div className="latest-section">
        <h2>Latest</h2>
        <hr></hr>
      </div>
      <Article articleTitle="Article Title" articleSummary="Article alfjlkjgljljdls dsagsdg  sdg sd gs gs dg as" authorArticle="Sam Changadang" dateReadTime="Sep 1 - 2 min" articleImage="https://www.placecage.com/c/200/300" />
    </div>
  );
}

export default App;
