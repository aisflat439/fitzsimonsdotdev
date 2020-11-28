const makeDate = (isoDate) => `${new Intl.DateTimeFormat('en', { month: 'long' }).format(new Date(isoDate))} ${new Intl.DateTimeFormat('en', { day: 'numeric' }).format(new Date(isoDate))}, ${new Intl.DateTimeFormat('en', { year: 'numeric' }).format(new Date(isoDate))}`;

export default makeDate;
