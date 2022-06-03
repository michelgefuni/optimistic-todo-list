import React from 'react';
import cx from 'classnames';

function TodoListItem({ children, optimistic }) {
  return <li className={cx({ optimistic: optimistic })}>{children}</li>
};

export default TodoListItem;
