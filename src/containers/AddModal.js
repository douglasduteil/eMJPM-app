import { connect } from "react-redux";
import Modal from "react-modal";
import styled from "styled-components";
import { openModalAction, closeModalAction } from "../actions";
import Commentaire from "../components/tiComponents/Commentaire";
import RowModal from "../components/communComponents/RowModal";

function mapStateToProps(state) {
  console.log("hllo",state.openModal)
  return {
    openModal: state.openModal
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onModalOpen: () => dispatch(openModalAction),
    oncloseModal: () => dispatch(closeModalAction)
  };
}

const TitleMandataire = styled.div`
  text-align: left;
  font-size: 1.5em;
  font-weight: bold;
`;

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class AddModalMandataire extends React.Component {
  render() {
    const { openModal, onModalOpen, oncloseModal, mandataire } = this.props;
    return (
      <Modal
        isOpen={openModal}
        onRequestClose={oncloseModal}
        style={modalStyles}
        contentLabel="mandataire"
        background="#e9ecef"
        className="Modal"
        overlayClassName="Overlay"
      >
        <button onClick={oncloseModal}>X</button>
        <FicheMandataire mandataire={mandataire} />
      </Modal>
    );
  }
}

export const FicheMandataire = ({ style, mandataire }) => (
  <div className="container" style={style}>
    <div className="row">
      <div className="col-6">
        <TitleMandataire>{mandataire.etablissement}</TitleMandataire>
        <div>{mandataire.type}</div>
        <RowModal value={mandataire.adresse} />
        <div>
          {mandataire.code_postal} {mandataire.ville}
        </div>
        <br />
        <RowModal label="Contact" value={mandataire.referent} />
        <div>{mandataire.telephone}</div>
        <div>{mandataire.email}</div>
        <br />
        {<RowModal label="Tribunal Instance" value={mandataire.ti} />}
      </div>
      <div className="col-6">
        <div
          style={{
            verticalAlign: "middle",
            paddingLeft: 10,
            borderBottom: "20px",
            lineHeight: "40px"
          }}
        >
          Mesures en cours : {mandataire.disponibilite} / {mandataire.dispo_max}
        </div>
        <br />
        <Commentaire currentMandataire={mandataire} />
      </div>
    </div>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(AddModalMandataire);
