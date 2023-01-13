import React from "react";

function Home() {
  return (
    <div className="intro">
      <h2 className="innerHome">
        One of the more tedious but necessary tasks in transportation design is
        searching construction projects using the TxDOT website. While it works,
        it lacks any form of search or filtering option which makes looking for
        a specific project tedious. BuildTX was created with the aim of reducing
        search time for information on any construction projects taking place in
        Texas.
      </h2>

      <h2 className="innerHome">
        Using TxDOT's construction database, BuildTX is able to sort and filter
        based off your choice input. Currently there are 3 search options
        located in the drop down menu at the top left corner.
      </h2>

      <h2 className="innerHome">
        If prompted when accessing a PDF, the user account and user password is
        listed below.
      </h2>

      <h2 className="inner">
        User Account: planuser <br></br>
        User Password: txdotplans
      </h2>

      <h2 className="innerHome">
        Should be noted that search by District and search by County are only
        searching for projects that are "under construction right now" category.
        Due to a limitation with the API, the pdf function would not be able to
        retrieve any projects that were completed over 2 years ago. More
        information can be found in the support page.
      </h2>
    </div>
  );
}

export default Home;
