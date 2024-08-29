import { Link } from 'react-router-dom'

interface CardProps {
  icon: JSX.Element
  text: string
  link: string
}

const Card = ({ icon, text, link }: CardProps) => {
  return (
    <Link to={link} className="quick-link-card">
      <div className="rounded-lg bg-white p-6 shadow-md transition duration-300 hover:shadow-lg">
        <div className="mb-4 flex items-center justify-center">
          <div className="style= mr-4 h-20 w-20">{icon}</div>
          <div>{text}</div>
        </div>
      </div>
    </Link>
  )
}

export default Card
