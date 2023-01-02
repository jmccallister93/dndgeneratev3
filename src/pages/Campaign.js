import { Card } from "primereact/card";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import style from "../stylesheets/Create.module.scss";


const Campaign = () => {

    const [campaignId, setCampaignId] = useState();
//Array of current campaigns
    const campaigns = [
        {
            name: "Frolicking in the Forest",
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
//Set the campaign id
    const onId = (e) => {
        setCampaignId(e.target.id);
        
    };

  //loop through array of all campaigns List out all campaigns with links to them
    const campaignList = campaigns.map((campaign) => {
        return (
            <Link to={`/campaignotes`}>
                <Card className={style.createCard} onClick={onId}>
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
