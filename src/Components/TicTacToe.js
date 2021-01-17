import React, { Component } from 'react';
import TicTac from './TicTac.css'



class TicTacToe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            one_one: '1',
            one_two: '2',
            one_three: '3',
            two_one: '4',
            two_two: '5',
            two_three: '6',
            three_one: '7',
            three_two: '8',
            three_three: '9'
        }
        this.handleEvent = this.handleEvent.bind(this);
        this.handleChange = this.handleChange.bind(this); 
    }
    hurray_Win(xx){
        console.log(xx);
        return xx;
        
    }
    handleChange(xx,person){
        if(xx==1){
            if(person=='X'){
                if((this.state.one_two==person && this.state.one_three==person) || (this.state.two_one==person && this.state.three_one==person) || (this.state.two_two==person && this.state.three_three==person)){
                    return this.hurray_Win('X wins');
                }
            }else if(person=='O'){
                if((this.state.one_two==person && this.state.one_three==person) || (this.state.two_one==person && this.state.three_one==person) || (this.state.two_two==person && this.state.three_three==person)){
                    return this.hurray_Win('O wins');
                }
            }
        }else if(xx==2){
            if(person=='X'){
                if((this.state.one_one==person && this.state.one_three==person) || (this.state.two_two==person && this.state.three_two==person)){
                    return this.hurray_Win('X wins');
                }
            }else if(person=='O'){
                if((this.state.one_one==person && this.state.one_three==person) || (this.state.two_two==person && this.state.three_two==person)){
                    return this.hurray_Win('O wins');
                }
            }
        }else if(xx==3){
            if(person=='X'){
                if((this.state.one_two==person && this.state.one_one==person) || (this.state.two_three==person && this.state.three_three==person) || (this.state.two_two==person && this.state.three_one==person)){
                    return this.hurray_Win('X wins');
                }
            }else if(person=='O'){
                if((this.state.one_two==person && this.state.one_one==person) || (this.state.two_three==person && this.state.three_three==person) || (this.state.two_two==person && this.state.three_one==person)){
                    return this.hurray_Win('O wins');
                }
            }
        }else if(xx==4){
            if(person=='X'){
                if((this.state.two_two==person && this.state.two_three==person) || (this.state.one_one==person && this.state.three_one==person)){
                    return this.hurray_Win('X wins');
                }
            }else if(person=='O'){
                if((this.state.two_two==person && this.state.two_three==person) || (this.state.one_one==person && this.state.three_one==person)){
                    return this.hurray_Win('Y wins');
                }
            }
            
        }else if(xx==5){
            if(person=='X'){
                if((this.state.two_one==person && this.state.two_three==person) || (this.state.one_two==person && this.state.three_two==person) || (this.state.one_one==person && this.state.three_three==person) || (this.state.one_three==person && this.state.three_one==person)){
                    return this.hurray_Win('X wins');
                }
            }else if(person=='O'){
                if((this.state.two_one==person && this.state.two_three==person) || (this.state.one_two==person && this.state.three_two==person) || (this.state.one_one==person && this.state.three_three==person) || (this.state.one_three==person && this.state.three_one==person)){
                    return this.hurray_Win('O wins');
                }
            }
            
        }else if(xx==6){
            if(person=='X'){
                if((this.state.two_two==person && this.state.two_one==person) || (this.state.three_three==person && this.state.one_three==person)){
                    return this.hurray_Win('X wins');
                }
            }else if(person=='O'){
                if((this.state.two_two==person && this.state.two_one==person) || (this.state.three_three==person && this.state.one_three==person)){
                    return this.hurray_Win('O wins');
                }
            
            }
        }else if(xx==7){
            if(person=='X'){
                if((this.state.two_one==person && this.state.one_one==person) || (this.state.three_three==person && this.state.three_two==person) || (this.state.two_two==person && this.state.one_three==person)){
                    return this.hurray_Win('X wins');
                }
            }else if(person=='O'){
                if((this.state.two_one==person && this.state.one_one==person) || (this.state.three_three==person && this.state.three_two==person) || (this.state.two_two==person && this.state.one_three==person)){
                    return this.hurray_Win('O wins');
                }
            }
        }else if(xx==8){
            if(person=='X'){
                if((this.state.three_one==person && this.state.three_three==person) || (this.state.two_two==person && this.state.one_two==person)){
                    return this.hurray_Win('X wins');
                }
            }else if(person=='O'){
                if((this.state.three_one==person && this.state.three_three==person) || (this.state.two_two==person && this.state.one_two==person)){
                    return this.hurray_Win('O wins');
                }
            }
        }else if(xx==9){
            if(person=='X'){
                if((this.state.two_three==person && this.state.one_three==person) || (this.state.three_one==person && this.state.three_two==person) || (this.state.two_two==person && this.state.one_one==person)){
                    return this.hurray_Win('X wins');
                }
            }else if(person=='O'){
                if((this.state.two_three==person && this.state.one_three==person) || (this.state.three_one==person && this.state.three_two==person) || (this.state.two_two==person && this.state.one_one==person)){
                    return this.hurray_Win('O wins');
                }
            }
        }
        return '';
    }

    handleEvent(event){
        if(event.target.value>='0' && event.target.value<='9'){
            if(event.target.value=='1'){
                let person = prompt("Please enter your Choice", "X/O");
                if(person=='X' || person=='O'){
                    this.setState({
                        one_one: person
                    })
                }else{
                    while(person!='X' &&  person!='O'){
                        person=prompt("Please enter your Choice", "X/O");
                    }
                    this.setState({
                        one_one: person
                    })
                }
                const aa=this.handleChange(9,person);
                if(aa!=''){
                    alert(aa);
                }
            }else if(event.target.value=='2'){
                let person = prompt("Please enter your Choice", "X/O");
                if(person=='X' || person=='O'){
                    this.setState({
                        one_two: person
                    })
                }else{
                    while(person!='X' &&  person!='O'){
                        person=prompt("Please enter your Choice", "X/O");
                    }
                    this.setState({
                        one_two: person
                    })
                }
                const aa=this.handleChange(2,person);
                if(aa!=''){
                    alert(aa);
                }
            }else if(event.target.value=='3'){
                let person = prompt("Please enter your Choice", "X/O");
                if(person=='X' || person=='O'){
                    this.setState({
                        one_three: person
                    })
                }else{
                    while(person!='X' &&  person!='O'){
                        person=prompt("Please enter your Choice", "X/O");
                    }
                    this.setState({
                        one_three: person
                    })
                }
                const aa=this.handleChange(3,person);
                if(aa!=''){
                    alert(aa);
                }
            }else if(event.target.value=='4'){
                let person = prompt("Please enter your Choice", "X/O");
                if(person=='X' || person=='O'){
                    this.setState({
                        two_one: person
                    })
                }else{
                    while(person!='X' &&  person!='O'){
                        person=prompt("Please enter your Choice", "X/O");
                    }
                    this.setState({
                        two_one: person
                    })
                }
                const aa=this.handleChange(4,person);
                if(aa!=''){
                    alert(aa);
                }
            }else if(event.target.value=='5'){
                let person = prompt("Please enter your Choice", "X/O");
                if(person=='X' || person=='O'){
                    this.setState({
                        two_two: person
                    })
                }else{
                    while(person!='X' &&  person!='O'){
                        person=prompt("Please enter your Choice", "X/O");
                    }
                    this.setState({
                        two_two: person
                    })
                }
                const aa=this.handleChange(5,person);
                if(aa!=''){
                    alert(aa);
                }
            }else if(event.target.value=='6'){
                let person = prompt("Please enter your Choice", "X/O");
                if(person=='X' || person=='O'){
                    this.setState({
                        two_three: person
                    })
                }else{
                    while(person!='X' &&  person!='O'){
                        person=prompt("Please enter your Choice", "X/O");
                    }
                    this.setState({
                        two_three: person
                    })
                }
                const aa=this.handleChange(6,person);
                if(aa!=''){
                    alert(aa);
                }
            }else if(event.target.value=='7'){
                let person = prompt("Please enter your Choice", "X/O");
                if(person=='X' || person=='O'){
                    this.setState({
                        three_one: person
                    })
                }else{
                    while(person!='X' &&  person!='O'){
                        person=prompt("Please enter your Choice", "X/O");
                    }
                    this.setState({
                        three_one: person
                    })
                }
                const aa=this.handleChange(7,person);
                if(aa!=''){
                    alert(aa);
                }
            }else if(event.target.value=='8'){
                let person = prompt("Please enter your Choice", "X/O");
                if(person=='X' || person=='O'){
                    this.setState({
                        three_two: person
                    })
                }else{
                    while(person!='X' &&  person!='O'){
                        person=prompt("Please enter your Choice", "X/O");
                    }
                    this.setState({
                        three_two: person
                    })
                }
                const aa=this.handleChange(8,person);
                if(aa!=''){
                    alert(aa);
                }
            }else if(event.target.value=='9'){
                let person = prompt("Please enter your Choice", "X/O");
                if(person=='X' || person=='O'){
                    this.setState({
                        three_three: person
                    })
                }else{
                    while(person!='X' &&  person!='O'){
                        person=prompt("Please enter your Choice", "X/O");
                    }
                    this.setState({
                        three_three: person
                    })
                }
                const aa=this.handleChange(9,person);
                console.log(aa);
                if(aa!=''){
                    alert(aa);
                }
            }

        } else{
            alert('You have already selected ')
        }           
    }
    
    render() {

        return (
            <div className='uj'>
                
                Lets Go for TicTacToe
                <table className="b--dashed gb uj">
                    <tbody>
                        <tr>
                            <td><button onClick={this.handleEvent} value={this.state.one_one} >{this.state.one_one}</button></td>
                            <td><button onClick={this.handleEvent} value={this.state.one_two} >{this.state.one_two}</button></td>
                            <td><button onClick={this.handleEvent} value={this.state.one_three}>{this.state.one_three}</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={this.handleEvent} value={this.state.two_one}>{this.state.two_one}</button></td>
                            <td><button onClick={this.handleEvent} value={this.state.two_two}>{this.state.two_two}</button></td>
                            <td><button onClick={this.handleEvent} value={this.state.two_three}>{this.state.two_three}</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={this.handleEvent} value={this.state.three_one}>{this.state.three_one}</button></td>
                            <td><button onClick={this.handleEvent} value={this.state.three_two}>{this.state.three_two}</button></td>
                            <td><button onClick={this.handleEvent} value={this.state.three_three}>{this.state.three_three}</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TicTacToe;