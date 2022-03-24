import { all } from 'redux-saga/effects';

/* In this file we use two interesting concepts:
    1. Generator function -> function*
    2. yield
    Review the concept here:
    https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/yield
*/
export default function* rootSaga() {
    yield all([]);
}