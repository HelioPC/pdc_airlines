import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

export const AlertError = ({ title, description }) => {
    Swal.fire({
        title: title,
        icon: 'error',
        text: description,
    })
}

export const AlertSuccess = ({ title, description, link, message, confirm }) => {
    Swal.fire({
        title: title,
        icon: 'success',
        text: description,
        footer: (link !== undefined && message !== undefined) ? `<a href=${link}>${message}</a>` : 'PDC - Airlines 2022 ✈️',
    }).then(confirm).catch(function (error) {console.log(error)})
}