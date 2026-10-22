import './Header.scss'
import logo from '../../assets/Header/logo.svg'
import packageIcon from '../../assets/Header/package.svg'
import heartIcon from '../../assets/Header/heart.svg'
import userIcon from '../../assets/Header/user.svg'
import cartIcon from '../../assets/Header/cart.svg'
import searchIcon from '../../assets/Header/search.svg'

export const Header = () => {
    return (
        <header>
            <div className="container header-top">
                <ul className="header-benefits">
                    <li className="shield">Compra <strong>100% segura</strong></li>
                    <li className="truck"><strong>Frete grátis</strong> acima de R$ 200</li>
                    <li className="card"><strong>Parcele</strong> suas compras</li>
                </ul>
            </div>
            <div className="container header-main">
                <div className="logo">
                    <a href="#"><img src={logo} alt="Logo da Econverse" /></a>
                </div>
                <div className="search">
                    <div className="search-wrapper">
                        <input className="search-input" type="text" aria-label='Buscar produtos' placeholder="O que você está buscando?" />
                        <button className="search-button" type="button" aria-label='Buscar produtos'>
                            <img src={searchIcon} />
                        </button>
                    </div>
                </div>
                <div className="links">
                    <a href="#"><img src={packageIcon} alt="Pedidos" /></a>
                    <a href="#"><img src={heartIcon} alt="Favoritos" /></a>
                    <a href="#"><img src={userIcon} alt="Minha conta" /></a>
                    <a href="#"><img src={cartIcon} alt="Carrinho" /></a>
                </div>
            </div>
            <div className="container header-bottom">
                <nav aria-label="Categorias">
                    <ul className="categories">
                        <li><a href="#">Todas as categorias</a></li>
                        <li><a href="#">Supermercado</a></li>
                        <li><a href="#">Livros</a></li>
                        <li><a href="#">Moda</a></li>
                        <li><a href="#">Lançamentos</a></li>
                        <li><a href="#" className="active">Ofertas do dia</a></li>
                        <li><a href="#">Assinatura</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}