import { BiSupport } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { GrTask } from "react-icons/gr";
import { FaHtml5, FaCss3Alt, FaGitAlt, FaReact, FaNodeJs, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiFlutterFill } from "react-icons/ri";
import { SiTailwindcss, SiMongodb, SiExpress, SiMysql } from "react-icons/si";
import app1 from './assets/app1.jpg'



// AboutInfo
const exp_icon = <IoMdTime style={{ color: '#333333', fontSize: '20px' }} />
const project_icon = <GrTask style={{ color: '#333333', fontSize: '20px' }} />
const support_icon = <BiSupport style={{ color: '#333333', fontSize: '20px' }} />

// Skills frontend
// const html = <FaHtml5 style={{ color: '#ff6a00', fontSize: '30px' }} />

const css = <FaCss3Alt style={{ color: '#0077ff', fontSize: '30px' }} />
const javascript = <IoLogoJavascript style={{ color: '#fbff00', fontSize: '30px' }} />
const git = <FaGitAlt style={{ color: '#ff6a00', fontSize: '30px' }} />
const flutter = <RiFlutterFill style={{ color: '#0077ff', fontSize: '30px' }} />
const tailwind = <SiTailwindcss style={{ color: '#00aaff', fontSize: '30px' }} />
const react = <FaReact style={{ color: '#00aaff', fontSize: '30px' }} />

// backend icons
const mongo = <SiMongodb style={{ color: '#00ff4c', fontSize: '30px' }} />
const express = <SiExpress style={{ color: '#0091ff', fontSize: '30px' }} />
const node = <FaNodeJs style={{ color: '#00ff1e', fontSize: '30px' }} />
const sql = <SiMysql style={{ color: '#007bff', fontSize: '40px' }} />

export const AboutInfo = [
    {
        icon: exp_icon,
        title: "Experience",
        subtitle: "Fresher"
    },
    {
        icon: project_icon,
        title: "Completed",
        subtitle: "3 Projects"
    },
    {
        icon: support_icon,
        title: "Support",
        subtitle: "Online 24/7"
    },
]

export const Frontend = [
    {
        name: 'HTML',
        level: 'Basic',
        icon: <FaHtml5 style={{ color: '#ff6a00', fontSize: '30px' }} />,
    },
    {
        name: 'CSS',
        level: 'intermediate',
        icon: css,
    },
    {
        name: 'Tailwind CSS',
        level: 'intermediate',
        icon: tailwind,
    },
    {
        name: 'Git',
        level: 'Basic',
        icon: git,
    },
    {
        name: 'JavaScript',
        level: 'Basic',
        icon: javascript,
    },
    {
        name: 'React',
        level: 'Basic',
        icon: react,
    },
    {
        name: 'Flutter',
        level: 'Basic',
        icon: flutter,
    },
]

export const Backend = [
    {
        name: 'Mongo Db',
        level: 'Basic',
        icon: mongo,
    },
    {
        name: 'Express Js',
        level: 'intermediate',
        icon: express,
    },
    {
        name: 'Node Js',
        level: 'intermediate',
        icon: node,
    },
    {
        name: 'MySQL',
        level: 'Basic',
        icon: sql,
    },
]


export const Projects = [
    {
        id: 1,
        name: 'E-Commerce',
        img: app1,
        cat: 'webapp',
    },
    {
        id: 2,
        name: 'Portfolio',
        img: app1,
        cat: 'webapp',
    },
    {
        id: 3,
        name: 'To-do',
        img: app1,
        cat: 'mobileapp',
    },
    {
        id: 4,
        name: 'Music Player',
        img: app1,
        cat: 'mobileapp',
    },
]

export const Contact = [
    {
        id: 1,
        name: 'Mail',
        userid: 'hariom.gaud00@gmail.com',
        icon: <MdEmail style={{ fontSize: '25px' }} />,
        link: "mailto:harry.harry0024@gmail.com"
    },
    {
        id: 2,
        name: 'Linkedn',
        userid: 'Hariom Gaud',
        icon: <FaLinkedin style={{ fontSize: '25px' }} />,
        link: "https://www.linkedin.com/in/hariom-gaud-aa5986206/"
    },
    {
        id: 3,
        name: 'Github',
        userid: 'Im-ScrappyTheCholo',
        icon: <FaGithub style={{ fontSize: '25px' }} />,
        link: "https://github.com/Im-ScrappyTheCholo?tab=repositories"
    },
]