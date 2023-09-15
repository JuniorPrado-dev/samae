import './form.css'

export default function Formulario() {
    return <>
        <form>
            <br />
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" value=''/><br />
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" value=''/><br />
            <label htmlFor="professor">Professor:</label>
            <input type="text" id="professor" value=''/><br />
        </form>
    </>
}