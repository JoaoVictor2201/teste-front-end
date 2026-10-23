import './Partners.scss'
import { PartnerCard } from "../PartnerCard/PartnerCard"

export const Partners = () => {
    return (
        <div className="container">
            <div className="partners-wrap">
                <PartnerCard 
                    title="Parceiro 1"
                    info="informação do Parceiro 1"
                />
                <PartnerCard 
                    title="Parceiro 2"
                    info="informação do Parceiro 2"
                />
            </div>
        </div>
    )
}