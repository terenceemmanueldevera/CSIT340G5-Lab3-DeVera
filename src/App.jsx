const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
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
  const part1 = 'CSIT340 Web Development'
  const exercises1 = 3
  const part2 = 'CSIT321 App Development'
  const exercises2 = 3
  const part3 = 'CSIT327 Information Management'
  const exercises3 = 3

  const studentName = 'Terence Emmanuel De Vera'
  const courseCode = 'CSIT340'
  const section = 'G5'

  return (
    <div>
      <p></p>

      <p> Exercise 1.1 : course information step 1</p>
     

      <Header course={course} />
      <Content 
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
      
      <Footer name={studentName} code={courseCode} section={section} />
    </div>
  )
}

export default App