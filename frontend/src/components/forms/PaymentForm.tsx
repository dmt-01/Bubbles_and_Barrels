import { Navigate } from "react-router";
import { useCartContext } from "../../core/cartContext";
import type { PaymentFormData } from "../../core/types";
import { useState, type FormEvent } from "react";

function PaymentForm() {
  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: "",
    cvv: "",
    expiryDate: "",
    fullName: "",
  });
  const [errorMessage, setErrorMessage] = useState<PaymentFormData>({
    cardNumber: "",
    cvv: "",
    expiryDate: "",
    fullName: "",
  });
  const { cart, setCart } = useCartContext();
  const [success, setSuccess] = useState<boolean>(false);

  const expiryDateChecker = (expiryDate: string) => {
    const month = parseInt(expiryDate.slice(0, 2));
    const year = parseInt(expiryDate.slice(3));

    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    if (month > 12 || month < 1) {
      setErrorMessage((prev) => {
        const newErrorMessage = {
          ...prev,
          expiryDate: "Le mois est incorrect",
        };
        return newErrorMessage;
      });
      return;
    }

    if (currentYear > year || (currentYear === year && currentMonth > month)) {
      setErrorMessage((prev) => {
        const newErrorMessage = {
          ...prev,
          expiryDate: "La date de la carte est passée",
        };
        return newErrorMessage;
      });
      return;
    }
    setErrorMessage((prev) => {
      const newErrorMessage = { ...prev, expiryDate: "" };
      return newErrorMessage;
    });
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      const newFormData = { ...prev, [name]: value };
      return newFormData;
    });
  };

  const luhnAlgorithm = (numberToCheck: string): boolean => {
    numberToCheck = numberToCheck.replaceAll(/[^0-9]/g, "");
    let sum: number = 0;
    let digit: number = 0;
    let isEven: boolean = false;

    for (let i = numberToCheck.length - 1; i >= 0; i--) {
      digit = parseInt(numberToCheck.charAt(i), 10);
      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit = (digit % 10) + Math.floor(digit / 10);
        }
      }

      sum += digit;
      isEven = !isEven;
    }

    return sum % 10 == 0;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    setErrorMessage({
      expiryDate: "",
      cardNumber: "",
      cvv: "",
      fullName: "",
    });

    const cardNumberRegex: RegExp =
      /[0-9]{4}[\- ]?[0-9]{4}[\- ]?[0-9]{4}[\- ]?[0-9]{4}/;
    const cvvRegex: RegExp = /[0-9]{3,4}/;

    if (
      !cardNumberRegex.test(formData.cardNumber) ||
      !luhnAlgorithm(formData.cardNumber)
    ) {
      setErrorMessage((prev) => {
        const newErrorMessage = {
          ...prev,
          cardNumber: "Le numéro de carte n'est pas dans le bon format",
        };
        return newErrorMessage;
      });
    }
    if (!cvvRegex.test(formData.cvv)) {
      setErrorMessage((prev) => {
        const newErrorMessage = {
          ...prev,
          cvv: "Le CVV n'est pas dans le bon format",
        };
        return newErrorMessage;
      });
    }
    expiryDateChecker(formData.expiryDate);
    if (formData.fullName.length < 2) {
      setErrorMessage((prev) => {
        const newErrorMessage = { ...prev, fullName: "Le nom est trop court" };
        return newErrorMessage;
      });
    }
    if (
      errorMessage.cardNumber ||
      errorMessage.cvv ||
      errorMessage.expiryDate ||
      errorMessage.fullName
    ) {
      return;
    }

    setSuccess(true);
    setCart({ products: [] });
  };

  return (
    <section className="all_forms">
      {cart && cart.products.length === 0 && <Navigate to="/" />}
      <h2>Paiement</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Numéro de carte :
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            pattern="[0-9]{4}[\- ]?[0-9]{4}[\- ]?[0-9]{4}[\- ]?[0-9]{4}"
            onChange={handleInput}
            placeholder="0000-0000-0000-0000"
            required
          />
        </label>
        {errorMessage.cardNumber && <small>{errorMessage.cardNumber}</small>}
        <label>
          Nom Complet :
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInput}
            pattern=".{2,}"
            placeholder="John Doe"
            required
          />
        </label>
        {errorMessage.fullName && <small>{errorMessage.fullName}</small>}
        <label>
          Date d'expiration :
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onBlur={(event) => expiryDateChecker(event.target.value)}
            onChange={handleInput}
            pattern="[0-9]{2}\/[0-9]{4}"
            placeholder="mm/aaaa"
            required
          />
        </label>
        {errorMessage.expiryDate && <small>{errorMessage.expiryDate}</small>}
        <label>
          CVV :
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleInput}
            pattern="[0-9]{3,4}"
            required
          />
        </label>
        {errorMessage.cvv && <small>{errorMessage.cvv}</small>}
        <button type="submit">Payer</button>
      </form>
      {success && <Navigate to="/confirmation" />}
    </section>
  );
}

export default PaymentForm;
