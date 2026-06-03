import s from './card.module.css'

export const Card = (props) => {
      return(
        <div key={props.id}>
          <img src={props.imagem} alt={props.nome} />
          <h4>Name: {props.nome}</h4>
          <p>Ki: {props.ki}</p>
          <p>MaxKi: {props.maxKi}  </p>
          <p>Race: {props.raça}</p>
          <p>Gender: {props.genero}</p>
        </div>
      )

}