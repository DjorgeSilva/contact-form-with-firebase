import React, { useState } from 'react'
import { Container } from './FormElements'
import { db } from "./Firebase"

export const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loader, setLoader] = useState(false);

    const handlerSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        if (name && email && message) {
            db.collection('contacts').add({
                name: name,
                email: email,
                message: message,
            })
                .then(() => {
                    alert('mensagem enviada');
                    setLoader(false)
                })
                .catch((error) => {
                    alert(error.message)
                    setLoader(false)
                })

            setName("");
            setEmail("");
            setMessage("");
        }else{
            alert("preencha todos os campos")
        }
    };



    return (
        <Container className="container">
            <form onSubmit={handlerSubmit}>
                <h1>Contato</h1>

                <label htmlFor="name">Nome</label>
                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="mensagem">Mensagem</label>
                <textarea name="mensagem" id="mensagem" cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

                <button type="submit" className="btn-submit">Enviar</button>

            </form>
        </Container>
    )
}
