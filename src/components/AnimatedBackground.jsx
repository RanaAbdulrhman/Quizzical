import './animated-background.css'


export default function AnimatedBackground({backgroundColor}){
  return (
  <div className="area" style={backgroundColor}>
      <ul className="circles">
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
      </ul>
  </div>)
}