import './skillCard.css'

type SkillCardProps = {
  name: string;
  description: string;
};

const SkillCard = ({ name, description }: SkillCardProps) => {
  return (
      <div className="project-item">
                            <h3 className='project-item-name'>{name}</h3>
                            <p className='project-item-description'>{description}</p>
                            <a href="#" className="btn project-item-mas" >Ver más</a>
        </div>
  )
}

export default SkillCard
