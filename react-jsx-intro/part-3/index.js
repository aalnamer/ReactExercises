const App = () => (
  <div>
    <Person
      name="Michael"
      age={17}
      hobbies={["Swimming", "Golf", "BasketBall"]}
    />
    <Person
      name="Josh"
      age={25}
      hobbies={["Baseball", "Football", "BasketBall"]}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
