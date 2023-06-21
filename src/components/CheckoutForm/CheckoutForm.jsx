import { useState } from 'react';

export default function CheckoutForm( {onConfirm} ) {

    const [formValues, setFormValues] = useState({
        nombre: '',
        email: '',
        phone: ''
    });
    
    const handleChange = (e) => {
        setFormValues({
          ...formValues,
          [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onConfirm(formValues)
      };

   /*  const onEnviar = (data) => {
        console.log(data);
        onConfirm(data)
    } */

    const isFormValid = formValues.nombre && formValues.email && formValues.phone;


    return(
        <div className="itemCard">
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Ingresa tu nombre"
                name="nombre"
                value={formValues.nombre}
                onChange={handleChange}
            />
            <input
            type="email"
            placeholder="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            />
            <input
            type="phone"
            placeholder="teléfono"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
            />
                
            { !isFormValid &&
                <span> Todos los campos son obligatorios </span> 
            }

            <button 
                className={isFormValid ? 'btnDetalle' : 'otraClase'} 
                type="submit"
                disabled={!isFormValid}
                >
                Realizar compra
            </button>
                

            </form>
        </div>
    )
}


/* 
const [valores, setValores] = useState({
    nombre: "",
    email: "",
    phone:""
});


const submitOpcion = (e) =>{
    e.preventDefault();
    console.log("Enviado",  valores)
}

const cambioValores = (e) =>{
    setValores({
        ...valores, 
        [e.target.name]: e.target.value,
    })
}

return (
<div className="itemCard">
    <h1>Contacto</h1>
    <form onSubmit={submitOpcion}>
        <input type="text" placeholder="Ingresa tu nombre"  value={valores.nombre}  onChange={cambioValores}   name="nombre" />
        <input type="email" placeholder="email"             value={valores.email}   onChange={cambioValores}   name="email" />
        <input type="phone" placeholder="teléfono"          value={valores.phone}   onChange={cambioValores}   name="phone" />
        
        <button className='btnDetalle' type="submit">Enviar</button>
    </form>
</div>
) */
