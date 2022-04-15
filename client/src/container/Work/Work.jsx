import React,{useState,useEffect}from 'react'
import {AiFillEye,AiFillGithub} from 'react-icons/ai'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import { AppWrap } from '../../Wrapper'
import {urlFor,client} from '../../client'
import './Work.scss'

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({y:0, opacity:1})
  const [works, setWorks] = useState([])
  const [filterWorks, setFilterWorks] = useState([])

  const handleWorkFilter =(item)=>{

  }
  useEffect(() => {
    const query = '*[__type==="works"]'
    client.fetch(query).then(data=>{
      setWorks(data);
      setFilterWorks(data);
    })
  }, [])
  
  return (
    <>
      <h2 className='head-text'>
        My Creative &nbsp; <span>Work</span> Section &nbsp;
      </h2>
      <div className='app__work-filter'>
        {['UI/UX','React JS','Web Development','All'].map((item,index)=>(
          <div
           key={index}
           onClick={()=>handleWorkFilter(item)}
           className={`app__work-filter-item app__flex p-text ${activeFilter===item?'item-active':''}`}
          >
          {item}
          </div>
        ))}
      </div>
      <motion.div
        animate ={animateCard}
        transition = {{duration:0.5,delayChildern:0.5}}
        className="app__work-portfolio"
      >
      {filterWorks.map((work,index)=>(
        <div className='app__work-item app__flex' key={index}>
          <div className='app__work-img app__flex'>
            <img src={urlFor(work.imgUrl)} alt={work.name}/>

            <motion.div
            whileHover={{opacity:[0,1]}}
            >

            </motion.div>

          </div>
        </div>
      ))}
      </motion.div>
    </>
  )
}

export default Work