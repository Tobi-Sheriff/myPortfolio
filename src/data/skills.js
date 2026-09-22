import {
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiMongoose,
  SiSequelize,
  SiTailwindcss,
  SiGit,
} from 'react-icons/si';

/**
 * Brand colors drive each skill card's hover glow — kept per-skill rather than
 * a single accent so the grid reads as a spectrum, not a flat repeated tile.
 */
export const skills = [
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss, color: '#2965F1' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#3C873A' },
  { name: 'Express', icon: SiExpress, color: '#B8BFC7' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Mongoose', icon: SiMongoose, color: '#C6483D' },
  { name: 'Sequelize', icon: SiSequelize, color: '#52B0E7' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
];
