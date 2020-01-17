import { createAction } from "@reduxjs/toolkit";
import { EVENT_TRACK } from '../constants/gtmConstants'

export const requestReview = createAction('review/requestReview', (label) => (
  {
    payload: {
      event: EVENT_TRACK,
      eventId: 'homepage_requestReview_click',
      category: 'Request Review',
      action: 'click',
      label,
    }
  }
))
export const colorTheme = createAction('colorTheme')