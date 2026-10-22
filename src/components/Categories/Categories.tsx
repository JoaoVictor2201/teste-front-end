import './Categories.scss'
import devices from '../../assets/Categories/devices.svg'
import fashion from '../../assets/Categories/fashion.svg'
import healthcare from '../../assets/Categories/healthcare.svg'
import market from '../../assets/Categories/market.svg'
import tools from '../../assets/Categories/tools.svg'
import treadmill from '../../assets/Categories/treadmill.svg'
import whisky from '../../assets/Categories/whisky.svg'

export const Categories = () => {

    const categories = [
        { name: 'Tecnologia', src: devices },
        { name: 'Supermercado', src: market },
        { name: 'Bebidas', src: whisky },
        { name: 'Ferramentas', src: tools },
        { name: 'Saúde', src: healthcare },
        { name: 'Esportes e Fitness', src: treadmill },
        { name: 'Moda', src: fashion }
    ]
    
    return (
        <div className="container">
            <div className="categories-list">
                <ul className="categories">
                    {categories.map((category) => (
                        <li key={category.name} className="card">
                            <div className="card-image">
                                <img src={category.src} alt={category.name} />
                            </div>
                            <p className="card-title">{category.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}