import React from "react";
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory-selectors";

const Directory = ({sections}) => (
  <div className="directory-menu">
    { 
      sections.map(({id,...otherSectionProps}) =>(
          <MenuItem key={id} {...otherSectionProps}/>

        ))
    }
  </div>
)

const mapStateToProprs = createStructuredSelector({
  sections: selectDirectorySections

});   
    


export default connect (mapStateToProprs)(Directory);
