import React,{useState,useEffect} from 'react'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import './About.scss'
import { AppWrap } from '../../Wrapper'
import {images} from '../../constants'
import { urlFor,client } from '../../client'




const about = [
  {title:'Web Developer', description:'I am good Web Developer',imageUrl:images.about01},
  {title:'MERN Stack Development', description:'I am good Fullstack Developer',imageUrl:images.about02},
  {title:'Frontend Development', description:'I am good Web Designer',imageUrl:images.about03},
  {title:'Backend Development', description:'I am good Web Developer',imageUrl:images.about04}

]



const About = () => {
  // const [about, setabout] = useState([]);
  // useEffect(() => {
  //   const query = '*[__type=="abouts"]';
  //   client.fetch(query).then((data)=>{
  //     setabout(data);
  //   })
  // }, [])

  return (
    <>
      <h2 className='head-text'>
        I know that &nbsp; <span>Good Development</span> means &nbsp;<span>Good Business</span>
      </h2>
      <div className='app__profiles'>
        {about.map((about,index)=>(
          <motion.div
          whileInView = {{opacity:1}}
          whileHover = {{scale:1.1}}
          transition = {{duration:0.5,type:'tween'}}
          className="app__profile-item"
          key={about.title+index}
          >
          <img src = {about.imageUrl} alt = {about.title}/>
          <h2 className="bold-text" style = {{marginTop:20}}>{about.title}</h2>
          <p className="p-text" style = {{marginTop:10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(About,'about')