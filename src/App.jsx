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
      <Part name={props.part1.name} exercises={props.part1.exercises} />
      <Part name={props.part2.name} exercises={props.part2.exercises} />
      <Part name={props.part3.name} exercises={props.part3.exercises} />
    </div>
  )
}

const Total = (props) => {
  return <p>Total units: {props.total}</p>
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

  const part1 = {
    name : 'CSIT340 Web Development',
    exercises : 3
  }
  
  const part2 = {
    name : 'CSIT321 App Development',
    exercises : 3
  }

  const part3 = {
    name : 'CSIT327 Information Management',
    exercises : 3
  }


  const studentName = 'Terence Emmanuel De Vera'
  const courseCode = 'CSIT340'
  const section = 'G5'

  return (
    <div>
      <p></p>

      <p> Exercise 1.3 : course information step 3</p>
     
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
      <Footer name={studentName} code={courseCode} section={section} />
    </div>
  )
}
export default App