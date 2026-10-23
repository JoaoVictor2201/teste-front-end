import './PartnerCard.scss'
type PartnerCardProps = {
    title: string
    info: string
}

export const PartnerCard = ({title, info}: PartnerCardProps) => {
    return (
        <div className="partner">
            <h2 className="partner-title">{title}</h2>
            <p className="partner-info">{info}</p>
            <a href="#" className="partner-btn">Confira</a>
        </div>
    )
}