import "../assets/sass/style.scss";

interface User {
    nombre: string;
    lastaname: string;
}
interface State {
    list:Array<User>
}
const $form: HTMLFormElement = document.querySelector('form')!
let state:State;
const getFormData = <T>(form:HTMLFormElement) : T => {


    const formData: FormData = new FormData(form);
    let data : T
    const state = {
        data: data!
    }

    let i = 0

    let values = Array.from(formData.values())

    for (let key of formData.keys()) {
        state.data = { ...state.data, [key]: values[i] }
        i++
    }


    return state.data
}

$form.addEventListener('submit' ,(e:Event) => {
    e.preventDefault()
    getFormData<User>($form)
    console.log(getFormData<User>($form).nombre)
    state.list.push(getFormData<User>($form))
    //const data:Array<FormTest> = getFormData<FormTest>(form)
    console.log(state)
})





