const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part name={props.course.parts[0].name} exercises={props.course.parts[0].exercises} />
      <Part name={props.course.parts[1].name} exercises={props.course.parts[1].exercises} />
      <Part name={props.course.parts[2].name} exercises={props.course.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
  <p>
    Total units: {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}
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
  const course = {
    name:'CSIT340 - Industry Elective',
    parts: [
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
  }
  const studentName = 'Terence Emmanuel De Vera'
  const courseCode = 'CSIT340'
  const section = 'G5'

  return (
    <div>
      <p></p>

      <p> Exercise 1.5 : course information step 5</p>
     
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      <Footer name={studentName} code={courseCode} section={section} />
    </div>
  )
}
export default App