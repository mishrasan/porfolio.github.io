import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { IService, Iskill } from './types'
import { BsCircleFill } from 'react-icons/bs'






export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>Nextjs</b> ",
  },
  {
    Icon: FaServer,
    title: "C/C++ Developer",
    about:
      "Designing and building and maintaining reliable and efficient <b> C++ </b> codes; locating and devising solutions for bugs; maintaining code quality;",
  },
]

export const languages: Iskill[] = [

  {
    name: 'C Programming Language',
    level: '70%',
    Icon: BsCircleFill
  },
  {
    name: 'C++ Language',
    level: '60%',
    Icon: BsCircleFill
  },
  {
    name: 'Nextjs',
    level: '60%',
    Icon: BsCircleFill
  },
  {
    name: 'SQL Database',
    level: '50%',
    Icon: BsCircleFill
  },
  {
    name: 'HTML & CSS',
    level: '60%',
    Icon: BsCircleFill
  }
]

export const tools: Iskill[] = [
  {
    name: 'VS Code',
    level: '80%',
    Icon: BsCircleFill
  },

  {
    name: 'Arduino Ide',
    level: '70%',
    Icon: BsCircleFill
  },
  {
    name: 'Mongodb',
    level: '40%',
    Icon: BsCircleFill
  }

]