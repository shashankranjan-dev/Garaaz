import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  ButtonGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { Form, useField } from "react-final-form";
import validate from "./Validate";

const AddProduct = () => {
  const [isOpen, setIsOpen] = useState(false);

  function onSubmit(values) {
    return new Promise((resolve) => {
      handleAddProduct(values);
      setTimeout(resolve, 500);
    });
  }

  // validation end
  const handleAddProduct = async (values) => {
    var date = new Date();
    date.toISOString();
    const data = {
      brand: values.brand,
      transactionType: values.transactionType,
      totalOrders: values.totalOrders,
      totalOrderValue: values.totalOrdersValue,
      grossMarginPercentage: values.grossMargin,
      date: date.toISOString(),
    };
    console.log(data);
    await axios
      .post("http://localhost:5000/api/v1/brand-sales-daily", data)
      .then((res) => {
        console.log(res);
        alert(
          "Product Added Successfully. Refresh the page to see the changes"
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <InputGroup size="lg" marginTop={"6"}>
        <Input pr="10rem" />
        <InputRightElement width="7rem">
          <Button h="2.25rem" size="md" onClick={() => setIsOpen(!isOpen)}>
            Add Row
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button
        style={{ float: "right", marginTop: "10px" }}
        colorScheme="facebook"
      >
        Place Order
      </Button>

      {isOpen && (
        <div
          style={{
            marginTop: "60px",
          }}
        >
          <Form
            data-testid="form"
            onSubmit={onSubmit}
            validate={validate}
            render={({
              handleSubmit,
              form,
              errors,
              submitting,
              pristine,
              values,
            }) => (
              <Box
                as="form"
                p={4}
                borderWidth="1px"
                borderRadius="lg"
                boxShadow="1px 1px 3px rgba(0,0,0,0.3)"
                onSubmit={handleSubmit}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <InputControl name="brand" label="Brand" />
                  <InputControl
                    name="transactionType"
                    label="Transaction Type"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <InputControl name="totalOrders" label="Total Orders" />
                  <InputControl
                    name="totalOrdersValue"
                    label="Total Orders Value"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "50%",
                  }}
                >
                  <InputControl name="grossMargin" label="Gross Margin" />
                </div>
                <ButtonGroup spacing={4}>
                  <Button
                    isLoading={submitting}
                    loadingText="Submitting"
                    variantColor="teal"
                    type="submit"
                  >
                    Submit
                  </Button>
                  <Button
                    variantColor="teal"
                    variant="outline"
                    onClick={form.reset}
                    isDisabled={submitting || pristine}
                  >
                    Reset
                  </Button>
                </ButtonGroup>
              </Box>
            )}
          />
        </div>
      )}
    </>
  );
};

const InputControl = ({ name, label }) => {
  const { input, meta } = useField(name);
  return (
    <Control name={name} my={4}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        {...input}
        isInvalid={meta.error && meta.touched}
        id={name}
        placeholder={label}
        width={"98%"}
      />
      <Error name={name} />
    </Control>
  );
};

const Control = ({ name, ...rest }) => {
  const {
    meta: { error, touched },
  } = useField(name, { subscription: { touched: true, error: true } });
  return <FormControl {...rest} isInvalid={error && touched} />;
};

const Error = ({ name }) => {
  const {
    meta: { error },
  } = useField(name, { subscription: { error: true } });
  return <FormErrorMessage>{error}</FormErrorMessage>;
};

export default AddProduct;
