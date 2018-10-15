import fetch from "isomorphic-fetch";
import Form, { validateJsonSchema, mergeErrorSchema } from "react-jsonschema-form";
import styled from "styled-components";
import apiFetch from "../communComponents/Api";
import RowModal from "../communComponents/RowModal";
import SearchButton from "../communComponents/SearchButton";
import piwik from "../../piwik";

function validate(formData, errors) {
  if (formData.pass1 !== formData.pass2) {
    errors.pass2.addError("Mot de passe incorrect");
  }
  return errors;
}

const cabinet = ["1A", "1B", "2A", "2B", "3A", "3B", "4A", "4B", "5A", "5B", "6A", "6B"];
const schema = {
  type: "object",
  required: ["username", "pass1", "pass2", "email"],
  properties: {
    username: { type: "string", title: "Identifiant", default: "" },
    pass1: { type: "string", title: "Mot de passe", minLength: 10 },
    pass2: { type: "string", title: "Verifier le Mot de passe", minLength: 10 },
    email: { type: "string", title: "Adresse email", default: "" },
    cabinet: { type: "string", title: "Cabinet (pour Paris)", default: "", enum: cabinet }
  }
};

const uiSchema = {
  pass1: {
    "ui:placeholder": "10 caratères minimum",
    "ui:widget": "password"
  },
  username: {
    "ui:placeholder": "Nom d'utilisateur"
  },
  email: {
    "ui:placeholder": "Adresse email"
  }
};

const formData = {};

class InscriptionTis extends React.Component {
  /*onSubmit = ({ formData }) => {
     apiFetch(`/mandataires/1`, {
      method: "POST",
      body: JSON.stringify({
      username:
      pass1:
      pass2:
      telephone:
      email:
      adresse:
      code_postal:
      ville:
      })
    }).then(json => {
     // this.props.updateMadataire(json);
    });
	};*/

  render() {
    return (
      <div>
        <br />
        <h2 style={{ margin: "0px 20px 20px 20px" }}>
          Veuillez renseigner ci-dessous les informations pour enregistrer un tribunal
          d&apos;instance :
        </h2>
        <br />
        <b>
          <Form
            schema={schema}
            formData={formData}
            uiSchema={uiSchema}
            validate={validate}
            showErrorList={false}
          >
            <div style={{ textAlign: "left", paddingBottom: "10px", marginLeft: "20px" }}>
              <SearchButton type="submit">Enregistrer</SearchButton>
            </div>
          </Form>
        </b>
      </div>
    );
  }
}

export default InscriptionTis;
