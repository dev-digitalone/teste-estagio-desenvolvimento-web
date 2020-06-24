const s = (el) => document.querySelector(el);

function scrollSuave() {
  const btn = s('[data-btn="contact"]');

  const handleContact = (e) => {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    const section = s(href);
    section.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  btn.addEventListener("click", handleContact);
}

function validateForm() {
  const alert = s("#alert");
  const btnForm = document.querySelector('[data-btn="form"]');

  const dismiss = () => {
    alert.classList.remove("active", "alert-danger", "alert-success");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dismiss();
    const name = s("#name");
    const email = s("#email");
    const city = s("#city");
    const uf = s("#UF");

    if (name.value && email.value && city.value && uf.value) {
      const verifEmail = email.value.match(/[\w.-]+@[\w-]+\.[\w.-]+/gi);

      if (verifEmail) {
        name.value = "";
        email.value = "";
        city.value = "";
        uf.value = "";

        alert.innerText = "Em breve entramos em contato";
        alert.classList.add("alert-success", "active");
        setTimeout(dismiss, 10000);
      } else {
        alert.innerText = "E-mail inválido";
        alert.classList.add("alert-danger", "active");
        setTimeout(dismiss, 2000);
      }
    } else {
      alert.innerText = "Preencha os campos";
      alert.classList.add("alert-danger", "active");
      setTimeout(dismiss, 2000);
    }
  };
  btnForm.addEventListener("click", handleSubmit);
}

scrollSuave();
validateForm();
