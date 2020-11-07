const fetchAboutData = async (context) => {
  try {
    console.log('Calling AJAX to get about page...');
    context.commit('LOAD_ABOUT_PAGE_DATA', { a: 1 });
  } catch (error) {
    // Send error to Sentry.
    console.error(error);
  }
};

export default {
  fetchAboutData,
};
