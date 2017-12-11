import React, { Component,PropTypes } from "react";
import { AddListItemComponent } from "./addListItem";
import { AllListItemComponent } from "./allListItem";
import { NavigationComponent } from "./navigation";
import { ParentComponent } from "./Parent";
import { SlideShowComponent } from "./SlideShow";
import { PanelComponent } from "./Panel";

import en from "./locale/en.json";
import sin from "./locale/pt.json";


const locales = {en,sin};

export class MainTodoComponent extends React.Component {
    
   
    constructor(props) {
        super();
        // this.state = { tasks: props.AllNames }
        // this.updateList = this.updateList.bind(this);
        // this.removeItem = this.removeItem.bind(this);
    }

    // updateList(UpdatedValue) {
    //     var ExistingTask = this.state.tasks;
    //     ExistingTask.push(UpdatedValue);
    //     this.setState({ tasks: ExistingTask });
    // }

    // removeItem(value) {
    //     var ExistingTaskState = this.state.tasks;
    //     ExistingTaskState.splice(ExistingTaskState.indexOf(value), 1);
    //     this.setState({ tasks: ExistingTaskState });
    // }

    render() {
        return <div>
            {/* <PanelComponent Eng={locales.en} /> */}
            {/*<NavigationComponent />
            <AddListItemComponent updateList={this.updateList} />
            <AllListItemComponent removeItem={this.removeItem} Names={this.props.AllNames} /> 
            <SlideShowComponent>
                <img src="https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg" style={{ width: 350, height: 300 }} />
                <img src="http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg" style={{ width: 350, height: 300 }} />
                <img src="http://www.catster.com/wp-content/uploads/2017/08/Pixiebob-cat.jpg" style={{ width: 350, height: 300 }} />

            </SlideShowComponent>
            */}
        </div>;
    }
} 