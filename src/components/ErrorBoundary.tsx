
import { Component, ErrorInfo, ReactNode } from "react";

import '../styles/errorBoundary.scss'
import image from '../../public/not-found.png'

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <section className="weatherContent error">
                    <span className="errorMessage">Oops, we could not find this city</span>
                    <img
                        src={image}
                    ></img>
                    <button className="btn" onClick={() => this.setState({ hasError: false })}>
                        Try again?
                    </button>
                </section>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;