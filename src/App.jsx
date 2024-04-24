import { useEffect, useState } from 'react'

function App() {
    const [porcentaje, setPorcentaje] = useState(0)
    const [restantes, setRestantes] = useState(0)
    const [faltar, setFaltar] = useState(0)
    // const [clasesRequeridas, setClasesRequeridas] = useState(0)

    const [data, setData] = useState({});
    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data)
    };

    const porcentajeActual = () => {
        const calculo = data.presente * 100 / data.total
        setPorcentaje(Math.round(calculo))
    }

    const clasesRestantes = () => {
        const calculo = data.total - (parseInt(data.presente) + parseInt(data.ausente))
        setRestantes(calculo)
    }

    const seguirFaltando = () => {
        const clasesRequeridas = (data.porcentaje / 100) * data.total // calcula la cantidad de asistencias que se necesita para cumplir el porcentaje seleccionado
        const calculo = (data.total - clasesRequeridas) - data.ausente

        setFaltar(Math.round(calculo))
    }

    useEffect(() => {
        porcentajeActual()
        clasesRestantes()
        seguirFaltando()
    }, [data])

    return (
        <>
            <div className='m-auto w-[600px] pt-10'>
                <h1 className='text-2xl font-bold mb-10 text-center'>Calculadora de asistencia</h1>
                <div className='flex gap-4 justify-center shadow-lg p-4'>
                    <div className='flex flex-col gap-4 justify-center'>
                        <label className='font-semibold' htmlFor="">Porcentaje</label>
                        <label className='font-semibold' htmlFor="">Clases presente</label>
                        <label className='font-semibold' htmlFor="">Clases ausentes</label>
                        <label className='font-semibold' htmlFor="">Total de clases</label>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <select onChange={handleChange} className='text-black outline-none shadow-md p-1 font-semibold' name="porcentaje">
                            <option value={70}>70%</option>
                            <option value={75}>75%</option>
                            <option value={60} defaultValue>60%</option>
                            <option value={50}>50%</option>
                        </select>
                        <input onChange={handleChange} name='presente' className='p-1 shadow-md rounded-sm outline-none font-semibold' type="text" placeholder='4' />
                        <input onChange={handleChange} name='ausente' className='p-1 shadow-md rounded-sm outline-none font-semibold' type="text" placeholder='2' />
                        <input onChange={handleChange} name='total' className='p-1 shadow-md rounded-sm outline-none font-semibold' type="text" placeholder='18' />
                    </div>
                </div>
                <div className='flex justify-center gap-4 text-center mt-10 font-semibold'>
                    <ul className='flex flex-col'>
                        <li>Porcentaje actual:</li>
                        <li>Clases restantes:</li>
                        <li>Veces que puedes faltar:</li>
                    </ul>
                    <ul className='flex flex-col text-left'>
                        <li>{porcentaje}%</li>
                        <li>{restantes}</li>
                        <li>{faltar}</li>
                    </ul>
                </div>
                {/* {
                    porcentaje < 60 ?? <div className='my-10 text-center shadow-md p-4 rounded-sm text-red-600'>
                        <span className='text-xl font-semibold'>Asistencia insuficiente!</span>
                    </div>
                } */}

            </div>
        </>
    )
}

export default App
