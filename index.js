let inputs = document.querySelectorAll(".control input");
function handleUpdate() {
  console.log(this);
  let unit = this.dataset.unit || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + unit
  );
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
