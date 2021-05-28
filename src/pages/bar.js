import {Destilados, Coffe, Licor, Beer} from '../components/'

export default function Platos() {
    return (
        <div>
            <h1 className="mt-5 mb-3">
                BAR
            </h1>
            <Beer/>
            <Licor/>
            <Destilados/>
            <Coffe/>
        </div>
    )
}