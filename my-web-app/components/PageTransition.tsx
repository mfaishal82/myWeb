import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "../src/App.css";

interface PageTransitionProps {
  children: React.ReactNode;
  key: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, key }) => {
  return (
    <TransitionGroup>
      <CSSTransition
        key={key}
        timeout={1000}
        classNames="fade"
      >
        <div>{children}</div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default PageTransition;