console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formelements = event.target.elements;
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  const badnessInput = document.querySelector("#badness");
  const badnessValue =
    Number(badnessInput.value) + Number(formelements.age.value);
  const vorName = formelements.firstName.value;
  console.log("The age-badness-sum of " + vorName + " is " + badnessValue);

  event.target.reset();
  event.target.elements.firstName.focus();
});
