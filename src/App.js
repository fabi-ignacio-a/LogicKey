import "./styles.css";

//La función se llama destructuring
const Title = ({ children, titleClass }) => {
  //Las props tienen hijos (children)
  return <h1 className={`${titleClass} title `}> {children} </h1>;
};

export default function App() {
  return (
    <div className="App">
      <Title titleClass="green" />
      Me gusta
      {["React", "JavaScript", "NestJS", "HTML"].map((e) => {
        return <span style={{ marginRight: 2, marginLeft: 2 }}>{e}</span>;
      })}
      <Title />
      {/* 
        Los children pueden recibir lo que uno quiera como valor.
        Incluso pueden tener HTML.
        */}
    </div>
  );
}
