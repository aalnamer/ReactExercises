const App = () => (
  <div>
    <Tweet
      username="User1"
      name="Michael"
      date={new Date().toDateString()}
      message="First Tweet!"
    />
    <Tweet
      username="User2"
      name="Josh"
      date={new Date().toDateString()}
      message="Second Tweet!"
    />
    <Tweet
      username="User3"
      name="Eric"
      date={new Date().toDateString()}
      message="Third Tweet!"
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
