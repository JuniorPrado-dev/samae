import { useState } from "react";

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)
    const onChange = (event) => {
        const { name, value, files } = event.target

        if (files) {
            const file = files[0]
            if (file) {
                const newRender = new FileReader()
                newRender.onload = (e) => {
                    const url = e.target.result
                    const newForm = { ...form, picture: url }
                    setForm(newForm)
                }
                newRender.readAsDataURL(file)
            }
        } else {
            const newForm = { ...form, [name]: value }
            setForm(newForm)
        }
    }
    const resetState = () => {
        setForm(initialState)
    }
    return [form, onChange, resetState]
}