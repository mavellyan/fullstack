const Header = ({name}) => {
  return (
    <h2> {name} </h2>
  )
};

const Part = ({part}) => {
  return (
    <p> {part.name} {part.exercises} </p>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => <Part key={part.id} part={part}/>)}
    </div>
  )
};

const Total = ({parts}) => {
  const values = parts.map(part => part.exercises)
  const sum = values.reduce((total, current) => total+current, 0)

  return (
    <b>total of {sum} exercises</b>
  )
};

const Course = ({course}) => {
  return(
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
  )
}

export default Course