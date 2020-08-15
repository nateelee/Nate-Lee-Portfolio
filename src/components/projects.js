import React, {Component} from 'react'
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        }
    }
  
    toggleCategories() {
        
        if (this.state.activeTab === 0) {
            return(
                // java single proj
                <div className = 'projects-grid'>
                    <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>

                        <CardTitle style = {{color:'white', height: '176px',  background: 
                        'url(https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/lastpng.jpg?alt=media&token=a56c04a8-069a-426c-aa4b-587330dfa2c0) center/ cover'}}>Interactive Drawing App</CardTitle>
                        <CardText>
                            An interactive drawing GUI App that uses JavaFX
                        </CardText>
                        <CardActions border>
                            <Button href = "https://github.com/nateelee/Interactive-Drawing-GUI-Application" colored>GitHub</Button>
                            
                            
                        </CardActions>
                        <CardMenu style = {{color:'#fff'}}>
                            <IconButton name = "N"/>
                        </CardMenu>
                    </Card>
                    
                </div>
            )
        }
        else if (this.state.activeTab === 1) {
            return (
                // assembly single proj
                <div className = 'projects-grid'>
                    <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>

                        <CardTitle style = {{color:'white', height: '176px',  background: 
                        'url(https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/lastpng.jpg?alt=media&token=a56c04a8-069a-426c-aa4b-587330dfa2c0) center/ cover'}}>Full Adder Circuit</CardTitle>
                        <CardText>
                            A Full Adder Circuit Simulator created through Assembly Language Programming
                        </CardText>
                        <CardActions border>
                            <Button href = "https://github.com/nateelee/Full-Adder-Circuit" colored>GitHub</Button>
                            
                        </CardActions>
                        <CardMenu style = {{color:'#fff'}}>
                            <IconButton name = "N"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                // c++ single proj
                <div className = 'projects-grid'>
                <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>

                    <CardTitle style = {{color:'white', height: '176px',  background: 
                    'url(https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/lastpng.jpg?alt=media&token=a56c04a8-069a-426c-aa4b-587330dfa2c0) center/ cover'}}>Transcript Evaluator</CardTitle>
                    <CardText style = {{height: '175'}}>
                        A program that reads school transcript text files and outputs student information and calculated major and overall GPA
                    </CardText>
                    <CardActions border>
                        <Button href = "https://github.com/nateelee/Student-Transcript-Evaluator" colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style = {{color:'#fff'}}>
                        <IconButton name = "N"/>
                    </CardMenu>
                </Card>
                <div class = "w-4 h-4"></div>
                    <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style = {{color:'white', height: '176px',  background: 
                        'url(https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/lastpng.jpg?alt=media&token=a56c04a8-069a-426c-aa4b-587330dfa2c0) center/ cover'}}>Vehicle Maintenace Program</CardTitle>
                        <CardText style = {{height: '175'}}>
                            This program uses inheritance with multiple types of vehicles stemming from one vehicle parent class. And deriving multiple functions and data. 
                        </CardText>
                        <CardActions border>
                            <Button href = "https://github.com/nateelee/Vehicle-Maintenace-Program" colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style = {{color:'#fff'}}>
                            <IconButton name = "N"/>
                        </CardMenu>
                    </Card>
            </div>
            )
        }
        else if(this.state.activeTab === 3) {
            return (
                // react single proj
                <div className = 'flex justify-between items-center w-full h-auto flex-col sm:flex-row'>
                    <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style = {{color:'white', height: '176px',  background: 
                        'url(https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/lastpng.jpg?alt=media&token=a56c04a8-069a-426c-aa4b-587330dfa2c0) center/ cover'}}>Screenbook</CardTitle>
                        <CardText style = {{height: '175'}}>
                                A social platform where users can review and share movies. This is a single page application that 
                                was created through the React library and router. Several other APIs were utilized such as Google's Login,
                                Firebase Database and Storage, and a Movie Database.
                        </CardText>
                        <CardActions border>
                            <Button href = "https://github.com/nateelee/movie101" colored>GitHub</Button>
                            <Button href = "https://screenbook-pn.web.app/" colored>Screenbook</Button>
                        </CardActions>
                        <CardMenu style = {{color:'#fff'}}>
                            <IconButton name = "N"/>
                        </CardMenu>
                    </Card>
                    <div class = "w-4 h-4"></div>
                    <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style = {{color:'white', height: '176px',  background: 
                        'url(https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/lastpng.jpg?alt=media&token=a56c04a8-069a-426c-aa4b-587330dfa2c0) center/ cover'}}>Nate's Portfolio</CardTitle>
                        <CardText style = {{height: '175'}}>
                            You're on it right now! This is where I showcase my work and where you can learn more about me.
                        </CardText>
                        <CardActions border>
                            <Button href = "https://github.com/nateelee/Nate-Lee-Portfolio" colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style = {{color:'#fff'}}>
                            <IconButton name = "N"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 4) {
            return (
                <div className = 'projects-grid'>
                    <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>

                        <CardTitle style = {{color:'white', height: '176px',  background: 
                        'url(https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/lastpng.jpg?alt=media&token=a56c04a8-069a-426c-aa4b-587330dfa2c0) center/ cover'}}>Weather Tracker</CardTitle>
                        <CardText>
                            This application utilizes python and Django to read JSON files from the OpenWeather API and display real-time weather forecasts.
                        </CardText>
                        <CardActions border>
                            <Button href = "https://github.com/nateelee/Weather-Tracker" colored>GitHub</Button>
                            <Button href = "http://nateelee.pythonanywhere.com/" colored>Weather Tracker</Button>
                        </CardActions>
                        <CardMenu style = {{color:'#fff'}}>
                            <IconButton name = "N"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        
        }
    }
    
    render() {
        return (
            <div className = "flex flex-col items-center  w-screen bg-gray-200 h-screen">
                <Tabs activeTab = {this.state.activeTab} onChange = {(tabId) => this.setState({activeTab: tabId})} ripple> 
                    <Tab>Java</Tab>
                    <Tab>Assembly</Tab>
                    <Tab>C++</Tab>
                    <Tab>React</Tab>
                    <Tab>Python</Tab>

                </Tabs>
                <div class = "bg-gray-200">
                    <Grid>
                        <Cell col = {12}>
                            <div className = "content"> {this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </div>
               
            </div>
        )
    }
}
export default Projects