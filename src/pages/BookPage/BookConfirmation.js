import React from "react";
import Fade from "react-reveal";

import Button from "../../components/Button";

import IllForm from "../../assets/images/illustration-form.svg";

export default function BookConfirmation(props) {
  const {
    peoples,
    date,
    time,
    tag,
    firstName,
    lastName,
    email,
    phone,
    info,
    peopleList,
  } = props;

  let dataPeople = peopleList.people.find((key) => key._id === peoples);

  const toComplete = () => {
    if (props.toComplete) props.toComplete();
  };

  const toForm = () => {
    if (props.toForm) props.toForm();
  };

  return (
    <div className="row w-100">
      <Fade bottom delay={200}>
        <div className="col-md-6 middle mt-5">
          <img
            src={IllForm}
            alt=""
            width="100%"
            style={{ maxWidth: "370px" }}
            className="d-none d-md-block"
          />
          <img
            src={IllForm}
            alt=""
            width="100%"
            style={{ maxWidth: "100px" }}
            className="d-block d-md-none"
          />
        </div>
        <div className="col-md-6 middle mt-5">
          <div className="d-block w-100">
            <p className="text-primary">Confirm your data</p>
            <dl className="row">
              <dt className="col-4">Name</dt>
              <dd className="col-8">{`${tag}. ${firstName} ${lastName}`}</dd>
            </dl>
            <dl className="row">
              <dt className="col-4">Email</dt>
              <dd className="col-8">{`${email}`}</dd>
            </dl>
            <dl className="row">
              <dt className="col-4">Phone</dt>
              <dd className="col-8">{`${phone}`}</dd>
            </dl>
            <dl className="row">
              <dt className="col-4">Guest</dt>
              <dd className="col-8">{`${dataPeople.people}`}</dd>
            </dl>
            <dl className="row">
              <dt className="col-4">Date</dt>
              <dd className="col-8">{`${date}`}</dd>
            </dl>
            <dl className="row">
              <dt className="col-4">Time</dt>
              <dd className="col-8">{`${time}`}</dd>
            </dl>
            <dl className="row">
              <dt className="col-4">Info</dt>
              <dd className="col-8">{`${info}`}</dd>
            </dl>
          </div>
        </div>
        <div className="col-12 middle my-5">
          <Fade bottom delay={400}>
            <Button className="btn btn-outline-secondary mx-3" onClick={toForm}>
              Back
            </Button>
          </Fade>
          <Fade bottom delay={600}>
            <Button className={`btn btn-primary`} onClick={toComplete}>
              Confirm
            </Button>
          </Fade>
        </div>
      </Fade>
    </div>
  );
}
