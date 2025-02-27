import  { Component, ReactNode } from 'react';
import './ErrorBoundry.css';

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='unexpected-error-wrapper'>
          <div className="unexpected-error-container">
            <h1>Oops! Something went wrong.</h1>
            <strong>We're working to fix it!</strong>
            <em>Sorry for the inconvenience!</em>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;