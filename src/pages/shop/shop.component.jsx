import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import CollectionPage from "../collection/collection.component";


const ShopPage=({match})=>(
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
            

)


        
export default ShopPage;