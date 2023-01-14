import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";


function Products (){
    return(

        
        <div className="fetched">
        <h1 className="team">
            Luis Garcia     
        </h1>
        <br></br>
        <h1><AiIcons.AiFillGithub /> <a href="https://github.com/garcia2697">https://github.com/garcia2697</a>
        <BsIcons.BsLinkedin/> <a href="https://www.linkedin.com/in/luis-g-garcia-/">https://www.linkedin.com/in/luis-g-garcia-/</a>
        <AiIcons.AiOutlineMail /> <a href="mailto:lougarcia2697@gmail.com">lougarcia2697@gmail.com </a></h1>
        <br></br>
        <br></br>
        <h1 className="team">
            Shauna Lachelier
        </h1>
        <br></br>
        <h1><AiIcons.AiFillGithub /> <a href="https://github.com/slachelier">https://github.com/slachelier</a></h1>
        <h1><BsIcons.BsLinkedin/> <a href="https://www.linkedin.com/in/slachelier/">https://www.linkedin.com/in/slachelier/</a></h1>
        <h1><AiIcons.AiOutlineMail /> <a href="mailto:slachelier@gmail.com">slachelier@gmail.com</a></h1>

    </div> 
    )
}

export default Products;