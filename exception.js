function divideNumber(a, b) {
  try {
    if (b == 0) {
      throw new Error("Number cannot be divided by zero");
    }

    const result = a / b;
    console.log(result);
  } catch (error) {
    console.error(`Error : ${error.message}`);
  } finally {
    console.log("execution complete");
  }
}

divideNumber(10,0);