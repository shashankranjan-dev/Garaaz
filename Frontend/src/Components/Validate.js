const validate = (values) => {
  const errors = {};
  if (!values.brand) {
    errors.brand = "This field of Brand is Required";
  }
  if (!values.transactionType) {
    errors.transactionType = "This field of Transaction is Required";
  }
  if (values.transactionType) {
    if (
      values.transactionType !== "Trading" &&
      values.transactionType !== "Facilitation"
    )
      errors.transactionType =
        "Invalid Transaction Type. Must be either Trading or Facilitation";
  }
  if (!values.totalOrders) {
    errors.totalOrders = "This field of Total Order is Required";
  }
  if (!values.totalOrdersValue) {
    errors.totalOrdersValue = "This field of Total Order Value is Required";
  }
  if (!values.grossMargin) {
    errors.grossMargin = "This field of Gross Margin is Required";
  }

  return errors;
};

export default validate;
