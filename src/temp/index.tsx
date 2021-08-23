// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { DECREMENT, INCREMENT } from '../../store/testredux/actionst';
// import { counterActionType } from '../../store/testredux/store';
// import { CounterSelector } from '../../store/testredux/tselector';
// import { Notice } from './styles';


// const Increment = () => {
//     return ({
//         type: counterActionType.INCREMENT
//     });
// };
// const Decrement = () => {
//     return ({
//         type: counterActionType.DECREMENT
//     });
// };

// const Home = () => {
//     const number = useSelector(CounterSelector);

//     const dispatch = useDispatch();

//     useEffect(() => {
//         console.log(number);
//     }, []);

//     return (
//         <>
//             Home
//             <Link to="/activatedProducts">
//                 <Notice>
//                     Thank you
//                 </Notice>
//                 <button>Get started</button>

//             </Link>
//             <br />
//             <span id="value">{number}</span>
//             <button
//                 onClick={() => {
//                     dispatch(INCREMENT());
//                 }}
//             >+1</button>
//             <button
//                 onClick={() => {
//                     dispatch(DECREMENT());
//                 }}
//             >-1</button>
//         </>
//     );
// };

export default undefined;
