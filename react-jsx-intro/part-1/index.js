const App = () => (
  <div>
    <FirstComponent />
    <NamedComponent name="Test" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
