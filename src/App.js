import { useState, Fragment } from "react";
import Logo from "./components/Logo";
import HeaderText from "./components/HeaderText";
import TextInput from "./components/TextInput";
import SelectInput from "./components/SelectInput";
import RadioGroupInput from "./components/RadioGroupInput";
import UserRating from "./components/UserRating";
import DateInput from "./components/DateInput";
import Text from "./components/Text";
import Button from "@mui/material/Button";
import PageLoader from "./components/PageLoader";
import { ToastContainer } from "react-toastify";
import toaster from "./toaster";
import validator from "./validator";
import { useAppContext } from "./AppContext";
import "./App.css";

function App() {
  const { partnerData, setPage, errors, setErrors } = useAppContext();
  const [loading, setLoading] = useState(false);

  const generateCert = async (e) => {
    e.preventDefault();
    setLoading(true);
    const validResp = validator(partnerData, errors, setErrors);
    if (!validResp) {
      setLoading(false);
      toaster("error", "You have an Error in your form", 3000);
      return;
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(partnerData),
    };

    try {
      const url = process.env.REACT_APP_BASE_URL;
      const resp = await fetch(`${url}cert/user/save`, requestOptions);
      const data = await resp.json();
      setLoading(false);

      if (data.status === 400) {
        toaster("error", data.message, 3000);
        return;
      }

      setPage("Cert");
    } catch (error) {
      setLoading(false);
      toaster("error", error.message, 3000);
      return;
    }
  };

  return (
    <Fragment>
      {loading && <PageLoader />}
      <div className="App">
        <ToastContainer />
        <header className="App-header">
          <Logo />
          <HeaderText />
        </header>
        <TextInput
          label="Full Name (Legal Name)"
          placeholder="Fullname"
          name="fullname"
          required="true"
        />

        <TextInput
          label="Email"
          placeholder="Email"
          name="email"
          required="true"
        />

        <SelectInput label="Subsidiary" required="true" name="subsidiary" />

        <TextInput
          label="Department / Unit (Type N/A if not applicable)"
          placeholder="Department"
          required="true"
          name="department"
        />

        <RadioGroupInput
          label="Training Location"
          locations={[
            "Abuja - Utako",
            "Benin",
            "Lagos - Gbagada",
            "Lagos - Lekki (HQ)",
            "Port-Harcourt",
          ]}
          required="true"
          name="location"
        />
        <TextInput
          label="Program Title"
          placeholder="program"
          required="true"
          name="program_title"
        />

        <DateInput
          label="Training Start Date"
          required="true"
          name="start_date"
        />
        <DateInput label="Training End Date" required="true" name="end_date" />

        <Text content="Kindly Share your objective feedback about the training" />

        <UserRating
          label="The objectives of the training were clearly defined"
          volume={5}
          required="true"
          name="objectives_defined"
        />
        <UserRating
          label="The Facilitators appeared knowledgeable of the subject matter"
          volume={5}
          required="true"
          name="facilitator_knwoledge"
        />
        <UserRating
          label="Participation and Interaction were encouraged"
          volume={5}
          required="true"
          name="encouraged_interaction"
        />
        <UserRating
          label="The content were organised and easy to follow"
          volume={5}
          required="true"
          name="organised_content"
        />
        <UserRating
          label="The training objectives were met"
          volume={5}
          required="true"
          name="objectives_met"
        />
        <UserRating
          label="The meeting room and facilities were adequate and comfortable"
          volume={5}
          required="true"
          name="adequate_facility"
        />
        <UserRating
          label="How relevant was this training to your current phase of your career"
          volume={5}
          required="true"
          name="training_relevance"
          low="Highly Irrelevant"
          high="Highly relevant"
        />

        <TextInput
          label="Which areas of the training could be improved upon"
          placeholder=""
          required=""
          name="areas_to_improve"
        />

        <UserRating
          label="Overall, what rating would you give this program"
          volume={10}
          required="true"
          name="program_overall_rating"
          low={"Completely Unacceptable"}
          high={"Very Exceptional"}
        />

        <TextInput
          label="Mention at least three (3) specific ways you would apply learnings you have acquired in this training."
          placeholder="your answer"
          required="true"
          name="learning_application"
        />

        <Text content="Thank you for your feedback. Please click the SUBMIT form. Your CERTIFICATE of Participation would be sent to your email upon completion. " />

        <Button
          variant="contained"
          id="submitButton"
          color="error"
          onClick={generateCert}
        >
          Submit
        </Button>
      </div>
    </Fragment>
  );
}

export default App;
