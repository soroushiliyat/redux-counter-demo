// src/features/counter/Counter.tsx
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../app/store';
import { increment, decrement } from './counterSlice';

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>شمارنده: {count}</h2>
      <button onClick={() => dispatch(increment())}>افزایش</button>
      <button onClick={() => dispatch(decrement())}>کاهش</button>
    </div>
  );
}

export default Counter;