import fail from '../images/fail-icon.svg'
import success from '../images/success-icon.svg'

export default function InfoTooltip(props) {
  return (
    <div className={`popup popup_type_info ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__overlay" onClick={props.onClose}></div>
      <div className="popup__container popup__container_type_info">
        <img className="popup__result" src={props.result ? success : fail} />
        <h2 className="popup__title popup__title_type_info">{props.result
          ? 'Вы успешно зарегистрировались!'
          : 'Что-то пошло не так! Попробуйте ещё раз.'}
        </h2>
        <button className="popup__close-button" type="button" onClick={props.onClose}></button>
      </div>
    </div>
  )
}