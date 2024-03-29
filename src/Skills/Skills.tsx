import React from "react";
import style from "./Skills.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import Skill from "./Skill/Skill";
import {Title} from "../common/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHtml5} from "@fortawesome/free-brands-svg-icons";
import {faReact} from "@fortawesome/free-brands-svg-icons";
import {faCss3Alt} from "@fortawesome/free-brands-svg-icons";
import {faSass} from "@fortawesome/free-brands-svg-icons";
import {faJs} from "@fortawesome/free-brands-svg-icons";
import {faNodeJs} from "@fortawesome/free-brands-svg-icons/faNodeJs";
import {faBootstrap} from "@fortawesome/free-brands-svg-icons/faBootstrap";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {DiDatabase} from "react-icons/di";
import {SiMongodb, SiTypescript} from "react-icons/si";
import {FaAngular} from "@react-icons/all-files/fa/FaAngular";

const Skills = () => {
    const html5 = <FontAwesomeIcon icon={faHtml5}/>;
    const css = <FontAwesomeIcon icon={faCss3Alt}/>;
    const sass = <FontAwesomeIcon icon={faSass}/>;
    const react = <FontAwesomeIcon icon={faReact}/>;
    const js = <FontAwesomeIcon icon={faJs}/>;
    const node = <FontAwesomeIcon icon={faNodeJs}/>;
    const bootstrap = <FontAwesomeIcon icon={faBootstrap}/>
    const git = <FontAwesomeIcon icon={faGithub}/>
    const ts = <SiTypescript />
    const mongo = <SiMongodb/>
    const angular = <FaAngular/>
    return (
        <div id="skills" className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={"React / Redux"} icon={react}/>
                    <Skill title={"JS"} icon={js}/>
                    <Skill title={"Css"} icon={css}/>
                    <Skill title={"Html"} icon={html5}/>
                    <Skill title={"Sass"} icon={sass}/>
                    <Skill title={"Git"} icon={git}/>
                    <Skill title={"NodeJs"} icon={node}/>
                    <Skill title={"Typescript"} icon={ts}/>
                    {/*<Skill title={"Angular"} icon={angular}/>*/}
                    {/*<Skill title={"MongoDb"} icon={mongo}/>*/}
                </div>
            </div>
        </div>
    );
};

export default Skills;
