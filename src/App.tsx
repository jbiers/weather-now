import { Header } from './components/Header'
import { WeatherContent } from './components/WeatherContent'
import ErrorBoundary from './components/ErrorBoundary';

import { useState } from 'react';
import './styles/global.scss';

export function App() {

    return (
        <>
            <Header />
            <ErrorBoundary>
                <WeatherContent />
            </ErrorBoundary>
        </>
    );
}