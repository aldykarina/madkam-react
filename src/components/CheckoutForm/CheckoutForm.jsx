import { useState } from 'react';

export default function CheckoutForm({ onConfirm }) {


    
    const [formValues, setFormValues] = useState({
        nombre: '',
        email: '',
        phone: '',
        confirmEmail: '',
    });
    
    const [isEmailValid, setIsEmailValid] = useState(false);
    

    const handleChange = (e) => {
        setFormValues({
          ...formValues,
          [e.target.name]: e.target.value
        });
        const emailRegex = /^\S+@\S+\.\S+$/; 
        setIsEmailValid(emailRegex.test(e.target.value));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onConfirm(formValues)
    };


    const emailOk = isEmailValid  && formValues.email === formValues.confirmEmail;
    const emailDiferent = formValues.email === formValues.confirmEmail
    const isFormValid = formValues.nombre && formValues.phone  && emailOk;

    const clearForm = () => {
        setFormValues({
          nombre: '',
          email: '',
          phone: '',
          confirmEmail: '',
        });
    };
    

    return (
        <div className="checkout">
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit} className='checkoutInput'>

                <input
                    type="text"
                    placeholder="Ingresa tu nombre"
                    name="nombre"
                    value={formValues.nombre}
                    onChange={handleChange}
                />
                <input
                    type="phone"
                    placeholder="teléfono"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    placeholder="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                />  {(formValues.email != "" & !isEmailValid) ? <span className='spanIzq'>escribe un email valido</span> : ""}
                <input
                    type="email"
                    placeholder="confirmar email"
                    name="confirmEmail"
                    value={formValues.confirmEmail}
                    onChange={handleChange}
                />
                

                <div className="checkoutFin">

                    {!emailDiferent && <span className='spanIzq'>Los correos electrónicos no coinciden</span>}
                    {!isFormValid && <span>Todos los campos son obligatorios</span>}

                    <button
                        className={isFormValid ? 'btnDetalle' : ""}
                        type="submit"
                        disabled={!isFormValid}
                    >
                        Realizar compra
                    </button>
                    <button type="reset" onClick={clearForm}>
                        Limpiar Formulario
                    </button>
                </div>


            </form>
        </div>
    )
}

