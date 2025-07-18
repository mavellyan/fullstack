const Header = (course) => {
  return (
    <h1> {course.coursename} </h1>
  )
};

const Part = (part) => {
  return (
    <p> {part.name} {part.exercises} </p>
  )
}

const Content = (parts) => {
  return (
    <div>
      <Part name={parts.name1} exercises={parts.exercises1} />
      <Part name={parts.name2} exercises={parts.exercises2} />
      <Part name={parts.name3} exercises={parts.exercises3} />
    </div>
  )
};

const Total = (sum) => {
  return (
    <p> {sum.total} </p>
  )
};

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {name: 'Fundamentals of React', exercises: 10},
    {name: 'Using props to pass data', exercises: 7},
    {name: 'State of a component', exercises: 14},
  ];

  return (
    <div>
      <Header coursename={course} />
      <Content name1={parts[0].name} exercises1={parts[0].exercises} name2={parts[1].name} exercises2={parts[1].exercises} name3={parts[2].name} exercises3={parts[2].exercises} />
      <Total total={parts[0].exercises+parts[1].exercises+parts[2].exercises} />
    </div>
  )
};

export default App;