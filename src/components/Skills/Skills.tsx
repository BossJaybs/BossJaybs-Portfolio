'use client'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { ReactElement } from 'react'
import {
  ExpressjsIcon,
  JavaScriptIcon,
  NestjsIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  TypescriptIcon,
} from '../../utils/icons'

const MarqueeWrapper = dynamic(() => import('../Marquee/MarqueeWrapper'), { ssr: false })

type SkillsProps = {
  skills: { name: string; icon: string }[]
}

const iconMap: Record<string, (props: { className?: string }) => ReactElement> = {
  javascript: ({ className }) => <Image src={JavaScriptIcon} alt="JavaScript" className={className} />,
  typescript: ({ className }) => <Image src={TypescriptIcon} alt="TypeScript" className={className} />,
  react: ({ className }) => <Image src={ReactIcon} alt="React" className={className} />,
  nextjs: ({ className }) => <Image src={NextjsIcon} alt="Next.js" className={className} />,
  nodejs: ({ className }) => <Image src={NodejsIcon} alt="Node.js" className={className} />,
  expressjs: ({ className }) => <Image src={ExpressjsIcon} alt="Express.js" className={className} />,
  nestjs: ({ className }) => <Image src={NestjsIcon} alt="Nest.js" className={className} />,
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <MarqueeWrapper className="from-primary to-primary via-marquee bg-linear-to-r">
      <div className="flex gap-8 lg:gap-24">
        {skills.map(({ name, icon }, index) => {
          const Icon = iconMap[icon]
          return (
            <span
              key={index}
              className="font-inter text-primary-content flex items-center text-xs lg:text-base">
              <Icon className="mx-2 size-11 lg:size-14" />
              {name}
            </span>
          )
        })}
      </div>
    </MarqueeWrapper>
  )
}

export default Skills
