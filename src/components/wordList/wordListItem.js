import React from 'react'

class listItem extends React.Component{

  constructor(props){
    super(props);
    console.log(props.word);
  }
  render(){
    const word = this.props.word;
    
    return (
      <div >            
         <h4>{word.original}</h4>        
         <p>correct answer count: {word.correct_count}</p>
         <p>incorrect answer count: {word.incorrect_count}</p>         
      </div>
    )
  }
}

export default listItem;