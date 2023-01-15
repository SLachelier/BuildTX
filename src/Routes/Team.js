import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

function Products() {
  return (
    // <div className="fetched">
    <div>
      <h1 className="team">Luis Garcia</h1>
      <br></br>
      <h1>
        <AiIcons.AiFillGithub />{" "}
        <a
          href="https://github.com/garcia2697"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/garcia2697
        </a>
        <br></br>
        <BsIcons.BsLinkedin />{" "}
        <a
          href="https://www.linkedin.com/in/luis-g-garcia-/"
          target="_blank"
          rel="noreferrer"
        >
          https://www.linkedin.com/in/luis-g-garcia-/
        </a>
        <br></br>
        <AiIcons.AiOutlineMail />{" "}
        <a
          href="mailto:lougarcia2697@gmail.com"
        >
          lougarcia2697@gmail.com{" "}
        </a>
      </h1>
      <br></br>
      <br></br>
      <h1 className="team">Shauna Lachelier</h1>
      <br></br>
      <h1>
        <AiIcons.AiFillGithub />{" "}
        <a
          href="https://github.com/slachelier"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/slachelier
        </a>
      </h1>
      <h1>
        <BsIcons.BsLinkedin />{" "}
        <a
          href="https://www.linkedin.com/in/slachelier/"
          target="_blank"
          rel="noreferrer"
        >
          https://www.linkedin.com/in/slachelier/
        </a>
      </h1>
      <h1>
        <AiIcons.AiOutlineMail />{" "}
        <a href="mailto:slachelier@gmail.com">
          slachelier@gmail.com
        </a>
      </h1>
    </div>
  );
}

export default Products;
