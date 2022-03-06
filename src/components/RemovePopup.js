import PopupWithForm from './PopupWithForm'

export default function RemovePopup({ isOpen, isLoading, onClose, onCardDelete, card }) {

  function handleCardDelete(e) {
    e.preventDefault();

    onCardDelete(card);
  }

  return (
    <PopupWithForm name="remove" title="Are you sure?" isOpen={isOpen} isLoading={isLoading} onClose={onClose} onSubmit={handleCardDelete} submitText="Yep" isSubmitValid={true} />
  )
}