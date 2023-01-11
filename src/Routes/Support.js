import React from "react";

function Reports() {
  return (
    <div className="fetched">
      <div className="innerHome">
        <h2>Why is a PDF not showing up?</h2>

        <h3>
          Potential Problem #1 <br></br>Unfortunatly, TxDOT takes PDFs of
          projects that started construction over two years ago off their
          database. Even having a copy of a link you may have
          used in the previous years will not work once the routes have been
          cut.
        </h3>
        <br></br>
        <h3>
          Potential Problem #2 <br></br>There could be a differentiation in the
          way the link is set up. Most PDFs follow a link format made by TxDOT.
          This format is what made it possible to create a PDF link from the
          information available on the database. Unfortunatly, there are a few
          projects that don't follow the same format. This is evident in
          projects that have version1 and version 2 in their name. While they may be called version 1 and version 2 on paper, in the API they do not have that name.
        </h3>
        <br></br>
        <h3>
          Potential Problem #3 <br></br>TxDOT just never put a PDF of the project online. After performing data analysis of the database, there were quite a few projects that met every criteria for having a PDF but were never given a PDF link.
        </h3>
        <br></br>
        <h2>Are there any updates in the future?</h2>

        <h3>
          Feature #1 <br></br> There are plans to make a map function that will retrieve the location of your project based off the geography coordinates given in the API. This will be located under the PDF link whenever a search query is conducted. 
        </h3>
        <br></br>
        <h3>
        Feature #2 <br></br> Fix the PDF link to not show up whenever a pdf isn't availabe. As well as having a button button that filters out any projects that don't have a PDF availabe.
        </h3>
        <br></br>
        <h3>
        Feature #3 <br></br> Instead of having to pick one specific year, the user has the option to pick between a range of years. 
        </h3>
      </div>

    </div>
  );
}

export default Reports;
