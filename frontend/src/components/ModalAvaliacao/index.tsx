import * as Styled from "./styles";
import Modal from "react-modal";

const ModalAvaliacao: React.FC<IModalProps> = (ModalProps: IModalProps) => {
    return (
        <Styled.Container>
            
        </Styled.Container>
    );
};

interface IModalProps{
    modalIsOpen: boolean
    closeModal: () => void

}

export default ModalAvaliacao;
