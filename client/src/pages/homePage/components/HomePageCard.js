import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StatusStyle } from "../../../components/Utils";

const HomePageCard = ({ newInvoices }) => {
  const style = {
    margin: 0
  };

  return (
    <Container>
      {newInvoices?.map((invoice, i) => (
        <Link key={invoice._id ? invoice._id : i} to={`/${invoice._id}`}>
          <Card
            className="mt-3 homepage-card"
            style={{ backgroundColor: "#fff" }}
          >
            <Card.Body className="d-flex justify-content-between align-items-md-center justify-content-md-evenly">
              <Card.Body className="d-flex flex-column align-items-md-center flex-md-row justify-content-evenly justify-content-md-around homepage-card-30-width">
                <Card.Title
                  className="blue-dark header-main m-0 p-0"
                  style={style}
                >
                  #
                  <span className="black">
                    {invoice.invoiceNumber?.toUpperCase()}&nbsp;&nbsp;
                  </span>
                </Card.Title>
                <Card.Text
                  className="align-self-start blue-dark width-124"
                  style={style}
                >
                  Due&nbsp; {invoice.paymentDue?.substring(0, 10)}
                </Card.Text>
              </Card.Body>
              <Card.Body className="d-flex flex-column flex-md-row align-items-center justify-content-between justify-content-md-evenly">
                <Card.Text className="blue-dark" style={style}>
                  {invoice.clientName}
                </Card.Text>
                <Card.Text className="blue-dark my-2 my-md-0" style={style}>
                  $ {invoice.total?.toFixed(2)}
                </Card.Text>
                <Card.Text
                  className="m-0 text-capitalize font-weight-bold"
                  style={StatusStyle(invoice.status)}
                >
                  {invoice.status}
                </Card.Text>
              </Card.Body>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </Container>
  );
};

export default HomePageCard;
