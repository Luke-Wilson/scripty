import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';
import LessonTitleCard from './lessonTitleCard';
import Footer from './footer'

class LessonTitleCardList extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      lessonDetails: []
    }
    // Get all of the lesson detail objects on component load
    this.getLessonDetails()
  }

  // Get all of the lesson titles & ids
  getLessonDetails() {
    const url = 'http://localhost:3011/api/lessons'
    fetch(url)
    .then(data => {
      return data.json()
    })
    .then(data => {
      this.setState({'lessonDetails': data})
    })
  }

  render() {
    const { viewStyle, footerStyle } = styles;
    return (
      <View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={viewStyle} >
        { 
          this.state.lessonDetails.map(lesson => {
          return <LessonTitleCard lessonTitle={lesson.title} 
            lessonId={lesson._id}
            navigator={ this.props.navigator } 
            key={lesson._id} />
          })
        }
      </ScrollView>
    <Footer lesson={true} navigator={this.props.navigator} />
    </View>
    )
  }
};

const styles = {
  viewStyle: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: 'white',
    height: Dimensions.get("window").height,
  },
  footerStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  }
}

export default LessonTitleCardList;
