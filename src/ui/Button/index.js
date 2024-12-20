import './index.css'

export const Button = ({type}) => {
    return (
        <>
        <button className='button' type={type} >
            Criar card
        </button>
        </>
    )
}