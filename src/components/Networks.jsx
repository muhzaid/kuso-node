import { motion } from 'framer-motion'
import React, { useMemo, useState } from 'react'
import { useThemeContext } from '../context/ThemeContext'
import { skillsData } from '../data/dummy'
import CardList from './CardList'
import Header from './Header'
import { containerVariant, portfolioContainerVariant } from '../utils/motion'

export default function Networks() {
 const [activeSkill, setActiveSkill] = useState('language')
 const { color } = useThemeContext()
 const memoizedHoverColor = useMemo(() => (color == 'indigo' ? 'hover:bg-indigo-500' : color == 'blue' ? 'hover:bg-blue-500' : color == 'red' ? 'hover:bg-red-500' : color == 'cyan' ? 'hover:bg-cyan-500' : color == 'emerald' ? 'hover:bg-emerald-500' : 'hover:bg-rose-500'), [color])

 return (
  <section className='relative mt-10 lg:mt-32' id='skill'>
   <div className=' min-h-screen p-5 lg:px-16'>
    <Header title1='Our Networks' customClasses='text-center' />
    <motion.div variants={portfolioContainerVariant} initial='hidden' whileInView='show' className='mt-10 '>
     <CardList data={skillsData} filter={activeSkill} />
    </motion.div>
   </div>
  </section>
 )
}
