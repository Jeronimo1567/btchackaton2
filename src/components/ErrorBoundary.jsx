import { Component } from 'react';
import { FONT_SERIF, BG_STYLE } from '../data/config';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4" style={BG_STYLE}>
          <div className="text-center">
            <h1 style={FONT_SERIF} className="text-3xl font-bold text-yellow-400 mb-4">Algo salió mal</h1>
            <p className="text-amber-200 mb-6">Hubo un error inesperado. Intenta recargar la página.</p>
            <button
              onClick={() => {
                this.setState({ hasError: false });
                window.location.reload();
              }}
              className="btn-loteria px-8 py-3 rounded-xl text-lg"
            >
              Recargar
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
