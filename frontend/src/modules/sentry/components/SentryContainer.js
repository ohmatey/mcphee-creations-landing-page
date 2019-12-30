import React, { Component } from 'react'
import * as Sentry from '@sentry/browser'

class ExampleBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { eventId: null }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    if (process.env.NODE_ENV !== 'development') {
      Sentry.withScope(scope => {
        scope.setExtras(errorInfo)
        const eventId = Sentry.captureException(error)
        this.setState({ eventId })
      })
    }
  }

  render() {
    if (this.state.hasError) {
      const handleOpenDialog = () => Sentry.showReportDialog({
        eventId: this.state.eventId
      })
      // render fallback UI
      return (
        <button
          onClick={handleOpenDialog}>Report feedback</button>
      )
    }

    // when there's not an error, render children untouched
    return this.props.children
  }
}

export default ExampleBoundary
