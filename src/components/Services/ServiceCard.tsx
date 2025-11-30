import Image from 'next/image'

interface ServiceCardTypes {
  icon: string
  title: string
  shortDescription: string
}

const ServiceCard: React.FC<ServiceCardTypes> = ({ title, shortDescription, icon }) => {
  return (
    <div className="relative p-[2px] rounded-[16px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse">
      <div className="bg-secondary flex flex-col items-center rounded-[14px] p-5">
        <Image src={icon} alt={title} className="my-1 size-14" />
        <h5 className="text-accent mt-2 mb-5 text-center text-base font-semibold">{title}</h5>
        <div className="bg-primary rounded-2xl p-4">
          <p className="text-primary-content text-center text-sm font-normal">{shortDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
