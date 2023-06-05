import { useForm } from 'react-hook-form';

export default function Contacto() {

    const {register, handleSubmit} = useForm();

    const funEnviar = (data) => {
        console.log(data);
    }

    return(
        <div className="itemCard">
            <h1>Contacto</h1>
            <form onSubmit={handleSubmit(funEnviar)}>

                <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")} />
                <input type="email" placeholder="email"            {...register("email")} />
                <input type="phone" placeholder="teléfono"         {...register("phone")} />
                <button className='btnDetalle' type="submit">Enviar</button>

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