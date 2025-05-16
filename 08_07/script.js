/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

// An international currency calculator for tip calculations

const formatter = (locale, currency, value) => {
  let formattedValue = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
  return formattedValue;
};

const tipCalculator = (sum, percentage, locale, currency) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`
  Sum before tip: ${formatter(locale, currency, sum)}
  Tip percentage: ${percentage}%
  Tip:            ${formatter(locale, currency, tip)}
  Total:          ${formatter(locale, currency, total)}
`);
};

tipCalculator(29.95, 5, "de-DE", "EUR");
