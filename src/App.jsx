const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
  <p>
    Total units: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
  </p>
  )
}

const Footer = (props) => {
  return (
    <footer>
      <p>{props.name} - {props.code} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = 'CSIT340 - Industry Elective'

  const parts = [
    {
      name: 'CSIT340 Web Development',
      exercises: 3
    },
    {
      name: 'CSIT321 App Development',
      exercises: 3
    },
    {
      name: 'CSIT327 Information Management',
      exercises: 3
    }
  ]

  const studentName = 'Terence Emmanuel De Vera'
  const courseCode = 'CSIT340'
  const section = 'G5'

  return (
    <div>
      <p></p>

      <p> Exercise 1.4 : course information step 4</p>
     
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer name={studentName} code={courseCode} section={section} />
    </div>
  )
}
export default App