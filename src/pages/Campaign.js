import { Card } from "primereact/card";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import style from "../stylesheets/Create.module.scss";

const Campaign = () => {
//Array of current campaigns
    const campaigns = [
        {
            name: "Campaign Name",
            description: "Campaign Description",
            id: 1
        },
        {
            name: "Campaign Name",
            description: "Campaign Description",
            id: 2
        },
        {
            name: "Campaign Name",
            description: "Campaign Description",
            id: 3
        },
        {
            name: "Campaign Name",
            description: "Campaign Description",
            id: 4
        }
    ];

  //loop through array of all campaigns List out all campaigns with links to them
    const campaignList = campaigns.map((campaign) => {
        return (
            <Link to={`/campaign/${campaign.id}`}>
                <Card className={style.createCard}>
                    <h3>{campaign.name}</h3>
                    <p>{campaign.description}</p>
                </Card>
            </Link>
        );
    })

//return the list of campaigns
    return (
        <div className={style.createWrapper}>
            <Navbar />
            <div className={style.createContainer}>
                <h1 className={style.createHeader}>Campaign Managment</h1>
                <div className={style.createCardWrapper}>{campaignList}</div>
            </div>
        </div>
    );
  
};

export default Campaign;
