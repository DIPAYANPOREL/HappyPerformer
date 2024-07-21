import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import Header from "../Components/Software Components/Dashboard/Header";
import Layout from "../Components/Software Components/Dashboard/Layout";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const CardContainer = styled.div`
  margin-top: 100px;
  width: 80%;
  margin-left: 10%;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 55px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.15);
`;

const Form = styled.form`
  margin-top: 20px;
`;

const Select = styled.select`
  padding: 5px;
  margin-right: 20px;
`;

const Button = styled.button`
  padding: 5px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Input = styled.input`
  padding: 5px;
  margin-top: 5px;
`;

const Card = ({ title, children }) => {
  return (
    <CardContainer>
      <h3>{title}</h3>
      {children}
    </CardContainer>
  );
};

const ITdeclaration = () => {
  const [investment80C, setInvestment80C] = useState({
    type: "",
    amount: "",
  });
  const [investment80D, setInvestment80D] = useState({
    type: "",
    amount: "",
  });
  const [otherInvestment, setOtherInvestment] = useState({
    type: "",
    amount: "",
  });
  const [otherIncome, setOtherIncome] = useState({
    income: "",
    savingsInterest: "",
    fixedDepositInterest: "",
    nsCertificatesInterest: "",
  });

  const handleInputChange = (e, setState) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e, data, endpoint) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://your-backend-url/${endpoint}`,
        data
      );
      console.log(response.data);
      // Handle success, show a message, etc.
    } catch (error) {
      console.error("There was an error!", error);
      // Handle error, show a message, etc.
    }
  };

  return (
    <Layout>
      <Header title="IT Declarations" />
      <div>
        <Card
          title={
            <div
              style={{
                color: "#00b8d2",
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                padding: "5px",
                marginBottom: "25px",
              }}
            >
              80C Investments
            </div>
          }
        >
          <p style={{ marginBottom: "15px" }}>
            <strong>Note:</strong> This section contains the list of investments
            including LIC Schemes, Mutual Funds, and Unit-Linked Insurance Plan.
            The maximum limit for this section is Rs. 1,50,000.00.
          </p>
          <Form
            onSubmit={(e) => handleSubmit(e, investment80C, "investment-80C")}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <p
              style={{
                marginBottom: "20px",
                width: "28%",
                alignItems: "center",
              }}
            >
              <strong>Select An Investment</strong>
            </p>
            <Select
              name="type"
              value={investment80C.type}
              onChange={(e) => handleInputChange(e, setInvestment80C)}
              style={{
                marginBottom: "20px",
                width: "28%",
                alignItems: "center",
              }}
            >
              <option value="LIC">Life Insurance Premium</option>
              <option value="PPF">Public Provident Fund</option>
              <option value="Unit-Linked Insurance Plan">
                Unit-Linked Insurance Plan
              </option>
              <option value="NSC">National Savings Certificate</option>
              <option value="MutualFunds">Mutual Funds</option>
              <option value="TutionFees">Tution Fees</option>
            </Select>
            <Input
              name="amount"
              value={investment80C.amount}
              onChange={(e) => handleInputChange(e, setInvestment80C)}
              style={{
                marginBottom: "20px",
                width: "28%",
                alignItems: "center",
              }}
              type="number"
              placeholder="Enter your amount"
            />
            <Button
              style={{ marginBottom: "20px", width: "28%" }}
              type="submit"
            >
              Save
            </Button>
          </Form>
        </Card>
        <Card
          title={
            <div
              style={{
                color: "#ffb22b",
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                borderRadius: "2px",
                padding: "5px",
                marginBottom: "25px",
              }}
            >
              80D Investments
            </div>
          }
        >
          <p style={{ marginTop: "20px", marginBottom: "20px" }}>
            Investment Declaration
          </p>
          <p>
            <strong>Note :</strong> Declare investment such as LIC Premiums,
            Mutual Funds and Unit-Linked Insurance Plan under this section. The
            maximum tax saving investment you can make under 80C is Rs.1,50,000
          </p>
          <Form
            onSubmit={(e) => handleSubmit(e, investment80D, "investment-80D")}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <p
              style={{
                marginBottom: "20px",
                width: "28%",
                alignItems: "center",
              }}
            >
              <strong>Select An Investment</strong>
            </p>
            <Select
              name="type"
              value={investment80D.type}
              onChange={(e) => handleInputChange(e, setInvestment80D)}
              style={{
                marginBottom: "20px",
                width: "28%",
                alignItems: "center",
              }}
            >
              <option value="self">
                Medi Claim Policy for self/spouse/children-80D
              </option>
              <option value="seniorCitizen">
                Medi Claim Policy for self/spouse/children/Senior Citizen -80D
              </option>
              <option value="parents">Medi Claim Policy for Parents-80D</option>
              <option value="medicalBills">
                Medi Claim Policy or Medical Bills for senior citizen -80D
              </option>
              <option value="healthCheckUp">
                Prevention Health Check Up-80D
              </option>
              <option value="healthCheckUpParents">
                Prevention Health Check Up for Parents -80D
              </option>
            </Select>
            <Input
              name="amount"
              value={investment80D.amount}
              onChange={(e) => handleInputChange(e, setInvestment80D)}
              style={{
                marginBottom: "20px",
                width: "28%",
                alignItems: "center",
              }}
              type="number"
              placeholder="Enter your amount"
            />
            <Button
              style={{ marginBottom: "20px", width: "28%" }}
              type="submit"
            >
              Save
            </Button>
          </Form>
        </Card>
        <Card
          title={
            <div
              style={{
                color: "#28a725",
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                borderRadius: "2px",
                padding: "5px",
                marginBottom: "25px",
              }}
            >
              Other Investments and Exemptions
            </div>
          }
        >
          <p style={{ marginTop: "20px", marginBottom: "20px" }}>
            Investment Declaration
          </p>
          <p>
            <strong>Note :</strong> Declare investments such as voluntary NPS,
            Interest paid on education loan and medical expenditures under this
            section
          </p>
          <Form
            onSubmit={(e) =>
              handleSubmit(e, otherInvestment, "other-investments")
            }
            style={{ display: "flex", flexDirection: "column" }}
          >
            <p
              style={{
                marginTop: "10px",
                marginBottom: "20px",
                width: "28%",
                alignItems: "center",
              }}
            >
              <strong>Select An Investment</strong>
            </p>
            <Select
              name="type"
              value={otherInvestment.type}
              onChange={(e) => handleInputChange(e, setOtherInvestment)}
              style={{
                marginBottom: "20px",
                width: "28%",
                alignItems: "center",
              }}
            >
              <option value="NPS">
                Additional Exemptions on Voluntary NPS
              </option>
              <option value="RGESS">Rajiv Gandhi Equity Savings Scheme</option>
              <option value="disability">
                Treatment of Dependent with Disability
              </option>
              <option value="severeDisability">
                Treatment of Dependent with Severe Disability
              </option>
            </Select>
            <Input
              name="amount"
              value={otherInvestment.amount}
              onChange={(e) => handleInputChange(e, setOtherInvestment)}
              style={{
                marginBottom: "20px",
                width: "28%",
                alignItems: "center",
              }}
              type="number"
              placeholder="Enter your amount"
            />
            <Button
              style={{ marginBottom: "20px", width: "28%" }}
              type="submit"
            >
              Save
            </Button>
          </Form>
        </Card>
        <Card
          title={
            <div
              style={{
                background: "rgba(0,0,0,0.05)",
                borderRadius: "2px",
                padding: "5px",
                marginBottom: "25px",
              }}
            >
              Other Sources Of Income
            </div>
          }
        >
          <p style={{ marginBottom: "10px", padding: "10px" }}>
            <strong>Special title treatment</strong>
          </p>
          <div
            style={{
              backgroundColor: "#f8d7da",
              borderColor: "#f5c2c7",
              color: "#822029",
              padding: "15px",
              borderRadius: "2px",
            }}
          >
            <p
              style={{
                marginBottom: "5px",
                padding: "10px",
                height: "10px",
                marginLeft: "-15px",
              }}
            >
              <strong>
                ⚠️ Remember empty fields will be considered as 0 if not filled
              </strong>
            </p>
          </div>
          <p style={{ marginTop: "35px" }}>Income from other sources</p>
          <Form
            onSubmit={(e) =>
              handleSubmit(e, { income: otherIncome.income }, "other-income")
            }
          >
            <Input
              name="income"
              value={otherIncome.income}
              onChange={(e) => handleInputChange(e, setOtherIncome)}
              type="number"
              placeholder="Enter your amount"
              style={{ marginTop: "-5px", marginBottom: "20px", width: "27%" }}
            />
          </Form>
          <p>Interest Earned from Savings Deposit</p>
          <Form
            onSubmit={(e) =>
              handleSubmit(
                e,
                { savingsInterest: otherIncome.savingsInterest },
                "other-income"
              )
            }
          >
            <Input
              name="savingsInterest"
              value={otherIncome.savingsInterest}
              onChange={(e) => handleInputChange(e, setOtherIncome)}
              type="number"
              placeholder="Enter your amount"
              style={{ marginTop: "-5px", marginBottom: "20px", width: "27%" }}
            />
          </Form>
          <p>Interest Earned from Fixed Deposit</p>
          <Form
            onSubmit={(e) =>
              handleSubmit(
                e,
                { fixedDepositInterest: otherIncome.fixedDepositInterest },
                "other-income"
              )
            }
          >
            <Input
              name="fixedDepositInterest"
              value={otherIncome.fixedDepositInterest}
              onChange={(e) => handleInputChange(e, setOtherIncome)}
              type="number"
              placeholder="Enter your amount"
              style={{ marginTop: "-5px", marginBottom: "20px", width: "27%" }}
            />
          </Form>
          <p>Interest Earned from National Savings Certificates</p>
          <Form
            onSubmit={(e) =>
              handleSubmit(
                e,
                { nsCertificatesInterest: otherIncome.nsCertificatesInterest },
                "other-income"
              )
            }
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Input
              name="nsCertificatesInterest"
              value={otherIncome.nsCertificatesInterest}
              onChange={(e) => handleInputChange(e, setOtherIncome)}
              type="number"
              placeholder="Enter your amount"
              style={{ marginTop: "-5px", marginBottom: "20px", width: "27%" }}
            />
            <Button
              style={{ width: "27%", marginBottom: "20px" }}
              type="submit"
            >
              Save
            </Button>
          </Form>
        </Card>
      </div>
    </Layout>
  );
};

export default ITdeclaration;
