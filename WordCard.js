import _ from 'lodash';
const prepareStateFromWord = (given_word) => {
 let word = given_word.toUpperCase()
 let chars = _.shuffle(Array.from(word))
 return {
 word,
 chars,
 attempt: 1,
 guess: '',
 completed: false
 }
}
const activationHandler = (c) => {
 console.log(`${c} has been activated.`)
 let guess = state.guess + c
 setState({...state, guess})
 if(guess.length == state.word.length){
 if(guess == state.word){
 console.log('yeah!')
 setState({...state, guess: '', completed: true})
 }else{
 console.log('reset')
 setState({...state, guess: '', attempt: state.attempt + 1})
 }
 const attemptRef = useRef(props.attempt);
 ...
 useEffect(() => {
 if(attemptRef.current != props.attempt){
 setActive(false)
 attemptRef.current = props.attempt
 }
 })

